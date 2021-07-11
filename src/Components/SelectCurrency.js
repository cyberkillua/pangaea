import { useState, useEffect } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_CUR, LOAD_CUR } from "../GraphQL/Queries";

const SelectCurrency = () => {
  const [getNewCurr, { loading }] = useLazyQuery(GET_CUR);
//   const [currencyy, setCurrency] = useState([]);
  const { data } = useQuery(LOAD_CUR);

  const getCurr = (e) => {
    console.log(e.target.value);
    getNewCurr({ variables: { currency: "USD" } });
  };

  
  //   if (loading) return <p>Loading ...</p>;
  return (
    <div>
      <select onChange={getCurr}>
        {data.currency.map((item, key) => (
          <option value={item.currency} key={key}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCurrency;
