import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import BookingPage from "../pages/Bookingpage.jsx";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route
          path="/about"
          element={
            <section className="page">
              <h1>About</h1>
              <p>Learn more about Little Lemon.</p>
            </section>
          }
        />

        <Route
          path="/menu"
          element={
            <section className="page">
              <h1>Menu</h1>
              <p>Explore the Little Lemon menu.</p>
            </section>
          }
        />

        <Route path="/booking" element={<BookingPage />} />

        <Route
          path="/order-online"
          element={
            <section className="page">
              <h1>Order Online</h1>
              <p>Online ordering is coming soon.</p>
            </section>
          }
        />

        <Route
          path="/login"
          element={
            <section className="page">
              <h1>Login</h1>
              <p>Account access is coming soon.</p>
            </section>
          }
        />
      </Routes>
    </main>
  );
}

export default Main;