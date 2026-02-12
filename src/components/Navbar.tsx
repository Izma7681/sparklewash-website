import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contract", href: "#contract" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="IRS Drycleaners"
            className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-black tracking-wide text-[#1a6fa8]">IRS</span>
            <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Drycleaners</span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="gradient-primary text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 hover:scale-105 transition-all shadow-md"
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground p-1" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-border shadow-lg"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors border-b border-border/50 last:border-0"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block gradient-primary text-primary-foreground text-center px-5 py-3 rounded-xl text-sm font-bold shadow-md"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;