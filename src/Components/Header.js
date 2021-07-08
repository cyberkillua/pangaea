import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-logo__container">
          <img src={Logo} alt="logo" className="nav__logo" />
        </div>
        <ul>
          <li>Shop</li>
          <li>Help</li>
          <li>Blog</li>
        </ul>
        <div className="nav__acoount">
          <p>Account</p>
          
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">
              Coconut
            </option>
            <option value="mango">Mango</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;
