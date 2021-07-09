const Sidebar = ({ open, setOpen }) => {
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
      </section>
    </section>
  );
};

export default Sidebar;
