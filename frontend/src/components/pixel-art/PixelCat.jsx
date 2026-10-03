/**
 * PixelCat — pixel-art sitting orange cat for the footer landscape.
 * Orange body, white face/belly, pointy ears, black eyes.
 */

function PixelCat({ size = 36 }) {
  const INK    = "#20243f";
  const ORANGE = "#e8832a";
  const ORANGE2 = "#c96820";
  const WHITE  = "#f5f0e8";
  const PINK   = "#f5a0a0";

  // ViewBox 28x36 — sitting cat
  return (
    <svg
      width={size}
      height={Math.round(size * 36 / 28)}
      viewBox="0 0 28 36"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      style={{ imageRendering: "pixelated" }}
      role="img"
      aria-label="Sitting pixel cat"
      data-testid="pixel-cat"
    >
      {/* ── BODY ── */}
      {/* Body outline */}
      <rect x="4"  y="18" width="20" height="18" fill={INK} />
      {/* Body fill */}
      <rect x="6"  y="20" width="16" height="16" fill={ORANGE} />
      {/* White belly */}
      <rect x="9"  y="22" width="10" height="12" fill={WHITE} />
      {/* Body stripe */}
      <rect x="6"  y="24" width="2"  height="8"  fill={ORANGE2} />
      <rect x="20" y="24" width="2"  height="8"  fill={ORANGE2} />

      {/* ── HEAD ── */}
      {/* Head outline */}
      <rect x="6"  y="8" width="16" height="12" fill={INK} />
      {/* Head fill */}
      <rect x="8"  y="10" width="12" height="10" fill={ORANGE} />
      {/* White face area */}
      <rect x="9"  y="12" width="10" height="7"  fill={WHITE} />

      {/* ── EARS ── */}
      {/* Left ear */}
      <rect x="6"  y="4"  width="4"  height="6"  fill={INK} />
      <rect x="8"  y="6"  width="2"  height="4"  fill={ORANGE} />
      <rect x="8"  y="7"  width="2"  height="2"  fill={PINK} />
      {/* Right ear */}
      <rect x="18" y="4"  width="4"  height="6"  fill={INK} />
      <rect x="18" y="6"  width="2"  height="4"  fill={ORANGE} />
      <rect x="18" y="7"  width="2"  height="2"  fill={PINK} />

      {/* ── FACE ── */}
      {/* Eyes */}
      <rect x="10" y="13" width="4" height="3" fill={INK} />
      <rect x="14" y="13" width="4" height="3" fill={INK} />
      {/* Nose */}
      <rect x="13" y="16" width="2" height="2" fill={PINK} />
      {/* Whisker line markers */}
      <rect x="9"  y="17" width="4" height="1" fill={INK} />
      <rect x="15" y="17" width="4" height="1" fill={INK} />

      {/* ── TAIL ── */}
      <rect x="20" y="28" width="6"  height="4" fill={INK} />
      <rect x="22" y="24" width="4"  height="6" fill={INK} />
      <rect x="24" y="30" width="4"  height="4" fill={INK} />
      <rect x="22" y="30" width="2"  height="4" fill={ORANGE} />
      <rect x="24" y="26" width="2"  height="4" fill={ORANGE} />
      <rect x="22" y="22" width="2"  height="4" fill={ORANGE} />
    </svg>
  );
}

export default PixelCat;