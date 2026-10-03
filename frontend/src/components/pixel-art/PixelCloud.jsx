function PixelCloud({ width = 100 }) {
  const height = Math.round(width * 0.55);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 110 60"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path
        d="
          M10 42
          H22
          V30
          H32
          V18
          H44
          V10
          H66
          V16
          H78
          V26
          H90
          V36
          H102
          V48
          H10
          Z
        "
        fill="#FFFFFF"
      />

      <rect x="4" y="42" width="98" height="10" fill="#FFFFFF" />
      <rect x="18" y="32" width="66" height="10" fill="#FFFFFF" />

      <rect x="22" y="52" width="58" height="4" fill="#E8F7FF" />
      <rect x="86" y="48" width="12" height="4" fill="#E8F7FF" />
    </svg>
  );
}

export default PixelCloud;