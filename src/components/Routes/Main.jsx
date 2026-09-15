import { useState } from "react";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Homepage from "../../pages/HomePage/Homepage.jsx";
import BookingPage from "../../pages/BookingPage/Bookingpage.jsx";
import AboutPage from "../../pages//AboutPage/AboutPage.jsx";
import ConfirmedBooking from "../../pages/ConfirmBookingPage/ConfirmedBooking.jsx";

import BookingTimesLoader from "../../components/FetchAPI/BookingTimesLoader.jsx";

function Main() {
  const [selectedDate, setSelectedDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = window.submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    }

    return success;
  };

  return (
    <main>
      <BookingTimesLoader
        selectedDate={selectedDate}
        setAvailableTimes={setAvailableTimes}
      />

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
              onDateChange={setSelectedDate}
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