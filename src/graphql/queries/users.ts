import { gql } from 'graphql-request';

export const LOGIN = gql`mutation login($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
  }
}`;

export const TEST = '';
