import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "918160026252";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hello, I'm ${name} (Phone: ${phone}). ${message || "I want to book laundry service."}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-24 section-alt">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Get In Touch</h2>
          <p className="mt-3 text-muted-foreground">Book a pickup or ask us anything.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl p-8 shadow-card space-y-5"
        >
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">Phone</label>
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Tell us what you need..."
            />
          </div>

          <button
            type="submit"
            className="w-full gradient-primary text-primary-foreground font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Send className="w-4 h-4" />
            Send via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
