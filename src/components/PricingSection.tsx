import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    popular: false,
    items: [
      "Wash & Fold — ₹80/kg",
      "Ironing — ₹10 per cloth",
    ],
  },
  {
    name: "Standard",
    popular: true,
    items: [
      "Dry Cleaning — ₹120 per cloth",
      "Shoe Cleaning — ₹299 per pair",
    ],
  },
  {
    name: "Premium",
    popular: false,
    items: [
      "Suit Dry Cleaning — ₹499",
      "Curtain Cleaning — ₹199 per piece",
    ],
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Simple Pricing</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Transparent rates with no hidden charges.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className={`rounded-2xl p-8 flex flex-col ${
              plan.popular
                ? "gradient-primary text-primary-foreground shadow-card-hover scale-105"
                : "bg-card shadow-card border border-border"
            }`}
          >
            {plan.popular && (
              <span className="self-start bg-card/20 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-extrabold">{plan.name}</h3>
            <ul className="mt-6 space-y-4 flex-1">
              {plan.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-8 block text-center py-3 rounded-xl font-semibold transition-opacity hover:opacity-90 ${
                plan.popular
                  ? "bg-card text-primary"
                  : "gradient-primary text-primary-foreground"
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
