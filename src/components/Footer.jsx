import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-4">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center space-y-4">
        <hr className="w-full border-gray-300" />
        
        <div className="flex space-x-6">
          <img src="/facebook.png" alt="Facebook" className="w-6 h-6 hover:scale-110 transition-transform" />
          <img src="/instagram.png" alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform" />
          <img src="/pinterest.png" alt="Pinterest" className="w-6 h-6 hover:scale-110 transition-transform" />
          <img src="/twitter.png" alt="Twitter" className="w-6 h-6 hover:scale-110 transition-transform" />
        </div>

        <p className="text-gray-500 text-sm">© 2025 RecipeHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
