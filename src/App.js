import React from "react";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
//import FoodItem from "./Food-Item";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <AboutMe />
      <Menu />
    </div>
  );
}

export default App;
