import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// TODO: add overlapping images in aboutus section and work on //!responsiveness
// TODO: add Routes for different pages

//  get brower router to work

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Testimonials />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
