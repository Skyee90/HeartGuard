/**
 * DisclaimerBanner — pale-blue medical information disclaimer bar.
 */
function DisclaimerBanner() {
  return (
    <div className="med-disclaimer" role="note" data-testid="disclaimer-banner">
      <span className="med-disclaimer-icon" aria-hidden="true">ℹ</span>
      <p className="med-disclaimer-text">
        For informational purposes only. HeartGuard does not provide medical diagnosis or treatment advice.
      </p>
    </div>
  );
}

export default DisclaimerBanner;
