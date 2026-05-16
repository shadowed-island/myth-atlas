"use client";

import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { geoEquirectangular, geoPath, type GeoPermissibleObjects } from "d3-geo";
import {
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type MutableRefObject,
  type RefObject
} from "react";
import {
  AdditiveBlending,
  BackSide,
  BufferGeometry,
  CanvasTexture,
  CatmullRomCurve3,
  Group,
  Line as ThreeLine,
  LineBasicMaterial,
  LinearFilter,
  SRGBColorSpace,
  Vector3
} from "three";
import { feature } from "topojson-client";
import landTopology from "world-atlas/land-50m.json";
import { latLngToVector3 } from "@/lib/geo";
import { localizeText } from "@/lib/i18n";
import { getStoryMarkerEmoji } from "@/lib/story-emoji";
import { categoryMeta } from "@/lib/story-types";
import type { Locale, LocalizedText, Story } from "@/lib/story-types";
import { useExploreStore } from "@/store/useExploreStore";
import { playUiSound } from "@/lib/sound";
import type { FeatureCollection, Geometry } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";

type GlobeSceneProps = {
  stories: Story[];
  locale: Locale;
  zoomScopeRef: RefObject<HTMLElement | null>;
};

type StoryCollectionProps = {
  stories: Story[];
};

type LocalizedStoryCollectionProps = StoryCollectionProps & {
  locale: Locale;
};

type GlobeScopeTrackerProps = {
  scopeRef: RefObject<HTMLElement | null>;
  onHoverChange: (hovered: boolean) => void;
};

type GlobeWheelGuardProps = {
  allowWheelZoom: boolean;
};

type WorldRotationProps = {
  worldRotationRef: MutableRefObject<number>;
};

type GlobeRegionLabel = {
  color: string;
  kind: "continent" | "ocean";
  lat: number;
  lng: number;
  name: LocalizedText;
  radius?: number;
};

type TerrainZone = {
  biome: "desert" | "forest" | "grassland" | "ice" | "mountain" | "water";
  blur?: number;
  color: string;
  lat: number;
  lng: number;
  opacity: number;
  radiusLat: number;
  radiusLng: number;
  rotation?: number;
};

type WaterwayPath = {
  blur?: number;
  color: string;
  opacity: number;
  points: Array<[number, number]>;
  width: number;
};

const EARTH_TEXTURE_WIDTH = 2048;
const EARTH_TEXTURE_HEIGHT = 1024;
const WORLD_ROTATION_SPEED = 0.06;
const WORLD_Y_AXIS = new Vector3(0, 1, 0);
const SURFACE_REGION_LABEL_RADIUS = 1.586;
const OCEAN_REGION_LABEL_RADIUS = 1.592;
const TERRAIN_RADIUS_SCALE = 1.3;
const TERRAIN_OPACITY_BOOST = 1.46;
const TERRAIN_BLUR_SCALE = 0.72;
const landGeoJson = feature(
  landTopology as Topology<{ land: GeometryCollection }>,
  (landTopology as Topology<{ land: GeometryCollection }>).objects.land
) as FeatureCollection<Geometry> & GeoPermissibleObjects;

function getStoryMarkerDelay(storyId: string) {
  let hash = 0;

  for (let index = 0; index < storyId.length; index += 1) {
    hash = (hash + storyId.charCodeAt(index) * (index + 1)) % 2800;
  }

  return `${-hash}ms`;
}

