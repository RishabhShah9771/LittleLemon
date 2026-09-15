import { Link } from "react-router-dom";
import restaurantFood from "../assets/images/restaurantfood.jpg";

function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            We are a family-owned Mediterranean restaurant focused on
            traditional recipes served with a modern twist.
          </p>

          <Link to="/booking" className="primary-button">
            Reserve a Table
          </Link>
        </div>

        <div className="hero-image-wrapper">
          <img
            className="hero-image"
            src={restaurantFood}
            alt="Mediterranean food served at Little Lemon"
          />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;