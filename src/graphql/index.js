const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const { ApolloServer } = require("apollo-server-express");

// Type definitions on GraphQL
const typeDefs = `
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => "Hello World"
    }
};

const useGraphQL = async (app) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        playground: true,
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground()]
    });

    await server.start();
    server.applyMiddleware({ app });
};

module.exports = useGraphQL;