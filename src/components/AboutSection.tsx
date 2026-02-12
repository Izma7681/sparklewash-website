import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-7 h-7 text-primary-foreground" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">About IRS Drycleaners</h2>
        <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
          At IRS Drycleaners, we are a team of dedicated laundry professionals committed to delivering spotless,
          hygienic, and timely laundry services. With years of experience and state-of-the-art equipment,
          we treat every garment with the utmost care—because your clothes deserve the best.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
