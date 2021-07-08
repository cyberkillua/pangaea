import React from "react";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-logo__container">
          <img src={Logo} alt="logo" className="nav__logo" />
          <ul className="nav__list">
            <li>Shop</li>
            <li>Help</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="nav__account">
          <p>Account</p>
          <div className="nav__account--cart">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
          <select>
            <option value="FR">FR</option>
            <option value="AR">AR</option>
            <option selected value="EN">
              EN
            </option>
            <option value="ES">ES</option>
          </select>
        </div>
      </nav>
      <section className="header__second-section">
        <div className="header__second-section--text">
          <p className="header__second-section--text__big">All Products</p>
          <p className="header__second-section--text__small">A 360° look at Lumin</p>
        </div>
        <div className="header__second-section--filter">
          <select>
            <option selected value="#">
              Filter by
            </option>
            <option value="AR">All Products</option>
            <option value="EN">New Products</option>
            <option value="ES">Skin</option>
          </select>
        </div>
      </section>
    </header>
  );
};

export default Header;
