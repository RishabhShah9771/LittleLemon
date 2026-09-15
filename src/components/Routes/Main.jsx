import { Route, Routes } from "react-router-dom";

import Homepage from "../../pages/HomePage/Homepage.jsx";
import BookingPage from "../../pages/BookingPage/Bookingpage.jsx";
import AboutPage from "../../pages/AboutPage/AboutPage.jsx";

/*
  Reducer function.

  For this exercise, it returns the same available
  times regardless of which date is selected.

  In a later exercise, this can be updated to return
  different times based on the selected date.
*/
export function updateTimes() {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
}

/*
  Creates the initial available booking times.
*/
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
          path="/menu"
          element={<MenuPage />}
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

        <Route
          path="/order-online"
          element={<OrderOnlinePage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />
      </Routes>
    </main>
  );
}

export default Main;