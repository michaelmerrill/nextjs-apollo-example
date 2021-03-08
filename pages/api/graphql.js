import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../apollo/schema'
import { dataSources } from '../../apollo/datasources'

export const apolloServer = new ApolloServer({ dataSources, schema })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
