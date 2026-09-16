import {
  useReducer
} from "react";

import {
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Homepage from "../../pages/HomePage/Homepage.jsx";
import BookingPage from "../../pages/BookingPage/Bookingpage.jsx";
import AboutPage from "../../pages/AboutPage/AboutPage.jsx";
import ConfirmedBooking from "../../pages/ConfirmBookingPage/ConfirmedBooking.jsx";
import MenuPage from "../../pages/MenuPage/MenuPage.jsx";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import OrderOnlinePage from "../../pages/OrderOnlinePage/OrderOnlinePage.jsx";


export function initializeTimes() {
  return window.fetchAPI(new Date());
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


function Main({
  isLoggedIn,
  setIsLoggedIn,
}) {
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


  const handleLogin = () => {
    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    setIsLoggedIn(true);

    navigate("/booking");
  };


  const submitForm = (formData) => {
    if (!isLoggedIn) {
      navigate("/login");

      return false;
    }

    const success =
      window.submitAPI(formData);

    if (success) {
      const savedBookings =
        JSON.parse(
          localStorage.getItem(
            "bookingData"
          )
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
          path="/menu"
          element={<MenuPage />}
        />


        <Route
          path="/order-online"
          element={<OrderOnlinePage />}
        />


        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate
                to="/booking"
                replace
              />
            ) : (
              <LoginPage
                onLogin={handleLogin}
              />
            )
          }
        />


            <Route
                 path="/booking"
                 element={
                     <BookingPage
                          availableTimes={availableTimes}
                          onDateChange={handleDateChange}
                          submitForm={submitForm}
                          isLoggedIn={isLoggedIn}
                        />
  }               
/>


        <Route
          path="/confirmed"
          element={
            isLoggedIn ? (
              <ConfirmedBooking />
            ) : (
              <Navigate
                to="/login"
                replace
              />
            )
          }
        />

      </Routes>
    </main>
  );
}


export default Main;