import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../../../bookstore-api/schemas/index';
import { resolvers } from '../../../bookstore-api/resolvers/index';
import { Op } from 'sequelize';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ Op })
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });