import { motion } from "framer-motion";
import { useState } from "react";

export function Project() {
  return (
    <motion.div
    id="about"
    className="p-10 text-lg leading-8 max-w-full"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="flex flex-col gap-20 border border-offwhite/20 p-6">
        <h1 className="text-[100px] py-10 text-offwhite text-roboto font-bold font-stretch-ultra-condensed text-center text-nowrap underline underline-offset-2 decoration-lime  border-b border-offwhite/20">
          Projects
        </h1>
    <div id="projects" className="grid grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="flex flex-col lg:flex-row gap-10 justify-between relative z-10 border-gray-700 pb-10 border rounded-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ProjectComp project={project}/>
        </motion.div>
      ))}
    </div>
    </div>
    </motion.div>
  )
}

function ProjectComp({ project }: any) {
  const [state, setState] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-4 hover:bg-darkgray p-4 rounded-xl">
        <img src={project.src} alt={project.title} className="rounded-xl shadow-md opacity-70 hover:opacity-100" />
        <h2 className="font-semibold transition">{project.title}</h2>
        <p>{project.techstack}</p>
        <p>{project.description}</p>
        <a href={project.github}>github repo</a>
        <a href={project.live} target="_blank">live </a>
      </div>
    </>
  )
}



interface project {
  src: string;
  title: string;
  description: string,
  // features: string[],
  techstack: string, //change this to ReactNode[] later
  live: string;
  github: string;
  date: string;
}

const projects: project[] = [
  {
    src: "/assets/mindly-preview.png",
    title: "Mindly",
    description: "Developed a full-stack productivity web application that allows users to store and organize important content links(images, videos, articles, audio) in a centralized knowledge base",
    techstack: "MERN | Typescript | TailwindCSS",//change this to ReactNode[] later
    live: "https://www.appmindly.live/",
    github: "https://github.com/Dip-Bala/mindly-frontend",
    date: "June 2025"
  },
  {
    src: "/assets/chatroom-preview.png",
    title: "Chat Room",
    description: "",
    techstack: "string", //change this to ReactNode[] later
    live: "chat-room-frontend-chi.vercel.app",
    github: "https://github.com/Dip-Bala/chat-room-frontend",
    date: "July, 2025"
  }
]

