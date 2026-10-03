/**
 * MedicineOverview — "What is [Medicine]?" text card.
 */
function MedicineOverview({ overview }) {
  return (
    <div className="med-card med-overview" data-testid="medicine-overview">
      <h2 className="med-card-title">{overview.title}</h2>
      <p className="med-card-body">{overview.description}</p>
    </div>
  );
}

export default MedicineOverview;
