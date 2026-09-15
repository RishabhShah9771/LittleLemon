import "./ConfirmedBooking.css";

function ConfirmedBooking() {
  return (
    <section className="confirmed-booking-page">
      <div className="confirmed-booking-card">
        <div className="confirmed-booking-icon">
          ✓
        </div>

        <h1>Booking Confirmed!</h1>

        <p>
          Your table reservation has been successfully confirmed.
        </p>

        <p>
          We look forward to seeing you at Little Lemon.
        </p>
      </div>
    </section>
  );
}

export default ConfirmedBooking;