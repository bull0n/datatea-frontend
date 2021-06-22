import { gql } from 'graphql-request';

export const FETCH_ALL_TEAS = gql`query teas($status: Status) {
  teas(status: $status) {
    id
    name
    category
    categoryLabel
    wouldBuyAgain
    price
    origin
    vendor
    urlBought
    vendorDescription
    comment
    status
  }
}`;

export const FETCH_ONE_TEA = gql`query tea($id: Int) {
  tea(id: $id) {
    id
    name
    category
    categoryLabel
    wouldBuyAgain
    price
    origin
    vendor
    urlBought
    vendorDescription
    comment
    status
  }
}`;

export const ADD_TEA = gql`mutation createTea(
    $name: String!
    $wouldBuyAgain: Boolean!
    $price: Float!
    $origin: String!
    $vendor: String!
    $urlBought: String!
    $vendorDescription: String!
    $comment: String!
    $category: Category!
  ) {
  createTea(
    name: $name,
    wouldBuyAgain: $wouldBuyAgain,
    category: $category,
    price: $price,
    origin: $origin,
    vendor: $vendor,
    urlBought: $urlBought,
    vendorDescription: $vendorDescription,
    comment: $comment,
  ) {
    tea {
      id
      name
      wouldBuyAgain
      price
      origin
      vendor
      urlBought
      vendorDescription
      comment
    }
  }
}`;

export const UPDATE_TEA_STATUS = gql`mutation updateTeaStatus(
  $id: Int!
  $status: Status!
){
  updateTeaStatus(id: $id,
    status: $status,
  ) {
      ok
  }
}`;
