import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

const icons = [
  { name: "react", label: "React" },
  { name: "js", label: "JavaScript" },
  { name: "java", label: "Java" },
  { name: "typescript", label: "TypeScript" },
  { name: "github", label: "GitHub" },
  { name: "tailwindcss", label: "TailwindCSS" },
  { name: "nodejs", label: "Node.js" },
  { name: "expressjs", label: "Express" },
  { name: "mongodb", label: "MongoDB" },
  { name: "render", label: "Render" },
  { name: "figma", label: "Figma" },
  { name: "vercel", label: "Vercel" },
  { name: "postman", label: "Postman" },
  { name: "zod", label: "Zod" },
  { name: "bootstrap4", label: "Bootstrap" },
  { name: "jquery", label: "JQuery" },
  { name: "reactquery", label: "React-Query" },
  { name: "digitalocean", label: "DigitalOcean" },
];

export function Skills() {
  // Duplicate icons for infinite scroll illusion
  // const scrollingIcons = [...icons, ...icons];

  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-20 flex flex-col gap-6 ">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "30%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex px-4 py-2 items-center gap-2 border border-darkgray rounded-full  min-w-fit"
          >
            <StackIcon name={icon.name} variant="light" className="w-8 h-8 bg-lime-50 " />
            <span className="text-text-80 whitespace-nowrap">{icon.label}</span>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-30%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex px-4 py-2 items-center gap-2 border border-darkgray rounded-full  min-w-fit"
          >
            <StackIcon name={icon.name} variant="light" className="w-8 h-8 bg-lime-50" />
            <span className="text-offwhite/80 whitespace-nowrap">{icon.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
