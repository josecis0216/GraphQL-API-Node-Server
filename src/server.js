import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'
// import { mongoConnect } from './database'
import * as dotenv from 'dotenv'

dotenv.config()

new ApolloServer({ schema, context: createContext }).listen({ port: 4000 || 8080 },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:${4000}\n⭐️ See sample queries: http://pris.ly/e/js/graphql-sdl-first#3-using-the-graphql-api`,
    ),
)
