import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";
import machineryImg from "@/assets/laundry-machinery.jpg";
import processImg from "@/assets/laundry-process.jpg";

const highlights = [
  "State-of-the-art commercial washing & drying machines",
  "Eco-friendly, chemical-safe cleaning solvents",
  "Temperature-controlled fabric treatment",
  "Professional steam pressing & finishing",
  "Hygienic packaging for every garment",
  "Doorstep pickup & delivery across the city",
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-7 h-7 text-primary-foreground" />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">About IRS Drycleaners</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
          At IRS Drycleaners, we are a team of dedicated laundry professionals committed to delivering spotless,
          hygienic, and timely laundry services. With years of experience and state-of-the-art equipment,
          we treat every garment with the utmost care—because your clothes deserve the best.
        </p>
      </motion.div>

      {/* Machinery images */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-card-hover"
        >
          <img src={machineryImg} alt="Industrial washing machines at IRS Drycleaners" className="w-full h-72 object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-card-hover"
        >
          <img src={processImg} alt="Garment care and steam pressing process" className="w-full h-72 object-cover" />
        </motion.div>
      </div>

      {/* Detailed info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card rounded-2xl p-8 md:p-12 shadow-card max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-display font-bold text-foreground mb-3">Why Choose Us?</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We use industry-leading commercial equipment imported from top manufacturers to ensure your garments receive
          the gentlest yet most effective cleaning. Our facility is equipped with advanced dry cleaning machines,
          high-capacity washers, precision steam presses, and automated folding systems — all maintained to the
          highest hygiene standards. Whether it's everyday wear or luxury fabrics, we handle each piece with care
          and precision so you always look your best.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {highlights.map((h) => (
            <div key={h} className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{h}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
