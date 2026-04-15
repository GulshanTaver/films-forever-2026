function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-8">
      <p>&copy; 2026 Films Forever. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-4 text-sm">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          Twitter
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400"
        >
          Instagram
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
        >
          YouTube
        </a>
      </div>
    </footer>
  );
}

export default Footer;
