import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import SelectCurrency from "./SelectCurrency";
import CurrencyFormat from "react-currency-format";

const Sidebar = ({ open, setOpen }) => {
  const { cartItems, increaseItem, decreaseItem, removeItem } =
    useContext(CartContext);
  const subtotal = cartItems.reduce((acc, cv) => {
    acc = acc + cv.price * cv.quantity;
    return acc;
  }, 0);

  return (
    <section className="container__side-bar">
      <div className="background-blur"></div>
      <section className="side-bar">
        <div className="side-bar__heading">
          <ion-icon
            name="chevron-forward-outline"
            className="side-bar__back-icon"
            onClick={() => setOpen(!open)}
          ></ion-icon>
          <p className="heading-text">Your Cart</p>
        </div>
        <div className="currency-select">
          <SelectCurrency />
        </div>
        <div className="cart-items">
          {cartItems.length === 0
            ? <p className="empty-cart">There are no items in your cart.</p>
            : cartItems.map((item, key) => (
                <div className="cart-items-list" key={key}>
                  <div className="cart-items-list__title">
                    <div className="title"> {item.title}</div>
                    <div className="cart-items-list__price">
                      <div className="quantity">
                        <span onClick={() => decreaseItem(item)}>-</span>
                        <span>{item.quantity}</span>
                        <span onClick={() => increaseItem(item)}>+</span>
                      </div>
                      <CurrencyFormat
                        value={item.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"NGN"}
                      />
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
            <CurrencyFormat
              value={subtotal}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"NGN"}
            />
          </p>
        </section>
      </section>
    </section>
  );
};

export default Sidebar;
