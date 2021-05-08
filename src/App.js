import React from "react";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import FoodItems from "./Food-Item";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <AboutMe />
      {FoodItems.map((foodItem) => (
        <Menu
          key={foodItem.key}
          food_name={foodItem.food_name}
          food_description={foodItem.description}
          qr_image={foodItem.qr_image}
          image={foodItem.image}
        />
      ))}
    </div>
  );
}

export default App;
