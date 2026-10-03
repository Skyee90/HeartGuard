function SymptomOverview() {
  const symptoms = [
    { name: 'Stomach discomfort', desc: 'Felt mild stomach upset after taking medication.', date: 'Sep 24, 2026', time: '8:30 PM', severity: 'Mild', icon: '🩺' },
    { name: 'Headache', desc: 'Felt a mild headache in the evening.', date: 'Sep 22, 2026', time: '7:15 PM', severity: 'Mild', icon: '🤕' },
    { name: 'Dizziness', desc: 'Felt a little dizzy, went away after resting.', date: 'Sep 20, 2026', time: '10:20 AM', severity: 'Mild', icon: '😵' }
  ];

  return (
    <div className="dashboard-card symptom-card">
      <div className="card-header">
        <div>
          <h2>Recent Symptoms</h2>
          <p>Your latest symptom entries. This helps you keep track over time.</p>
        </div>
        <a href="#" className="view-all">View all &rarr;</a>
      </div>
      
      <div className="symptom-list">
        {symptoms.map((s, idx) => (
          <div className="symptom-item" key={idx}>
            <div className="symptom-icon">{s.icon}</div>
            <div className="symptom-info">
               <h3>{s.name}</h3>
               <p>{s.desc}</p>
            </div>
            <div className="symptom-datetime">
               <span className="s-date">{s.date}</span>
               <span className="s-time">{s.time}</span>
            </div>
            <div className="symptom-severity">
               <span className="badge-mild">{s.severity}</span>
            </div>
            <div className="symptom-arrow">&rarr;</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SymptomOverview;
