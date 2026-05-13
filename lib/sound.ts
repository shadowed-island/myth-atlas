import type { Locale } from "@/lib/story-types";

let audioContext: AudioContext | null = null;
let ambienceAudio: HTMLAudioElement | null = null;
let ambienceUnlockArmed = false;
let narrationRequestId = 0;
let activeNarrationResolve: (() => void) | null = null;
const ambienceTrackSrc = "/audio/sea_snake_Wild_Arabia.mp3";
const narrationLangByLocale: Record<Locale, string> = {
  en: "en-US",
  zh: "zh-CN"
};

function getAudioContext() {
  if (typeof window === "undefined") {
    return null;
  }

  audioContext ??= new AudioContext();
  return audioContext;
}

function getAmbienceAudio() {
  if (typeof window === "undefined") {
    return null;
  }

  if (!ambienceAudio) {
    ambienceAudio = new Audio(ambienceTrackSrc);
    ambienceAudio.autoplay = true;
    ambienceAudio.loop = true;
    ambienceAudio.preload = "auto";
    ambienceAudio.volume = 0.42;
  }

  return ambienceAudio;
}

function disarmAmbienceUnlock() {
  if (typeof window === "undefined") {
    return;
  }

  window.removeEventListener("pointerdown", retryAmbiencePlayback);
  window.removeEventListener("keydown", retryAmbiencePlayback);
  window.removeEventListener("touchstart", retryAmbiencePlayback);
  ambienceUnlockArmed = false;
}

function armAmbienceUnlock() {
  if (typeof window === "undefined" || ambienceUnlockArmed) {
    return;
  }

  ambienceUnlockArmed = true;
  window.addEventListener("pointerdown", retryAmbiencePlayback, { once: true });
  window.addEventListener("keydown", retryAmbiencePlayback, { once: true });
  window.addEventListener("touchstart", retryAmbiencePlayback, { once: true });
}

async function startAmbienceAudio() {
  const audio = getAmbienceAudio();

  if (!audio) {
    return;
  }

  try {
    await audio.play();
    disarmAmbienceUnlock();
  } catch {
    armAmbienceUnlock();
  }
}

function retryAmbiencePlayback() {
  disarmAmbienceUnlock();
  void setAmbienceEnabled(true);
}

export async function setAmbienceEnabled(enabled: boolean) {
  if (!enabled) {
    stopAmbience();
    return;
  }

  const context = getAudioContext();

  if (!context) {
    return;
  }

  if (context.state === "suspended") {
    void context.resume().catch(() => {
      // Browsers may require a user gesture before starting audio.
    });
  }

  await startAmbienceAudio();
}

export function startAmbienceAutoplay() {
  if (typeof window === "undefined") {
    return undefined;
  }

  const audio = getAmbienceAudio();
  audio?.load();

  const attemptPlayback = () => {
    void setAmbienceEnabled(true);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attemptPlayback, { once: true });
  } else {
    attemptPlayback();
  }

  window.addEventListener("pageshow", attemptPlayback);

  return () => {
    document.removeEventListener("DOMContentLoaded", attemptPlayback);
    window.removeEventListener("pageshow", attemptPlayback);
  };
}

export function stopAmbience() {
  disarmAmbienceUnlock();
  if (ambienceAudio) {
    ambienceAudio.pause();
    ambienceAudio.currentTime = 0;
  }
}

export function playUiSound(kind: "hover" | "select" | "tour") {
  const context = audioContext;

  if (!context || context.state !== "running") {
    return;
  }

  const now = context.currentTime;
  const output = context.createGain();
  const oscillator = context.createOscillator();
  const filter = context.createBiquadFilter();

  output.gain.setValueAtTime(0.0001, now);
  output.gain.exponentialRampToValueAtTime(kind === "tour" ? 0.12 : 0.08, now + 0.02);
  output.gain.exponentialRampToValueAtTime(0.0001, now + (kind === "tour" ? 0.7 : 0.22));

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(kind === "hover" ? 660 : 392, now);
  oscillator.frequency.exponentialRampToValueAtTime(
    kind === "tour" ? 880 : kind === "select" ? 740 : 990,
    now + (kind === "tour" ? 0.55 : 0.16)
  );

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(kind === "tour" ? 1400 : 2200, now);

  oscillator.connect(filter);
  filter.connect(output);
  output.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + (kind === "tour" ? 0.72 : 0.24));
}

export function stopNarration() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return;
  }

  narrationRequestId += 1;
  const resolveActiveNarration = activeNarrationResolve;
  activeNarrationResolve = null;
  window.speechSynthesis.cancel();
  resolveActiveNarration?.();
}

async function waitForVoices() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return [];
  }

  const initialVoices = window.speechSynthesis.getVoices();
  if (initialVoices.length > 0) {
    return initialVoices;
  }

  return new Promise<SpeechSynthesisVoice[]>((resolve) => {
    const synth = window.speechSynthesis;
    const handleVoicesChanged = () => {
      synth.removeEventListener("voiceschanged", handleVoicesChanged);
      resolve(synth.getVoices());
    };

    synth.addEventListener("voiceschanged", handleVoicesChanged);
    window.setTimeout(() => {
      synth.removeEventListener("voiceschanged", handleVoicesChanged);
      resolve(synth.getVoices());
    }, 900);
  });
}

function isMacNarrationPlatform() {
  if (typeof window === "undefined") {
    return false;
  }

  const platform =
    window.navigator?.userAgentData?.platform ??
    window.navigator?.platform ??
    globalThis.navigator?.userAgentData?.platform ??
    globalThis.navigator?.platform ??
    "";

  return /mac/i.test(platform);
}

async function getNarrationVoice(locale: Locale) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return null;
  }

  const targetLang = narrationLangByLocale[locale];
  const voices = await waitForVoices();

  if (locale === "en" && isMacNarrationPlatform()) {
    const danielVoice =
      voices.find((voice) => voice.name === "Daniel") ??
      voices.find((voice) => voice.name.startsWith("Daniel "));

    if (danielVoice) {
      return danielVoice;
    }
  }

  return (
    voices.find((voice) => voice.lang === targetLang) ??
    voices.find((voice) => voice.lang.startsWith(locale)) ??
    null
  );
}

function formatNarrationText(text: string, locale: Locale) {
  if (locale === "zh") {
    return text.replace(/\.\s*/g, "。");
  }

  return text;
}

type NarrationLineOptions = {
  onBoundary?: (charIndex: number) => void;
  onStart?: () => void;
};

export async function speakNarrationLine(
  text: string,
  locale: Locale,
  options: NarrationLineOptions = {}
) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return;
  }

  const requestId = narrationRequestId + 1;
  stopNarration();
  const voice = await getNarrationVoice(locale);

  if (requestId !== narrationRequestId) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(formatNarrationText(text, locale));
  if (voice) {
    utterance.voice = voice;
  }
  utterance.lang = voice?.lang ?? narrationLangByLocale[locale];
  utterance.rate = 0.92;
  utterance.pitch = 0.86;
  utterance.volume = 0.72;
  utterance.onboundary = (event) => {
    options.onBoundary?.(event.charIndex);
  };
  utterance.onstart = () => {
    options.onStart?.();
  };

  return new Promise<void>((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) {
        return;
      }

      settled = true;
      if (activeNarrationResolve === finish) {
        activeNarrationResolve = null;
      }
      resolve();
    };

    activeNarrationResolve = finish;
    utterance.onend = finish;
    utterance.onerror = finish;
    window.speechSynthesis.speak(utterance);
  });
}
