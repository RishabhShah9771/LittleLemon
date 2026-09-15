import BookingForm from "../../components/BookingForm/BookingForm.jsx";

import "./BookingPage.css";

function BookingPage() {
  return (
    <section className="booking-page">
      <header className="booking-header">
        <h1>Reserve a Table</h1>

        <p>
          Select your preferred date, time, number of guests and
          occasion to make your reservation.
        </p>
      </header>

      <BookingForm />
    </section>
  );
}

export default BookingPage;