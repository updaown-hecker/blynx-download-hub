import { motion } from "framer-motion";
import { Terminal, Copy, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    label: "Clone the repository",
    command: "git clone https://github.com/updaown-hecker/Blynx-Browser.git",
  },
  {
    label: "Install dependencies",
    command: "cd Blynx-Browser && npm install",
  },
];

const buildTargets = [
  { label: "Windows", command: "npm run build:win" },
  { label: "macOS", command: "npm run build:mac" },
  { label: "Linux", command: "npm run build:linux" },
];

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success("Copied to clipboard!");
};

const CodeBlock = ({ command }: { command: string }) => (
  <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-3 font-mono text-sm text-white dark:bg-black/50">
    <code className="flex-1 break-all">{command}</code>
    <button
      onClick={() => copyToClipboard(command)}
      className="shrink-0 p-1.5 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition-colors dark:hover:bg-white/10 dark:text-white/80"
      aria-label="Copy command"
    >
      <Copy size={16} />
    </button>
  </div>
);

const Portable = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative min-h-screen hero-gradient overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-hero-glow/5 blur-[140px] pointer-events-none dark:hidden" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white/90 mb-8 gap-2">
                <ArrowLeft size={16} /> Back to home
              </Button>
            </Link>

            <Terminal size={40} className="text-white/80 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white/90 tracking-tight">
              Build from Source
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl leading-relaxed">
              Build Blynx Browser yourself for a portable, self-contained version.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {steps.map((step, i) => (
              <div key={i}>
                <p className="text-sm font-semibold text-white/90 mb-2">
                  {i + 1}. {step.label}
                </p>
                <CodeBlock command={step.command} />
              </div>
            ))}

            <div>
              <p className="text-sm font-semibold text-white/90 mb-2">
                3. Build for your platform
              </p>
              <div className="space-y-3">
                {buildTargets.map((t) => (
                  <div key={t.label}>
                    <p className="text-xs text-white/60 mb-1">{t.label}</p>
                    <CodeBlock command={t.command} />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mt-10 dark:border-black/10 dark:bg-black/50">
              <p className="text-sm font-semibold text-white/90 mb-2">
                📁 Output Location
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                After building, your files will be in <code className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 text-xs font-mono dark:bg-white/10 dark:text-white/80">./dist/</code>. You'll find:
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-white/60 list-disc list-inside">
                <li>The packaged installer/executable (ready to distribute)</li>
                <li>An <code className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 text-xs font-mono dark:bg-white/10 dark:text-white/80">unpacked</code> folder — a portable version you can run directly without installing</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portable;
