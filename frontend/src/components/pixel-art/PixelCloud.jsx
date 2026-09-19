/**
 * Small pixel-art cloud SVG.
 */
function PixelCloud({ width = 48 }) {
  const h = Math.round(width * 0.5);
  return (
    <svg
      width={width}
      height={h}
      viewBox="0 0 16 8"
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: "pixelated" }}
    >
      {/* Cloud body */}
      <rect x="2" y="4" width="12" height="2" fill="#ffffff" />
      <rect x="4" y="2" width="8" height="2" fill="#ffffff" />
      <rect x="6" y="0" width="4" height="2" fill="#ffffff" />
      <rect x="0" y="4" width="2" height="2" fill="rgba(255,255,255,0.6)" />
      <rect x="14" y="4" width="2" height="2" fill="rgba(255,255,255,0.6)" />
      <rect x="2" y="6" width="12" height="2" fill="rgba(255,255,255,0.8)" />
    </svg>
  );
}

export default PixelCloud;
