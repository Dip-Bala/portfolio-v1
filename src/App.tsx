import Deployments from "./ui/icons/Deployments"
import Languages from "./ui/icons/Languages"
import WebDev from "./ui/icons/WebDev"
import Tools from "./ui/icons/Tools"
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-darkblack text-offwhite flex justify-center min-h-screen">
      <div className="w-full px-6 md:px-20 lg:px-40 py-10">
        <Header />
        <Navbar />
        <Hero />
        <About />
        <SkillSet />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App

function Hero() {
  return (
    <div className="py-20">
      <h1 className="text-[200px] text-offwhite text-roboto font-medium font-stretch-ultra-condensed text-center text-nowrap hover:underline hover:underline-offset-2 decoration-lime">
        DIPANWITA BALA
      </h1>
      <h2 className="text-[100px] text-offwhite text-roboto font-normal font-stretch-ultra-condensed text-center text-nowrap hover:underline hover:underline-offset-2 decoration-pink-500">FULLSTACK DEVELOPER</h2>
    </div>
  )
}

function About() {
  return (
    <motion.div
      id="about"
      className="py-30 text-lg leading-8 max-w-full "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-20">
        <h1 className="text-[100px] text-offwhite text-roboto font-normal font-stretch-ultra-condensed text-center text-nowrap hover:underline hover:underline-offset-2 decoration-lime  ">
          ABOUT
        </h1>
        <div className="flex items-center justify-between gap-20 text-offwhite/50">
          <div className="relative rounded-full shadow-2xl shadow-offwhite/10">
            <img src="/assets/photo1.png" className="object-cover w-full h-full" alt="Dipanwita Bala" />
          </div>
          <div className="w-[70%]">
            <p>
              Hi, I’m Dipanwita. I'm a Software Developer. I craft pretty and functional web applications.  My stack includes TypeScript, Reactjs, Node.js, MongoDB with a dash of UX obsession and clean design. <br /><br />
              I'm currently building <a className="underline decoration-2 text-pink-500" href="https://www.appmindly.live/" target="_blank">Mindly</a> - a web solution for unorganised and scattered imporatnt links. <br ></br>
              I love to experiment with CSS designs sometimes. But I like backend more to be honest.
              <br></br>
              {/* I can not do without a cup of coffee. I enjoy painting, dancing and F.R.I.E.N.D.S.  */}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Header() {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center justify-between w-full fixed font-roboto">
        <h1 className="text-xl font-medium font-sans italic text-lightturquoise">db</h1>
        <div className="flex items-center justify-end gap-4 ">
          <a href="https://github.com/Dip-Bala" target="_blank" rel="noreferrer"><FaGithub className="hover:text-lightturquoise transition" /></a>
          <a href="https://www.linkedin.com/in/dipanwita-bala-21999c/" target="_blank" rel="noreferrer"><FaLinkedin className="hover:text-lightturquoise transition" /></a>
          <a href="mailto:dipanwita.bala.02@gmail.com"><FaEnvelope className="hover:text-lightturquoise transition" /></a>
          <a href="/assets/resume.pdf" download className="underline hover:text-lightturquoise">Resume</a>
        </div>
      </div>
    </motion.div>
  )
}

function Navbar() {
  return (
    // <nav className="flex md:justify-between items-center text-lg gap-4 mb-6 w-screen fixed">

    // </nav>
    <div className="flex gap-8 justify-between text-md font-semibold fixed bottom-10">
      <a href="#home" className="hover:text-lightturquoise transition underline">Home</a>
      <a href="#about" className="hover:text-lightturquoise transition underline">About</a>
      <a href="#skills" className="hover:text-lightturquoise transition ">Skills</a>
      <a href="#projects" className="hover:text-lightturquoise transition ">Projects</a>
      <a href="#contact" className="hover:text-lightturquoise transition ">Contact</a>
    </div>
  )
}

function SkillSet() {
  return (
    <div id="skills" className="py-30 flex flex-col gap-4">
      <Languages />
      <WebDev />
      <Tools />
      <Deployments />
    </div>
  )
}

function Projects() {
  return (
    <div id="projects" className="grid grid-cols-2">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="flex flex-col lg:flex-row gap-10 justify-between relative z-10 border-b border-gray-700 pb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ProjectComp project={project}/>
        </motion.div>
      ))}
    </div>
  )
}

function ProjectComp({ project }: any) {
  return (
    <>
      <div className="flex flex-col gap-4 hover:bg-darkgray p-4 rounded-xl">
        {/* <p className="text-sm md:text-base">{project.description}</p> */}
        <img src={project.src} alt={project.title} className="rounded-xl shadow-md opacity-70 hover:opacity-100" />
        <h2 className=" hover:text-lightturquoise transition">{project.title}</h2>
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

function Contact() {
  return (
    <motion.div
      id="contact"
      className="py-20 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-semibold text-lightturquoise mb-4">Contact</h2>
      <p className="mb-4">Let's build something together! Drop me a line at <a href="mailto:dipanwita.bala@example.com" className="text-transturquoise underline">dipanwita.bala@example.com</a></p>
      <div className="flex justify-center gap-4 text-2xl">
        <a href="https://github.com/Dip-Bala" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/dipanwita-bala" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="mailto:dipanwita.bala@example.com"><FaEnvelope /></a>
      </div>
    </motion.div>
  )
}

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

