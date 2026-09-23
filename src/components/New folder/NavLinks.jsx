import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <ul className="navbar-nav">

      <li>
        <Link className="custom-link" to="/">
          Find Jobs
        </Link>
      </li>

      <li>
        <Link className="custom-link" to="/companies">
          Companies
        </Link>
      </li>

      <li>
        <Link className="custom-link" to="/career">
          Career Hub
        </Link>
      </li>

      <li>
        <Link className="custom-link" to="/about">
          About Us
        </Link>
      </li>

    </ul>
  );
}

export default NavLinks;