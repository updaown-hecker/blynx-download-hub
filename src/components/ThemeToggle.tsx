import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const ThemeToggle = () => {
  return (
    <AnimatedThemeToggler className="text-hero-foreground hover:bg-white/10 dark:text-hero-foreground" />
  );
};

export default ThemeToggle;
