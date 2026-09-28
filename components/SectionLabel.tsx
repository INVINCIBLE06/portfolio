"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionLabel({ text }: { text: string }) {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(text);
      setDone(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        let i = 0;
        const interval = setInterval(() => {
          i += 1;
          setTyped(text.slice(0, i));
          if (i >= text.length) {
            clearInterval(interval);
            setDone(true);
          }
        }, 45);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text]);

  return (
    <span ref={ref} className="terminal-label">
      <span className="terminal-label-prompt">$</span>
      {typed}
      <span className={done ? "terminal-cursor" : "terminal-cursor terminal-cursor--typing"} />
    </span>
  );
}
