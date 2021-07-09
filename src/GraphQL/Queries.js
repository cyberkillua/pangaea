import {gql} from "@apollo/client"


export const LOAD_CUR_AND_PROD = gql`
    query {
        currency 
        products {
        id
        title
        image_url
        price (currency : NGN)
        }
    }
`