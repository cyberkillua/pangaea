import { gql } from "@apollo/client";

export const LOAD_PROD = gql`
  query {
    products {
      id
      title
      image_url
      price(currency: NGN)
    }
  }
`;

export const LOAD_CUR = gql`
  query {
    currency
  }
`;

export const GET_CUR = gql`
  query Price($currency: String!) {
    price(currency: $currency) 
  }
`;

// (breed: $breed)
