import welcomeArt from '../../assets/dashboard-welcome-art.png';

function WelcomeCard() {
  return (
    <div className="welcome-card">
      <div className="welcome-text">
        <h1>Good morning, Sudeb</h1>
        <p>Here's your health at a glance.</p>
      </div>
      
      <div className="welcome-art">
        <img src={welcomeArt} alt="Welcome pixel art scene" className="dashboard-welcome-image" />
      </div>
    </div>
  );
}

export default WelcomeCard;
