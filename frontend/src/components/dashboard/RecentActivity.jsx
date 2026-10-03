function RecentActivity() {
  const activities = [
    { type: 'Symptom logged', title: 'Stomach discomfort', date: 'Sep 24, 2026', time: '8:30 PM', color: 'red', icon: '💊' },
    { type: 'Medicine saved', title: 'Aspirin', date: 'Sep 21, 2026', time: '6:12 PM', color: 'green', icon: '🔖' },
    { type: 'Viewed medicine', title: 'Metformin', date: 'Sep 18, 2026', time: '4:03 PM', color: 'blue', icon: '📄' },
    { type: 'Symptom logged', title: 'Headache', date: 'Sep 16, 2026', time: '9:11 PM', color: 'red', icon: '💊' }
  ];

  return (
    <div className="dashboard-card activity-card">
      <div className="card-header">
        <div>
          <h2>Health Timeline</h2>
          <p>Your recent activity on HeartGuard.</p>
        </div>
      </div>
      
      <div className="timeline-container">
        {activities.map((a, i) => (
          <div className="timeline-item" key={i}>
            <div className={`timeline-dot dot-${a.color}`}></div>
            {i !== activities.length - 1 && <div className="timeline-line"></div>}
            <div className="timeline-icon">{a.icon}</div>
            <div className="timeline-content">
               <h3>{a.type}</h3>
               <p>{a.title}</p>
            </div>
            <div className="timeline-datetime">
               <span className="t-date">{a.date}</span>
               <span className="t-time">{a.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;
