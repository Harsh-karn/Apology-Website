import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import snapchat1 from '@assets/Snapchat-67301335.jpg';
import snapchat2 from '@assets/Snapchat-75264617.jpg';

const PhotosSection = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="photos" className="py-20 relative bg-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://pixabay.com/get/geb10d83b6d9faf53a69e96dff157c6cd34ac76d8f0cdce82cf15e5e4f83fd0dc6f0a4852ef3f5018b5e0db3eccfa61441c7b30b67eab410b0ccf3275d3201877_1280.jpg')" }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-primary/20" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-dancing text-secondary mb-2">Our Memories</h2>
          <p className="text-gray-600 max-w-lg mx-auto">The moments we've shared that I treasure in my heart</p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* First Photo */}
          <motion.div 
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative group">
              <motion.img 
                src={snapchat1} 
                alt="Our hands together" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-dancing text-xl">Our hands, our connection</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Second Photo */}
          <motion.div 
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative group">
              <motion.img 
                src={snapchat2} 
                alt="Your beautiful smile" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-dancing text-xl">The smile I adore</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhotosSection;
