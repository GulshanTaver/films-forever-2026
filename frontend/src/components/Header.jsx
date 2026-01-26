import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import GifModal from './GifModal';

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <GifModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        gifUrl="/src/extrenal/pille.gif"
        title="Welcome to Films Forever"
        onCloseComplete={() => navigate('/signup')}
      />
      <header className="bg-gray-900 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          🎬 Films Forever
        </Link>

        <ul className="flex gap-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to="/watchlist" className="hover:text-gray-300">
                  Watchlist
                </Link>
              </li>
              <li>
                <Link to="/recommendations" className="hover:text-gray-300">
                  Recommendations
                </Link>
              </li>
              <li>
                <span className="text-gray-300">{user.username}</span>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
                >
                  Login
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-green-600 px-3 py-1 rounded hover:bg-green-700 border-none cursor-pointer text-white"
                >
                  Sign Up
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
      </header>
    </>
  );
}

export default Header;
