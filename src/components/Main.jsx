function Main() {
  return (
    <main>
      <section id="home" aria-labelledby="home-title">
        <h1 id="home-title">Little Lemon</h1>
        <p>Welcome to Little Lemon in Chicago.</p>
        <a href="#reservations">Reserve a Table</a>
      </section>

      <section id="about" aria-labelledby="about-title">
        <h2 id="about-title">About Us</h2>
        <p>
          We are a family-owned Mediterranean restaurant
          focused on traditional recipes served with a modern twist.
        </p>
      </section>

      <section id="menu" aria-labelledby="menu-title">
        <h2 id="menu-title">Our Menu</h2>
        <p>Our dishes and weekly specials will appear here.</p>
      </section>

      <section id="reservations" aria-labelledby="reservations-title">
        <h2 id="reservations-title">Reserve a Table</h2>
        <p>Our reservation form is coming soon.</p>
      </section>

      <section id="order-online" aria-labelledby="order-title">
        <h2 id="order-title">Order Online</h2>
        <p>Online ordering is coming soon.</p>
      </section>

      <section id="login" aria-labelledby="login-title">
        <h2 id="login-title">Login</h2>
        <p>Account access is coming soon.</p>
      </section>
    </main>
  );
}

export default Main;