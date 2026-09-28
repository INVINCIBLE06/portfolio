"use client";

import { useEffect, useRef, useState } from "react";
import { about, experience, projects, skills, site } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";

type Line = { type: "input" | "output"; text: string };

function buildResponses(): Record<string, string> {
  const githubUrl = site.socials.find((s) => s.label === "GitHub")?.url ?? "";
  return {
    help: [
      "Available commands:",
      "  about        short bio",
      "  experience   work history",
      "  projects     things I've built",
      "  skills       tools & practices",
      "  contact      how to reach me",
      "  resume       plain-text resume",
      "  whoami",
      "  clear        clear the screen",
    ].join("\n"),
    whoami: `${site.name} — ${site.role}`,
    about: about.paragraphs.join("\n\n"),
    experience: experience
      .map((e) => `${e.period}  ${e.role} @ ${e.company}\n  ${e.summary}`)
      .join("\n\n"),
    projects: projects
      .map((p) => `${p.name} (${p.period})\n  ${p.description}`)
      .join("\n\n"),
    skills: skills.map((g) => `${g.category}: ${g.items.join(", ")}`).join("\n"),
    contact: `Email: ${site.email}${githubUrl ? `\nGitHub: ${githubUrl}` : ""}`,
    resume: [
      `${site.name} — ${site.role}`,
      site.location,
      "",
      site.summary,
      "",
      "EXPERIENCE",
      ...experience.map((e) => `- ${e.role}, ${e.company} (${e.period})`),
      "",
      "SKILLS",
      ...skills.map((g) => `- ${g.category}: ${g.items.join(", ")}`),
      "",
      `Contact: ${site.email}`,
    ].join("\n"),
  };
}

const WELCOME = "Type 'help' to see available commands.";
const SUGGESTIONS = ["help", "about", "projects", "resume", "sudo hire me"];

export default function Terminal() {
  const responses = useRef(buildResponses()).current;
  const [lines, setLines] = useState<Line[]>([{ type: "output", text: WELCOME }]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyPos, setHistoryPos] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [lines]);

  function run(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;

    const key = cmd.toLowerCase();
    if (key === "clear") {
      setLines([]);
      return;
    }

    const next: Line[] = [...lines, { type: "input", text: cmd }];
    if (key.startsWith("sudo")) {
      next.push({ type: "output", text: "Nice try — but yes, I'm available for hire." });
    } else if (responses[key]) {
      next.push({ type: "output", text: responses[key] });
    } else {
      next.push({
        type: "output",
        text: `command not found: ${cmd}. Type 'help' for a list of commands.`,
      });
    }
    setLines(next);
  }

  function runSuggestion(cmd: string) {
    setCmdHistory((h) => [...h, cmd]);
    run(cmd);
    setInput("");
    setHistoryPos(null);
    inputRef.current?.focus();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (input.trim()) setCmdHistory((h) => [...h, input.trim()]);
      run(input);
      setInput("");
      setHistoryPos(null);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!cmdHistory.length) return;
      const nextPos = historyPos === null ? cmdHistory.length - 1 : Math.max(0, historyPos - 1);
      setHistoryPos(nextPos);
      setInput(cmdHistory[nextPos]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyPos === null) return;
      const nextPos = historyPos + 1;
      if (nextPos >= cmdHistory.length) {
        setHistoryPos(null);
        setInput("");
      } else {
        setHistoryPos(nextPos);
        setInput(cmdHistory[nextPos]);
      }
    }
  }

  return (
    <section id="terminal" className="hairline">
      <div className="mx-auto max-w-wide px-6 py-16 md:px-10 md:py-24">
        <SectionLabel text="terminal" />
        <h2 className="mt-4 font-display text-2xl font-semibold text-ink md:text-3xl">
          Or just ask the terminal
        </h2>
        <p className="mt-3 max-w-content text-[15px] text-slate">
          Type a command below — try <span className="font-mono text-accent">help</span>.
        </p>

        <div className="mt-5 flex max-w-content flex-wrap gap-2">
          {SUGGESTIONS.map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => runSuggestion(cmd)}
              className="rounded-full border border-hairline px-3 py-1 font-mono text-xs text-slate transition-colors hover:border-accent/40 hover:bg-accent-dim hover:text-accent"
            >
              {cmd}
            </button>
          ))}
        </div>

        <div
          className="code-window mt-6 max-w-content cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="code-window-bar">
            <span className="code-window-dot code-window-dot--red" />
            <span className="code-window-dot code-window-dot--yellow" />
            <span className="code-window-dot code-window-dot--green" />
            <span className="code-window-filename">bash — interactive</span>
            <span className="ml-auto flex items-center gap-1.5">
              <span className="terminal-live-dot" />
              <span className="font-mono text-[0.65rem] text-slate">live</span>
            </span>
          </div>
          <div className="terminal-scroll code-window-body max-h-80 overflow-y-auto">
            {lines.map((line, i) => (
              <div
                key={i}
                className={
                  line.type === "input"
                    ? "terminal-line-in whitespace-pre-wrap text-accent"
                    : "terminal-line-in mb-3 whitespace-pre-wrap text-ink"
                }
              >
                {line.type === "input" ? `$ ${line.text}` : line.text}
              </div>
            ))}
            <div className="flex items-center gap-2">
              <span className="text-accent">$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-label="Terminal command input"
                placeholder="try 'help'"
                className="terminal-input flex-1 bg-transparent font-mono text-[0.82rem] text-ink outline-none"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
