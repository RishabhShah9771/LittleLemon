import {useState} from 'react'
import "./App.css";

import Header from "./components/Header/Header.jsx";
import Nav from "./components/Navigation/Navigation.jsx";
import Main from "./components/Routes/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="top-navigation">
        <Header />

        <Nav
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
      </div>

      <Main
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Footer />
    </>
  );
}

export default App;