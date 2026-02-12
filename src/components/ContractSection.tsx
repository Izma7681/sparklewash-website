import { motion } from "framer-motion";
import { ShieldCheck, Palette, Clock, RefreshCcw, Building2 } from "lucide-react";

const points = [
  { icon: ShieldCheck, text: "We ensure safe garment handling." },
  { icon: Palette, text: "No color damage guarantee." },
  { icon: Clock, text: "On-time delivery commitment." },
  { icon: RefreshCcw, text: "Refund policy for damaged items." },
  { icon: Building2, text: "Bulk laundry contracts for hostels, hotels & offices." },
];

const ContractSection = () => (
  <section id="contract" className="py-24 section-alt">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">Our Service Contract</h2>
        <p className="mt-3 text-muted-foreground">Your trust is our priority.</p>
      </div>

      <div className="space-y-5">
        {points.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-card"
          >
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
              <p.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <p className="text-foreground font-medium">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ContractSection;
