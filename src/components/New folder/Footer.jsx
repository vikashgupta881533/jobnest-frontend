import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        {/* Top CTA */}

        <div className="footer-cta">

          <div>
            <h2>Ready to find your next opportunity?</h2>
            <p>
              Join thousands of professionals discovering better careers with JobNest.
            </p>
          </div>

          <button>Get Started</button>

        </div>


        {/* Main Footer */}

        <div className="footer-grid">

          {/* Brand */}

          <div className="footer-brand">

            <h3>
              <span>Job</span>Nest
            </h3>

            <p>
              Connecting talented professionals with trusted companies across India.
            </p>

            <div className="social-icons">
              <span>📘</span>
              <span>💼</span>
              <span>🐦</span>
              <span>📸</span>
            </div>

          </div>


          {/* Job Seekers */}

          <div>

            <h4>Job Seekers</h4>

            <ul>
              <li><Link to="/">Find Jobs</Link></li>
              <li><Link to="/">Remote Jobs</Link></li>
              <li><Link to="/">Career Advice</Link></li>
              <li><Link to="/">Resume Builder</Link></li>
            </ul>

          </div>


          {/* Employers */}

          <div>

            <h4>Employers</h4>

            <ul>
              <li><Link to="/">Post a Job</Link></li>
              <li><Link to="/">Browse Candidates</Link></li>
              <li><Link to="/">Pricing</Link></li>
              <li><Link to="/">Hiring Solutions</Link></li>
            </ul>

          </div>


          {/* Company */}

          <div>

            <h4>Company</h4>

            <ul>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms</Link></li>
            </ul>

          </div>

        </div>


        {/* Newsletter */}

        <div className="newsletter">

          <div>

            <h4>Stay updated</h4>

            <p>Get the latest jobs and career tips in your inbox.</p>

          </div>

          <div className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>Subscribe</button>

          </div>

        </div>


        {/* Bottom */}

        <div className="footer-bottom">

          <p>© 2026 JobNest. All rights reserved.</p>

          <div>
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
            <Link to="/">Cookies</Link>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;