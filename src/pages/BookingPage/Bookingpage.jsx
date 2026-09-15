import BookingForm from "../../components/BookingForm/BookingForm.jsx";

import "./BookingPage.css";

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking-page">
      <header className="booking-header">
        <h1>Reserve a Table</h1>

        <p>
          Select your preferred date, time, number of guests and
          occasion to make your reservation.
        </p>
      </header>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </section>
  );
}

export default BookingPage;