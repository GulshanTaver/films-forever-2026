import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import GifModal from '../components/GifModal';

function Home() {
  const { user } = useAuth();
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
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Films Forever</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Discover, rate, and share your favorite films with a passionate community of cinema lovers
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {user ? (
              <>
                <Link
                  to="/watchlist"
                  className="btn-primary bg-white text-blue-600 hover:bg-gray-100"
                >
                  View Watchlist
                </Link>
                <Link
                  to="/recommendations"
                  className="btn-primary border-2 border-white bg-transparent"
                >
                  Get Recommendations
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary bg-white text-blue-600 hover:bg-gray-100"
                >
                  Get Started
                </button>
                <Link
                  to="/login"
                  className="btn-primary border-2 border-white bg-transparent hover:bg-blue-700"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="section-title text-center">Why Choose Films Forever?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="heading mb-2">Vast Collection</h3>
            <p className="text-gray-600">
              Explore thousands of films from different genres, eras, and countries
            </p>
          </div>
          <div className="card">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="heading mb-2">Rate & Review</h3>
            <p className="text-gray-600">
              Share your opinions and see what other film enthusiasts think about your favorite movies
            </p>
          </div>
          <div className="card">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="heading mb-2">Smart Recommendations</h3>
            <p className="text-gray-600">
              Get personalized film suggestions based on your taste and viewing history
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community of film lovers and start discovering amazing movies today
          </p>
          {!user && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary bg-blue-600 hover:bg-blue-700 inline-block"
            >
              Create Your Account
            </button>
          )}
        </div>
      </section>
      </div>
    </>
  );
}

export default Home;