const globeRegionLabels: GlobeRegionLabel[] = [
  {
    color: "#ffd36e",
    kind: "continent",
    lat: 47,
    lng: -108,
    name: { en: "North America", zh: "北美洲", es: "Norteamérica", ar: "أمريكا الشمالية" },
    radius: SURFACE_REGION_LABEL_RADIUS
  },
  {
    color: "#ffb86b",
    kind: "continent",
    lat: -20,
    lng: -60,
    name: { en: "South America", zh: "南美洲", es: "Sudamérica", ar: "أمريكا الجنوبية" },
    radius: SURFACE_REGION_LABEL_RADIUS
  },
  {
    color: "#f8f1d5",
    kind: "continent",
    lat: 53,
    lng: 20,
    name: { en: "Europe", zh: "欧洲", es: "Europa", ar: "أوروبا" },
    radius: SURFACE_REGION_LABEL_RADIUS
  },
  {
    color: "#7dffa8",
    kind: "continent",
    lat: 7,
    lng: 20,
    name: { en: "Africa", zh: "非洲", es: "África", ar: "أفريقيا" },
    radius: SURFACE_REGION_LABEL_RADIUS
  },
  {
    color: "#6ed6ff",
    kind: "continent",
    lat: 34,
    lng: 93,
    name: { en: "Asia", zh: "亚洲", es: "Asia", ar: "آسيا" },
    radius: SURFACE_REGION_LABEL_RADIUS
  },
  {
    color: "#ff9d55",
    kind: "continent",
    lat: -23,
    lng: 136,
    name: { en: "Oceania", zh: "大洋洲", es: "Oceanía", ar: "أوقيانوسيا" },
    radius: SURFACE_REGION_LABEL_RADIUS
  },
  {
    color: "#dff7ff",
    kind: "continent",
    lat: -78,
    lng: 15,
    name: { en: "Antarctica", zh: "南极洲", es: "Antártida", ar: "أنتاركتيكا" },
    radius: SURFACE_REGION_LABEL_RADIUS
  },
  {
    color: "#7dc6ff",
    kind: "ocean",
    lat: 17,
    lng: -154,
    name: { en: "Pacific Ocean", zh: "太平洋", es: "Océano Pacífico", ar: "المحيط الهادئ" },
    radius: OCEAN_REGION_LABEL_RADIUS
  },
  {
    color: "#8fe4ff",
    kind: "ocean",
    lat: 13,
    lng: -34,
    name: { en: "Atlantic Ocean", zh: "大西洋", es: "Océano Atlántico", ar: "المحيط الأطلسي" },
    radius: OCEAN_REGION_LABEL_RADIUS
  },
  {
    color: "#6ed6ff",
    kind: "ocean",
    lat: -18,
    lng: 78,
    name: { en: "Indian Ocean", zh: "印度洋", es: "Océano Índico", ar: "المحيط الهندي" },
    radius: OCEAN_REGION_LABEL_RADIUS
  },
  {
    color: "#d9f4ff",
    kind: "ocean",
    lat: 75,
    lng: -38,
    name: { en: "Arctic Ocean", zh: "北冰洋", es: "Océano Ártico", ar: "المحيط المتجمد الشمالي" },
    radius: OCEAN_REGION_LABEL_RADIUS
  },
  {
    color: "#b8ebff",
    kind: "ocean",
    lat: -55,
    lng: 86,
    name: { en: "Southern Ocean", zh: "南冰洋", es: "Océano Austral", ar: "المحيط الجنوبي" },
    radius: OCEAN_REGION_LABEL_RADIUS
  }
];

const terrainZones: TerrainZone[] = [
  { biome: "desert", color: "#e7c351", lat: 23, lng: 14, opacity: 0.84, radiusLat: 19, radiusLng: 34, blur: 7 },
  { biome: "desert", color: "#e1bf60", lat: 23, lng: 45, opacity: 0.76, radiusLat: 13, radiusLng: 21, blur: 6 },
  { biome: "desert", color: "#ddb657", lat: 33, lng: -112, opacity: 0.58, radiusLat: 10, radiusLng: 16, rotation: -0.18, blur: 5 },
  { biome: "desert", color: "#ddc06f", lat: 42, lng: 104, opacity: 0.58, radiusLat: 12, radiusLng: 20, rotation: -0.18, blur: 6 },
  { biome: "desert", color: "#d8aa4d", lat: -25, lng: 133, opacity: 0.7, radiusLat: 14, radiusLng: 25, rotation: 0.08, blur: 7 },
  { biome: "desert", color: "#cda95f", lat: -22, lng: 23, opacity: 0.5, radiusLat: 10, radiusLng: 14, rotation: 0.12, blur: 5 },
  { biome: "forest", color: "#377a3d", lat: -5, lng: -62, opacity: 0.7, radiusLat: 17, radiusLng: 27, rotation: -0.08, blur: 8 },
  { biome: "forest", color: "#2f6836", lat: 1, lng: 22, opacity: 0.64, radiusLat: 13, radiusLng: 17, blur: 7 },
  { biome: "forest", color: "#406944", lat: 44, lng: -78, opacity: 0.44, radiusLat: 15, radiusLng: 18, rotation: -0.18, blur: 7 },
  { biome: "forest", color: "#3f633c", lat: 51, lng: 16, opacity: 0.36, radiusLat: 10, radiusLng: 14, rotation: 0.08, blur: 5 },
  { biome: "forest", color: "#4b7a44", lat: 58, lng: 96, opacity: 0.52, radiusLat: 12, radiusLng: 43, rotation: 0.05, blur: 8 },
  { biome: "forest", color: "#377341", lat: 8, lng: 107, opacity: 0.56, radiusLat: 13, radiusLng: 20, rotation: 0.18, blur: 6 },
  { biome: "grassland", color: "#b2bd63", lat: 49, lng: 71, opacity: 0.48, radiusLat: 11, radiusLng: 43, rotation: 0.03, blur: 7 },
  { biome: "grassland", color: "#acbc5a", lat: 46, lng: -101, opacity: 0.48, radiusLat: 12, radiusLng: 24, rotation: -0.12, blur: 6 },
  { biome: "grassland", color: "#adb85f", lat: -34, lng: -63, opacity: 0.44, radiusLat: 10, radiusLng: 18, rotation: 0.18, blur: 5 },
  { biome: "grassland", color: "#bcc366", lat: 13, lng: 16, opacity: 0.4, radiusLat: 8, radiusLng: 33, blur: 7 },
  { biome: "grassland", color: "#a9ba5f", lat: -3, lng: 36, opacity: 0.46, radiusLat: 13, radiusLng: 14, rotation: 0.14, blur: 5 },
  { biome: "mountain", color: "#9198a1", lat: 31, lng: 88, opacity: 0.82, radiusLat: 8, radiusLng: 25, rotation: -0.08, blur: 3 },
  { biome: "mountain", color: "#737d84", lat: -22, lng: -70, opacity: 0.72, radiusLat: 25, radiusLng: 6, rotation: -0.36, blur: 3 },
  { biome: "mountain", color: "#757f86", lat: 41, lng: -112, opacity: 0.62, radiusLat: 17, radiusLng: 8, rotation: -0.2, blur: 3 },
  { biome: "mountain", color: "#a4a69d", lat: 46, lng: 11, opacity: 0.64, radiusLat: 6, radiusLng: 8, rotation: 0.12, blur: 2 },
  { biome: "mountain", color: "#7d858d", lat: 10, lng: 39, opacity: 0.48, radiusLat: 9, radiusLng: 7, rotation: -0.1, blur: 3 },
  { biome: "ice", color: "#f5fbff", lat: 74, lng: -42, opacity: 0.84, radiusLat: 12, radiusLng: 21, rotation: -0.18, blur: 7 },
  { biome: "ice", color: "#edf8fe", lat: 70, lng: -106, opacity: 0.34, radiusLat: 7, radiusLng: 24, rotation: -0.08, blur: 7 },
  { biome: "ice", color: "#f8fdff", lat: 65, lng: -20, opacity: 0.28, radiusLat: 7, radiusLng: 18, blur: 7 },
  { biome: "ice", color: "#eef9fd", lat: 68, lng: 102, opacity: 0.32, radiusLat: 7, radiusLng: 44, blur: 7 },
  { biome: "ice", color: "#f5fbff", lat: 34, lng: 82, opacity: 0.34, radiusLat: 4, radiusLng: 21, rotation: -0.06, blur: 4 },
  { biome: "ice", color: "#f8fdff", lat: -18, lng: -70, opacity: 0.26, radiusLat: 17, radiusLng: 4, rotation: -0.34, blur: 4 },
  { biome: "ice", color: "#f3fbff", lat: 49, lng: -116, opacity: 0.24, radiusLat: 11, radiusLng: 5, rotation: -0.2, blur: 4 },
  { biome: "ice", color: "#f8fdff", lat: 46, lng: 10, opacity: 0.28, radiusLat: 3, radiusLng: 5.5, rotation: 0.12, blur: 3 },
  { biome: "water", color: "#7fd8ff", lat: 45, lng: -84, opacity: 0.4, radiusLat: 5.5, radiusLng: 11, rotation: 0.12, blur: 3 },
  { biome: "water", color: "#7ccfff", lat: 42, lng: 51, opacity: 0.36, radiusLat: 6, radiusLng: 4.5, rotation: -0.04, blur: 2 },
  { biome: "water", color: "#84d9ff", lat: -1, lng: 33, opacity: 0.34, radiusLat: 3.5, radiusLng: 4.2, blur: 2 },
  { biome: "ice", color: "#f8fdff", lat: -77, lng: 18, opacity: 0.58, radiusLat: 10, radiusLng: 92, blur: 9 }
];

