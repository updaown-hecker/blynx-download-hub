import { useEffect, useRef, useCallback } from "react";

interface TrailDot {
  x: number;
  y: number;
  age: number;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<TrailDot[]>([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
    dotsRef.current.push({ x: e.clientX, y: e.clientY, age: 0 });
    if (dotsRef.current.length > 50) {
      dotsRef.current.shift();
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const dots = dotsRef.current;

      for (let i = dots.length - 1; i >= 0; i--) {
        dots[i].age += 1;
        if (dots[i].age > 40) {
          dots.splice(i, 1);
          continue;
        }

        const progress = dots[i].age / 40;
        const alpha = (1 - progress) * 0.6;
        const radius = (1 - progress) * 8 + 2;

        // Gradient from blue to purple
        const hue = 220 + progress * 50;
        ctx.beginPath();
        ctx.arc(dots[i].x, dots[i].y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 80%, 60%, ${alpha})`;
        ctx.fill();
      }

      // Main cursor glow
      const { x, y } = mouseRef.current;
      if (x > 0 && y > 0) {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 30);
        gradient.addColorStop(0, "hsla(220, 90%, 60%, 0.15)");
        gradient.addColorStop(0.5, "hsla(270, 80%, 60%, 0.05)");
        gradient.addColorStop(1, "hsla(220, 90%, 60%, 0)");
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default CursorTrail;
