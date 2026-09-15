import BookingForm from "../../components/BookingForm/BookingForm.jsx";

import "./BookingPage.css";
function BookingPage({
  availableTimes,
  onDateChange,
}) {
  return (
    <section className="booking-page">
      <h1>Reserve a Table</h1>

      <BookingForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
      />
    </section>
  );
}

export default BookingPage;