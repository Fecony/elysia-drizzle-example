import type { Config } from 'drizzle-kit';

const connectionString = `${process.env.DATABASE_URL}?sslmode=require`;

export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString,
  },
} satisfies Config;
