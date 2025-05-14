import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare } from 'lucide-react';

const FinalSection = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-primary/10" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-dancing text-secondary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Will You Forgive Me?
          </motion.h2>
          
          <motion.p 
            className="text-xl font-playfair italic mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Every moment without you feels incomplete. I'm hoping for a chance to make things right.
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              variant="default" 
              className="bg-secondary hover:bg-accent text-white px-8 py-6 rounded-full font-medium transition-all duration-300 hover:shadow-lg text-lg"
              asChild
            >
              <a href="tel:+919523330382">
                <Phone className="mr-2 h-5 w-5" /> Call Me
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white text-secondary border-2 border-secondary px-8 py-6 rounded-full font-medium hover:bg-secondary hover:text-white transition-all duration-300 hover:shadow-lg text-lg"
            >
              <MessageSquare className="mr-2 h-5 w-5" /> Text Me
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