const waterwayPaths: WaterwayPath[] = [
  {
    blur: 3,
    color: "rgba(122, 211, 255, 0.95)",
    opacity: 0.9,
    points: [
      [47, -95],
      [43, -92],
      [39, -91],
      [35, -90],
      [30, -91]
    ],
    width: 3.2
  },
  {
    blur: 3,
    color: "rgba(132, 222, 255, 0.96)",
    opacity: 0.92,
    points: [
      [-4, -73],
      [-3, -68],
      [-3, -63],
      [-2, -58],
      [-1, -53],
      [0, -50]
    ],
    width: 3.6
  },
  {
    blur: 3,
    color: "rgba(137, 225, 255, 0.96)",
    opacity: 0.9,
    points: [
      [3, 31],
      [9, 31],
      [16, 32],
      [22, 31],
      [28, 31],
      [31, 31]
    ],
    width: 2.8
  },
  {
    blur: 3,
    color: "rgba(123, 213, 255, 0.96)",
    opacity: 0.88,
    points: [
      [30, 82],
      [29, 88],
      [28, 93],
      [26, 97]
    ],
    width: 2.6
  },
  {
    blur: 3,
    color: "rgba(117, 205, 255, 0.95)",
    opacity: 0.88,
    points: [
      [33, 103],
      [31, 108],
      [31, 114],
      [31, 120]
    ],
    width: 2.7
  },
  {
    blur: 2,
    color: "rgba(127, 216, 255, 0.95)",
    opacity: 0.84,
    points: [
      [34, 100],
      [25, 103],
      [17, 105],
      [10, 106]
    ],
    width: 2.2
  },
  {
    blur: 2,
    color: "rgba(130, 219, 255, 0.94)",
    opacity: 0.82,
    points: [
      [47, 9],
      [50, 8],
      [52, 7],
      [52, 4]
    ],
    width: 1.9
  }
];

