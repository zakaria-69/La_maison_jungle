import React, { useState, useEffect } from "react";
import "../styles/Cart.css";

function Cart({ cart, setCart, activeCategory, setActiveCategory }) {
  const [isOpen, setIsOpen] = useState(true);

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  let euroSymbole = "€";
  useEffect(() => {
    document.title = `LMJ : ${total}${euroSymbole} d'achats`;
  }, [total, euroSymbole]);

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="ljm-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <h2>Panier</h2>
      <ul>
        {cart.map(({ name, price, amount }, index) => (
          <div key={`${name}-${index}`}>
            {name} {price}
            {euroSymbole} * {amount}
          </div>
        ))}
      </ul>
      <h3>
        Total : {total}
        {euroSymbole}
      </h3>
      <button onClick={() => setCart([])}>Vider le panier</button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le panier
      </button>
    </div>
  );
}

export default Cart;
