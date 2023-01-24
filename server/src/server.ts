import Fastify from "fastify";
import cors from '@fastify/cors';
import { appRoutes } from './routes';
import * as dotenv from 'dotenv';

dotenv.config()

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
  port: 3333,
  host: process.env.HOST_URL,
}).then(() => {
  console.log('HTTP Server Running!')
})