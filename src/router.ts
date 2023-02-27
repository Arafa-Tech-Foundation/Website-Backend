import { FastifyInstance } from "fastify";
import userController from "./controllers/users.controller";
import indexController from "./controllers/index.controller";

export default async function router(fastify: FastifyInstance) {
  fastify.register(userController, { prefix: "/users" });
  fastify.register(indexController, { prefix: "/" });
}
