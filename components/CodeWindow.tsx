"use client";

import { useEffect, useRef, useState } from "react";

const CODE = `const developer = {
  name: "Saurabh Lalit Pande",
  role: "Full Stack Developer",
  stack: ["Node.js", "React", "Next.js"],
  focus: "APIs & performance",
  available: true,
};`;

function highlight(text: string) {
  let out = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  out = out.replace(/"([^"]*)"/g, '<span class="tok-string">&quot;$1&quot;</span>');
  out = out.replace(/\b(const|true|false)\b/g, '<span class="tok-keyword">$1</span>');
  out = out.replace(/([a-zA-Z_$][\w$]*)(:)/g, '<span class="tok-key">$1</span>$2');
  return out;
}

export default function CodeWindow() {
  const [typedLength, setTypedLength] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedLength(CODE.length);
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
          setTypedLength(i);
          if (i >= CODE.length) {
            clearInterval(interval);
            setDone(true);
          }
        }, 42);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="code-window">
      <div className="code-window-bar">
        <span className="code-window-dot code-window-dot--red" />
        <span className="code-window-dot code-window-dot--yellow" />
        <span className="code-window-dot code-window-dot--green" />
        <span className="code-window-filename">profile.js</span>
      </div>
      <pre className="code-window-body">
        <code
          dangerouslySetInnerHTML={{ __html: highlight(CODE.slice(0, typedLength)) }}
        />
        <span
          className={done ? "terminal-cursor" : "terminal-cursor terminal-cursor--typing"}
        />
      </pre>
    </div>
  );
}
