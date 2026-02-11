import { motion } from "framer-motion";

const orbs = [
  {
    color: "from-[hsl(220,90%,56%)] to-[hsl(270,80%,60%)]",
    size: "w-[500px] h-[500px]",
    position: "top-[10%] left-[20%]",
    animate: { x: [0, 120, -80, 0], y: [0, -100, 60, 0], scale: [1, 1.3, 0.8, 1] },
    duration: 20,
  },
  {
    color: "from-[hsl(270,80%,60%)] to-[hsl(320,70%,55%)]",
    size: "w-[400px] h-[400px]",
    position: "top-[50%] right-[10%]",
    animate: { x: [0, -100, 80, 0], y: [0, 80, -60, 0], scale: [1, 0.7, 1.2, 1] },
    duration: 25,
  },
  {
    color: "from-[hsl(180,70%,50%)] to-[hsl(220,90%,56%)]",
    size: "w-[350px] h-[350px]",
    position: "bottom-[10%] left-[40%]",
    animate: { x: [0, 80, -120, 0], y: [0, -70, 50, 0], scale: [1, 1.15, 0.85, 1] },
    duration: 18,
  },
  {
    color: "from-[hsl(320,70%,55%)] to-[hsl(20,80%,55%)]",
    size: "w-[300px] h-[300px]",
    position: "top-[30%] left-[60%]",
    animate: { x: [0, -60, 100, 0], y: [0, 100, -80, 0], scale: [1, 1.2, 0.9, 1] },
    duration: 22,
  },
  {
    color: "from-[hsl(160,60%,45%)] to-[hsl(200,80%,50%)]",
    size: "w-[250px] h-[250px]",
    position: "bottom-[30%] left-[10%]",
    animate: { x: [0, 90, -50, 0], y: [0, -50, 90, 0], scale: [1, 0.85, 1.1, 1] },
    duration: 16,
  },
];

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-hero" />

      {/* Animated gradient orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute ${orb.position} ${orb.size} rounded-full bg-gradient-to-br ${orb.color} opacity-[0.07] dark:opacity-[0.06] blur-[120px] pointer-events-none`}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
};

export default AnimatedBackground;
