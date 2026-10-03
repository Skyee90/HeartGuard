import PixelCapsuleIcon from "../pixel-art/PixelCapsuleIcon";

/**
 * LogSymptomCTA — full-width coral CTA button + supporting text.
 */
function LogSymptomCTA() {
  return (
    <div className="med-cta-wrap" data-testid="log-symptom-cta">
      <button
        type="button"
        className="med-cta-btn"
        id="log-symptom-btn"
        aria-label="Log a symptom — track how you feel"
      >
        <span className="med-cta-icon" aria-hidden="true">
          <PixelCapsuleIcon size={22} />
        </span>
        Log a symptom
        <span className="med-cta-arrow" aria-hidden="true">→</span>
      </button>
      <p className="med-cta-subtext">
        Track how you feel and keep a record. It can help you and your doctor.
      </p>
    </div>
  );
}

export default LogSymptomCTA;
