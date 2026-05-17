import { defaultLocale, supportedLocales, type Locale } from "@/lib/story-types";

const STORAGE_KEY = "myth-atlas:locale";

function isLocale(value: string | null | undefined): value is Locale {
  return typeof value === "string" && (supportedLocales as readonly string[]).includes(value);
}

export function detectInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
      return stored;
    }
  } catch {
    // localStorage disabled or unavailable — fall through to navigator
  }

  const candidates = [
    window.navigator?.language,
    ...(window.navigator?.languages ?? [])
  ].filter((value): value is string => typeof value === "string");

  for (const candidate of candidates) {
    const prefix = candidate.slice(0, 2).toLowerCase();
    if (isLocale(prefix)) {
      return prefix;
    }
  }

  return defaultLocale;
}

export function persistLocale(locale: Locale) {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // ignore quota / disabled errors
  }
}
