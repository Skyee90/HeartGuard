import PixelPill   from "../pixel-art/PixelPill";
import PixelMascot from "../pixel-art/PixelMascot";

/**
 * MedicationHeader — top section of the Medicine Information page.
 * Contains: pill image, medicine name/form/dosages/badge,
 *           save button, mascot, and mascot speech bubble.
 */
function MedicationHeader({ medicine }) {
  const { name, form, dosages, badge } = medicine;

  return (
    <div className="med-header" data-testid="medication-header">
      {/* Save button — absolute top-right */}
      <button
        className="med-save-btn"
        type="button"
        aria-label={`Save ${name} to your medicines`}
        id="save-medicine-btn"
      >
        <span className="med-save-icon" aria-hidden="true">♡</span>
        Save
      </button>

      {/* Left block: pill image */}
      <div className="med-pill-box" aria-hidden="true">
        <PixelPill size={80} />
      </div>

      {/* Middle block: name, form, dosages, badge */}
      <div className="med-header-info">
        <h1 className="med-name">{name}</h1>
        <div className="med-meta">
          <span className="med-form">{form}</span>
          {dosages.map((d, i) => (
            <span key={d} className="med-dosage">
              {i === 0 ? "\u00a0\u2022\u00a0" : "\u00a0|\u00a0"}
              {d}
            </span>
          ))}
        </div>
        <span className="med-badge">{badge}</span>
      </div>

      {/* Right block: speech bubble + mascot */}
      <div className="med-header-mascot-area">
        <div className="mascot-speech-bubble" role="note" aria-label="HeartGuard tip">
          <p className="mascot-bubble-text">
            A little knowledge today can bring a calmer tomorrow.
          </p>
          <span className="mascot-bubble-heart" aria-hidden="true">♡</span>
        </div>
        <div className="med-mascot-wrap" aria-hidden="true">
          <PixelMascot size={120} />
        </div>
      </div>
    </div>
  );
}

export default MedicationHeader;
