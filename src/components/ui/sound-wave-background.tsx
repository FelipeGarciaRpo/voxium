"use client";

import { useEffect, useRef } from "react";

interface SoundWaveBackgroundProps {
  colors?: string[];
  waveCount?: number;
  amplitude?: number;
  frequency?: number;
  speed?: number;
  lineWidth?: number;
  opacity?: number;
  className?: string;
}

export function SoundWaveBackground({
  colors = [
    "oklch(0.488 0.218 260)",
    "oklch(0.62 0.19 230)",
    "oklch(0.72 0.15 210)",
    "oklch(0.55 0.22 285)",
    "oklch(0.68 0.17 250)",
  ],
  waveCount = 5,
  amplitude = 60,
  frequency = 0.008,
  speed = 0.02,
  lineWidth = 2,
  opacity = 0.6,
  className = "",
}: SoundWaveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ajuste por device pixel ratio para pantallas retina
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const width = canvas.getBoundingClientRect().width;
      const height = canvas.getBoundingClientRect().height;
      const centerY = height / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = opacity;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";

      // Dibuja cada onda con un offset y color distinto
      for (let i = 0; i < waveCount; i++) {
        const color = colors[i % colors.length];
        const phaseOffset = (i * Math.PI) / waveCount;
        const amplitudeOffset = amplitude * (1 - i * 0.15);
        const verticalOffset = (i - waveCount / 2) * 15;

        ctx.strokeStyle = color;
        ctx.beginPath();

        // Recorre el ancho dibujando la sinusoide
        for (let x = 0; x <= width; x += 2) {
          // Combinamos dos sinusoides para que se vea más orgánico
          // (no una onda matemática perfecta, sino algo más tipo audio real)
          const y =
            centerY +
            verticalOffset +
            Math.sin(x * frequency + timeRef.current + phaseOffset) *
              amplitudeOffset +
            Math.sin(x * frequency * 2.3 + timeRef.current * 1.5 + phaseOffset) *
              amplitudeOffset *
              0.3;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      timeRef.current += speed;
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [colors, waveCount, amplitude, frequency, speed, lineWidth, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`h-full w-full ${className}`}
    />
  );
}