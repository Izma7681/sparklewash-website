import { Sparkles, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="gradient-primary text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <a href="#" className="flex items-center gap-2 text-xl font-extrabold">
            <Sparkles className="w-6 h-6" />
            SparkleWash
          </a>
          <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
            Your trusted partner for professional laundry and dry cleaning services.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="font-bold text-lg">Contact Us</h4>
          <p className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <MapPin className="w-4 h-4 shrink-0" />
            123, MG Road, Bengaluru, India
          </p>
          <p className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <Phone className="w-4 h-4 shrink-0" />
            +91 98765 43210
          </p>
          <p className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <Mail className="w-4 h-4 shrink-0" />
            hello@sparklewash.in
          </p>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-bold text-lg mb-3">Follow Us</h4>
          <div className="flex gap-3">
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
      </div>

      <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} SparkleWash Laundry Services. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
