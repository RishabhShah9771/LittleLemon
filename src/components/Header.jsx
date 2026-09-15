import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.svg";

function Header() {
  return (
    <header className="site-header">
      <Link to="/" aria-label="Little Lemon Home">
        <img
          className="header-logo"
          src={logo}
          alt="Little Lemon"
        />
      </Link>
    </header>
  );
}

export default Header;