import FeatureCard from "./FeatureCard";


function WhyChoose() {
  const features = [
    {
      icon: "🤖",
      title: "AI Job Match",
      desc: "Get recommendations based on your skills."
    },
    {
      icon: "✔️",
      title: "Verified Companies",
      desc: "Apply only to trusted employers."
    },
    {
      icon: "⚡",
      title: "One-click Apply",
      desc: "Apply faster with your saved profile."
    },
    {
      icon: "📈",
      title: "Career Growth",
      desc: "Track applications and improve your career."
    }
  ];

  return (
    <section className="why-section">
      <div className="container">

        <div className="row align-items-center g-5">

          {/* Left */}

          <div className="col-lg-5">

            <span className="section-label">
              WHY JOBNEST
            </span>

            <h2>
              More than a job board.
            </h2>

            <p className="why-text">
              JobNest helps professionals discover better
              opportunities with smart search, verified
              companies and AI-powered recommendations.
            </p>

            <div className="why-stats">

              <div>
                <h3>10K+</h3>
                <p>Jobs</p>
              </div>

              <div>
                <h3>2.5K+</h3>
                <p>Companies</p>
              </div>

              <div>
                <h3>50K+</h3>
                <p>Candidates</p>
              </div>

            </div>

          </div>


          {/* Right */}

          <div className="col-lg-7">

            <div className="feature-grid">

              {features.map((item, index) => (
                <FeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;