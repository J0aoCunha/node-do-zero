import { fastify } from "fastify";
// import { Memory } from "./database-memory.js";
import { dataBasePostgres } from "./database-postgres.js";

const server = fastify();

// const database = new Memory();

const database = new dataBasePostgres();

server.post("/video", async (request, reply) => {
  const { title, description, duration } = request.body;

  await database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});

server.get("/video", async (request) => {
  const search = request.query.search;

  const videos = await database.list(search);

  return videos;
});

server.delete("/video/:id", async (request, reply) => {
  const videoId = request.params.id;

  await database.delete(videoId);

  return reply.status(204).send();
});

server.put("/video/:id", async (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  await database.update(videoId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send();
});

server.listen({
  port:  process.env.PORT ??  3333,
});
