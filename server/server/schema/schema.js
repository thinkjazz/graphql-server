const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const movieType = new  GraphQLObjectType({
    name: 'Movie',
    fields: ()=> ({})
})