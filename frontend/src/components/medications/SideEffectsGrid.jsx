/**
 * SideEffectsGrid — two-column grid with common (sage) and serious (pink) side effect panels.
 * Category colours are styling only — NOT personalized medical risk indicators.
 */
function SideEffectsGrid({ sideEffects }) {
  return (
    <div className="med-side-effects-grid" data-testid="side-effects-grid">
      {/* Common side effects (sage/green) */}
      <div className="med-se-card med-se-card--common">
        <h2 className="med-se-title">Common side effects</h2>
        <p className="med-se-subtitle">Usually mild and often go away on their own.</p>
        <ul className="med-se-list" aria-label="Common side effects list">
          {sideEffects.common.map((item) => (
            <li key={item.id} className="med-se-item">
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Serious side effects (soft coral/pink) */}
      <div className="med-se-card med-se-card--serious">
        <h2 className="med-se-title">Serious side effects</h2>
        <p className="med-se-subtitle">Rare, but can be serious. Seek medical help if you notice:</p>
        <ul className="med-se-list" aria-label="Serious side effects list">
          {sideEffects.serious.map((item) => (
            <li key={item.id} className="med-se-item">
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideEffectsGrid;
