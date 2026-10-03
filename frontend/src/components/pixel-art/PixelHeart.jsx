const INK = "#20243f";
const PINK = "#ff738d";
const RED = "#e94365";
const LIGHT = "#ffb3bf";
const SMALL_HEART = "M0 3H3V0H9V3H12V0H18V3H21V9H18V12H15V15H12V18H9V15H6V12H3V9H0Z";

// The sign's lettering is also pixel geometry: no font download or image needed.
const LETTERS = {
  A: ["01110", "11011", "11011", "11111", "11011", "11011", "11011"],
  E: ["11111", "11000", "11000", "11110", "11000", "11000", "11111"],
  G: ["01111", "11000", "11000", "11011", "11011", "11011", "01110"],
  H: ["11011", "11011", "11011", "11111", "11011", "11011", "11011"],
  I: ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
  L: ["11000", "11000", "11000", "11000", "11000", "11000", "11111"],
  M: ["10001", "11011", "11111", "10101", "10001", "10001", "10001"],
  O: ["01110", "11011", "11011", "11011", "11011", "11011", "01110"],
  R: ["11110", "11011", "11011", "11110", "11100", "11010", "11011"],
  T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
  W: ["10001", "10001", "10001", "10101", "11111", "11011", "10001"],
};

const PixelSignLine = ({ text, y }) => {
  const unit = 2;
  const left = (184 - (text.length * 6 - 1) * unit) / 2;
  const path = [...text].flatMap((letter, index) =>
    LETTERS[letter].flatMap((row, rowIndex) =>
      [...row].flatMap((pixel, column) => pixel === "1"
        ? [`M${left + (index * 6 + column) * unit} ${y + rowIndex * unit}h2v2h-2Z`]
        : [])
    )
  ).join("");

  return (
    <g data-testid={`pixel-heart-sign-line-${text.toLowerCase()}`}>
      <title>{text}</title>
      <path d={path} fill={INK} />
    </g>
  );
};


/**
 * Fixed desktop artwork, with both soles ending exactly at the viewBox bottom.
 * Align the SVG's bottom edge with the existing grass surface in its host scene.
 * No scenery, page positioning, external assets, or main-character animation.
 */
export const PixelHeart = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="576"
    height="496"
    viewBox="0 0 576 496"
    className={`pixel-heart-character ${className}`.trim()}
    style={{ display: "block", animation: "none", fontFamily: '"Pixelify Sans", Inter, sans-serif' }}
    shapeRendering="crispEdges"
    role="img"
    aria-label="A smiling pink pixel heart holding a sign: A HEALTHIER TOMORROW TOGETHER ♥. Both feet rest on the ground."
    data-testid="pixel-heart-character"
  >
    <g data-testid="pixel-heart-legs">
      <path d="M280 344H304V412H296V448H304V464H272V440H280Z" fill={INK} />
      <path d="M288 356H296V404H288ZM280 412H288V440H280Z" fill={RED} />
      <path d="M368 344H392V412H400V440H416V464H384V448H376V420H368Z" fill={INK} />
      <path d="M376 356H384V412H392V440H384V420H376Z" fill={RED} />
    </g>

    <g transform="translate(0, 24)">

    <g data-testid="pixel-heart-left-arm">
      <path d="M208 208H224V256H208V280H184V296H152V272H176V256H192V232H208Z" fill={INK} />
      <path d="M208 232H216V248H200V272H176V280H160V288H184V280H200V256H208Z" fill={PINK} />
    </g>
    <g data-testid="pixel-heart-right-arm">
      <path d="M464 208H488V232H504V248H520V264H536V288H544V312H536V320H512V312H504V288H488V264H472V240H464Z" fill={INK} />
      <path d="M480 224H488V240H504V256H520V272H528V296H536V304H520V280H504V272H496V256H480Z" fill={PINK} />
      <path d="M512 288H520V304H512Z" fill={LIGHT} />
    </g>

    <g data-testid="pixel-heart-body">
      <path d="M240 40H296V48H312V64H328V80H344V64H360V48H376V40H432V48H456V64H472V88H488V120H496V176H488V208H472V232H456V256H440V280H416V304H392V328H368V352H352V368H344V376H328V368H312V352H288V328H264V304H240V280H224V256H208V224H192V192H184V136H192V96H208V64H224V48H240Z" fill={INK} />
      <path d="M240 48H296V56H304V72H320V88H328V96H344V88H352V72H368V56H376V48H432V56H448V72H464V96H480V128H488V176H480V200H464V224H448V248H432V272H408V296H384V320H360V344H344V360H328V352H320V344H296V320H272V296H248V272H232V248H216V216H200V184H192V136H200V104H216V72H232V56H240Z" fill={PINK} />
      <path d="M432 56H448V72H464V96H480V128H488V176H480V200H464V224H448V248H432V272H408V296H384V320H360V344H344V360H328V352H320V344H296V320H280V304H304V312H336V320H352V304H376V280H400V256H424V232H440V200H456V168H464V120H456V88H432Z" fill={RED} />
      <path d="M240 56H288V64H256V72H240V88H224V112H216V152H200V136H208V104H224V72H240Z" fill={LIGHT} />
      <path d="M376 56H416V64H384V72H368V88H352V80H360V64H376Z" fill="#ff9cab" />
      <path d="M208 160H216V176H208ZM248 80H272V88H248ZM232 88H248V104H232Z" fill="#ffd3d8" />
      <path d="M296 304H312V320H296ZM312 320H328V336H312Z" fill="#f75575" />
    </g>

    <g data-testid="pixel-heart-face">
      <path d="M264 152H280V160H288V184H280V192H264V184H256V160H264ZM384 152H400V160H408V184H400V192H384V184H376V160H384Z" fill={INK} />
      <path d="M264 160H272V168H264ZM384 160H392V168H384Z" fill="#fff4e9" />
      <path d="M240 200H272V216H240ZM400 200H432V216H400Z" fill="#ee4265" />
      <path d="M240 200H248V208H240ZM424 200H432V208H424Z" fill={LIGHT} />
      <path d="M296 208H312V224H320V232H352V224H360V208H376V232H368V240H360V248H312V240H304V232H296Z" fill={INK} />
      <path d="M320 232H352V240H320Z" fill="#fff4e9" />
    </g>

    {/* The entire sign and gripping hand share one fixed tilt, so they meet. Scaled by 18% around grip */}
    <g
  transform="translate(24 232) rotate(-9 92 92) translate(92 92) scale(1.2) translate(-92 -92)"
  data-testid="pixel-heart-sign"
