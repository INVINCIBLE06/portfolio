import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiExpress,
  SiGithub,
  SiJest,
  SiSequelize,
  SiMongoose,
} from "react-icons/si";
import { TbApi, TbBraces, TbBolt } from "react-icons/tb";

type Entry = {
  icon: IconType;
  // Brand hex color. Omitted for logos whose brand mark is black/white
  // (Next.js, Express, GitHub) — those inherit the surrounding text
  // color instead, so they flip with light/dark theme like a real
  // monochrome wordmark would.
  color?: string;
};

// Maps a skill label from lib/data.ts to its logo. Add an entry here
// whenever a new skill is added and a matching logo should show up.
const ICONS: Record<string, Entry> = {
  "JavaScript (ES6+)": { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs },
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss, color: "#1572B6" },
  "Express.js": { icon: SiExpress },
  "REST APIs": { icon: TbApi },
  "API Design": { icon: TbBraces },
  "Async Processing": { icon: TbBolt },
  GitHub: { icon: SiGithub },
  Jest: { icon: SiJest, color: "#C21325" },
  "Sequelize ORM": { icon: SiSequelize, color: "#52B0E7" },
  "Mongoose ODM": { icon: SiMongoose, color: "#880000" },
};

export default function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const entry = ICONS[name];
  if (!entry) return null;
  const { icon: Icon, color } = entry;
  return (
    <Icon
      className={className}
      style={color ? { color } : undefined}
      aria-hidden="true"
    />
  );
}
