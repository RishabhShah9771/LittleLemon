import marioAndAdrianA from "../../assets/images/Mario_and_Adrian_A.jpg";
import marioAndAdrianB from "../../assets/images/Mario_and_Adrian_B.jpg";

import "./Chicago.css";

function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-text">
        <h2>Little Lemon</h2>

        <h3>Chicago</h3>

        <p>
          Little Lemon is a charming neighborhood restaurant that serves
          simple food and classic cocktails in a lively but casual
          environment.
        </p>

        <p>
          The restaurant features a locally sourced menu with daily
          specials inspired by Mediterranean cuisine.
        </p>
      </div>

      <div className="chicago-images">
        <img
          className="chicago-image"
          src={marioAndAdrianA}
          alt="Mario and Adrian at Little Lemon"
        />

        <img
          className="chicago-image"
          src={marioAndAdrianB}
          alt="Little Lemon restaurant owners"
        />
      </div>
    </section>
  );
}

export default Chicago;