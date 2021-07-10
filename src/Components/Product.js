import { useEffect, useState, useContext } from "react";
import { useQuery} from "@apollo/client";
import { LOAD_CUR_AND_PROD } from "../GraphQL/Queries";
import CartContext from "../context/cart/CartContext";

const Product = ({ open, setOpen }) => {
  const { data } = useQuery(LOAD_CUR_AND_PROD);
  const [product, setProduct] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (data) {
      setProduct(data.products);
      console.log(data);
    }
  }, [data]);

  const addItToCart = (item) => {
    setOpen(!open);
    addToCart(item);
  };

  return (
    <section className="product">
      <div className="product-container">
        {product.map((item, key) => (
          <div className="product-1" key={item.id}>
            <img
              src={item.image_url}
              alt="product"
              className="product-1__img"
            />

            <p className="product-1__title">{item.title}</p>
            <p className="product-1__price">
              NGN {item.price.toLocaleString("en-US")}.00
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
        ))}
      </div>
    </section>
  );
};

export default Product;
