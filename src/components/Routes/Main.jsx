import { Route, Routes } from "react-router-dom";

import Homepage from "../../pages/HomePage/Homepage.jsx";
import BookingPage from "../../pages/BookingPage/Bookingpage.jsx";
import AboutPage from "../../pages/AboutPage/AboutPage.jsx";


function Main() {
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
          element={<BookingPage />}
        />


      </Routes>
    </main>
  );
}

export default Main;