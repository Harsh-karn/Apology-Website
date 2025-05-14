import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-secondary/20" />
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 opacity-70"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="text-accent" size={32} fill="currentColor" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 right-1/3 opacity-70"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Heart className="text-secondary" size={24} fill="currentColor" />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-1/4 opacity-50"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Heart className="text-primary" size={40} fill="currentColor" />
      </motion.div>
      
      {/* Content */}
      <div className="container px-6 py-12 relative z-10 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-dancing text-secondary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Love
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl font-playfair italic text-zinc-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I have something to say from the bottom of my heart...
        </motion.p>
        
        <motion.div 
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button 
            asChild
            variant="default" 
            className="bg-secondary hover:bg-accent text-white px-8 py-6 rounded-full font-medium transition-all duration-300 hover:shadow-lg text-lg"
          >
            <a href="#letter">
              Read My Letter
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
