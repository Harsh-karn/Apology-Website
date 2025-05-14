import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-white">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 flex items-center justify-center">
          Made with 
          <Heart className="text-secondary mx-2 h-4 w-4" fill="currentColor" />
          for you
        </p>
      </div>
    </footer>
  );
};

export default Footer;
