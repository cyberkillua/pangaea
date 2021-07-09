import React, { useState } from "react";
import Navlist from "./Navlist";

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="hamburger-menu">
      <ion-icon name="menu-outline" onClick={() => setOpen(!open)}></ion-icon>
      {open && <Navlist />}
    </section>
  );
};

export default Burger;
