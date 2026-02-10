import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Screenshots", href: "#screenshots" },
    { label: "Download", href: "#download" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <a href="#" className="text-hero-foreground font-bold text-xl tracking-tight">
          Blynx
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-hero-muted hover:text-hero-foreground text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#download">Download</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-hero-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-white/10 px-6 pb-6 pt-2 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-hero-muted hover:text-hero-foreground text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="rounded-full w-full">
            <a href="#download" onClick={() => setMobileOpen(false)}>
              Download
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
