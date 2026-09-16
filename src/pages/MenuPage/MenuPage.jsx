import greekSalad from "../../assets/images/greekSalad.jpg";
import bruschetta from "../../assets/images/bruchetta.svg";
import lemonDessert from "../../assets/images/lemonDessert.jpg";

import "./MenuPage.css";

const menuItems = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    image: greekSalad,
    description:
      "Crispy lettuce, peppers, olives and feta cheese with garlic and rosemary croutons.",
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$5.99",
    image: bruschetta,
    description:
      "Grilled bread with garlic, olive oil and fresh Mediterranean ingredients.",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.00",
    image: lemonDessert,
    description:
      "Our traditional lemon dessert made from a family recipe.",
  },
];

function MenuPage() {
  return (
    <section className="menu-page">
      <div className="menu-page-container">
        <div className="menu-page-heading">
          <h1>Our Menu</h1>

          <p>
            Discover some of our fresh Mediterranean dishes.
          </p>
        </div>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <article
              className="menu-card"
              key={item.id}
            >
              <img
                className="menu-card-image"
                src={item.image}
                alt={item.name}
              />

              <div className="menu-card-content">
                <div className="menu-card-heading">
                  <h2>{item.name}</h2>

                  <span>{item.price}</span>
                </div>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuPage;