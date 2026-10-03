function PixelGrass() {
  return (
    <div className="pixel-grass-container">

      {/* Background hill */}
      <div className="grass-hill-back" />

      {/* Foreground hill */}
      <div className="grass-hill-front">

        {/* Stepped grass edge */}
        <div className="grass-step step-1" />
        <div className="grass-step step-2" />
        <div className="grass-step step-3" />
        <div className="grass-step step-4" />

        {/* Flowers */}
        <div className="grass-flower flower-left">
          <div className="flower-center" />
          <div className="flower-stem" />
        </div>

        <div className="grass-flower flower-right">
          <div className="flower-center" />
          <div className="flower-stem" />
        </div>

        {/* Texture */}
        <div className="grass-texture texture-1" />
        <div className="grass-texture texture-2" />

      </div>

      {/* =====================================================
          BUSHES + SCATTERED GRASS OVERLAY
          ===================================================== */}

      <svg
        className="grass-details"
        viewBox="0 0 1000 180"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* =====================================================
            TWO PIXEL BUSHES
            ===================================================== */}

        {/* Left bush */}
        <g shapeRendering="crispEdges">
          <path
            d="
              M92 118
              H98 V106
              H106 V98
              H118 V90
              H132 V84
              H148 V88
              H158 V96
              H168 V108
              H176 V118
              H176 V132
              H92 Z
            "
            fill="#6FA15F"
          />

          <path
            d="
              M100 116
              H106 V104
              H114 V96
              H126 V90
              H140 V94
              H150 V101
              H160 V112
              H168 V120
              H100 Z
            "
            fill="#82B56D"
          />

          <rect x="116" y="96" width="10" height="7" fill="#A8D789" />
          <rect x="136" y="101" width="8" height="6" fill="#A8D789" />
          <rect x="106" y="108" width="7" height="6" fill="#96C47A" />
        </g>


        {/* Right bush */}
        <g shapeRendering="crispEdges">
          <path
            d="
              M760 132
              H766 V120
              H774 V110
              H786 V102
              H800 V96
              H816 V100
              H828 V108
              H838 V118
              H846 V132
              H846 V145
              H760 Z
            "
            fill="#6FA15F"
          />

          <path
            d="
              M768 130
              H774 V120
              H782 V112
              H794 V105
              H808 V102
              H820 V108
              H830 V116
              H838 V128
              H838 V140
              H768 Z
            "
            fill="#82B56D"
          />

          <rect x="786" y="110" width="10" height="7" fill="#A8D789" />
          <rect x="808" y="108" width="8" height="6" fill="#A8D789" />
          <rect x="776" y="121" width="7" height="6" fill="#96C47A" />
        </g>


        {/* =====================================================
            SCATTERED GRASS TUFTS
            ===================================================== */}

        <g fill="#679A58" shapeRendering="crispEdges">

          <path d="M55 142 H59 V130 H56 V135 H52 V132 H49 V142 Z" />

          <path d="M190 125 H194 V113 H191 V118 H187 V115 H184 V125 Z" />

          <path d="M265 105 H269 V92 H266 V98 H262 V95 H259 V105 Z" />

          <path d="M335 91 H339 V79 H336 V84 H332 V81 H329 V91 Z" />

          <path d="M430 88 H434 V75 H431 V81 H427 V78 H424 V88 Z" />

          <path d="M520 99 H524 V86 H521 V92 H517 V89 H514 V99 Z" />

          <path d="M610 112 H614 V99 H611 V105 H607 V102 H604 V112 Z" />

          <path d="M700 126 H704 V113 H701 V119 H697 V116 H694 V126 Z" />

          <path d="M875 143 H879 V130 H876 V136 H872 V133 H869 V143 Z" />

          <path d="M940 151 H944 V139 H941 V145 H937 V142 H934 V151 Z" />

        </g>


        {/* Lighter grass */}
        <g fill="#91C878" shapeRendering="crispEdges">

          <path d="M145 133 H149 V122 H146 V127 H142 V124 H139 V133 Z" />

          <path d="M300 115 H304 V104 H301 V109 H297 V106 H294 V115 Z" />

          <path d="M470 101 H474 V90 H471 V95 H467 V92 H464 V101 Z" />

          <path d="M650 123 H654 V112 H651 V117 H647 V114 H644 V123 Z" />

          <path d="M820 139 H824 V128 H821 V133 H817 V130 H814 V139 Z" />

        </g>

      </svg>

    </div>
  );
}

export default PixelGrass;