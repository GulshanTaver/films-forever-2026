import { runMigrations } from './schema.js';
import pool from '../db.js';

const MAX_RETRIES = 3;
const RETRY_DELAY = 2000; // 2 seconds

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  let retries = 0;
  
  while (retries < MAX_RETRIES) {
    try {
      console.log('Attempting to run migrations...');
      if (retries > 0) {
        console.log(`Retry attempt ${retries}/${MAX_RETRIES - 1}`);
      }
      
      await runMigrations();
      await pool.end();
      console.log('✅ Migrations completed and connection closed');
      process.exit(0);
    } catch (err) {
      retries++;
      
      if (retries < MAX_RETRIES) {
        console.error(`❌ Migration failed: ${err.message}`);
        console.log(`Retrying in ${RETRY_DELAY / 1000} seconds...`);
        await sleep(RETRY_DELAY);
      } else {
        console.error('Failed to run migrations after maximum retries:', err);
        await pool.end();
        process.exit(1);
      }
    }
  }
}

main();
