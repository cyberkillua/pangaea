import { useContext, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_CUR } from "../GraphQL/Queries";
import CartContext from "../context/cart/CartContext";

const SelectCurrency = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const [getNewPrice, { loading, data, error }] = useLazyQuery(GET_CUR, {
    variables: { currency: value },
  });

  const { addProduct, updatedProduct } = useContext(CartContext);

  const getCurr = (e) => {
    setValue(e.target.value);
    getNewPrice();
    // addProduct(data);
    console.log(data);
  };
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error found</p>;
  if (data) {
    console.log(data);
  }

  return (
    <div>
      <select onChange={getCurr} name="currency">
        {updatedProduct.currency
          ? updatedProduct.currency.map((item, key) => (
              <option value={item.currency} key={key}>
                {item}
              </option>
            ))
          : ""}
      </select>
    </div>
  );
};

export default SelectCurrency;
