/**
 * Pixel-art flower SVG.
 * @param {object} props
 * @param {"pink"|"red"|"yellow"} props.color - Flower petal color
 */
function PixelFlower({ color = "pink" }) {
  const colors = {
    pink: { petal: "#f7969e", center: "#ffe066" },
    red: { petal: "#ee6570", center: "#ffe066" },
    yellow: { petal: "#ffe066", center: "#e95d67" },
  };

  const c = colors[color] || colors.pink;

  return (
    <svg
      width="28"
      height="50"
      viewBox="0 0 10 18"
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: "pixelated" }}
    >
      {/* Petals */}
      <rect x="4" y="0" width="2" height="2" fill={c.petal} />
      <rect x="2" y="2" width="2" height="2" fill={c.petal} />
      <rect x="6" y="2" width="2" height="2" fill={c.petal} />
      <rect x="0" y="4" width="2" height="2" fill={c.petal} />
      <rect x="8" y="4" width="2" height="2" fill={c.petal} />
      <rect x="2" y="6" width="2" height="2" fill={c.petal} />
      <rect x="6" y="6" width="2" height="2" fill={c.petal} />

      {/* Center */}
      <rect x="4" y="2" width="2" height="2" fill={c.center} />
      <rect x="2" y="4" width="2" height="2" fill={c.center} />
      <rect x="4" y="4" width="2" height="2" fill={c.center} />
      <rect x="6" y="4" width="2" height="2" fill={c.center} />
      <rect x="4" y="6" width="2" height="2" fill={c.center} />

      {/* Stem */}
      <rect x="4" y="8" width="2" height="2" fill="#5a9e3a" />
      <rect x="4" y="10" width="2" height="2" fill="#5a9e3a" />
      <rect x="4" y="12" width="2" height="2" fill="#5a9e3a" />
      <rect x="4" y="14" width="2" height="2" fill="#5a9e3a" />

      {/* Leaf */}
      <rect x="6" y="10" width="2" height="2" fill="#6daa3c" />
      <rect x="8" y="10" width="2" height="2" fill="#6daa3c" />
    </svg>
  );
}

export default PixelFlower;
