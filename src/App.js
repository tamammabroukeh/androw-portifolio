import "./App.css";
import { Contact } from "./Components/Contact/Contact";
import { Experience } from "./Components/Experience/Experience";
import { Footer } from "./Components/Footer/Footer";
import { Intro } from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import { Portifolio } from "./Components/Portifolio/Portifolio";
import Services from "./Components/Services/Services";
import { Testimonials } from "./Components/Testimonials/Testimonials";
import { Works } from "./Components/Works/Works";
import { useContext } from "react";
import { themeContext } from "./Context/Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portifolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
//Tamam124
