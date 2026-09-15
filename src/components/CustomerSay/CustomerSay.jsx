import "./CustomerSay.css";

const testimonials = [
  {
    name: "Sarah",
    rating: 5,
    review: "Amazing food and excellent service!",
  },
  {
    name: "Michael",
    rating: 5,
    review: "One of my favorite restaurants in Chicago.",
  },
  {
    name: "Emily",
    rating: 4,
    review: "Fresh food and a welcoming atmosphere.",
  },
  {
    name: "David",
    rating: 5,
    review:
      "The food was delicious and the service was excellent.",
  },
];

function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="testimonial-grid">
        {testimonials.map((customer) => (
          <article
            className="testimonial-card"
            key={customer.name}
          >
            <div
              className="rating"
              aria-label={`${customer.rating} out of 5 stars`}
            >
              {"★".repeat(customer.rating)}
            </div>

            <h3>{customer.name}</h3>

            <p>{customer.review}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;