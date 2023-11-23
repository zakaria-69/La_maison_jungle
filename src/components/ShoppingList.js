import React, { useState } from "react";
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";
import Categories from "./Categories";

function ShoppingList({ cart, setCart }) {
  const [activeCategory, setActiveCategory] = useState("");
  //methode reduce comme dans l'exercice

  // const categories = plantList.reduce(
  //     (acc,plant) =>
  //     acc.includes(plant.category) ? acc : acc.concat(plant.category),
  //     []
  // )

  //methode forEach
  const categories = [];
  plantList.forEach((plant) => {
    if (!categories.includes(plant.category)) {
      categories.push(plant.category);
    }
  });

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      setCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      setCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
