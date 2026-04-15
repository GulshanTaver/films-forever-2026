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
      {/* Features Section */}
      <section className="py-12 sm:py-16 px-4 max-w-6xl mx-auto">
        <h2 className="section-title text-center">Why Choose FILMS FOREVER?</h2>
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
      <section className="bg-gray-900 text-white py-12 sm:py-16 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Explore?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
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
