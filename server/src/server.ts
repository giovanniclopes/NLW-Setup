import Fastify from "fastify";
import cors from '@fastify/cors';
import { appRoutes } from './routes';
import * as dotenv from 'dotenv';

dotenv.config()

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
  path: process.env.PATH_URL,
  port: 3333
}).then(() => {
  console.log('HTTP Server Running!')
})