import { useEffect, useContext } from "react";
import { useLazyQuery } from "@apollo/client";
import {  GET_CUR } from "../GraphQL/Queries";
import CartContext from "../context/cart/CartContext";
import CurrencyFormat from "react-currency-format";

const Product = ({ open, setOpen }) => {
  const [getProduct, { loading, data }] = useLazyQuery(GET_CUR);
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    getProduct({ variables: { currency: "NGN" } });
  }, [getProduct]);

  const addItToCart = (item) => {
    setOpen(!open);
    addToCart(item);
  };
  if (loading) return <p>Loading ...</p>;
  return (
    <section className="product">
      <div className="product-container">
        {data
          ? data.products.map((item, key) => (
              <div className="product-1" key={item.id}>
                <img
                  src={item.image_url}
                  alt="product"
                  className="product-1__img"
                />

                <p className="product-1__title">{item.title}</p>
                <p className="product-1__price">
                  <CurrencyFormat
                    value={item.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"NGN"}
                  />
                </p>
                <div className="product-1__btn">
                  <button
                    className="btn btn-width"
                    onClick={() => addItToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          : ""}
      </div>
    </section>
  );
};

export default Product;
