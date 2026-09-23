import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="job-logo">
      <span>Job</span>Nest
    </Link>
  );
}

export default Logo;