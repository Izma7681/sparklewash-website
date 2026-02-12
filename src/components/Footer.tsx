import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Clock, Shield } from "lucide-react";

const Footer = () => (
  <footer className="gradient-primary text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="IRS Drycleaners"
              className="h-16 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-black tracking-wide text-primary-foreground">IRS</span>
              <span className="text-xs font-bold tracking-widest text-primary-foreground/70 uppercase">Drycleaners</span>
            </div>
          </a>
          <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
            Your trusted partner for professional laundry and dry cleaning services since 2015.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {["Services", "Pricing", "About", "Contact"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-primary-foreground transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
          <p className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <MapPin className="w-4 h-4 shrink-0" />
            123, MG Road, Bengaluru, India
          </p>
          <p className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <Phone className="w-4 h-4 shrink-0" />
            +91 81600 26252
          </p>
          <p className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <Mail className="w-4 h-4 shrink-0" />
            hello@irsdrycleaners.in
          </p>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4">Business Hours</h4>
          <div className="space-y-2 text-sm text-primary-foreground/80">
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0" />
              Mon – Sat: 8:00 AM – 9:00 PM
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0" />
              Sunday: 9:00 AM – 6:00 PM
            </p>
            <p className="flex items-center gap-2 mt-3">
              <Shield className="w-4 h-4 shrink-0" />
              100% Satisfaction Guaranteed
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} IRS Drycleaners. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;