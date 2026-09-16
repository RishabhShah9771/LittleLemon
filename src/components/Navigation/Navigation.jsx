import {
  Link,
  useNavigate,
} from "react-router-dom";

import "./Navigation.css";

function Nav({
  isLoggedIn,
  onLogout,
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();

    navigate("/login");
  };

  return (
    <nav
      className="main-navigation"
      aria-label="Main navigation"
    >
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about">
            About
          </Link>
        </li>

        <li>
          <Link to="/menu">
            Menu
          </Link>
        </li>

        <li>
          <Link to="/booking">
            Reservations
          </Link>
        </li>

        <li>
          <Link to="/order-online">
            Order Online
          </Link>
        </li>

        <li>
          {isLoggedIn ? (
            <button
              type="button"
              className="nav-logout"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;