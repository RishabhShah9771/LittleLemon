import { useReducer } from "react";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Homepage from "../../pages/HomePage/Homepage.jsx";
import BookingPage from "../../pages/BookingPage/Bookingpage.jsx";
import AboutPage from "../../pages/AboutPage/AboutPage.jsx";
import ConfirmedBooking from "../../pages/ConfirmBookingPage/ConfirmedBooking.jsx";

export function initializeTimes() {
  const today = new Date();

  return window.fetchAPI(today);
}

export function updateTimes(state, action) {
  if (action.type === "DATE_CHANGE") {
    const selectedDate = new Date(
      `${action.date}T00:00:00`
    );

    return window.fetchAPI(selectedDate);
  }

  return state;
}

function Main() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const handleDateChange = (selectedDate) => {
    dispatch({
      type: "DATE_CHANGE",
      date: selectedDate,
    });
  };

  const submitForm = (formData) => {
    const success = window.submitAPI(formData);

    if (success) {
      const savedBookings =
        JSON.parse(
          localStorage.getItem("bookingData")
        ) || [];

      const updatedBookings = [
        ...savedBookings,
        formData,
      ];

      localStorage.setItem(
        "bookingData",
        JSON.stringify(updatedBookings)
      );

      navigate("/confirmed");
    }

    return success;
  };

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              onDateChange={handleDateChange}
              submitForm={submitForm}
            />
          }
        />

        <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
        />
      </Routes>
    </main>
  );
}

export default Main;