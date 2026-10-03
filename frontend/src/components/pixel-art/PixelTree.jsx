/**
 * PixelTree — blocky pixel-art tree for the footer landscape.
 * Brown trunk with bark, two-tone bumpy canopy, black outline.
 */
function PixelTree({ size = 48 }) {
  const INK    = "#20243f";
  const BARK   = "#7a4f2e";
  const BARK2  = "#9b6b45";
  const GREEN1 = "#4a9e3a"; // dark canopy
  const GREEN2 = "#6abf52"; // mid canopy
  const GREEN3 = "#82d468"; // light canopy highlight

  // ViewBox 40x56: trunk at bottom, canopy on top
  return (
    <svg
      width={size}
      height={Math.round(size * 56 / 40)}
      viewBox="0 0 40 56"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      style={{ imageRendering: "pixelated" }}
      role="img"
      aria-label="Pixel tree"
      data-testid="pixel-tree"
    >
      {/* ── TRUNK ── */}
      {/* Trunk outline */}
      <rect x="14" y="38" width="12" height="18" fill={INK} />
      {/* Trunk fill (brown) */}
      <rect x="16" y="40" width="4"  height="16" fill={BARK} />
      <rect x="20" y="40" width="4"  height="16" fill={BARK2} />
      {/* Bark stripes */}
      <rect x="16" y="44" width="8"  height="2"  fill={INK} style={{ opacity: 0.2 }} />
      <rect x="16" y="50" width="8"  height="2"  fill={INK} style={{ opacity: 0.2 }} />

      {/* ── CANOPY (bumpy top, three overlapping blobs) ── */}
      {/* Back (darker) layer */}
      {/* Large blob center */}
      <rect x="8"  y="20" width="24" height="20" fill={INK} />
      <rect x="10" y="22" width="20" height="18" fill={GREEN1} />
      {/* Left bump */}
      <rect x="2"  y="24" width="12" height="14" fill={INK} />
      <rect x="4"  y="26" width="10" height="12" fill={GREEN1} />
      {/* Right bump */}
      <rect x="26" y="24" width="12" height="14" fill={INK} />
      <rect x="28" y="26" width="8"  height="12" fill={GREEN1} />
      {/* Top bump center */}
      <rect x="12" y="10" width="16" height="14" fill={INK} />
      <rect x="14" y="12" width="12" height="12" fill={GREEN1} />

      {/* Front (lighter) layer for depth */}
      <rect x="10" y="26" width="20" height="12" fill={GREEN2} />
      <rect x="14" y="16" width="12" height="10" fill={GREEN2} />
      <rect x="4"  y="28" width="8"  height="8"  fill={GREEN2} />
      <rect x="28" y="28" width="8"  height="8"  fill={GREEN2} />

      {/* Highlight (top-left area of canopy blobs) */}
      <rect x="14" y="14" width="6" height="4" fill={GREEN3} />
      <rect x="10" y="24" width="6" height="4" fill={GREEN3} />
    </svg>
  );
}

export default PixelTree;
