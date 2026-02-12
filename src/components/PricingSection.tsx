import { motion } from "framer-motion";
import { WashingMachine, Shirt, Wind, Gem, PanelTop, Tag } from "lucide-react";

const services = [
  {
    icon: WashingMachine,
    name: "Wash & Fold",
    desc: "Full wash, dry & neatly folded",
    price: "₹80",
    unit: "per kg",
    tag: null,
  },
  {
    icon: Wind,
    name: "Ironing",
    desc: "Crisp, wrinkle-free finish",
    price: "₹10",
    unit: "per cloth",
    tag: null,
  },
  {
    icon: Shirt,
    name: "Dry Cleaning",
    desc: "Expert care for delicate fabrics",
    price: "₹120",
    unit: "per cloth",
    tag: "Popular",
  },
  {
    icon: Gem,
    name: "Suit Dry Cleaning",
    desc: "Premium treatment for formals",
    price: "₹499",
    unit: "per suit",
    tag: "Premium",
  },
  {
    icon: PanelTop,
    name: "Curtain Cleaning",
    desc: "Deep clean for drapes & curtains",
    price: "₹199",
    unit: "per piece",
    tag: null,
  },
];

const tagStyles: Record<string, string> = {
  Popular: "bg-blue-100 text-blue-700",
  Premium: "bg-amber-100 text-amber-700",
};

const PricingSection = () => (
  <section id="pricing" className="py-24 relative overflow-hidden">
    {/* Soft background blob */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-cyan-100/40 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 max-w-3xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-blue-100">
          <Tag className="w-3 h-3" /> Transparent Pricing
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground">
          Simple, Honest Pricing
        </h2>
        <p className="mt-3 text-muted-foreground text-base max-w-md mx-auto">
          No hidden charges. No surprises. Just clean clothes at fair prices.
        </p>
      </motion.div>

      {/* Pricing list */}
      <div className="bg-white rounded-3xl shadow-xl border border-border/60 overflow-hidden">
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className={`flex items-center gap-4 px-6 py-5 hover:bg-blue-50/50 transition-colors group
              ${i !== services.length - 1 ? "border-b border-border/50" : ""}`}
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-2xl gradient-primary flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
              <s.icon className="w-5 h-5 text-white" />
            </div>

            {/* Name + desc */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-foreground text-base">{s.name}</span>
                {s.tag && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tagStyles[s.tag]}`}>
                    {s.tag}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p>
            </div>

            {/* Price */}
            <div className="text-right shrink-0">
              <span className="text-2xl font-black text-primary">{s.price}</span>
              <p className="text-xs text-muted-foreground mt-0.5">{s.unit}</p>
            </div>
          </motion.div>
        ))}

        {/* CTA row */}
        <div className="px-6 py-5 bg-gradient-to-r from-blue-50 to-cyan-50 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              🚚 <span className="font-semibold text-foreground">Free pickup & delivery</span> on orders above ₹500
            </p>
            <a
              href="#contact"
              className="gradient-primary text-white font-bold px-8 py-3 rounded-2xl text-sm hover:opacity-90 hover:scale-105 transition-all shadow-md whitespace-nowrap"
            >
              Book a Pickup →
            </a>
          </div>
        </div>
      </div>

      {/* Bulk note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-6 text-sm text-muted-foreground"
      >
        💬 Custom pricing available for bulk orders — hostels, hotels & offices welcome!
      </motion.p>
    </div>
  </section>
);

export default PricingSection;