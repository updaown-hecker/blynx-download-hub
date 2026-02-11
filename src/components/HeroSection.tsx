import { motion } from "framer-motion";
import { Monitor, Apple, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

const platforms = [
  { label: "Windows", icon: Monitor, suffix: ".exe" },
  { label: "macOS", icon: Apple, suffix: ".dmg" },
  { label: "Linux", icon: Terminal, suffix: ".AppImage" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Subtle glow orbs — toned down */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-hero-glow/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[hsl(270_80%_60%/0.04)] blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-hero-glow text-sm font-semibold tracking-widest uppercase mb-4">
            Introducing Blynx Browser
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-hero-foreground tracking-tight leading-[1.05] text-balance">
            Browse the web,
            <br />
            <span className="bg-gradient-to-r from-hero-glow to-[hsl(270,80%,65%)] bg-clip-text text-transparent">
              reimagined.
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-hero-muted max-w-2xl mx-auto leading-relaxed">
            A fast, modern, and fully customizable browser built on Electron.
            Tab management, built-in ad blocking, and custom protocols — all in one sleek package.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {platforms.map((p) => (
            <Button
              key={p.label}
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/15 bg-white/5 text-hero-foreground hover:bg-white/10 hover:border-white/25 gap-2 px-6"
            >
              <a href="#download">
                <p.icon size={18} />
                {p.label}
              </a>
            </Button>
          ))}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-white/15 bg-white/5 text-hero-foreground hover:bg-white/10 hover:border-white/25 gap-2 px-6"
          >
            <Link to="/portable">
              <Terminal size={18} />
              Portable
            </Link>
          </Button>
        </motion.div>

        {/* Browser mockup placeholder */}
        <motion.div
          className="mt-16 mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-hero-glow/10">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[hsl(0,70%,55%)]" />
                <div className="w-3 h-3 rounded-full bg-[hsl(45,80%,55%)]" />
                <div className="w-3 h-3 rounded-full bg-[hsl(130,60%,50%)]" />
              </div>
              <div className="flex-1 mx-12">
                <div className="mx-auto max-w-md h-7 rounded-md bg-white/10 flex items-center justify-center">
                  <span className="text-xs text-hero-muted">blynx://newtab</span>
                </div>
              </div>
            </div>
            {/* Content area */}
            <div className="aspect-[16/9] flex items-center justify-center bg-gradient-to-b from-white/[0.03] to-transparent">
              <div className="text-center space-y-3">
                <p className="text-3xl font-bold text-hero-foreground/80">Blynx</p>
                <p className="text-sm text-hero-muted">Your browser screenshot will appear here</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
