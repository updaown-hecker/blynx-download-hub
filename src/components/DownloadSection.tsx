import { motion } from "framer-motion";
import { Monitor, Apple, Terminal, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    label: "Windows",
    icon: Monitor,
    suffix: ".exe",
    url: "#",
    note: "Windows 10+",
  },
  {
    label: "macOS",
    icon: Apple,
    suffix: ".dmg",
    url: "#",
    note: "macOS 11+",
  },
  {
    label: "Linux",
    icon: Terminal,
    suffix: ".AppImage",
    url: "#",
    note: "Ubuntu 20.04+",
  },
];

const DownloadSection = () => {
  return (
    <section id="download" className="relative py-28 px-6 bg-hero hero-gradient overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-hero-glow/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Download size={40} className="mx-auto text-hero-glow mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-hero-foreground tracking-tight">
            Download Blynx
          </h2>
          <p className="mt-4 text-lg text-hero-muted max-w-xl mx-auto">
            Available for Windows, macOS, and Linux. Free and open source.
          </p>
          <p className="mt-2 text-sm text-hero-muted/70">
            Version 1.0.0 · Built with Electron
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {platforms.map((p) => (
            <a
              key={p.label}
              href={p.url}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
            >
              <p.icon size={32} className="mx-auto text-hero-foreground mb-4" />
              <p className="text-lg font-semibold text-hero-foreground">{p.label}</p>
              <p className="text-sm text-hero-muted mt-1">{p.note}</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-5 rounded-full border-white/15 bg-white/5 text-hero-foreground hover:bg-white/10 gap-1.5"
              >
                <Download size={14} />
                {p.suffix}
              </Button>
            </a>
          ))}
        </motion.div>

        <p className="mt-10 text-xs text-hero-muted/60">
          Provide your actual download URLs to replace placeholder links.
        </p>
      </div>
    </section>
  );
};

export default DownloadSection;
