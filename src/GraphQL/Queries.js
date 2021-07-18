import { gql } from "@apollo/client";

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
