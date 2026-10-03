/**
 * PixelDocumentIcon — pixel-art document with folded corner and text lines.
 * Used in the Sources & More Information section.
 */
function PixelDocumentIcon({ size = 32 }) {
  const INK   = "#20243f";
  const WHITE = "#f8f9fa";
  const LINE  = "#9ba9c0";

  // ViewBox 24x28 — portrait document
  return (
    <svg
      width={size}
      height={Math.round(size * 28 / 24)}
      viewBox="0 0 24 28"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      style={{ imageRendering: "pixelated" }}
      role="img"
      aria-label="Document icon"
      data-testid="pixel-document-icon"
    >
      {/* Paper body */}
      <rect x="0" y="0" width="18" height="28" fill={INK} />
      <rect x="2" y="2" width="14" height="24" fill={WHITE} />

      {/* Folded top-right corner outline */}
      <rect x="18" y="6" width="6"  height="22" fill={INK} />
      <rect x="20" y="8" width="4"  height="20" fill={WHITE} />

      {/* Corner fold triangle (INK shadow, then lighter fill) */}
      <rect x="18" y="0" width="2" height="2" fill={INK} />
      <rect x="20" y="0" width="2" height="2" fill={INK} />
      <rect x="22" y="0" width="2" height="2" fill={INK} />
      <rect x="22" y="2" width="2" height="2" fill={INK} />
      <rect x="22" y="4" width="2" height="2" fill={INK} />
      <rect x="20" y="2" width="2" height="2" fill={LINE} />
      <rect x="20" y="4" width="2" height="2" fill={LINE} />
      <rect x="18" y="2" width="2" height="4" fill={LINE} />

      {/* Text lines inside document */}
      <rect x="4" y="8"  width="10" height="2" fill={LINE} />
      <rect x="4" y="12" width="12" height="2" fill={LINE} />
      <rect x="4" y="16" width="10" height="2" fill={LINE} />
      <rect x="4" y="20" width="8"  height="2" fill={LINE} />
      <rect x="4" y="24" width="11" height="2" fill={LINE} />
    </svg>
  );
}

export default PixelDocumentIcon;
