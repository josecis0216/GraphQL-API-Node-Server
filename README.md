##Prisma as your data modeling tool
[context.js](https://github.com/josecis0216/GraphQL-API-Node-Server/blob/master/src/context.js)
##Docker-based PostgreSQL, MySQL, or MongoDB as your data store
[server.js](https://github.com/josecis0216/GraphQL-API-Node-Server/blob/master/src/server.js)
##At least 3 Query resolvers to get data from your server
[mutation.js](https://github.com/josecis0216/GraphQL-API-Node-Server/blob/master/src/mutation.js)
##At least 2 Mutation resolvers allowing users to create, update, or upsert an item.
[mutation.js](https://github.com/josecis0216/GraphQL-API-Node-Server/blob/master/src/mutation.js)
##At least 1 Mutation resolver allowing users to delete an item.
[mutation.js](https://github.com/josecis0216/GraphQL-API-Node-Server/blob/master/src/mutation.js)
##Your datastore will contain at least 25 items
[players.json](https://github.com/josecis0216/GraphQL-API-Node-Server/blob/master/prisma/example_files/players.json)
##Your app will be deployable locally using Docker and will have seed data entered into the datastore.
[seed.js](https://github.com/josecis0216/GraphQL-API-Node-Server/blob/master/prisma/seed.js)
##All of your source code will be properly uploaded to GitHub
[Github](https://github.com/josecis0216/GraphQL-API-Node-Server)
##Your ReadMe file will accurately describe your server install and run process and how to use the APIs
1. npm run launchDocker
gets the docker container built
2. npm run createDB
creates the database with local json file
3. npm run seed
runs the seed file containing code to link prisma to db
4. npm run dev
gets the nexus data store running
5. npm start
starts the graphql playground to run queries