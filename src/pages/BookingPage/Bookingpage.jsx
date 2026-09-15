import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import "./BookingPage.css";

function BookingPage({
  availableTimes,
  onDateChange,
  submitForm,
}) {
  return (
    <section className="booking-page">
      <div className="booking-page-container">
        <h1 className="booking-page-title">
          Reserve a Table
        </h1>

        <BookingForm
          availableTimes={availableTimes}
          onDateChange={onDateChange}
          submitForm={submitForm}
        />
      </div>
    </section>
  );
}

export default BookingPage;