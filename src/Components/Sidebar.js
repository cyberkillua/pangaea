import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import SelectCurrency from "./SelectCurrency";

const Sidebar = ({ open, setOpen }) => {
  const { cartItems, increaseItem, decreaseItem, removeItem } =
    useContext(CartContext);

  return (
    <section className="container__side-bar">
      <div className="background-blur"></div>
      <section className="side-bar">
        <div className="side-bar__heading">
          <ion-icon
            name="chevron-forward-circle-outline"
            className="side-bar__back-icon"
            onClick={() => setOpen(!open)}
          ></ion-icon>
          Your Cart
        </div>
        <div className="currency-select">
          <SelectCurrency />
        </div>
        <div className="cart-items">
          {cartItems.map((item, key) => (
            <div className="cart-items-list" key={key}>
              <div className="cart-items-list__title">
                <div className="title"> {item.title}</div>
                <div className="cart-items-list__price">
                  <div className="quantity">
                    <span onClick={() => decreaseItem(item.id)}>-</span>
                    <span>{item.quantity}</span>
                    <span onClick={() => increaseItem(item)}>+</span>
                  </div>
                  NGN {item.price}
                </div>
              </div>

              <div className="cart-items-list__image">
                <img src={item.image_url} alt="product" />
              </div>
              <ion-icon
                name="close"
                className="close"
                onClick={() => removeItem(item.id)}
              ></ion-icon>
            </div>
          ))}
        </div>

        <section className="sub-total">
          <p>subtotal</p>
          <p>
            NGN{" "}
            {cartItems.reduce((acc, cv) => {
              acc = acc + cv.price * cv.quantity;
              return acc;
            }, 0)}
          </p>
        </section>
      </section>
    </section>
  );
};

export default Sidebar;
