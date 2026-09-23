import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import AuthButtons from "./AuthButtons";


function Navbar() {
  return (
    <nav className="main-navbar">
      <div className="container">

        <div className="navbar-wrapper">

          <Logo />

          <div className="navbar-content">
            <NavLinks />
            <SearchBox />
            <AuthButtons />
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;