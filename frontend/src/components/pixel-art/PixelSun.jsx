/**
 * Pixel-art sun SVG.
 */
function PixelSun() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: "pixelated" }}
    >
      {/* Rays */}
      <rect x="7" y="0" width="2" height="2" fill="#ffe066" />
      <rect x="7" y="14" width="2" height="2" fill="#ffe066" />
      <rect x="0" y="7" width="2" height="2" fill="#ffe066" />
      <rect x="14" y="7" width="2" height="2" fill="#ffe066" />
      <rect x="2" y="2" width="2" height="2" fill="#ffe066" />
      <rect x="12" y="2" width="2" height="2" fill="#ffe066" />
      <rect x="2" y="12" width="2" height="2" fill="#ffe066" />
      <rect x="12" y="12" width="2" height="2" fill="#ffe066" />

      {/* Core */}
      <rect x="5" y="5" width="6" height="6" fill="#ffe066" />
      <rect x="7" y="3" width="2" height="2" fill="#ffe066" />
      <rect x="7" y="11" width="2" height="2" fill="#ffe066" />
      <rect x="3" y="7" width="2" height="2" fill="#ffe066" />
      <rect x="11" y="7" width="2" height="2" fill="#ffe066" />

      {/* Highlight */}
      <rect x="6" y="6" width="2" height="2" fill="#fff5b0" />
    </svg>
  );
}

export default PixelSun;
