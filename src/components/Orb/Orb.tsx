import React, { useMemo } from "react";
import "./styles.css";
import { SvgElements } from "../SvgElements/SvgElements";
import { colorPalettes } from "../../palette/colorPalettes";

export interface OrbProps {
  /** Size of the orb in pixels */
  size?: number;
  /** Primary color of the orb gradient */
  color: string;
  /** Shining effect in the middle of the orb */
  shineMiddle?: boolean;
}

const baseOrbSize = 82; // Base size of the main orb in px
const baseShapeSize = 72; // Base size of the inner shapes in px

export const Orb = ({
  palette = colorPalettes.cosmicNebula,
  size = 1,
  animationSpeedBase = 1,
  animationSpeedHue = 1,
  hueRotation = 120,
  mainOrbHueAnimation = false,
}) => {
  const cssVariables = useMemo(
    () =>
      ({
        "--react-ai-orb-size": `${size * baseOrbSize}px`,
        "--shapes-size": `${size * baseShapeSize}px`,
        "--main-bg-start": palette.mainBgStart,
        "--main-bg-end": palette.mainBgEnd,
        "--shadow-color-1": palette.shadowColor1,
        "--shadow-color-2": palette.shadowColor2,
        "--shadow-color-3": palette.shadowColor3,
        "--shadow-color-4": palette.shadowColor4,
        "--shape-a-start": palette.shapeAStart,
        "--shape-a-end": palette.shapeAEnd,
        "--shape-b-start": palette.shapeBStart,
        "--shape-b-middle": palette.shapeBMiddle,
        "--shape-b-end": palette.shapeBEnd,
        "--shape-c-start": palette.shapeCStart,
        "--shape-c-middle": palette.shapeCMiddle,
        "--shape-c-end": palette.shapeCEnd,
        "--shape-d-start": palette.shapeDStart,
        "--shape-d-middle": palette.shapeDMiddle,
        "--shape-d-end": palette.shapeDEnd,
        "--animation-rotation-speed-base": `${1 / (animationSpeedBase * 0.5)}s`,
        "--animation-hue-speed-base": `${1 / (animationSpeedHue * 0.5)}s`,
        "--hue-rotation": `${hueRotation}deg`,
        "--main-hue-animation": mainOrbHueAnimation
          ? "hueShift var(--animation-hue-speed-base) linear infinite"
          : "none",
      } as React.CSSProperties),
    [
      palette,
      animationSpeedBase,
      animationSpeedHue,
      hueRotation,
      mainOrbHueAnimation,
      size,
    ]
  );

  return (
    <div
      style={{
        ...cssVariables,
      }}
    >
      <div className="orb-main">
        <div className="glass loc-glass" />
        <div className="shape-a loc-a" />
        <div className="shape-b loc-b" />
        <div className="shape-c loc-c" />
        <div className="shape-d loc-d" />

        <SvgElements color1={palette.mainBgStart} color2={palette.mainBgEnd} />

        {/* Particle canvas 
        <canvas ref={canvasRef} className="absolute inset-0 mix-blend-screen" />
        */}
      </div>
    </div>
  );
};

export default Orb;
