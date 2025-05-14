import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Heart, Star, HandHeart, Infinity } from 'lucide-react';

const PromiseSection = () => {
  const { ref, inView } = useScrollAnimation();
  
  const promiseItems = [
    {
      icon: <Heart className="text-white" />,
      title: "Listen Better",
      description: "To truly hear you, not just wait for my turn to speak."
    },
    {
      icon: <HandHeart className="text-white" />,
      title: "Be Patient",
      description: "To understand that healing takes time and cannot be rushed."
    },
    {
      icon: <Star className="text-white" />,
      title: "Show Up",
      description: "To be present in both our joyful and difficult moments."
    },
    {
      icon: <Infinity className="text-white" />,
      title: "Choose Us",
      description: "To prioritize our love and connection every single day."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 parallax-bg"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516589091380-5d8e87df6999?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FEE4ED]/80 to-white/50" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-dancing text-secondary mb-6">My Promise To You</h2>
          
          <div className="letter-section p-8 md:p-12 mb-10">
            <p className="text-xl font-playfair italic mb-6">I promise to...</p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              {promiseItems.map((promise, index) => (
                <motion.div key={index} className="flex items-start" variants={item}>
                  <div className="bg-primary rounded-full p-2 mr-4 flex items-center justify-center">
                    {promise.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{promise.title}</h3>
                    <p>{promise.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div 
              className="inline-block bg-white rounded-full p-5 shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="text-secondary" size={32} fill="currentColor" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
