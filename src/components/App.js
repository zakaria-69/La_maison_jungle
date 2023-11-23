import { useState, useEffect } from "react";
import Banner from "./Banner";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo_leaf.png";
import Footer from "./Footer";
import Cart from "./Cart";
import "../styles/Layout.css";

function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <div>
        <Banner>
          <img
            src={logo}
            alt="la maison jungle logo de feuille"
            className="lmj-logo"
          ></img>
          <h1 className="lmj-title">La maison jungle</h1>
        </Banner>
        <div className="lmj-layout-inner">
          <Cart cart={cart} setCart={setCart} />
          <ShoppingList cart={cart} setCart={setCart} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
