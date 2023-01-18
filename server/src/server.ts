import Fastify from "fastify";

const app = Fastify()

/* 
* Método HTTP: Get, Post, Put, Patch, Delete
*/

app.get('/', () => {
  return 'Hello NLW'
})

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP Server Running')
})