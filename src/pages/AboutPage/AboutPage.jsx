import Chicago from "../../components/Chicago/Chicago.jsx";

import "./AboutPage.css";

function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-page-header">
        <h1>About Little Lemon</h1>

        <p>
          Learn more about our restaurant,
          our story and our Mediterranean
          inspiration.
        </p>
      </div>

      <Chicago />
    </section>
  );
}

export default AboutPage;