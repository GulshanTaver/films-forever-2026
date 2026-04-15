import pkg from 'pg';
const { Client } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 15000,
  ssl: {
    rejectUnauthorized: false
  }
});

async function testConnection() {
  try {
    console.log('🔍 Testing database connection...');
    console.log('📍 Database URL:', process.env.DATABASE_URL.split('@')[1]);
    
    await client.connect();
    console.log('✅ Connected successfully!');
    
    const result = await client.query('SELECT NOW()');
    console.log('✅ Query executed:', result.rows[0]);
    
    await client.end();
    console.log('✅ Connection closed cleanly');
  } catch (err) {
    console.error('❌ Connection error:', err.message);
    if (err.code) {
      console.error('   Error code:', err.code);
    }
    process.exit(1);
  }
}

testConnection();
