function Footer() {
  return (
    <footer>
      <img
        src="/logo.png"
        alt="Little Lemon"
        width="150"
      />

      <nav aria-label="Footer navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order-online">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>

      <section aria-labelledby="contact-title">
        <h2 id="contact-title">Contact Us</h2>
        <address>
          Little Lemon
          <br />
          Chicago, Illinois
        </address>
      </section>

      <p>
        &copy; {new Date().getFullYear()} Little Lemon.
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;