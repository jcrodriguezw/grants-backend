const { ApolloServer } = require('apollo-server')
const connectDb = require('./config/db')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const models = require('./models')

connectDb()

//apollo server

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
})

server.listen({port: process.env.PORT || 4000}).then(({url}) => {
  console.log(`server is ready at ${url}`)
})