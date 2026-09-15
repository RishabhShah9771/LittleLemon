import { useState } from "react";

import "./BookingForm.css";

export function validateDate(date, today) {
  return date !== "" && date >= today;
}

export function validateTime(time, availableTimes) {
  return (
    time !== "" &&
    availableTimes.includes(time)
  );
}

export function validateGuests(guests) {
  return guests >= 1 && guests <= 10;
}

export function validateOccasion(occasion) {
  return occasion !== "";
}

function BookingForm({
  availableTimes,
  onDateChange,
  submitForm,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [bookingData] = useState(() => {
    const savedBookings =
      localStorage.getItem("bookingData");

    return savedBookings
      ? JSON.parse(savedBookings)
      : [];
  });

  const today = new Date();

  today.setMinutes(
    today.getMinutes() -
      today.getTimezoneOffset()
  );

  const todayString = today
    .toISOString()
    .split("T")[0];

  const isDateValid = validateDate(
    date,
    todayString
  );

  const isTimeValid = validateTime(
    time,
    availableTimes
  );

  const isGuestsValid =
    validateGuests(guests);

  const isOccasionValid =
    validateOccasion(occasion);

  const isFormValid =
    isDateValid &&
    isTimeValid &&
    isGuestsValid &&
    isOccasionValid;

  const handleDateChange = (event) => {
    const selectedDate =
      event.target.value;

    setDate(selectedDate);
    setTime("");

    onDateChange(selectedDate);
  };

  const handleGuestsChange = (event) => {
    setGuests(
      Number(event.target.value)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    submitForm(formData);
  };

  return (
    <div className="booking-content">
      <form
        className="booking-form"
        onSubmit={handleSubmit}
        aria-label="On Click"
      >
        <div className="booking-field">
          <label htmlFor="res-date">
            Choose date
          </label>

          <input
            type="date"
            id="res-date"
            value={date}
            min={todayString}
            onChange={handleDateChange}
            required
            aria-required="true"
            aria-invalid={
              date !== "" && !isDateValid
            }
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
            aria-required="true"
            aria-invalid={
              time !== "" && !isTimeValid
            }
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
            min="1"
            max="10"
            step="1"
            value={guests}
            onChange={handleGuestsChange}
            required
            aria-required="true"
            aria-invalid={!isGuestsValid}
            aria-describedby={
              !isGuestsValid
                ? "guests-error"
                : undefined
            }
          />

          {!isGuestsValid && (
            <p
              id="guests-error"
              className="booking-error"
              role="alert"
            >
              Guests must be between 1 and 10.
            </p>
          )}
        </div>

        <div className="booking-field">
          <label htmlFor="occasion">
            Occasion
          </label>

          <select
            id="occasion"
            value={occasion}
            onChange={(event) =>
              setOccasion(
                event.target.value
              )
            }
            required
            aria-required="true"
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
          disabled={!isFormValid}
        >
          Make Your Reservation
        </button>
      </form>

      {bookingData.length > 0 && (
        <section
          className="booking-table-container"
          aria-labelledby="reservations-heading"
        >
          <h2 id="reservations-heading">
            Your Reservations
          </h2>

          <div className="booking-table-wrapper">
            <table className="booking-table">
              <caption className="sr-only">
                Your booked table reservations
              </caption>

              <thead>
                <tr>
                  <th scope="col">
                    Date
                  </th>
                  <th scope="col">
                    Time
                  </th>
                  <th scope="col">
                    Guests
                  </th>
                  <th scope="col">
                    Occasion
                  </th>
                </tr>
              </thead>

              <tbody>
                {bookingData.map(
                  (booking, index) => (
                    <tr
                      key={`${booking.date}-${booking.time}-${index}`}
                    >
                      <td>
                        {booking.date}
                      </td>

                      <td>
                        {booking.time}
                      </td>

                      <td>
                        {booking.guests}
                      </td>

                      <td>
                        {booking.occasion ||
                          "None"}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

export default BookingForm;