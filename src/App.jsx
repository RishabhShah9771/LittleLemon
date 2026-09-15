import "./App.css";

import Header from "./components/Header/Header.jsx";
import Nav from "./components/Navigation/Navigation.jsx";
import Main from "./components/Routes/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="app">
      <div className="top-navigation">
        <Header />
        <Nav />
      </div>

      <Main />

      <Footer />
    </div>
  );
}

export default App;