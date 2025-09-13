const { loadFiles } = require("@graphql-tools/load-files");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const { ApolloServer } = require("apollo-server-express");

const resolvers = {
    Query: {
        hello: () => 'Hola mundo',
        getPerson: (_, args) => `Hello, my name is ${args.name}, I'm ${args.age} years old!`,
        getInt: (_, args) => args.age,
        getFloat: (_, args) => args.price,
        getString: () => 'palabra',
        getBoolean: () => true,
        getID: () => '121212',
        getNumbers: (_, args) => args.numbers,
    }
}

const useGraphQL = async (app) => {
    const server = new ApolloServer({
        typeDefs: await loadFiles("**/*.graphql"),
        resolvers,
        playground: true,
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground()]
    });

    await server.start();
    server.applyMiddleware({ app });
};

module.exports = useGraphQL;