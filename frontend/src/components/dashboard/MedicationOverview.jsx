import PixelPill from '../pixel-art/PixelPill';

function MedicationOverview() {
  return (
    <div className="dashboard-card medication-card">
      <div className="card-header">
        <div>
          <h2>My Medications</h2>
          <p>Medicines you've saved for easy access.</p>
        </div>
        <a href="#" className="view-all">View all &rarr;</a>
      </div>
      
      <div className="medication-item">
        <div className="med-icon">
          <PixelPill size={75} />
        </div>
        <div className="med-details">
          <h3>Aspirin</h3>
          <span className="med-type">Tablet</span>
          <div className="med-dosages">75mg <span className="divider">|</span> 150mg <span className="divider">|</span> 300mg</div>
          <span className="badge-common">Common medicine</span>
        </div>
        <div className="med-note">
           <div className="note-header">
             <span className="note-icon">📋</span> Your note
           </div>
           <p>1 tablet daily<br/>(after food)</p>
        </div>
        <div className="med-actions">
           <button className="btn-edit">✏️ Edit</button>
           <button className="btn-delete">🗑️</button>
        </div>
      </div>
    </div>
  );
}

export default MedicationOverview;
