"use client";

import { useEffect, useState } from "react";

export default function HeroTagline({ text }: { text: string }) {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(text);
      setDone(true);
      return;
    }

    let i = 0;
    let interval: ReturnType<typeof setInterval>;

    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setTyped(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 35);
    }, 400);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [text]);

  return (
    <>
      <span aria-hidden="true">
        {typed}
        <span
          className={done ? "terminal-cursor" : "terminal-cursor terminal-cursor--typing"}
        />
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}
