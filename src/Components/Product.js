import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_CUR_AND_PROD } from "../GraphQL/Queries";

const Product = () => {
  const { error, loading, data } = useQuery(LOAD_CUR_AND_PROD);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (data) {
      setProduct(data.products);
    }
  }, [data]);

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
              <button className="btn btn-width">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
