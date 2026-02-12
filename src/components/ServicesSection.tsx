import { motion } from "framer-motion";
import {
  Shirt,
  Wind,
  WashingMachine,
  Gem,
  Footprints,
  PanelTop,
  Zap,
} from "lucide-react";

const services = [
  { icon: Shirt, title: "Dry Cleaning", desc: "Expert cleaning for delicate fabrics and formal wear." },
  { icon: Wind, title: "Steam Ironing", desc: "Crisp, wrinkle-free finish for all garments." },
  { icon: WashingMachine, title: "Wash & Fold", desc: "Fresh laundry washed, dried, and neatly folded." },
  { icon: Gem, title: "Premium Garment Care", desc: "Luxury treatment for your finest clothing." },
  { icon: Footprints, title: "Shoe Cleaning", desc: "Restore your shoes to like-new condition." },
  { icon: PanelTop, title: "Curtain Cleaning", desc: "Deep cleaning for drapes and curtains." },
  { icon: Zap, title: "Express 24-Hour Service", desc: "Need it fast? We deliver within 24 hours." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const ServicesSection = () => (
  <section id="services" className="py-24 section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Our Services</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          We offer a complete range of laundry and garment care solutions.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow group"
          >
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
