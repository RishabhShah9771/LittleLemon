import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./ConfirmedBooking.css";

function ConfirmedBooking() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/booking");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

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

        <p className="confirmed-redirect-message">
          Returning to your reservations...
        </p>
      </div>
    </section>
  );
}

export default ConfirmedBooking;