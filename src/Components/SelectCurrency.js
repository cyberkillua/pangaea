import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_CUR } from "../GraphQL/Queries";

const SelectCurrency = () => {
  const [getNewPrice, { loading, data }] = useLazyQuery(GET_CUR);

  const getCurr = (e) => {
    console.log(e.target.value);
    getNewPrice({
      variables: { currency: e.target.value },
    });
  };

  useEffect(() => {
   
    getNewPrice({ variables: { currency: "NGN" } });
  }, [getNewPrice]);
  if (loading) return <p>Loading ...</p>;
  console.log(data);

  return (
    <div>
      <select onChange={getCurr}>
        {data
          ? data.currency.map((item, key) => (
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
