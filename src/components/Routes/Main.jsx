import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Homepage from "../../pages/HomePage/Homepage.jsx";
import BookingPage from "../../pages/BookingPage/Bookingpage.jsx";
import AboutPage from "../../pages/AboutPage/AboutPage.jsx";
import BookingTimesLoader from "../FetchAPI/BookingTimesLoader.jsx"


function Main() {
  const [selectedDate, setSelectedDate] = useState("");

  const [availableTimes, setAvailableTimes] = useState(
    []
  );

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
            />
          }
        />

     
      </Routes>
    </main>
  );
}

export default Main;