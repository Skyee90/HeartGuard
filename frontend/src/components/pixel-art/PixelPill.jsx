/**
 * PixelPill — Aspirin tablet pixel-art illustration.
 * White circular tablet with diagonal score line, crescent shadow,
 * and three orange action lines.
 */
function PixelPill({ size = 90 }) {
  const INK    = "#20243f";
  const WHITE  = "#ffffff";
  const LGRAY  = "#d4d4d4";
  const SHADOW = "#bdbdbd";
  const ACT    = "#f0a030";

  // ViewBox 56x52: pill octagon at 0-48,0-48, action lines at 50-56,0-16
  // Outer octagon outline (INK)
  const outer = "M16 0H32V4H40V8H44V16H48V32H44V40H40V44H32V48H16V44H8V40H4V32H0V16H4V8H8V4Z";
  // Inner white fill (4 units inset from outer)
  const inner = "M12 4H36V8H40V12H44V36H40V40H36V44H12V40H8V36H4V12H8V8Z";

  return (
    <svg
      width={size}
      height={Math.round(size * 52 / 56)}
      viewBox="0 0 56 52"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      style={{ imageRendering: "pixelated" }}
      role="img"
      aria-label="Aspirin tablet pixel art"
      data-testid="pixel-pill"
    >
      {/* Pill outer outline */}
      <path d={outer} fill={INK} />
      {/* White fill */}
      <path d={inner} fill={WHITE} />

      {/* Score line — diagonal gray band top-left to bottom-right */}
      <rect x="8"  y="8"  width="8" height="4" fill={LGRAY} />
      <rect x="12" y="12" width="8" height="4" fill={LGRAY} />
      <rect x="16" y="16" width="8" height="4" fill={LGRAY} />
      <rect x="20" y="20" width="8" height="4" fill={LGRAY} />
      <rect x="24" y="24" width="8" height="4" fill={LGRAY} />
      <rect x="28" y="28" width="8" height="4" fill={LGRAY} />
      <rect x="32" y="32" width="8" height="4" fill={LGRAY} />

      {/* Crescent shadow — lower-left inner curve */}
      <rect x="4"  y="28" width="4" height="8" fill={SHADOW} />
      <rect x="8"  y="36" width="4" height="4" fill={SHADOW} />
      <rect x="8"  y="40" width="4" height="4" fill={SHADOW} />

      {/* Orange action lines — upper-right outside pill */}
      <rect x="50" y="2"  width="6" height="3" fill={ACT} />
      <rect x="50" y="8"  width="3" height="7" fill={ACT} />
      <rect x="46" y="0"  width="3" height="6" fill={ACT} />
    </svg>
  );
}

export default PixelPill;
