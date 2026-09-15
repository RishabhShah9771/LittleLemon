import greekSalad from "../../assets/images/greekSalad.jpg";
import bruschetta from "../../assets/images/bruchetta.svg";
import lemonDessert from "../../assets/images/lemonDessert.jpg";
import deliveryIcon from "../../assets/images/deliveryIcon.svg";

import "./Specials.css";

const specials = [
  {
    name: "Greek Salad",
    price: "$12.99",
    image: greekSalad,
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    name: "Bruschetta",
    price: "$5.99",
    image: bruschetta,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    image: lemonDessert,
    description:
      "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Specials() {
  return (
    <section className="specials">
      <div className="specials-heading">
        <h2>This Week&apos;s Specials!</h2>

        <button type="button">
          Online Menu
        </button>
      </div>

      <div className="specials-grid">
        {specials.map((special) => (
          <article
            className="special-card"
            key={special.name}
          >
            <img
              className="special-image"
              src={special.image}
              alt={special.name}
            />

            <div className="special-card-content">
              <div className="special-title">
                <h3>{special.name}</h3>
                <span>{special.price}</span>
              </div>

              <p>{special.description}</p>

              <div className="delivery-link">
                <strong>Order a delivery</strong>

                <img
                  src={deliveryIcon}
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;