import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background image with slight blur */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Professional laundry facility" className="w-full h-full object-cover scale-105 blur-[2px]" />
      <div className="absolute inset-0 bg-foreground/40" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-primary-foreground leading-tight max-w-4xl mx-auto drop-shadow-lg"
      >
        Professional Laundry &amp; Dry Cleaning Services
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 text-lg md:text-2xl text-primary-foreground/90 font-medium tracking-wide"
      >
        Fast. Affordable. Reliable.
      </motion.p>

      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="inline-block mt-10 gradient-primary text-primary-foreground font-bold px-10 py-4 rounded-xl text-lg shadow-card-hover hover:scale-105 transition-transform"
      >
        Book Now
      </motion.a>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-primary-foreground/60" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
