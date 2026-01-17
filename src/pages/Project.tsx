import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export function Project() {
  return (
    <motion.div
      id="about"
      className="md:p-10 text-lg leading-8 max-w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-20">
        <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="transform hover:scale-[1.02] transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProjectComp project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectComp({ project }: { project: project }) {
  return (
    <div className="flex flex-col gap-4 hover:bg-darkgray p-4 rounded-xl shadow-md transition-all h-full">
      <a
      href={project.live}
      target="_blank"
      >
      <img
        src={project.src}
        alt={project.title}
        className="rounded-xl shadow-sm opacity-70 hover:opacity-100 transition"
      />
      </a>
      <h2 className="font-semibold text-offwhite">{project.title}</h2>
      <p className="text-xs text-pink-100/80">{project.date}</p>
      <p className="text-offwhite/50 text-sm">{project.description}</p>

      <div className="flex flex-wrap gap-2 text-sm">
        <span className="text-offwhite/70 font-medium">Tech Stack:</span>
        {project.techstack.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs rounded-full border border-offwhite/30 text-offwhite/70"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-2 text-sm">
        <a
          href={project.github}
          target="_blank"
          className="text-lime hover:underline flex items-center gap-1"
        >
          GitHub <FaArrowUpRightFromSquare size={12} />
        </a>
        <a
          href={project.live}
          target="_blank"
          className="text-cyan-400 hover:underline flex items-center gap-1"
        >
          Live <FaArrowUpRightFromSquare size={12} />
        </a>
      </div>
    </div>
  );
}

interface project {
  src: string;
  title: string;
  description: string;
  techstack: string[];
  live: string;
  github: string;
  date: string;
}

const projects: project[] = [
  {
  src: "/assets/memoir-preview.png",
  title: "Memoir",
  description:
    "A full-stack personal knowledge management platform (v1 of Mindly) rebuilt with Next.js to save, organize, and browse links, videos, tweets, PDFs, and images. Designed with scalability, clean architecture, and future AI capabilities in mind.",
  techstack: [
    "Next.js",
    "React",
    "TypeScript",
    "NextAuth",
    "MongoDB",
    "Cloudinary",
    "TailwindCSS",
  ],
  live: "https://memoir-lake-seven.vercel.app", // update if different
  github: "https://github.com/Dip-Bala/memoir", // update if needed
  date: "January 2026 – Present",
},
  {
    src: "/assets/f1-insight-preview.png",
    title: "F1 Insight",
    description:
      "An AI-powered Formula 1 knowledge assistant using RAG, vector search, and real-time data ingestion to answer F1-related queries accurately.",
    techstack: [
      "Next.js",
      "TypeScript",
      "Pinecone",
      "LangChain",
      "Google Gemini",
      "TailwindCSS",
    ],
    live: "https://f1-bot.vercel.app",
    github: "https://github.com/Dip-Bala/formula1_chatbot",
    date: "December 2025",
  },

  {
    src: "/assets/mindly-preview.png",
    title: "Mindly",
    description:
  "The initial (v0) version of a productivity web app to save and organize links, images, videos, articles, and audio into a centralized second brain. Later evolved into Memoir using Next.js.",
    techstack: ["React", "Node.js", "TypeScript", "TailwindCSS", "MongoDB", "Express"],
    live: "https://www.appmindly.live/",
    github: "https://github.com/Dip-Bala/mindly-frontend",
    date: "June 2025",
  },
  {
    src: "/assets/flowboard-preview.png",
    title: "Flowboard",
    description:
      "A visual productivity and idea-mapping tool designed to organize thoughts, tasks, and workflows in an intuitive board-style interface.",
    techstack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    live: "https://f1-bot.vercel.app", 
    github: "https://github.com/Dip-Bala/flow_board",
    date: "December 2025",
  },
  {
    src: "/assets/photo-drive-preview.png",
    title: "Photo-Drive",
    description:
      "A secure cloud-based photo storage app with seamless uploads, JWT auth, and a clean UI.",
    techstack: ["React", "Node.js", "TypeScript", "Cloudinary", "TailwindCSS", "MongoDB", "Express"],
    live: "https://photo-drive-frontend.vercel.app/",
    github: "https://github.com/Dip-Bala/photo-drive-frontend",
    date: "August 2025",
  },
  {
    src: "/assets/chatroom-preview.png",
    title: "Chat Room",
    description:
      "A real-time group chat app with WebSocket support and simple clean UI.",
    techstack: ["React", "Node.js", "Socket.IO", "TailwindCSS"],
    live: "https://chat-room-frontend-chi.vercel.app",
    github: "https://github.com/Dip-Bala/chat-room-frontend",
    date: "July 2025",
  },
  

];
