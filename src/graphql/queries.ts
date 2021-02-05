import { gql } from 'graphql-request';

export const FETCH_ALL_TEAS = gql`query teas {
  teas {
    id
    name,
    wouldBuyAgain,
    price,
    origin,
    vendor,
    urlBought,
    vendorDescription,
    comment
  }
}`;

export const ADD_TEA = gql`mutation createTea(
    $name: String!, 
    $wouldBuyAgain: Boolean!,
    $price: Float!, 
    $origin: String!
    $vendor: String!, 
    $urlBought: String!
    $vendorDescription: String!, 
    $comment: String!
  ) {
  createTea(
    name: $name,
    wouldBuyAgain: $wouldBuyAgain,
    price: $price,
    origin: $origin,
    vendor: $vendor,
    urlBought: $urlBought,
    vendorDescription: $vendorDescription,
    comment: $comment,
  ) {
    tea {
      id
      name,
      wouldBuyAgain,
      price,
      origin,
      vendor,
      urlBought,
      vendorDescription,
      comment
    }
  }
}`;
