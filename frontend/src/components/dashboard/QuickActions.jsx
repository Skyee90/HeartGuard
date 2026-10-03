function QuickActions() {
  return (
    <div className="quick-actions-container">
      <button className="action-btn action-primary">
         <div className="btn-title"><span className="icon">✏️</span> Log a symptom &rarr;</div>
         <p>Track how you feel and keep a record. It can help you and your doctor.</p>
      </button>
      
      <button className="action-btn action-secondary">
         <div className="btn-title"><span className="icon">🔍</span> Search medicines &rarr;</div>
         <p>Find information about side effects and more.</p>
      </button>
    </div>
  );
}

export default QuickActions;
