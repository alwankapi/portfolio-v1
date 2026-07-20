"use client";

import { useEffect, useRef, useCallback } from "react";

export default function KineticGrid({
  background = "#0a0a0a",
  dotColor = "#F4EBD0",
  lineColor = "#D01B1B",
  trailColor = "#D01B1B",
  spacing = 40,
  radius = 300,
  strength = 3,
  trail = true,
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const trailPointsRef = useRef([]);
  const animationFrameRef = useRef(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;

    // Clear canvas
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);

    const { x: mouseX, y: mouseY } = mouseRef.current;

    // Draw dots and lines
    for (let x = 0; x <= width; x += spacing) {
      for (let y = 0; y <= height; y += spacing) {
        const dx = mouseX - x;
        const dy = mouseY - y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius) {
          const force = (1 - distance / radius) * strength;
          const offsetX = (dx / distance) * force * 10 || 0;
          const offsetY = (dy / distance) * force * 10 || 0;

          // Draw lines to nearby points
          if (x + spacing <= width) {
            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.globalAlpha = force * 0.5;
            ctx.lineWidth = 1;
            ctx.moveTo(x + offsetX, y + offsetY);
            ctx.lineTo(x + spacing, y);
            ctx.stroke();
          }

          if (y + spacing <= height) {
            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.globalAlpha = force * 0.5;
            ctx.lineWidth = 1;
            ctx.moveTo(x + offsetX, y + offsetY);
            ctx.lineTo(x, y + spacing);
            ctx.stroke();
          }

          // Draw affected dot
          ctx.beginPath();
          ctx.fillStyle = trailColor;
          ctx.globalAlpha = force;
          ctx.arc(x + offsetX, y + offsetY, 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Draw normal dot
          ctx.beginPath();
          ctx.fillStyle = dotColor;
          ctx.globalAlpha = 0.3;
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Draw trail
    if (trail && trailPointsRef.current.length > 1) {
      ctx.globalAlpha = 0.6;
      ctx.strokeStyle = trailColor;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(trailPointsRef.current[0].x, trailPointsRef.current[0].y);

      for (let i = 1; i < trailPointsRef.current.length; i++) {
        ctx.lineTo(trailPointsRef.current[i].x, trailPointsRef.current[i].y);
      }
      ctx.stroke();

      // Fade trail
      trailPointsRef.current = trailPointsRef.current.slice(-30);
    }

    ctx.globalAlpha = 1;
    animationFrameRef.current = requestAnimationFrame(draw);
  }, [background, dotColor, lineColor, trailColor, spacing, radius, strength, trail]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (trail) {
        trailPointsRef.current.push({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    animationFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [draw, trail]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0"
      style={{ background }}
    />
  );
}