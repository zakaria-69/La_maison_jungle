import React from "react";
import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem({ id, cover, name, light, water, price }) {
  const euroSymbole = "€";
  function handleWaterLightLvl() {
    if (water === 1 && light === 1) {
      alert("cette plante requiert peu d'eau et peu de lumière");
    } else if (water === 1 && light === 2) {
      alert("cette plante requiert peu d'eau et modérément de lumière");
    } else if (water === 1 && light === 3) {
      alert("cette plante requiert peu d'eau et beaucoup de lumière");
    } else if (water === 2 && light === 1) {
      alert("cette plante requiert modérément d'eau et peu de lumière");
    } else if (water === 2 && light === 2) {
      alert("cette plante requiert modérément d'eau et modérément de lumière");
    } else if (water === 2 && light === 3) {
      alert("cette plante requiert modérément d'eau et beaucoup de lumière");
    } else if (water === 3 && light === 1) {
      alert("cette plante requiert beaucoup d'eau et peu de lumière");
    } else if (water === 3 && light === 2) {
      alert("cette plante requiert beaucoup d'eau et modérément de lumière");
    } else if (water === 3 && light === 3) {
      alert("cette plante requiert beaucoup d'eau et beaucoup de lumière");
    } else {
      alert("pas de données d'eau et de lumière pour cette plante 😮");
    }
  }

  function handleCareScaleClick(careType) {
    if (careType === "light") {
      console.log("caretype light");
      alert(` cette plante necessite ${light} unité de type lumière.`);
    } else if (careType === "water") {
      console.log("caretype water");
      alert(` cette plante nécessite ${water} unité de type eau.`);
    }
  }

  return (
    <li key={id} className="lmj-plant-item">
      <span className="lmj-plant-item-price">
        {price}
        {euroSymbole}
      </span>
      <img
        className="lmj-plant-item-cover"
        src={cover}
        alt={`${name} cover`}
        onClick={handleWaterLightLvl}
      />
      {name}
      <div>
        <CareScale
          careType="water"
          scaleValue={water}
          onClick={() => handleCareScaleClick("water")}
        />
        <CareScale
          careType="light"
          scaleValue={light}
          onClick={() => handleCareScaleClick("light")}
        />
      </div>
    </li>
  );
}

export default PlantItem;
