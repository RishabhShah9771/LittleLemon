import { useState } from "react";

import "./BookingForm.css";

function BookingForm({
  availableTimes,
  onDateChange,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;

    setDate(selectedDate);

    // Clear the previously selected time because
    // another date may have different available times.
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

    console.log("Booking data:", formData);
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
    >
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

      <button type="submit">
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;