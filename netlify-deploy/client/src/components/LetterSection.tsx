import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const LetterSection = () => {
  const { ref, inView } = useScrollAnimation();

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.8,
      }
    })
  };

  return (
    <section id="letter" className="py-20 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 parallax-bg"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511028897949-27b3f9f7924d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FEE4ED]/90 to-[#FEE4ED]/80" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto letter-section p-8 md:p-12" ref={ref}>
          <div className="fancy-border">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-dancing text-secondary mb-2">From My Heart to Yours</h2>
              <div className="w-16 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="font-playfair text-lg space-y-6 leading-relaxed">
              <motion.p 
                variants={paragraphVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={0}
              >
                My Love,
              </motion.p>
              
              <motion.p 
                variants={paragraphVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={1}
              >
                I've been sitting with the silence between us, and it's the loudest thing I've ever heard. It echoes with the things I wish I'd said differently, the way I wish I'd held your heart instead of letting my pride speak louder than my love.
              </motion.p>
              
              <motion.p 
                variants={paragraphVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={2}
              >
                I know you're hurt—and you have every right to be. I feel it too, like a missing piece in my chest where your laughter used to be. And God, I miss you. Not just your voice or your touch, but your presence. That light you carry, the way your eyes soften when you're really listening, how you say my name like it actually matters.
              </motion.p>
              
              <motion.p 
                variants={paragraphVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={3}
              >
                I don't want to win arguments. I want to win your heart again, every day, over and over. I want to be the person who makes you feel safe when the world feels heavy. I want to love you better—more gently, more patiently, more truly.
              </motion.p>
              
              <motion.p 
                variants={paragraphVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={4}
              >
                I messed up, and I know a few pretty words can't fix everything. But they're not just words—they're pieces of my heart, offered to you with trembling hands, hoping you'll hold them, even if you're still angry, even if you're still hurting.
              </motion.p>
              
              <motion.p 
                variants={paragraphVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={5}
              >
                You mean the world to me. And if you're willing, I'll be here—not to pretend everything is perfect, but to walk through the mess with you, with all the love I've got.
              </motion.p>
              
              <motion.div 
                className="text-right pt-6"
                variants={paragraphVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={6}
              >
                <p>Always yours,</p>
                <p className="font-dancing text-2xl text-secondary">Cupcake</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
