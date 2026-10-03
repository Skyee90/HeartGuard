/**
 * PixelBench — pixel-art wooden park bench for the footer landscape.
 * Two horizontal planks, A-frame legs, black outline.
 */
function PixelBench({ size = 56 }) {
  const INK   = "#20243f";
  const WOOD  = "#c47a3a";
  const WOOD2 = "#a85e28";

  // ViewBox 48x32
  return (
    <svg
      width={size}
      height={Math.round(size * 32 / 48)}
      viewBox="0 0 48 32"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      style={{ imageRendering: "pixelated" }}
      role="img"
      aria-label="Park bench pixel art"
      data-testid="pixel-bench"
    >
      {/* ── LEGS (A-frame, two on each side) ── */}
      {/* Left front leg */}
      <rect x="4"  y="16" width="4" height="16" fill={INK} />
      <rect x="6"  y="18" width="2" height="12" fill={WOOD2} />
      {/* Left back leg (slightly behind) */}
      <rect x="10" y="18" width="4" height="14" fill={INK} />
      <rect x="12" y="20" width="2" height="10" fill={WOOD2} />
      {/* Right front leg */}
      <rect x="40" y="16" width="4" height="16" fill={INK} />
      <rect x="42" y="18" width="2" height="12" fill={WOOD2} />
      {/* Right back leg */}
      <rect x="34" y="18" width="4" height="14" fill={INK} />
      <rect x="36" y="20" width="2" height="10" fill={WOOD2} />

      {/* ── SEAT PLANKS ── */}
      {/* Lower seat plank */}
      <rect x="2"  y="14" width="44" height="6" fill={INK} />
      <rect x="4"  y="16" width="40" height="4" fill={WOOD} />
      {/* Plank grain lines */}
      <rect x="4"  y="18" width="40" height="1" fill={WOOD2} />

      {/* Upper back plank */}
      <rect x="6"  y="6" width="36" height="6" fill={INK} />
      <rect x="8"  y="8" width="32" height="4" fill={WOOD} />
      <rect x="8"  y="10" width="32" height="1" fill={WOOD2} />

      {/* Back support posts */}
      <rect x="10" y="8"  width="4" height="10" fill={INK} />
      <rect x="12" y="10" width="2" height="8"  fill={WOOD2} />
      <rect x="34" y="8"  width="4" height="10" fill={INK} />
      <rect x="36" y="10" width="2" height="8"  fill={WOOD2} />
    </svg>
  );
}

export default PixelBench;
