import Fastify from "fastify";
import cors from '@fastify/cors';
import { appRoutes } from './routes';

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
  path: 'http://192.168.0.11/',
  port: 3333
}).then(() => {
  console.log('HTTP Server Running!')
})