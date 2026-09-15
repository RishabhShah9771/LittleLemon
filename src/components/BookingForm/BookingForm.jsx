import { useState } from "react";

import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;

    setDate(selectedDate);

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate,
    });

    /*
      Reset the selected time because available
      booking times may change when the date changes.
    */
    setTime("");
  };

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