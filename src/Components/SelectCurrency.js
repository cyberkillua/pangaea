import { useEffect, useContext } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_CUR } from "../GraphQL/Queries";
import CartContext from "../context/cart/CartContext";

const SelectCurrency = () => {
  const [getNewPrice, { loading, data }] = useLazyQuery(GET_CUR);
  const { addProduct, updatedProduct } = useContext(CartContext);
  const getCurr = (e) => {
    console.log(e.target.value);
    getNewPrice({
      variables: { currency: e.target.value },
    });
    console.log(data);

    if (data) {
      addProduct(data);
    }
  };

  // useEffect(() => {
  //   console.log("here");
  //   getNewPrice({ variables: { currency: "NGN" } });
  // }, [getNewPrice]);
  if (loading) return <p>Loading ...</p>;
  console.log(data);

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
