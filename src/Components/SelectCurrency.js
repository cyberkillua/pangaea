import { useState, useEffect } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { LOAD_CUR } from "../GraphQL/Queries";

const SelectCurrency = () => {
  //   const [products, { loading }] = useLazyQuery(LOAD_CUR_AND_PROD);
  const [currency, setCurrency] = useState([]);
  const { data, loading } = useQuery(LOAD_CUR);

  const getCurr = (e) => {
    console.log(e.target.value);
    // onClick=
    // products({ variables: { currency: e.target.value } });
  };

  useEffect(() => {
    if (data) {
      setCurrency(data.currency);
      // console.log(data)
    }
  }, [data]);
  if (loading) return <p>Loading ...</p>;
  return (
    <div>
      <select onChange={getCurr}>
        {currency.map((item, key) => (
          <option value={item.currency} key={key}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCurrency;
