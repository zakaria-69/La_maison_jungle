import React, { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur(value) {
    if (!inputValue.includes("@")) {
      console.log(value);
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
    }
  }
  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passioné-e-s de plantes 🍃 🥬 🍂
      </div>
      <div className="lmj-footer-elem">
        <input
          type="text"
          name="footer_input"
          placeholder="Veuillez saisir vôtre Email"
          onChange={handleInput}
          value={inputValue}
          onBlur={handleBlur}
        />
        <button type="submit">Envoyer</button>
      </div>
    </footer>
  );
}

export default Footer;
