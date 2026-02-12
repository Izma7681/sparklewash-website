import { motion } from "framer-motion";
import { Sparkles, PhoneCall } from "lucide-react";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Video background */}
    <div className="absolute inset-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover scale-105"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        <source src="/hero-bg.webm" type="video/webm" />
      </video>
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

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        {/* Primary Button */}
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 bg-white text-primary font-extrabold px-10 py-4 rounded-2xl text-lg shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Sparkles className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
          <span>Book Now</span>
        </a>

        {/* Secondary Button */}
        <a
          href="tel:+918160026252"
          className="group inline-flex items-center gap-2 border-2 border-white/70 text-primary-foreground font-bold px-8 py-4 rounded-2xl text-lg hover:bg-white/10 hover:border-white transition-all duration-300"
        >
          <PhoneCall className="w-5 h-5 group-hover:animate-bounce" />
          <span>Call Us Now</span>
        </a>
      </motion.div>

      {/* Trust badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-6 text-primary-foreground/80 text-sm font-medium"
      >
        {["✅ Same Day Pickup", "⭐ 5-Star Rated", "🚚 Free Delivery", "💯 Satisfaction Guaranteed"].map((badge) => (
          <span key={badge} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            {badge}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;