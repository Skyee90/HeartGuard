/**
 * Pixel-art heart character SVG — the main mascot.
 * Drawn on a grid to look like a retro 8-bit sprite.
 */
function PixelHeart() {
  return (
    <svg
      width="260"
      height="290"
      viewBox="0 0 36 40"
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: "pixelated" }}
    >
      {/* Heart body */}
      {/* Row 1 - top bumps */}
      <rect x="4" y="2" width="2" height="2" fill="#ee6570" />
      <rect x="6" y="2" width="2" height="2" fill="#ee6570" />
      <rect x="8" y="2" width="2" height="2" fill="#ee6570" />
      <rect x="14" y="2" width="2" height="2" fill="#ee6570" />
      <rect x="16" y="2" width="2" height="2" fill="#ee6570" />
      <rect x="18" y="2" width="2" height="2" fill="#ee6570" />

      {/* Row 2 */}
      <rect x="2" y="4" width="2" height="2" fill="#ee6570" />
      <rect x="4" y="4" width="2" height="2" fill="#f7969e" />
      <rect x="6" y="4" width="2" height="2" fill="#f7969e" />
      <rect x="8" y="4" width="2" height="2" fill="#ee6570" />
      <rect x="10" y="4" width="2" height="2" fill="#ee6570" />
      <rect x="12" y="4" width="2" height="2" fill="#ee6570" />
      <rect x="14" y="4" width="2" height="2" fill="#f7969e" />
      <rect x="16" y="4" width="2" height="2" fill="#f7969e" />
      <rect x="18" y="4" width="2" height="2" fill="#ee6570" />
      <rect x="20" y="4" width="2" height="2" fill="#ee6570" />

      {/* Row 3 */}
      <rect x="2" y="6" width="2" height="2" fill="#ee6570" />
      <rect x="4" y="6" width="2" height="2" fill="#f7969e" />
      <rect x="6" y="6" width="2" height="2" fill="#ffffff" />
      <rect x="8" y="6" width="2" height="2" fill="#ee6570" />
      <rect x="10" y="6" width="2" height="2" fill="#ee6570" />
      <rect x="12" y="6" width="2" height="2" fill="#ee6570" />
      <rect x="14" y="6" width="2" height="2" fill="#f7969e" />
      <rect x="16" y="6" width="2" height="2" fill="#ffffff" />
      <rect x="18" y="6" width="2" height="2" fill="#ee6570" />
      <rect x="20" y="6" width="2" height="2" fill="#ee6570" />

      {/* Row 4 - eyes */}
      <rect x="2" y="8" width="2" height="2" fill="#ee6570" />
      <rect x="4" y="8" width="2" height="2" fill="#ee6570" />
      <rect x="6" y="8" width="2" height="2" fill="#14213d" />
      <rect x="8" y="8" width="2" height="2" fill="#ee6570" />
      <rect x="10" y="8" width="2" height="2" fill="#ee6570" />
      <rect x="12" y="8" width="2" height="2" fill="#ee6570" />
      <rect x="14" y="8" width="2" height="2" fill="#ee6570" />
      <rect x="16" y="8" width="2" height="2" fill="#14213d" />
      <rect x="18" y="8" width="2" height="2" fill="#ee6570" />
      <rect x="20" y="8" width="2" height="2" fill="#ee6570" />

      {/* Row 5 - mouth area */}
      <rect x="4" y="10" width="2" height="2" fill="#ee6570" />
      <rect x="6" y="10" width="2" height="2" fill="#ee6570" />
      <rect x="8" y="10" width="2" height="2" fill="#ee6570" />
      <rect x="10" y="10" width="2" height="2" fill="#ee6570" />
      <rect x="12" y="10" width="2" height="2" fill="#ee6570" />
      <rect x="14" y="10" width="2" height="2" fill="#ee6570" />
      <rect x="16" y="10" width="2" height="2" fill="#ee6570" />
      <rect x="18" y="10" width="2" height="2" fill="#ee6570" />

      {/* Row 6 - smile */}
      <rect x="4" y="12" width="2" height="2" fill="#ee6570" />
      <rect x="6" y="12" width="2" height="2" fill="#ee6570" />
      <rect x="8" y="12" width="2" height="2" fill="#14213d" />
      <rect x="10" y="12" width="2" height="2" fill="#ee6570" />
      <rect x="12" y="12" width="2" height="2" fill="#ee6570" />
      <rect x="14" y="12" width="2" height="2" fill="#14213d" />
      <rect x="16" y="12" width="2" height="2" fill="#ee6570" />
      <rect x="18" y="12" width="2" height="2" fill="#ee6570" />

      {/* Row 7 - smile bottom */}
      <rect x="6" y="14" width="2" height="2" fill="#ee6570" />
      <rect x="8" y="14" width="2" height="2" fill="#ee6570" />
      <rect x="10" y="14" width="2" height="2" fill="#14213d" />
      <rect x="12" y="14" width="2" height="2" fill="#14213d" />
      <rect x="14" y="14" width="2" height="2" fill="#ee6570" />
      <rect x="16" y="14" width="2" height="2" fill="#ee6570" />

      {/* Row 8 - narrowing */}
      <rect x="8" y="16" width="2" height="2" fill="#ee6570" />
      <rect x="10" y="16" width="2" height="2" fill="#ee6570" />
      <rect x="12" y="16" width="2" height="2" fill="#ee6570" />
      <rect x="14" y="16" width="2" height="2" fill="#ee6570" />

      {/* Row 9 - tip */}
      <rect x="10" y="18" width="2" height="2" fill="#ee6570" />
      <rect x="12" y="18" width="2" height="2" fill="#ee6570" />

      {/* Left arm */}
      <rect x="0" y="8" width="2" height="2" fill="#14213d" />
      <rect x="0" y="10" width="2" height="2" fill="#14213d" />
      <rect x="0" y="12" width="2" height="2" fill="#14213d" />

      {/* Right arm (holding sign up) */}
      <rect x="22" y="4" width="2" height="2" fill="#14213d" />
      <rect x="22" y="6" width="2" height="2" fill="#14213d" />
      <rect x="22" y="8" width="2" height="2" fill="#14213d" />

      {/* Legs */}
      <rect x="8" y="20" width="2" height="2" fill="#14213d" />
      <rect x="8" y="22" width="2" height="2" fill="#14213d" />
      <rect x="8" y="24" width="2" height="2" fill="#14213d" />
      <rect x="6" y="24" width="2" height="2" fill="#14213d" />

      <rect x="14" y="20" width="2" height="2" fill="#14213d" />
      <rect x="14" y="22" width="2" height="2" fill="#14213d" />
      <rect x="14" y="24" width="2" height="2" fill="#14213d" />
      <rect x="16" y="24" width="2" height="2" fill="#14213d" />

      {/* Outline - top edge */}
      <rect x="4" y="0" width="2" height="2" fill="#14213d" />
      <rect x="6" y="0" width="2" height="2" fill="#14213d" />
      <rect x="8" y="0" width="2" height="2" fill="#14213d" />
      <rect x="10" y="2" width="2" height="2" fill="#14213d" />
      <rect x="12" y="2" width="2" height="2" fill="#14213d" />
      <rect x="14" y="0" width="2" height="2" fill="#14213d" />
      <rect x="16" y="0" width="2" height="2" fill="#14213d" />
      <rect x="18" y="0" width="2" height="2" fill="#14213d" />

      {/* Outline - sides */}
      <rect x="2" y="2" width="2" height="2" fill="#14213d" />
      <rect x="20" y="2" width="2" height="2" fill="#14213d" />
      <rect x="0" y="4" width="2" height="4" fill="#14213d" />
      <rect x="22" y="10" width="2" height="4" fill="#14213d" />
    </svg>
  );
}

export default PixelHeart;
