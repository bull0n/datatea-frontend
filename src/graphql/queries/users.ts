import { gql } from 'graphql-request';

export const LOGIN = gql`mutation login($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token,
    payload
  }
}`;

export const REFRESH_TOKEN = gql`mutation RefreshToken($token: String!) {
  refreshToken(token: $token) {
    token,
    payload
  }
}`;
