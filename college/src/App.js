import React from "react";
import "./App.css";
import About from "./components/About/About";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import Company from "./components/Company/Company";
import Courses from "./components/Courses/Courses";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import FreeCourses from "./components/FreeCourses/FreeCourses";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NewsLetter from "./components/NewsLetter/NewsLetter";
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Company />
      <About />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourses />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
