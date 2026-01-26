import pool from '../db.js';

async function seedDatabase() {
  const client = await pool.connect();
  try {
    console.log('Seeding database with sample data...');

    // Insert genres
    const genres = [
      { name: 'Action', description: 'High-energy films with stunts and fighting' },
      { name: 'Drama', description: 'Character-driven narratives' },
      { name: 'Comedy', description: 'Humorous and entertaining films' },
      { name: 'Sci-Fi', description: 'Science fiction and futuristic themes' },
      { name: 'Horror', description: 'Scary and suspenseful films' },
      { name: 'Romance', description: 'Love stories and relationships' }
    ];

    for (const genre of genres) {
      await client.query(
        'INSERT INTO genres (name, description) VALUES ($1, $2) ON CONFLICT DO NOTHING',
        [genre.name, genre.description]
      );
    }
    console.log('✓ Genres seeded');

    // Get genre ids for sample films
    const genreResult = await client.query('SELECT id FROM genres WHERE name = $1', ['Drama']);
    const dramaGenreId = genreResult.rows[0]?.id;

    // Insert sample films
    if (dramaGenreId) {
      const films = [
        {
          title: 'The Shawshank Redemption',
          description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
          release_year: 1994,
          director: 'Frank Darabont',
          duration_minutes: 142,
          genre_id: dramaGenreId
        },
        {
          title: 'The Godfather',
          description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his youngest son.',
          release_year: 1972,
          director: 'Francis Ford Coppola',
          duration_minutes: 175,
          genre_id: dramaGenreId
        }
      ];

      for (const film of films) {
        await client.query(
          'INSERT INTO films (title, description, release_year, director, duration_minutes, genre_id) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT DO NOTHING',
          [film.title, film.description, film.release_year, film.director, film.duration_minutes, film.genre_id]
        );
      }
      console.log('✓ Sample films seeded');
    }

    console.log('✅ Database seeding completed');
  } catch (err) {
    console.error('❌ Seeding error:', err);
    throw err;
  } finally {
    client.release();
  }
}

seedDatabase().then(() => process.exit(0)).catch(() => process.exit(1));
