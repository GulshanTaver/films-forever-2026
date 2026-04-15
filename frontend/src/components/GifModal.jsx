import { useState } from 'react';

function GifModal({ isOpen, onClose, gifUrl, title = 'FILMS FOREVER', onCloseComplete }) {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  const handleContinue = () => {
    onClose();
    if (onCloseComplete) {
      onCloseComplete();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-gray-700 font-bold"
        >
          ×
        </button>

        {/* Modal Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
          <div className="flex justify-center">
            <img src={gifUrl} alt={title} className="max-w-full h-auto rounded" />
          </div>
          <button
            onClick={handleContinue}
            className="mt-6 w-full btn-primary bg-blue-600 hover:bg-blue-700 text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default GifModal;
