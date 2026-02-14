import { motion } from "framer-motion";
import { Monitor, Apple, Terminal, Download, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    label: "Windows",
    icon: Monitor,
    suffix: ".exe",
    url: "/downloads/win",
    note: "Windows 10+",
    comingSoon: false,
  },
  {
    label: "Android",
    icon: Smartphone,
    suffix: ".apk",
    url: "/downloads/android",
    note: "Android 9+",
    comingSoon: false,
  },
  {
    label: "macOS",
    icon: Apple,
    suffix: ".dmg",
    url: "/downloads/mac",
    note: "macOS 11+",
    comingSoon: true,
  },
  {
    label: "Linux",
    icon: Terminal,
    suffix: ".AppImage",
    url: "/downloads/linux",
    note: "Ubuntu 20.04+",
    comingSoon: true,
  },
];

const DownloadSection = () => {
  return (
    <section id="download" className="relative py-28 px-6 overflow-hidden">

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Download size={40} className="mx-auto text-hero-glow mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground dark:text-white/80">
            Download Blynx
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground dark:text-white/50">
            Available for Windows, macOS, and Linux. Free and open source.
          </p>
          <p className="mt-2 text-sm text-muted-foreground/80 dark:text-white/30">
            Version 1.0.0 · Built with Electron
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {platforms.map((p) => (
            <Link
              key={p.label}
              to={p.comingSoon ? "#" : p.url}
              onClick={(e) => {
                if (p.comingSoon) e.preventDefault();
              }}
              aria-disabled={p.comingSoon}
              className={
                p.comingSoon
                  ? "group rounded-2xl border border-border bg-card/60 p-8 text-center opacity-60 cursor-not-allowed dark:border-white/10 dark:bg-white/5"
                  : "group rounded-2xl border border-border bg-card/60 p-8 text-center transition-all hover:bg-accent hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:border-white/20"
              }
            >
              <p.icon size={32} className="mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground dark:text-white">{p.label}</p>
              <p className="text-sm mt-1 text-muted-foreground dark:text-white/50">{p.note}</p>
              {p.comingSoon && (
                <p className="mt-2 text-xs font-semibold tracking-wide uppercase text-muted-foreground dark:text-white/50">
                  Coming soon
                </p>
              )}
              <Button
                variant="outline"
                size="sm"
                className="mt-5 rounded-full gap-1.5"
                disabled={p.comingSoon}
              >
                <Download size={14} />
                {p.suffix}
              </Button>
            </Link>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/portable"
            className="inline-flex items-center gap-2 text-sm hover:text-foreground transition-colors underline underline-offset-4 text-muted-foreground dark:hover:text-hero-foreground dark:text-white/50"
          >
            <Terminal size={16} className="text-muted-foreground dark:text-white/60" />
            Or build from source (portable)
          </Link>
        </motion.div>

        <p className="mt-10 text-xs opacity-60 text-muted-foreground/80 dark:text-white/30">
          Provide your actual download URLs to replace placeholder links.
        </p>
      </div>
    </section>
  );
};

export default DownloadSection;
