import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import blynxIcon from "@/assets/blynx-icon.png";

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

  const navClassName = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? "glass-nav border-b bg-neutral-800/70" : "bg-transparent"
  }`;

  return (
    <nav className={navClassName}>
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 text-foreground/90 dark:text-white/90 font-bold text-xl tracking-tight">
          <img src={blynxIcon} alt="Blynx" className="w-8 h-8 rounded-full" />
          Blynx
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/70 hover:text-foreground text-sm font-medium transition-colors dark:text-white/80 dark:hover:text-white/90"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#download" className="text-primary-foreground/90 hover:text-primary-foreground">Download</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground/70 dark:text-white/80"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-neutral-800/60 px-6 pb-6 pt-2 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-foreground/70 hover:text-foreground text-sm font-medium dark:text-white/80 dark:hover:text-white/90"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="rounded-full w-full">
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="text-primary-foreground/90 hover:text-primary-foreground"
            >
              Download
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