>
      <path d="M8 0H176V8H184V184H176V192H8V184H0V8H8Z" fill={INK} />
      <path d="M8 8H176V184H8Z" fill="#fff3d6" />
      <path d="M8 8H176V16H16V176H8Z" fill="#fffbed" />
      <path d="M168 16H176V184H8V176H168Z" fill="#e9ce9c" />
      <PixelSignLine text="A" y={22} />
      <PixelSignLine text="HEALTHIER" y={50} />
      <PixelSignLine text="TOMORROW" y={78} />
      <PixelSignLine text="TOGETHER" y={106} />
      <g transform="translate(76 140) scale(1.5)" data-testid="pixel-heart-sign-heart">
        <title>♥</title>
        <path d={SMALL_HEART} fill={RED} />
        <path d="M3 3H6V6H3Z" fill={PINK} />
      </g>
      <g data-testid="pixel-heart-sign-grip">
        <path d="M168 32H192V40H200V64H192V72H168V64H160V40H168Z" fill={INK} />
        <path d="M168 40H192V64H168Z" fill={PINK} />
        <path d="M168 40H176V56H168Z" fill={LIGHT} />
        <path d="M176 48H192V56H176Z" fill={RED} />
      </g>
    </g>
    </g>

    {/* There is no transparent gap beneath either sole: baseline = 496. */}
    <g data-testid="pixel-heart-left-foot">
      <path d="M272 448H296V456H304V464H312V488H304V496H240V488H232V472H240V464H256V456H272Z" fill={INK} />
      <path d="M272 456H288V464H296V472H304V480H240V472H256V464H272Z" fill={RED} />
      <path d="M256 464H272V472H256ZM240 480H304V488H240Z" fill={PINK} />
      <path d="M248 472H264V480H248Z" fill={LIGHT} />
    </g>
    <g data-testid="pixel-heart-right-foot">
      <path d="M384 448H408V456H424V464H440V472H448V488H440V496H376V488H368V464H376V456H384Z" fill={INK} />
      <path d="M384 456H400V464H416V472H432V480H376V464H384Z" fill={RED} />
      <path d="M400 464H416V472H400ZM376 480H440V488H376Z" fill={PINK} />
      <path d="M416 472H432V480H416Z" fill={LIGHT} />
    </g>
  </svg>
);

export default PixelHeart;