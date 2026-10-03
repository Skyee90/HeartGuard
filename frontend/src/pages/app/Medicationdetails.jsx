import Navbar               from "../../components/layout/Navbar";
import MedicationHeader     from "../../components/medications/MedicationHeader";
import MedicineOverview     from "../../components/medications/MedicineOverview";
import MedicationReminder   from "../../components/medications/MedicationReminder";
import SideEffectsGrid      from "../../components/medications/SideEffectsGrid";
import SourcesSection       from "../../components/medications/SourcesSection";
import LogSymptomCTA        from "../../components/medications/LogSymptomCTA";
import DisclaimerBanner     from "../../components/medications/DisclaimerBanner";
import PixelFooterLandscape from "../../components/pixel-art/PixelFooterLandscape";
import PixelHeartIcon       from "../../components/pixel-art/PixelHeartIcon";

// ─── Static medicine data ────────────────────────────────────────────────────
// Structured to facilitate later backend integration.
// The `image` field maps to a pixel-art illustration component in MedicationHeader.
const medicineData = {
  id: "aspirin",
  name: "Aspirin",
  image: "pill",
  form: "Tablet",
  dosages: ["75mg", "150mg", "300mg"],
  badge: "Common medicine",
  mascotQuote: "A little knowledge today can bring a calmer tomorrow.",

  overview: {
    title: "What is Aspirin?",
    description:
      "Aspirin is a commonly used medicine that helps reduce pain, fever, and inflammation. It also makes it harder for blood to clot, which can help prevent heart attacks and strokes in certain people.",
  },

  reminder: {
    primary: "Always take this medicine as directed by your doctor or pharmacist.",
    secondary: "Do not take more than the recommended dose.",
  },

  sideEffects: {
    common: [
      { id: 1, text: "Stomach upset" },
      { id: 2, text: "Nausea" },
      { id: 3, text: "Heartburn" },
      { id: 4, text: "Mild bleeding (e.g. nosebleeds)" },
      { id: 5, text: "Dizziness" },
    ],
    serious: [
      { id: 1, text: "Severe bleeding (e.g. in stomach or brain)" },
      { id: 2, text: "Allergic reaction (rash, swelling, trouble breathing)" },
      { id: 3, text: "Stomach ulcers" },
      { id: 4, text: "Liver problems (rare)" },
      { id: 5, text: "Kidney problems (rare)" },
    ],
  },

  sources: [
    { name: "FDA",         url: "#" },
    { name: "NHS",         url: "#" },
    { name: "MedlinePlus", url: "#" },
  ],
};

// ─── Footer link data ─────────────────────────────────────────────────────────
const footerLinks = ["Home", "Medicines", "Learn", "Help"];

// ─── Page ─────────────────────────────────────────────────────────────────────
function MedicationDetails() {
  const medicine = medicineData;

  return (
    <div className="medicine-detail-page">
      {/* Sticky Navbar — reused as-is, not modified */}
      <Navbar />

      {/* ── Page content ── */}
      <main className="med-body" id="medicine-detail-main">
        {/* Back to search */}
        <div className="med-back-row">
          <a href="/" className="med-back-link" id="back-to-search-link" aria-label="Back to search">
            <span aria-hidden="true">←</span> Back to search
          </a>
        </div>

        {/* Medicine Header */}
        <MedicationHeader medicine={medicine} />

        {/* Overview */}
        <MedicineOverview overview={medicine.overview} />

        {/* Reminder */}
        <MedicationReminder reminder={medicine.reminder} />

        {/* Side Effects */}
        <SideEffectsGrid sideEffects={medicine.sideEffects} />

        {/* Sources */}
        <SourcesSection sources={medicine.sources} />

        {/* Log a Symptom CTA */}
        <LogSymptomCTA />

        {/* Disclaimer */}
        <DisclaimerBanner />
      </main>

      {/* ── Medicine Footer (distinct from landing .footer) ── */}
      <footer className="medicine-footer" aria-label="HeartGuard medicine page footer">
        {/* Footer links row */}
        <div className="medicine-footer-links">
          <div className="med-footer-brand">
            <div className="med-footer-logo-icon" aria-hidden="true">
              <PixelHeartIcon size={28} />
            </div>
            <div className="med-footer-brand-text">
              <span className="med-footer-name">
                <strong>Heart</strong>Guard
              </span>
              <span className="med-footer-tagline">Care today. Brighter tomorrows.</span>
            </div>
          </div>

          <nav className="med-footer-nav" aria-label="Footer navigation">
            {footerLinks.map((link, i) => (
              <span key={link} className="med-footer-nav-group">
                {i > 0 && <span className="med-footer-sep" aria-hidden="true">|</span>}
                <a href="#" className="med-footer-nav-link">{link}</a>
              </span>
            ))}
          </nav>

          <div className="med-footer-tagline-right">
            <p className="med-footer-slogan">
              People. Knowledge.<br />Healthier days.{" "}
              <span className="med-footer-heart" aria-hidden="true">♡</span>
            </p>
            <p className="med-footer-care-note med-footer-care-note--tilted">
              Take care,<br />You&rsquo;re doing great.{" "}
              <span aria-hidden="true">♡</span>
            </p>
          </div>
        </div>

        {/* Pixel landscape — decorative */}
        <PixelFooterLandscape />
      </footer>
    </div>
  );
}

export default MedicationDetails;
