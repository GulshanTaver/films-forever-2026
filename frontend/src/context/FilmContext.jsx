import { createContext, useState, useContext } from 'react';

const FilmContext = createContext(null);

export function FilmProvider({ children }) {
  const [films, setFilms] = useState([]);
  const [currentFilm, setCurrentFilm] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
    <FilmContext.Provider
      value={{
        films,
        setFilms,
        currentFilm,
        setCurrentFilm,
        watchlist,
        setWatchlist,
        searchQuery,
        setSearchQuery,
        selectedGenre,
        setSelectedGenre
      }}
    >
      {children}
    </FilmContext.Provider>
  );
}

export function useFilm() {
  const context = useContext(FilmContext);
  if (!context) {
    throw new Error('useFilm must be used within FilmProvider');
  }
  return context;
}
