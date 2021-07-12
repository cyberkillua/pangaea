import { gql } from "@apollo/client";

const NGN = "USD";

export const LOAD_PROD = gql`
  query {
    currency
    products {
      id
      title
      image_url
      price(currency: ${NGN})
    }
  }
`;



export const GET_CUR = gql`
  query Price($currency: Currency!) {
    currency
    products {
      id
      title
      image_url
      price(currency: $currency)
    }
  }
`;

// (breed: $breed)
