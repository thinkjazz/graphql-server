const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

let movies = [
    { id: '1', name: 'Pulp Fiction', genre: 'Crime'},
    { id: '2', name: 'Odyssey 2001', genre: 'Sci-Fi'},
    { id: 3, name: 'Matrix', genre: 'Sci-Fi-Thriller'},
    { id: 4, name: 'Gentlemen', genre: 'Crime-Comedy'},
];

const MovieType = new  GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    }),
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLString} },
            resolve(parent, args) {
                return movies.find(movie => (movie.id === args.id));
            }
        },
    }

});
    module.exports = new GraphQLSchema({
        query: Query,
    });