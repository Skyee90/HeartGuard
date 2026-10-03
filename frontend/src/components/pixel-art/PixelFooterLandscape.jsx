import PixelCloud   from "./PixelCloud";
import PixelSun     from "./PixelSun";
import PixelFlower  from "./PixelFlower";
import PixelTree    from "./PixelTree";
import PixelBench   from "./PixelBench";
import PixelCat     from "./PixelCat";

/**
 * PixelFooterLandscape — full-bleed footer pixel-art scene.
 * Reuses: PixelCloud, PixelSun, PixelFlower
 * Creates: PixelTree, PixelBench, PixelCat
 * Light off-white background. Does NOT use .footer CSS class.
 */
function PixelFooterLandscape() {
  return (
    <div className="med-footer-landscape" aria-hidden="true">
      {/* ── Sky layer (sun + clouds) ── */}
      <div className="med-footer-sky">
        <div className="med-footer-sun">
          <PixelSun size={52} />
        </div>
        <div className="med-footer-cloud med-footer-cloud--1">
          <PixelCloud width={70} />
        </div>
        <div className="med-footer-cloud med-footer-cloud--2">
          <PixelCloud width={50} />
        </div>
        <div className="med-footer-cloud med-footer-cloud--3">
          <PixelCloud width={62} />
        </div>
      </div>

      {/* ── Ground scene ── */}
      <div className="med-footer-ground">
        {/* Green ground strip */}
        <div className="med-footer-grass-strip" />

        {/* Left tree */}
        <div className="med-footer-item med-footer-tree-left">
          <PixelTree size={52} />
        </div>

        {/* Right tree */}
        <div className="med-footer-item med-footer-tree-right">
          <PixelTree size={48} />
        </div>

        {/* Bench (center-right) */}
        <div className="med-footer-item med-footer-bench">
          <PixelBench size={60} />
        </div>

        {/* Cat (next to bench) */}
        <div className="med-footer-item med-footer-cat">
          <PixelCat size={34} />
        </div>

        {/* Flowers (scattered) */}
        <div className="med-footer-item med-footer-flower med-footer-flower--1">
          <PixelFlower color="pink" />
        </div>
        <div className="med-footer-item med-footer-flower med-footer-flower--2">
          <PixelFlower color="yellow" />
        </div>
        <div className="med-footer-item med-footer-flower med-footer-flower--3">
          <PixelFlower color="pink" />
        </div>
        <div className="med-footer-item med-footer-flower med-footer-flower--4">
          <PixelFlower color="red" />
        </div>
      </div>
    </div>
  );
}

export default PixelFooterLandscape;
