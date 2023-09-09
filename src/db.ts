import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const connectionString = `${process.env.DATABASE_URL}?sslmode=require`;

const client = postgres(connectionString);
export const db = drizzle(client);

const migrationClient = postgres(connectionString, { max: 1, ssl: true });
migrate(drizzle(migrationClient), { migrationsFolder: 'drizzle' });
