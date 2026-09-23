import { Link } from "react-router-dom";

function AuthButtons() {
  return (
    <div className="d-flex align-items-center gap-2">

      <Link
        to="/employer"
        className="employer-btn"
      >
        For Employers
      </Link>

      <Link
        to="/login"
        className="login-btn"
      >
        Login
      </Link>

      <Link
        to="/signup"
        className="signup-btn"
      >
        Sign Up
      </Link>

    </div>
  );
}

export default AuthButtons;