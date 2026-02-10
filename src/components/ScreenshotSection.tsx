import { motion } from "framer-motion";

const ScreenshotSection = () => {
  return (
    <section id="screenshots" className="py-28 px-6 bg-muted/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">In Action</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            See Blynx in action.
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-3xl border border-border bg-card shadow-xl overflow-hidden">
            {/* Mock title bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-muted/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-[hsl(45,80%,55%)]" />
                <div className="w-3 h-3 rounded-full bg-[hsl(130,60%,50%)]" />
              </div>
              <div className="flex-1 mx-8">
                <div className="mx-auto max-w-sm h-7 rounded-md bg-muted flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">blynx://newtab</span>
                </div>
              </div>
            </div>
            {/* Placeholder for screenshot */}
            <div className="aspect-[16/9] bg-gradient-to-br from-muted to-background flex items-center justify-center">
              <div className="text-center space-y-2">
                <p className="text-2xl font-semibold text-foreground/60">Browser Screenshot</p>
                <p className="text-sm text-muted-foreground">Upload your Blynx screenshot to showcase here</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScreenshotSection;
