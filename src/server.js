import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'
import * as dotenv from 'dotenv'

dotenv.config()

new ApolloServer({ schema, context: createContext }).listen({ port: process.env.GRAPHQL_SERVER_PORT || 8080 },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:${process.env.GRAPHQL_SERVER_PORT}\n⭐️ See sample queries: http://pris.ly/e/js/graphql-sdl-first#3-using-the-graphql-api`,
    ),
)
