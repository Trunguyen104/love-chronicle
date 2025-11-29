import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Falling flowers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const flowers = ['🌸', '🌺', '🌼', '💐', '🌹'];
          const flower = flowers[i % flowers.length];
          const startX = Math.random() * 100;
          const duration = Math.random() * 10 + 10;
          const delay = Math.random() * 5;
          
          return (
            <motion.div
              key={i}
              className="absolute text-2xl md:text-4xl"
              style={{ left: `${startX}%` }}
              initial={{ y: -100, opacity: 0, rotate: 0 }}
              animate={{
                y: window.innerHeight + 100,
                opacity: [0, 1, 1, 0],
                rotate: 360,
                x: [0, Math.sin(i) * 100, 0],
              }}
              transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {flower}
            </motion.div>
          );
        })}
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-glow"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Happy Anniversary
          </motion.h1>
          
          <motion.div
            className="text-3xl md:text-5xl font-serif text-primary mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            1000 Days
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Mỗi khoảnh khắc bên nhau là một kỷ niệm đẹp
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
