import React from "react";
import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

function CareScale({ scaleValue, careType, onClick }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  const handleClick = () => {
    if (onClick) {
      onClick(careType); // Appel de la fonction onClick avec le type de careScale
    }
  };

  return (
    <div onClick={handleClick}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
