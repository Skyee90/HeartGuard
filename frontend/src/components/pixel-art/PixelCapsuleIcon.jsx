/**
 * PixelCapsuleIcon — small diagonal capsule pill icon (CTA button).
 * Red/white two-tone capsule with black outline, rendered diagonally.
 */
function PixelCapsuleIcon({ size = 20 }) {
  const INK   = "#20243f";
  const RED   = "#e95d67";
  const WHITE = "#ffffff";

  // ViewBox 28x20 — capsule drawn diagonally
  return (
    <svg
      width={size}
      height={Math.round(size * 20 / 28)}
      viewBox="0 0 28 20"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      style={{ imageRendering: "pixelated" }}
      role="img"
      aria-label="Capsule icon"
      data-testid="pixel-capsule-icon"
    >
      {/* Capsule outline — stepped oval rotated ~45° */}
      {/* Row 0 */}
      <rect x="14" y="0"  width="8"  height="4" fill={INK} />
      {/* Row 1 */}
      <rect x="10" y="4"  width="4"  height="4" fill={INK} />
      <rect x="22" y="4"  width="4"  height="4" fill={INK} />
      {/* Row 2 */}
      <rect x="6"  y="8"  width="4"  height="4" fill={INK} />
      <rect x="18" y="8"  width="4"  height="4" fill={INK} />
      {/* Row 3 */}
      <rect x="2"  y="12" width="4"  height="4" fill={INK} />
      <rect x="14" y="12" width="4"  height="4" fill={INK} />
      {/* Row 4 */}
      <rect x="0"  y="16" width="8"  height="4" fill={INK} />

      {/* Red half fill (top-right) */}
      <rect x="14" y="4"  width="8"  height="4" fill={RED} />
      <rect x="10" y="8"  width="8"  height="4" fill={RED} />
      <rect x="6"  y="12" width="8"  height="4" fill={RED} />

      {/* White half fill (bottom-left) */}
      <rect x="4"  y="16" width="4"  height="4" fill={WHITE} />
      <rect x="8"  y="12" width="2"  height="4" fill={WHITE} />

      {/* Outline on top */}
      <rect x="14" y="0"  width="8"  height="4" fill={INK} />
      <rect x="10" y="4"  width="4"  height="4" fill={INK} />
      <rect x="22" y="4"  width="4"  height="4" fill={INK} />
      <rect x="6"  y="8"  width="4"  height="4" fill={INK} />
      <rect x="18" y="8"  width="4"  height="4" fill={INK} />
      <rect x="2"  y="12" width="4"  height="4" fill={INK} />
      <rect x="14" y="12" width="4"  height="4" fill={INK} />
      <rect x="0"  y="16" width="8"  height="4" fill={INK} />
    </svg>
  );
}

export default PixelCapsuleIcon;
