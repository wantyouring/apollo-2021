import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();
const link = new createHttpLink({
  uri: 'https://movieql2.vercel.app/',
});

const client = new ApolloClient({
  cache,
  link,
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
  },
});

export default client;
