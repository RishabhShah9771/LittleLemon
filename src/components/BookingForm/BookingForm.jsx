import { useState } from "react";

import "./BookingForm.css";

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");

  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const bookingData = {
      date,
      time,
      guests,
      occasion,
    };

    console.log(
      "Reservation submitted:",
      bookingData
    );
  };

  return (
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
          onChange={(event) =>
            setDate(event.target.value)
          }
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
          {availableTimes.map(
            (availableTime) => (
              <option
                key={availableTime}
                value={availableTime}
              >
                {availableTime}
              </option>
            )
          )}
        </select>
      </div>

      <div className="booking-field">
        <label htmlFor="guests">
          Number of guests
        </label>

        <input
          type="number"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
          value={guests}
          onChange={(event) =>
            setGuests(event.target.value)
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
          <option value="Birthday">
            Birthday
          </option>

          <option value="Anniversary">
            Anniversary
          </option>
        </select>
      </div>

      <input
        className="booking-submit"
        type="submit"
        value="Make Your Reservation"
      />
    </form>
  );
}

export default BookingForm;