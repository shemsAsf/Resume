"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";

interface GlowDot {
  x: number;
  y: number;
  r: number;
  alpha: number;
  scale: number;
  skewX: number;
  skewY: number;
}

interface Props {
  count?: number;
}

const DEFAULT_COLOR = "rgb(40,255,200)";

export default function RandomGlowBackgroundCanvas({ count = 30 }: Props) {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotsRef = useRef<GlowDot[]>([]);
  const resizeRaf = useRef<number | null>(null);
  const frameRaf = useRef<number | null>(null);
  const flickerPhaseRef = useRef<number>(0);

  const dotTemplate = useMemo(() => {
    const desktopBase = 500;
    const desktopRand = 250;
    const mobileBase = 60;
    const mobileRand = 120;

    const n = isMobile ? Math.max(6, Math.round(count * 0.33)) : count;

    const arr: GlowDot[] = [];
    for (let i = 0; i < n; i++) {
      const xPercent = Math.random() < 0.5
        ? -40 + Math.random() * 30
        : 60 + Math.random() * 30;
      const yPercent = Math.random() * 130 - 15;

      const base = isMobile ? mobileBase : desktopBase;
      const jitter = isMobile ? mobileRand : desktopRand;
      const size = base + Math.random() * jitter;

      const scale = Math.random() * 1.5 + 0.8;
      const skewX = Math.random() * 10;
      const skewY = Math.random() * 10;
      const alpha = 0.5 + Math.random() * 0.5;

      arr.push({
        x: xPercent,
        y: yPercent,
        r: size / 2,
        alpha,
        scale,
        skewX,
        skewY,
      });
    }
    return arr;
  }, [count, isMobile]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateDotsToPx = useCallback((w: number, h: number) => {
    dotsRef.current = dotTemplate.map((d) => ({
      ...d,
      x: (d.x / 100) * w,
      y: (d.y / 100) * h,
      r: d.r * (isMobile ? 0.6 : 1),
    }));
  }, [dotTemplate, isMobile]);

  const drawDot = (ctx: CanvasRenderingContext2D, d: GlowDot, flickerPhase: number) => {
    const { x, y, r, alpha, scale, skewX, skewY } = d;
    ctx.save();
    ctx.translate(x, y);
    ctx.transform(1, Math.tan((skewY * Math.PI) / 180), Math.tan((skewX * Math.PI) / 180), 1, 0, 0);
    ctx.scale(scale, scale);
    const flickerAlpha = alpha * (0.75 + 0.25 * Math.sin(flickerPhase + x * 0.01 + y * 0.01));
    const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
    grd.addColorStop(0, rgba(DEFAULT_COLOR, flickerAlpha));
    grd.addColorStop(0.5, rgba(DEFAULT_COLOR, flickerAlpha * 0.4));
    grd.addColorStop(1, rgba(DEFAULT_COLOR, 0));
    ctx.fillStyle = grd;
    ctx.fillRect(-r, -r, r * 2, r * 2);
    ctx.restore();
  };

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = Math.ceil(rect.width);
    const h = Math.ceil(rect.height);

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      updateDotsToPx(w, h);
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, w, h);
    const oldComp = ctx.globalCompositeOperation;
    ctx.globalCompositeOperation = "lighter";
    const phase = flickerPhaseRef.current;
    for (const d of dotsRef.current) {
      drawDot(ctx, d, phase);
    }
    ctx.globalCompositeOperation = oldComp;
  }, [updateDotsToPx]);

  const animate = useCallback(() => {
    flickerPhaseRef.current += 0.02;
    render();
    frameRaf.current = requestAnimationFrame(animate);
  }, [render]);

  useEffect(() => {
    if (!mounted) return;
    frameRaf.current = requestAnimationFrame(animate);
    return () => {
      if (frameRaf.current) cancelAnimationFrame(frameRaf.current);
    };
  }, [mounted, animate]);

  useEffect(() => {
    if (!mounted) return;
    const onResize = () => {
      if (resizeRaf.current) cancelAnimationFrame(resizeRaf.current);
      resizeRaf.current = requestAnimationFrame(render);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mounted, render]);

  useEffect(() => {
    if (!mounted) return;
    render();
  }, [mounted, dotTemplate, render]);

  if (!mounted) return null;

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-visible opacity-40 mix-blend-screen"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}

function rgba(color: string, alpha: number): string {
  if (color.startsWith("rgb")) {
    const m = color.match(/rgba?\(([^)]+)\)/i);
    if (m) {
      const parts = m[1].split(",").map((p) => p.trim()).slice(0, 3);
      return `rgba(${parts.join(",")},${alpha})`;
    }
  }
  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const len = hex.length;
    const parse = (h: string) => parseInt(h, 16);
    let r = 0, g = 0, b = 0;
    if (len === 3) {
      r = parse(hex[0] + hex[0]);
      g = parse(hex[1] + hex[1]);
      b = parse(hex[2] + hex[2]);
    } else if (len >= 6) {
      r = parse(hex.slice(0, 2));
      g = parse(hex.slice(2, 4));
      b = parse(hex.slice(4, 6));
    }
    return `rgba(${r},${g},${b},${alpha})`;
  }
  return color;
}
