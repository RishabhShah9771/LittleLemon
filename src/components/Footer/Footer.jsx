import { Link } from "react-router-dom";

import logo from "../../assets/images/Logo.svg";

import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link
            to="/"
            aria-label="Little Lemon Home"
          >
            <img
              src={logo}
              alt="Little Lemon"
            />
          </Link>
        </div>

        <div className="footer-column">
          <h3>Navigation</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/menu">Menu</Link>
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
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <address>
            <p>2395 Maldove Way</p>

            <p>Chicago, Illinois</p>

            <p>
              <a href="tel:+16292436827">
                (629) 243-6827
              </a>
            </p>

            <p>
              <a href="mailto:info@littlelemon.com">
                info@littlelemon.com
              </a>
            </p>
          </address>
        </div>

        <div className="footer-column">
          <h3>Social Media</h3>

          <ul>
            <li>
              <a href="#facebook">
                Facebook
              </a>
            </li>

            <li>
              <a href="#instagram">
                Instagram
              </a>
            </li>

            <li>
              <a href="#twitter">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;