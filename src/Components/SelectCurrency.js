import { useContext, useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_CUR } from "../GraphQL/Queries";
import CartContext from "../context/cart/CartContext";

const SelectCurrency = (props) => {
  // const [value, setValue] = useState(props);
  console.log(props.value);
  const [getNewPrice, { loading, data, error }] = useLazyQuery(GET_CUR, {
    variables: { currency: props.value },
  });

  const { addProduct, updatedProduct } = useContext(CartContext);

  const getCurr = (e) => {
    props.setValue(e.target.value);
    getNewPrice();
    console.log(data);
  };

  useEffect(() => {
    if (data) {
      addProduct(data);
    }
  }, [data]);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error found</p>;
  if (data) {
    console.log(data);
    // addProduct(data);
  }

  return (
    <div>
      <select value={props.value} onChange={getCurr} name="currency">
        {updatedProduct.currency
          ? updatedProduct.currency.map((item, key) => (
              <option value={item} key={key}>
                {item}
              </option>
            ))
          : ""}
      </select>
    </div>
  );
};

export default SelectCurrency;
