import apiClient from './api';

export const authService = {
  signup: (email, username, password) =>
    apiClient.post('/auth/signup', { email, username, password }),

  login: (email, password) =>
    apiClient.post('/auth/login', { email, password }),

  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },

  refreshToken: () =>
    apiClient.post('/auth/refresh')
};

export const filmService = {
  getFilms: (page = 1, limit = 20) =>
    apiClient.get(`/films?page=${page}&limit=${limit}`),

  getFilmById: (id) =>
    apiClient.get(`/films/${id}`),

  searchFilms: (query) =>
    apiClient.get(`/films/search?q=${query}`),

  getGenres: () =>
    apiClient.get('/genres'),

  uploadFilm: (formData) =>
    apiClient.post('/films', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
};

export const ratingService = {
  submitRating: (filmId, rating) =>
    apiClient.post('/ratings', { filmId, rating }),

  getFilmRatings: (filmId) =>
    apiClient.get(`/ratings/${filmId}`)
};

export const reviewService = {
  submitReview: (filmId, reviewText) =>
    apiClient.post('/reviews', { filmId, reviewText }),

  getFilmReviews: (filmId) =>
    apiClient.get(`/reviews/${filmId}`)
};

export const watchlistService = {
  addToWatchlist: (filmId) =>
    apiClient.post('/watchlist', { filmId }),

  getWatchlist: () =>
    apiClient.get('/watchlist'),

  removeFromWatchlist: (filmId) =>
    apiClient.delete(`/watchlist/${filmId}`)
};

export const recommendationService = {
  getRecommendations: () =>
    apiClient.get('/recommendations')
};
