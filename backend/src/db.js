import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 10000, // 10 seconds
  idleTimeoutMillis: 30000, // 30 seconds
  max: 20, // max clients in pool
  ssl: {
    rejectUnauthorized: false // Required for Supabase connections
  }
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

export default pool;
