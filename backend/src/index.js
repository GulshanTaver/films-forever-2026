import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Server as SocketIOServer } from 'socket.io';
import http from 'http';
import authRoutes from './routes/auth.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: process.env.ALLOWED_ORIGINS || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Films Forever API is running' });
});

// Routes
app.use('/api/auth', authRoutes);
// TODO: Import and use additional routes
// import filmRoutes from './routes/films.js';
// import ratingRoutes from './routes/ratings.js';
// import watchlistRoutes from './routes/watchlist.js';
// import recommendationRoutes from './routes/recommendations.js';
// app.use('/api/films', filmRoutes);
// app.use('/api/ratings', ratingRoutes);
// app.use('/api/watchlist', watchlistRoutes);
// app.use('/api/recommendations', recommendationRoutes);

// WebSocket setup for chat
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('join-chat', (data) => {
    socket.join(`film-${data.filmId}`);
    console.log(`User ${socket.id} joined film ${data.filmId}`);
  });

  socket.on('send-message', (data) => {
    io.to(`film-${data.filmId}`).emit('receive-message', {
      userId: data.userId,
      username: data.username,
      message: data.message,
      timestamp: new Date()
    });
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Films Forever API running on port ${PORT}`);
});

export { app, io };
