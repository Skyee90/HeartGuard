import Navbar from '../../components/layout/Navbar';
import WelcomeCard from '../../components/dashboard/WelcomeCard';
import MedicationOverview from '../../components/dashboard/MedicationOverview';
import QuickActions from '../../components/dashboard/QuickActions';
import SymptomOverview from '../../components/dashboard/SymptomOverview';
import RecentActivity from '../../components/dashboard/RecentActivity';
import footerArt from '../../assets/dashboard-footer-art.png';

function Dashboard() {
  return (
    <div className="dashboard-page">
      <Navbar />
      
      <main className="dashboard-main">
        <WelcomeCard />
        
        <div className="dashboard-grid">
          <div className="dashboard-col-left">
            <MedicationOverview />
            <SymptomOverview />
          </div>
          <div className="dashboard-col-right">
            <QuickActions />
            <RecentActivity />
          </div>
        </div>
      </main>

      <footer className="dashboard-footer">
        <div className="dashboard-footer-background">
          <img src={footerArt} alt="" />
        </div>

        <div className="dashboard-footer-content">
          <nav className="dashboard-footer-nav">
            <a href="/">Home</a>
            <span className="nav-separator">|</span>
            <a href="/medicines">Medicines</a>
            <span className="nav-separator">|</span>
            <a href="/learn">Learn</a>
            <span className="nav-separator">|</span>
            <a href="/help">Help</a>
          </nav>

          <div className="dashboard-footer-message">
            People.<br/>Knowledge.<br/>Healthier days.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
