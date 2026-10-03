function PixelSun({ size = 120 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {/* Pixel rays */}

      {/* Top */}
      <rect x="54" y="0" width="12" height="12" fill="#FFD95A" />

      {/* Top-left */}
      <rect x="24" y="12" width="12" height="12" fill="#FFD95A" />

      {/* Top-right */}
      <rect x="84" y="12" width="12" height="12" fill="#FFD95A" />

      {/* Left */}
      <rect x="0" y="54" width="12" height="12" fill="#FFD95A" />

      {/* Right */}
      <rect x="108" y="54" width="12" height="12" fill="#FFD95A" />

      {/* Bottom-left */}
      <rect x="24" y="96" width="12" height="12" fill="#FFD95A" />

      {/* Bottom-right */}
      <rect x="84" y="96" width="12" height="12" fill="#FFD95A" />

      {/* Bottom */}
      <rect x="54" y="108" width="12" height="12" fill="#FFD95A" />

      {/* Main pixel sun */}
      <path
        d="
          M36 24
          H84
          V30
          H96
          V42
          H102
          V78
          H96
          V90
          H84
          V96
          H36
          V90
          H24
          V78
          H18
          V42
          H24
          V30
          H36
          Z
        "
        fill="#FFD85A"
      />

      {/* Slight highlight */}
      <rect
        x="36"
        y="30"
        width="48"
        height="12"
        fill="#FFE477"
      />
    </svg>
  );
}

export default PixelSun;