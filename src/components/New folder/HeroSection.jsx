import HeroContent from "./HeroContent";
import HeroSearch from "./HeroSearch";
import HeroStats from "./HeroStats";


function HeroSection() {
  return (
    <section className="hero-section">

      <div className="container">

        <div className="hero-content-wrapper">

          <HeroContent />

          <HeroStats />

        </div>

        <HeroSearch />

      </div>

    </section>
  );
}

export default HeroSection;