export const GlobeScene = memo(function GlobeScene({ stories, locale, zoomScopeRef }: GlobeSceneProps) {
  const focusStory = useExploreStore((state) => state.focusStory);
  const [isPointerOverGlobe, setIsPointerOverGlobe] = useState(false);
  const worldRotationRef = useRef(0);

  return (
    <Canvas camera={{ position: [0, 0, 4.1], fov: 42 }} dpr={[1, 1.5]}>
      <color attach="background" args={["#181715"]} />
      <ambientLight intensity={0.72} />
      <directionalLight color="#f1dcc0" intensity={2.1} position={[2.8, 2, 4]} />
      <pointLight color="#5db8a6" intensity={3.2} position={[-3, -1.4, 3]} />
      <AutoRotatingWorld locale={locale} stories={stories} worldRotationRef={worldRotationRef} />
      <CameraFocus stories={stories} worldRotationRef={worldRotationRef} />
      <GlobeScopeTracker scopeRef={zoomScopeRef} onHoverChange={setIsPointerOverGlobe} />
      <GlobeWheelGuard allowWheelZoom={isPointerOverGlobe} />
      <OrbitControls
        enableDamping
        dampingFactor={0.07}
        enablePan={false}
        minDistance={2.35}
        maxDistance={8.2}
        onStart={() => focusStory(null)}
        makeDefault
      />
    </Canvas>
  );
});

function AutoRotatingWorld({
  stories,
  locale,
  worldRotationRef
}: LocalizedStoryCollectionProps & WorldRotationProps) {
  const groupRef = useRef<Group>(null);
  const selectedStoryId = useExploreStore((state) => state.selectedStoryId);
  const focusedStoryId = useExploreStore((state) => state.focusedStoryId);
  const shouldRotate = !selectedStoryId && !focusedStoryId;

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) {
      return;
    }

    if (shouldRotate) {
      group.rotation.y += delta * WORLD_ROTATION_SPEED;
    }

    worldRotationRef.current = group.rotation.y;
  });

  return (
    <group ref={groupRef}>
      <GlobeBody />
      <ContinentGlowZones />
      <GlobeRegionLabels locale={locale} worldRotationRef={worldRotationRef} />
      <StoryRouteArcs stories={stories} />
      <StoryMarkers locale={locale} stories={stories} worldRotationRef={worldRotationRef} />
    </group>
  );
}

