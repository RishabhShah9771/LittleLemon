import { Route, Routes } from "react-router-dom";
import {useReducer} from "react";

import Homepage from "../../pages/HomePage/Homepage.jsx";
import BookingPage from "../../pages/BookingPage/Bookingpage.jsx";
import AboutPage from "../../pages/AboutPage/AboutPage.jsx";

export function initializeTimes() {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
}

export function updateTimes(state, action) {
  console.log("Selected date:", action?.date);

  // For now, return the existing available times.
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route
          path="/about"
          element={<AboutPage />}
        />


        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />

       
      </Routes>
    </main>
  );
}

export default Main;