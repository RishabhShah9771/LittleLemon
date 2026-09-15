import "./App.css";
import Header from "./components/Header.jsx";
import Nav from "./components/Navigation.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="top-navigation">
        <Header />
        <Nav />
      </div>

      <Main />

      <Footer />
    </>
  );
}

export default App;