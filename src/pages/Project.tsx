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
      </div>
      {/* <div className="bg-transindigo/80 flex flex-col p-4 rounded-2xl w-full lg:w-1/2">
        <h3 className="text-xl font-semibold mb-2">Features</h3>
      </div> */}
    </>
  )
}
// function Features(){
//   return (
//     {project.features.map((feature, idx) => (
//   <div key={idx} className="font-light text-base p-2 border-b border-b-transturquoise">
//     <div className="flex gap-2 items-start">
//       <span className="font-bold text-sm text-transturquoise bg-darkgray px-2 py-1 rounded-full">{idx + 1}</span>
//       <p>{feature}</p>
//     </div>
//   </div>
// ))}
//   )
// }



interface project {
  src: string;
  title: string;
  description: string,
  features: string[],
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
    features: ["Developed a full-stack productivity web application that allows users to store and organize important content links(images, videos, articles, audio) in a centralized knowledge base.",
      "Implemented both frontend and backend using TypeScript for enhanced type safety and maintainability. Designed robust Mongoose schemas and enforced strict validation using Zod for request payloads.",
      "Implemented secure user authentication using JWT.",
      "Used React Query for server side state management, data fetching and caching.",
    ],
    techstack: "",//change this to ReactNode[] later
    live: "https://www.appmindly.live/",
    github: "https://github.com/Dip-Bala/mindly-frontend",
    date: "June 2025"
  },
  {
    src: "/assets/chatroom-preview.png",
    title: "Chat Room",
    description: "",
    features: ["Developed a full-stack productivity web application that allows users to store and organize important content links(images, videos, articles, audio) in a centralized knowledge base.",
      "‣ Implemented both frontend and backend using TypeScript for enhanced type safety and maintainability. Designed robust Mongoose schemas and enforced strict validation using Zod for request payloads.",
      "‣ Implemented secure user authentication using JWT.",
      "‣ Used React Query for server side state management, data fetching and caching.",
      "‣ Created a Chrome Extension that lets users save content directly from the browser in just a few clicks.",
      "‣ Deployed the server application on Render and frontend on Vercel for easy and reliable hosting."],
    techstack: "string", //change this to ReactNode[] later
    live: "chat-room-frontend-chi.vercel.app",
    github: "https://github.com/Dip-Bala/chat-room-frontend",
    date: "July, 2025"
  }
]

