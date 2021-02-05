import config from '@/config';
import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(config.URL_ENDPOINT, {
  mode: 'cors',
});

export default client;
