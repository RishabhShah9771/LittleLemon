import { useState } from "react";

import "./BookingForm.css";

function BookingForm({
  availableTimes,
  onDateChange,
  submitForm,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [bookingData, setBookingData] = useState([]);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;

    setDate(selectedDate);
    setTime("");

    onDateChange(selectedDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    const success = submitForm(formData);

    if (success) {
      setBookingData((previousBookings) => [
        ...previousBookings,
        formData,
      ]);
    }
  };

  return (
    <div className="booking-content">
      <form
        className="booking-form"
        onSubmit={handleSubmit}
      >
        <div className="booking-field">
          <label htmlFor="res-date">
            Choose date
          </label>

          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>

        <div className="booking-field">
          <label htmlFor="res-time">
            Choose time
          </label>

          <select
            id="res-time"
            value={time}
            onChange={(event) =>
              setTime(event.target.value)
            }
            required
          >
            <option value="">
              Select a time
            </option>

            {availableTimes.map((availableTime) => (
              <option
                key={availableTime}
                value={availableTime}
              >
                {availableTime}
              </option>
            ))}
          </select>
        </div>

        <div className="booking-field">
          <label htmlFor="guests">
            Number of guests
          </label>

          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(event) =>
              setGuests(Number(event.target.value))
            }
            required
          />
        </div>

        <div className="booking-field">
          <label htmlFor="occasion">
            Occasion
          </label>

          <select
            id="occasion"
            value={occasion}
            onChange={(event) =>
              setOccasion(event.target.value)
            }
          >
            <option value="">
              Select an occasion
            </option>

            <option value="Birthday">
              Birthday
            </option>

            <option value="Anniversary">
              Anniversary
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="booking-submit"
        >
          Make Your Reservation
        </button>
      </form>

      {bookingData.length > 0 && (
        <div className="booking-table-container">
          <h2>Your Reservations</h2>

          <div className="booking-table-wrapper">
            <table className="booking-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Guests</th>
                  <th>Occasion</th>
                </tr>
              </thead>

              <tbody>
                {bookingData.map((booking, index) => (
                  <tr
                    key={`${booking.date}-${booking.time}-${index}`}
                  >
                    <td>{booking.date}</td>

                    <td>{booking.time}</td>

                    <td>{booking.guests}</td>

                    <td>
                      {booking.occasion || "None"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingForm;