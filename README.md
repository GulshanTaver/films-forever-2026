# Films Forever

A full-stack web application for film discovery, social interaction, and personalized recommendations. Users can browse films, rate and review them, maintain watchlists, get recommendations, and chat with other film enthusiasts.

## Tech Stack

- **Frontend**: React 18, React Router, Axios, Context API, Tailwind CSS
- **Backend**: Node.js, Express.js, JWT authentication, bcryptjs, WebSocket (Socket.io)
- **Database**: PostgreSQL 14+

## Project Structure

```
films-forever-2026/
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page-level components
│   │   ├── context/        # State management
│   │   ├── services/       # API client functions
│   │   ├── styles/         # Tailwind CSS configuration
│   │   └── App.jsx
│   ├── package.json
│   ├── .env.example
│   └── Dockerfile
├── backend/                # Node.js/Express API server
│   ├── src/
│   │   ├── routes/         # API endpoints
│   │   ├── controllers/    # Route handlers
│   │   ├── models/         # Database queries
│   │   ├── middleware/     # Auth, error handling
│   │   ├── utils/          # Helper functions
│   │   ├── migrations/     # Database migrations
│   │   └── index.js
│   ├── package.json
│   ├── .env.example
│   └── Dockerfile
├── docker-compose.yml      # Container orchestration
├── .gitignore              # Git ignore rules
└── README.md               # This file

```

## Features

### Core Features
- **User Authentication** — Signup, login, JWT-based session management
- **Film Discovery** — Browse, search, and filter films by genre
- **Film Details** — View complete film information with metadata
- **Ratings & Reviews** — Submit and view user ratings and written reviews
- **Watchlist** — Save films to personal watchlist for later viewing
- **Recommendations** — Get personalized film suggestions based on ratings and preferences
- **Social Chat** — Real-time messaging with other users to discuss films

### User Management
- User registration and login
- Password hashing with bcrypt
- JWT token-based authentication
- User profile management

### Film Management
- Film database with genres and metadata
- Manual film upload functionality
- Search and filtering capabilities
- Genre-based browsing

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- PostgreSQL 14+ installed and running locally

### Installation

1. **Clone and navigate to project:**
   ```bash
   cd d:\Projects\films-forever-2026
   ```

#### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials
npm run migrate
npm run seed
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with API_URL (default: http://localhost:5000/api)
npm run dev
```

The frontend will be available at **http://localhost:3000** and the backend API at **http://localhost:5000**.

## API Endpoints

### Authentication
- `POST /api/auth/signup` — Register new user
- `POST /api/auth/login` — Login user
- `POST /api/auth/refresh` — Refresh JWT token

### Films
- `GET /api/films` — List all films with pagination
- `GET /api/films/:id` — Get film details
- `GET /api/films/search?q=query` — Search films
- `GET /api/genres` — List all genres
- `POST /api/films` — Upload new film (admin)
- `DELETE /api/films/:id` — Delete film (admin)

### Ratings & Reviews
- `POST /api/ratings` — Submit film rating
- `GET /api/ratings/:filmId` — Get film ratings/reviews
- `POST /api/reviews` — Submit film review
- `GET /api/reviews/:filmId` — Get film reviews

### Watchlist
- `POST /api/watchlist` — Add film to watchlist
- `GET /api/watchlist` — Get user's watchlist
- `DELETE /api/watchlist/:filmId` — Remove from watchlist

### Recommendations
- `GET /api/recommendations` — Get personalized film recommendations

### Chat
- WebSocket connection: `ws://localhost:5000/socket.io`
- Real-time film discussion messaging

## Environment Variables

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@localhost:5432/films_forever
JWT_SECRET=your_secret_key_here
JWT_EXPIRATION=24h
NODE_ENV=development
PORT=5000
ALLOWED_ORIGINS=http://localhost:3000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Database Schema

### Tables
- **users** — User accounts with authentication
- **films** — Film catalog with metadata
- **genres** — Film genres
- **ratings** — User film ratings
- **reviews** — User film reviews
- **watchlists** — User watchlist entries
- **chat_messages** — Social chat messages
- **recommendations** — Recommendation metadata

## Development Workflow

### Available Scripts

#### Backend
```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm run migrate  # Run database migrations
npm run seed     # Seed database with sample data
npm run test     # Run tests
```

#### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run test     # Run tests
```

## Contributing

1. Create feature branches from `main`
2. Follow existing code style
3. Test thoroughly before creating pull requests
4. Update documentation as needed

## License

MIT

## Support

For issues, questions, or feature requests, please use the GitHub issues page.
