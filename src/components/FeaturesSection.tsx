import { motion } from "framer-motion";
import { Layers, ShieldCheck, Link, Puzzle, SunMoon, Keyboard } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Tab Management",
    description: "Organize your browsing with intuitive tab groups, pinning, and quick switching.",
  },
  {
    icon: ShieldCheck,
    title: "Built-in Ad Blocker",
    description: "Browse cleaner and faster with a powerful ad blocker enabled by default.",
  },
  {
    icon: Link,
    title: "Custom Protocols",
    description: "Navigate with blynx:// protocols for a seamless internal browsing experience.",
  },
  {
    icon: Puzzle,
    title: "Extension Support",
    description: "Enhance your browser with extensions and customize it to fit your workflow.",
  },
  {
    icon: SunMoon,
    title: "Dark & Light Mode",
    description: "Switch between themes or let the browser match your system preference automatically.",
  },
  {
    icon: Keyboard,
    title: "Keyboard Shortcuts",
    description: "Power-user shortcuts for navigation, tabs, and everything in between.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-28 px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Everything you need to browse.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Blynx packs powerful features into a lightweight, beautiful package.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="feature-card-glow rounded-2xl border border-border bg-card p-8"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <f.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
