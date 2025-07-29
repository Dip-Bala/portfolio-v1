import { motion } from "framer-motion";
import Icon from "../ui/icons/Icon"; 

const icons = [
  { name: "react", label: "React" },
  { name: "js", label: "JavaScript" },
  { name: "java", label: "Java" },
  { name: "typescript", label: "TypeScript" },
  { name: "github", label: "GitHub" },
  { name: "tailwindcss", label: "Tailwind" },
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
  { name: "recoil", label: "Recoil" },
  {name: "digitalocean", label: "DigitalOcean"},


];
export const floatTransition = {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  } as const;
  

export function Skills() {
  return (
    <motion.div
    id="about"
    className="p-10 text-lg leading-8 max-w-full"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="flex flex-col gap-10 border border-offwhite/20 p-6">
      <h1 className="text-[100px] text-offwhite text-roboto font-bold font-stretch-ultra-condensed text-center text-nowrap underline underline-offset-2 decoration-lime py-10 border-b border-offwhite/20">
        Skill Set
      </h1>
      <h2 className="text-center text-offwhite/50">Tools I have learnt throughout my coding journey</h2>
    <div className="relative flex justify-center items-center h-[500px] w-full overflow-hidden ">
      <div className="relative w-[100px] h-[100px]  text-center">
        <h2 className="font-bold text-5xl text-lime/50">Stack</h2>
        {icons.map((icon, i) => {
          const angle = (i / icons.length) * 2 * Math.PI;
          const radius = 180 + Math.sin(i * 2) * 30;

          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={icon.name}
              className="absolute"
              style={{ top: "50%", left: "60%", translateX: -50, translateY: -50 }}
              animate={{
                x: [x, x + 10, x],
                y: [y, y - 10, y],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon name={icon.name} label={icon.label} size={16} />
            </motion.div>
          );
        })}
      </div>
    </div>
    </div>
    </motion.div>
  );
}
