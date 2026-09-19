import Navbar from "../../components/layout/Navbar";
import SearchBar from "../../components/search/SearchBar";
import PixelHeart from "../../components/pixel-art/PixelHeart";
import PixelDoctor from "../../components/pixel-art/PixelDoctor";
import PixelSun from "../../components/pixel-art/PixelSun";
import PixelFlower from "../../components/pixel-art/PixelFlower";
import PixelCloud from "../../components/pixel-art/PixelCloud";
import PixelHeartIcon from "../../components/pixel-art/PixelHeartIcon";
import {
  PixelSearchIcon,
  PixelLearnIcon,
  PixelShieldIcon,
  PixelPeopleIcon,
} from "../../components/pixel-art/PixelIcons";

function Welcome() {
  return (
    <main className="welcome">
      <Navbar />

      {/* ── Hero ── */}
      <section className="hero" id="hero-section">
        <div className="hero-content">
          <h1>
            Find medicine
            <br />
            side effects
            <br />
            in seconds.
          </h1>

          <p className="hero-subtitle">Simple. Clear. For. Everyone.</p>

          <SearchBar />

          <p className="quick-searches">
            Try: <span>Paracetamol</span>
            <b>|</b>
            <span>Aspirin</span>
            <b>|</b>
            <span>Metformin</span>
            <b>|</b>
            <span>Amlodipine</span>
          </p>
        </div>

        <div className="hero-art">
          {/* Sun — upper right */}
          <div className="pixel-sun">
            <PixelSun />
          </div>

          {/* Clouds — scattered in sky */}
          <div className="cloud cloud-1">
            <PixelCloud width={56} />
          </div>
          <div className="cloud cloud-2">
            <PixelCloud width={44} />
          </div>
          <div className="cloud cloud-3">
            <PixelCloud width={38} />
          </div>

          {/* Sign — above/left of heart, z-index behind heart */}
          <div className="sign">
            <span>A</span>
            <span>HEALTHIER</span>
            <span>TOMORROW</span>
            <span>TOGETHER</span>
            <small>♥</small>
          </div>
          <div className="sign-post" />

          {/* Heart mascot — large, z-index in front of sign */}
          <div className="pixel-heart-character">
            <PixelHeart />
          </div>

          {/* Side text — far right */}
          <div className="side-text">
            Small<br />
            Searches.<br />
            Big Care. <span className="pink-heart">♥</span>
          </div>

          {/* Floating hearts */}
          <div className="floating-hearts">
            <span className="float-heart">♥</span>
            <span className="float-heart">♥</span>
            <span className="float-heart">♥</span>
          </div>

          {/* Flowers on grass */}
          <div className="flowers">
            <PixelFlower color="pink" />
            <PixelFlower color="red" />
          </div>

          {/* Grass */}
          <div className="grass">
            <div className="grass-hill" />
          </div>
        </div>
      </section>

      {/* ── Features Strip ── */}
      <section className="features-strip" id="features-section">
        <div className="feature-item" id="feature-search">
          <div className="feature-icon"><PixelSearchIcon /></div>
          <div className="feature-text">
            <h3>Search</h3>
            <p>Find your medicine instantly.</p>
          </div>
        </div>

        <div className="feature-item" id="feature-learn">
          <div className="feature-icon"><PixelLearnIcon /></div>
          <div className="feature-text">
            <h3>Learn</h3>
            <p>See simple side effects and warnings.</p>
          </div>
        </div>

        <div className="feature-item" id="feature-safe">
          <div className="feature-icon"><PixelShieldIcon /></div>
          <div className="feature-text">
            <h3>Stay Safe</h3>
            <p>Make informed decisions.</p>
          </div>
        </div>

        <div className="feature-item" id="feature-everyone">
          <div className="feature-icon"><PixelPeopleIcon /></div>
          <div className="feature-text">
            <h3>For Everyone</h3>
            <p>Easy to use, no medical jargon.</p>
          </div>
        </div>
      </section>

      {/* ── Companion ── */}
      <section className="companion-section" id="companion-section">
        <div className="companion-inner">
          <div className="companion-visual">
            <div className="doctor-avatar"><PixelDoctor /></div>
            <div className="speech-bubble">
              <p>
                Knowledge today for a healthier tomorrow!{" "}
                <span className="bubble-heart">❤️</span>
              </p>
            </div>
          </div>

          <div className="companion-text">
            <h2>Your Health Companion</h2>
            <p>
              HeartGuard helps you understand medicine side effects in a simple
              and easy way, so you can take care of yourself and your loved ones.
            </p>
          </div>

          <div className="companion-flowers">
            <PixelFlower color="pink" />
            <PixelFlower color="yellow" />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer" id="footer">
        <div className="footer-logo">
          <div className="footer-heart-icon"><PixelHeartIcon size={28} /></div>
          <div className="footer-brand">
            <span className="footer-name">HeartGuard</span>
            <span className="footer-tagline">Simple Health. Happier You.</span>
          </div>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/medicines">Medicines</a>
          <a href="/about">About</a>
          <a href="/help">Help</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-care">
          Care for people, everywhere. <span className="care-heart">❤️</span>
        </div>
      </footer>
    </main>
  );
}

export default Welcome;