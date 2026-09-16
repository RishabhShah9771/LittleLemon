import { Link } from "react-router-dom";

import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import "./BookingPage.css";

function BookingPage({
  availableTimes,
  onDateChange,
  submitForm,
  isLoggedIn,
}) {
  return (
    <section className="booking-page">
      <div className="booking-page-container">
        <h1 className="booking-page-title">
          Reserve a Table
        </h1>

        {isLoggedIn ? (
          <BookingForm
            availableTimes={availableTimes}
            onDateChange={onDateChange}
            submitForm={submitForm}
            isLoggedIn={isLoggedIn}
          />
        ) : (
          <div className="booking-login-message">
            <h2>Please login to reserve a table</h2>

            <p>
              You need to be logged in before making a reservation.
            </p>

            <Link
              to="/login"
              className="booking-login-button"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default BookingPage;