const GlobeBody = memo(function GlobeBody() {
  const earthTexture = useMemo(() => createEarthTexture(), []);

  return (
    <group>
      <mesh>
        <sphereGeometry args={[1.55, 80, 80]} />
        <meshStandardMaterial
          color="#d9ddd4"
          emissive="#1b2723"
          emissiveIntensity={0.32}
          map={earthTexture}
          metalness={0.22}
          roughness={0.94}
        />
      </mesh>
      <mesh rotation={[0, 0, -0.16]} scale={1.005}>
        <sphereGeometry args={[1.558, 40, 40]} />
        <meshBasicMaterial
          blending={AdditiveBlending}
          color="#5db8a6"
          opacity={0.05}
          transparent
          wireframe
        />
      </mesh>
      <mesh rotation={[0.1, 0, 0.35]}>
        <sphereGeometry args={[1.572, 48, 48]} />
        <meshBasicMaterial
          blending={AdditiveBlending}
          color="#f2d9b6"
          opacity={0.035}
          transparent
          wireframe
        />
      </mesh>
      <group>
        {[-0.82, -0.58, -0.32, -0.08, 0.18, 0.44, 0.69].map((height, index) => {
          const ringRadius = Math.sqrt(1.57 * 1.57 - height * height);
          return (
            <mesh key={height} position={[0, height, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[ringRadius, index % 2 === 0 ? 0.003 : 0.002, 6, 180]} />
              <meshBasicMaterial
                blending={AdditiveBlending}
                color={index % 2 === 0 ? "#cc785c" : "#e8a55a"}
                opacity={index % 2 === 0 ? 0.16 : 0.08}
                transparent
              />
            </mesh>
          );
        })}
      </group>
      <mesh scale={1.76}>
        <sphereGeometry args={[1, 40, 40]} />
        <meshBasicMaterial color="#0d0d0c" opacity={0.18} side={BackSide} transparent />
      </mesh>
    </group>
  );
});

function GlobeScopeTracker({ scopeRef, onHoverChange }: GlobeScopeTrackerProps) {
  const hoveredRef = useRef(false);

  useEffect(() => {
    const scopeElement = scopeRef.current;
    if (!scopeElement) {
      return;
    }

    const setHovered = (nextHovered: boolean) => {
      if (hoveredRef.current === nextHovered) {
        return;
      }

      hoveredRef.current = nextHovered;
      onHoverChange(nextHovered);
    };

    const handlePointerEnter = () => {
      setHovered(true);
    };

    const handlePointerLeave = () => {
      setHovered(false);
    };

    scopeElement.addEventListener("pointerenter", handlePointerEnter);
    scopeElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      scopeElement.removeEventListener("pointerenter", handlePointerEnter);
      scopeElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [onHoverChange, scopeRef]);

  return null;
}

function GlobeWheelGuard({ allowWheelZoom }: GlobeWheelGuardProps) {
  const { gl } = useThree();
  const allowWheelZoomRef = useRef(allowWheelZoom);

  useEffect(() => {
    allowWheelZoomRef.current = allowWheelZoom;
  }, [allowWheelZoom]);

  useEffect(() => {
    const domElement = gl.domElement;

    const handleWheel = (event: WheelEvent) => {
      if (allowWheelZoomRef.current) {
        return;
      }

      event.stopImmediatePropagation();
    };

    domElement.addEventListener("wheel", handleWheel, { capture: true });

    return () => {
      domElement.removeEventListener("wheel", handleWheel, true);
    };
  }, [gl]);

  return null;
}

function createEarthTexture() {
  if (typeof document === "undefined") {
    return null;
  }

  const canvas = document.createElement("canvas");
  canvas.width = EARTH_TEXTURE_WIDTH;
  canvas.height = EARTH_TEXTURE_HEIGHT;

  const context = canvas.getContext("2d");
  if (!context) {
    return null;
  }

  const oceanGradient = context.createLinearGradient(0, 0, 0, canvas.height);
  oceanGradient.addColorStop(0, "#79caff");
  oceanGradient.addColorStop(0.44, "#2d84d6");
  oceanGradient.addColorStop(1, "#0d4f8d");
  context.fillStyle = oceanGradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const oceanGlow = context.createRadialGradient(
    canvas.width * 0.52,
    canvas.height * 0.45,
    40,
    canvas.width * 0.52,
    canvas.height * 0.45,
    canvas.width * 0.5
  );
  oceanGlow.addColorStop(0, "rgba(185, 234, 255, 0.26)");
  oceanGlow.addColorStop(1, "rgba(185, 234, 255, 0)");
  context.fillStyle = oceanGlow;
  context.fillRect(0, 0, canvas.width, canvas.height);

  drawWorldLandFill(context);

  context.save();
  buildLandClip(context);
  context.clip();
  terrainZones.forEach((zone) => drawTerrainZone(context, zone));
  waterwayPaths.forEach((path) => drawWaterway(context, path));
  context.restore();

  drawWorldLandStroke(context);

  for (let latitude = -60; latitude <= 60; latitude += 30) {
    const y = latToTextureY(latitude, canvas.height);
    context.strokeStyle = "rgba(255, 255, 255, 0.06)";
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.stroke();
  }

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.needsUpdate = true;
  return texture;
}

function buildLandClip(context: CanvasRenderingContext2D) {
  context.beginPath();
  traceWorldLand(context);
}

function drawWorldLandFill(context: CanvasRenderingContext2D) {
  context.beginPath();
  traceWorldLand(context);

  const landGradient = context.createLinearGradient(0, 0, EARTH_TEXTURE_WIDTH, EARTH_TEXTURE_HEIGHT);
  landGradient.addColorStop(0, "#9dba78");
  landGradient.addColorStop(0.38, "#89ad73");
  landGradient.addColorStop(0.68, "#7fa86a");
  landGradient.addColorStop(1, "#aabc78");
  context.fillStyle = landGradient;
  context.fill();

  context.save();
  context.globalAlpha = 0.12;
  context.fillStyle = "#fff1b7";
  context.fill();
  context.restore();
}

function drawWorldLandStroke(context: CanvasRenderingContext2D) {
  context.beginPath();
  traceWorldLand(context);
  context.lineJoin = "round";
  context.strokeStyle = "rgba(244, 231, 194, 0.96)";
  context.lineWidth = 2.2;
  context.stroke();

  context.beginPath();
  traceWorldLand(context);
  context.strokeStyle = "rgba(255, 250, 226, 0.55)";
  context.lineWidth = 0.85;
  context.stroke();
}

function traceWorldLand(context: CanvasRenderingContext2D) {
  const projection = geoEquirectangular()
    .scale(EARTH_TEXTURE_WIDTH / (2 * Math.PI))
    .translate([EARTH_TEXTURE_WIDTH / 2, EARTH_TEXTURE_HEIGHT / 2])
    .precision(0.2);
  const path = geoPath(projection, context);
  path(landGeoJson);
}

function drawTerrainZone(context: CanvasRenderingContext2D, zone: TerrainZone) {
  const x = lngToTextureX(zone.lng, EARTH_TEXTURE_WIDTH);
  const y = latToTextureY(zone.lat, EARTH_TEXTURE_HEIGHT);
  const radiusX = ((zone.radiusLng * TERRAIN_RADIUS_SCALE) / 360) * EARTH_TEXTURE_WIDTH;
  const radiusY = ((zone.radiusLat * TERRAIN_RADIUS_SCALE) / 180) * EARTH_TEXTURE_HEIGHT;
  const baseRadius = Math.max(radiusX, radiusY);
  const innerRadius = baseRadius * 0.08;
  const outerRadius = baseRadius * 1.08;
  const opacity = Math.min(0.98, zone.opacity * TERRAIN_OPACITY_BOOST);

  context.save();
  context.translate(x, y);
  context.rotate(zone.rotation ?? 0);

  if (zone.blur) {
    context.filter = `blur(${Math.max(1, zone.blur * TERRAIN_BLUR_SCALE)}px)`;
  }

  context.scale(radiusX / radiusY, 1);
  const gradient = context.createRadialGradient(0, 0, innerRadius, 0, 0, outerRadius);
  gradient.addColorStop(0, withAlpha(zone.color, opacity));
  gradient.addColorStop(0.64, withAlpha(zone.color, opacity * 0.98));
  gradient.addColorStop(0.9, withAlpha(zone.color, opacity * 0.74));
  gradient.addColorStop(1, withAlpha(zone.color, 0));
  context.fillStyle = gradient;
  context.beginPath();
  context.arc(0, 0, radiusY, 0, Math.PI * 2);
  context.fill();
  drawTerrainAccent(context, zone, radiusY);
  context.restore();
}

function drawTerrainAccent(
  context: CanvasRenderingContext2D,
  zone: TerrainZone,
  radius: number
) {
  context.save();
  context.filter = "none";

  if (zone.biome === "desert") {
    context.strokeStyle = withAlpha("#fff2be", 0.44);
    context.lineCap = "round";
    context.lineWidth = Math.max(1.1, radius * 0.06);
    for (let index = -2; index <= 2; index += 1) {
      const y = index * radius * 0.3;
      context.beginPath();
      context.moveTo(-radius * 0.72, y - radius * 0.08);
      context.bezierCurveTo(
        -radius * 0.35,
        y + radius * 0.16,
        radius * 0.2,
        y - radius * 0.16,
        radius * 0.72,
        y + radius * 0.08
      );
      context.stroke();
    }
  }

  if (zone.biome === "mountain") {
    context.strokeStyle = withAlpha("#f4f7fb", 0.55);
    context.lineWidth = Math.max(1.2, radius * 0.08);
    context.lineCap = "round";
    for (let index = -2; index <= 2; index += 1) {
      const x = index * radius * 0.24;
      context.beginPath();
      context.moveTo(x - radius * 0.3, radius * 0.34);
      context.lineTo(x, -radius * 0.34);
      context.lineTo(x + radius * 0.3, radius * 0.3);
      context.stroke();
    }

    context.strokeStyle = withAlpha("#4d5560", 0.34);
    context.lineWidth = Math.max(0.8, radius * 0.04);
    for (let index = -1; index <= 1; index += 1) {
      const x = index * radius * 0.32;
      context.beginPath();
      context.moveTo(x, -radius * 0.12);
      context.lineTo(x + radius * 0.16, radius * 0.3);
      context.stroke();
    }
  }

  if (zone.biome === "ice") {
    context.strokeStyle = withAlpha("#ffffff", 0.62);
    context.lineWidth = Math.max(1, radius * 0.05);
    for (let index = -2; index <= 2; index += 1) {
      const y = index * radius * 0.24;
      context.beginPath();
      context.moveTo(-radius * 0.56, y - radius * 0.04);
      context.lineTo(radius * 0.56, y + radius * 0.04);
      context.stroke();
    }

    context.strokeStyle = withAlpha("#c9ebff", 0.38);
    context.lineWidth = Math.max(0.8, radius * 0.032);
    context.beginPath();
    context.moveTo(-radius * 0.12, -radius * 0.48);
    context.lineTo(radius * 0.14, radius * 0.44);
    context.moveTo(-radius * 0.42, -radius * 0.18);
    context.lineTo(radius * 0.38, radius * 0.12);
    context.stroke();
  }

  if (zone.biome === "water") {
    context.strokeStyle = withAlpha("#e6fbff", 0.5);
    context.lineWidth = Math.max(0.8, radius * 0.05);
    context.beginPath();
    context.arc(0, 0, radius * 0.55, 0, Math.PI * 2);
    context.stroke();
  }

  context.restore();
}

function drawWaterway(context: CanvasRenderingContext2D, path: WaterwayPath) {
  if (path.points.length < 2) {
    return;
  }

  context.save();
  context.globalAlpha = path.opacity;
  if (path.blur) {
    context.filter = `blur(${path.blur}px)`;
  }

  context.beginPath();
  path.points.forEach(([latitude, longitude], index) => {
    const x = lngToTextureX(longitude, EARTH_TEXTURE_WIDTH);
    const y = latToTextureY(latitude, EARTH_TEXTURE_HEIGHT);

    if (index === 0) {
      context.moveTo(x, y);
      return;
    }

    context.lineTo(x, y);
  });

  context.strokeStyle = path.color;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineWidth = path.width + 1.2;
  context.stroke();

  context.filter = "none";
  context.globalAlpha = Math.min(1, path.opacity + 0.05);
  context.strokeStyle = "rgba(231, 250, 255, 0.8)";
  context.lineWidth = Math.max(1.2, path.width * 0.42);
  context.stroke();
  context.restore();
}

function withAlpha(hexColor: string, alpha: number) {
  const normalized = hexColor.replace("#", "");
  const expanded =
    normalized.length === 3
      ? normalized
          .split("")
          .map((value) => value + value)
          .join("")
      : normalized;

  const red = Number.parseInt(expanded.slice(0, 2), 16);
  const green = Number.parseInt(expanded.slice(2, 4), 16);
  const blue = Number.parseInt(expanded.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function lngToTextureX(longitude: number, width: number) {
  return ((longitude + 180) / 360) * width;
}

function latToTextureY(latitude: number, height: number) {
  return ((90 - latitude) / 180) * height;
}

const ContinentGlowZones = memo(function ContinentGlowZones() {
  const zones = [
    { lat: 15, lng: 20, scale: [1.55, 0.56, 0.84], color: "#ff9d55" },
    { lat: 48, lng: 96, scale: [1.7, 0.5, 0.96], color: "#6ed6ff" },
    { lat: -14, lng: -60, scale: [1.1, 0.42, 0.72], color: "#ffd36e" }
  ] as const;

  return (
    <group>
      {zones.map((zone) => {
        const position = latLngToVector3(zone.lat, zone.lng, 1.49);
        return (
          <mesh key={`${zone.lat}-${zone.lng}`} position={position} lookAt={[0, 0, 0]} scale={zone.scale}>
            <circleGeometry args={[0.35, 48]} />
            <meshBasicMaterial color={zone.color} opacity={0.08} transparent />
          </mesh>
        );
      })}
    </group>
  );
});

const StoryRouteArcs = memo(function StoryRouteArcs({ stories }: StoryCollectionProps) {
  const groupRef = useRef<Group>(null);

  const lines = useMemo(() => {
    const storyCount = Math.max(stories.length - 1, 0);
    const maxArcCount = 96;
    const step = Math.max(1, Math.ceil(storyCount / maxArcCount));
    const pairs: Array<readonly [Story, Story]> = [];

    for (let index = 0; index < storyCount; index += step) {
      const start = stories[index];
      const end = stories[Math.min(index + step, stories.length - 1)];

      if (start && end && start.id !== end.id) {
        pairs.push([start, end] as const);
      }
    }

    return pairs.map(([start, end], index) => {
      const startVector = latLngToVector3(start.latitude, start.longitude, 1.58);
      const endVector = latLngToVector3(end.latitude, end.longitude, 1.58);
      const mid = startVector.clone().add(endVector).multiplyScalar(0.5).normalize().multiplyScalar(2.05 + (index % 3) * 0.05);
      const curve = new CatmullRomCurve3([startVector, mid, endVector]);
      const points = curve.getPoints(24);
      const geometry = new BufferGeometry().setFromPoints(points);
      return { geometry, color: categoryMeta[start.category].color };
    });
  }, [stories]);

  useEffect(() => {
    if (!groupRef.current) {
      return;
    }

    const group = groupRef.current;
    group.clear();
    const materials: LineBasicMaterial[] = [];

    lines.forEach((line) => {
      const material = new LineBasicMaterial({
        color: line.color,
        opacity: 0.14,
        transparent: true
      });
      materials.push(material);
      group.add(new ThreeLine(line.geometry, material));
    });

    return () => {
      group.clear();
      lines.forEach((line) => line.geometry.dispose());
      materials.forEach((material) => material.dispose());
    };
  }, [lines]);

  return <group ref={groupRef} />;
});

const GlobeRegionLabels = memo(function GlobeRegionLabels({
  locale,
  worldRotationRef
}: { locale: Locale } & WorldRotationProps) {
  return (
    <group>
      {globeRegionLabels.map((label) => (
        <GlobeRegionLabelBadge
          key={`${label.kind}-${label.name.en}`}
          label={label}
          locale={locale}
          worldRotationRef={worldRotationRef}
        />
      ))}
    </group>
  );
});

function GlobeRegionLabelBadge({
  label,
  locale,
  worldRotationRef
}: {
  label: GlobeRegionLabel;
  locale: Locale;
} & WorldRotationProps) {
  const markerRef = useRef<HTMLSpanElement>(null);
  const worldPositionRef = useRef(new Vector3());
  const cameraDirectionRef = useRef(new Vector3());
  const visibilityStateRef = useRef({ opacity: "", visible: "" });
  const position = useMemo(
    () => latLngToVector3(label.lat, label.lng, label.radius ?? 1.86),
    [label.lat, label.lng, label.radius]
  );

  useFrame(({ camera }) => {
    const marker = markerRef.current;
    if (!marker) {
      return;
    }

    const facing = worldPositionRef.current
      .copy(position)
      .applyAxisAngle(WORLD_Y_AXIS, worldRotationRef.current)
      .normalize()
      .dot(cameraDirectionRef.current.copy(camera.position).normalize());
    const threshold = label.kind === "continent" ? 0.02 : 0.08;
    const normalizedOpacity = Math.max(0, Math.min(1, (facing - threshold) / 0.34));
    const nextVisible = normalizedOpacity > 0.05 ? "true" : "false";
    const nextOpacity = normalizedOpacity.toFixed(2);

    if (visibilityStateRef.current.visible !== nextVisible) {
      visibilityStateRef.current.visible = nextVisible;
      marker.dataset.visible = nextVisible;
    }

    if (visibilityStateRef.current.opacity !== nextOpacity) {
      visibilityStateRef.current.opacity = nextOpacity;
      marker.style.opacity = nextOpacity;
    }
  });

  const distanceFactor = label.kind === "continent" ? 3.4 : 3.8;

  return (
    <Html center distanceFactor={distanceFactor} position={position} zIndexRange={[1, 0]}>
      <span
        className="region-label"
        data-kind={label.kind}
        data-visible="false"
        ref={markerRef}
        style={{ "--region-color": label.color } as CSSProperties}
      >
        {localizeText(label.name, locale)}
      </span>
    </Html>
  );
}

const StoryMarkers = memo(function StoryMarkers({
  stories,
  locale,
  worldRotationRef
}: LocalizedStoryCollectionProps & WorldRotationProps) {
  return (
    <group>
      {stories.map((story) => (
        <StoryMarker key={story.id} locale={locale} story={story} worldRotationRef={worldRotationRef} />
      ))}
    </group>
  );
});

const StoryMarker = memo(function StoryMarker({
  story,
  locale,
  worldRotationRef
}: { story: Story; locale: Locale } & WorldRotationProps) {
  const selected = useExploreStore((state) => state.selectedStoryId === story.id);
  const selectStory = useExploreStore((state) => state.selectStory);
  const soundEnabled = useExploreStore((state) => state.soundEnabled);
  const markerRef = useRef<HTMLButtonElement>(null);
  const worldPositionRef = useRef(new Vector3());
  const cameraDirectionRef = useRef(new Vector3());
  const visibilityStateRef = useRef({ opacity: "", pointerEvents: "", visible: "" });
  const storyEmoji = getStoryMarkerEmoji(story.id);
  const markerStyle = useMemo(
    () => ({ "--story-marker-delay": getStoryMarkerDelay(story.id) }) as CSSProperties,
    [story.id]
  );
  const markerPosition = useMemo(
    () => latLngToVector3(story.latitude, story.longitude, selected ? 1.78 : 1.72),
    [selected, story.latitude, story.longitude]
  );

  useFrame(({ camera }) => {
    const marker = markerRef.current;
    if (!marker) {
      return;
    }

    const facing = worldPositionRef.current
      .copy(markerPosition)
      .applyAxisAngle(WORLD_Y_AXIS, worldRotationRef.current)
      .normalize()
      .dot(cameraDirectionRef.current.copy(camera.position).normalize());
    const normalizedOpacity = Math.max(0, Math.min(1, (facing - 0.04) / 0.28));
    const nextVisible = normalizedOpacity > 0.08 ? "true" : "false";
    const nextOpacity = selected ? "1" : normalizedOpacity.toFixed(2);
    const nextPointerEvents = normalizedOpacity > 0.22 || selected ? "auto" : "none";

    if (visibilityStateRef.current.visible !== nextVisible) {
      visibilityStateRef.current.visible = nextVisible;
      marker.dataset.visible = nextVisible;
    }

    if (visibilityStateRef.current.opacity !== nextOpacity) {
      visibilityStateRef.current.opacity = nextOpacity;
      marker.style.opacity = nextOpacity;
    }

    if (visibilityStateRef.current.pointerEvents !== nextPointerEvents) {
      visibilityStateRef.current.pointerEvents = nextPointerEvents;
      marker.style.pointerEvents = nextPointerEvents;
    }
  });

  const handleSelect = () => {
    selectStory(story.id);
    if (soundEnabled) {
      playUiSound("select");
    }
  };

  return (
    <Html
      center
      distanceFactor={3.4}
      position={markerPosition}
      zIndexRange={[2, 0]}
    >
      <button
        aria-label={`${storyEmoji} ${localizeText(story.title, locale)} · ${localizeText(story.country, locale)}`}
        aria-pressed={selected}
        className="story-emoji-marker"
        data-selected={selected}
        data-visible="false"
        onClick={(event) => {
          event.stopPropagation();
          handleSelect();
        }}
        ref={markerRef}
        style={markerStyle}
        type="button"
      >
        <span className="story-emoji-glyph" aria-hidden="true">{storyEmoji}</span>
      </button>
    </Html>
  );
});

function CameraFocus({ stories, worldRotationRef }: StoryCollectionProps & WorldRotationProps) {
  const focusedStoryId = useExploreStore((state) => state.focusedStoryId);
  const { camera, controls } = useThree();
  const worldTargetRef = useRef(new Vector3());
  const orbitTargetRef = useRef(new Vector3());
  const targetPosition = useMemo(() => {
    const story = stories.find((item) => item.id === focusedStoryId);

    if (!story) {
      return null;
    }

    return latLngToVector3(story.latitude, story.longitude, 3.25);
  }, [focusedStoryId, stories]);

  useFrame(() => {
    if (!targetPosition) {
      return;
    }

    camera.position.lerp(
      worldTargetRef.current.copy(targetPosition).applyAxisAngle(WORLD_Y_AXIS, worldRotationRef.current),
      0.045
    );
    camera.lookAt(0, 0, 0);

    const orbit = controls as unknown as
      | { target: Vector3; update: () => void }
      | undefined;
    if (orbit) {
      orbit.target.lerp(orbitTargetRef.current, 0.08);
      orbit.update();
    }
  });

  return null;
}
