import { Elysia } from 'elysia';
import { db } from './db';
import { users } from './db/schema';

new Elysia()
  .get('/', () => 'Hello Elysia')
  .get('/users', async () => ({
    users: await db.select().from(users),
  }))
  .listen(3000, ({ hostname, port }) => {
    console.log(`🦊 Elysia is running at http://${hostname}:${port}`);
  });
