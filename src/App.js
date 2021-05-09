import React from "react";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import FoodItems from "./Food-Item";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <AboutMe />
      <h2 className="menu-title"> Menu </h2>
      {FoodItems.map((foodItem) => (
        <Menu
          key={foodItem.key}
          food_name={foodItem.food_name}
          food_description={foodItem.description}
          qr_image={foodItem.qr_image}
          image={foodItem.image}
        />
      ))}
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
