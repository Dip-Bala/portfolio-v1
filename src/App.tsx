
import Deployments from "./ui/icons/Deployments"
import Languages from "./ui/icons/Languages"
import WebDev from "./ui/icons/WebDev"
import Tools from "./ui/icons/tools"

function App() {
  return (
    <div className="bg-darkblack text-offwhite flex justify-center z">
      <div className="w-full px-40 py-10">
      <Navbar />
      {/* <SkillSet /> */}
      <Projects />
      </div>
    </div>
  )
}

export default App



function Navbar(){
  return <div className="flex w-full justify-between items-center text-lg">
    <div className="text-lightturquoise border border-lightturquoise rounded-4xl py-2 px-4 hover:bg-lightturquoise hover:text-darkblack">
      Dipanwita Bala
    </div>
    <div className="flex gap-4">
        <div>
          About
        </div>
        <div>
          Skill Set
        </div>
        <div>
          Projects
        </div>
        <div>
          Contact
        </div>
    </div>
  </div>
}

function SkillSet(){
  return (
    <div className="p-10 flex flex-col gap-4">
  <Languages/>
  <WebDev />
  <Tools />
  <Deployments />
    </div>

  )
}

function Projects(){
  return(
    <div className="flex flex-col gap-10">
      {
        projects.map((project, index) => {
          return <div key={index} className="flex gap-20 p-10 relative z-10 ">
              <div className="flex flex-col gap-4 pr-20 hover:bg-darkgray">
                <h2 className="text-4xl font-bold hover:bg-bg-transindigo/70">{project.title}</h2>
                <p>{project.description}</p>
                <img src={project.src} className=""/>
              </div>
              <div className="bg-transindigo/80 flex flex-col p-2 rounded-2xl">
                <div className="absolute transform rotate-270 text-5xl font-black font-stretch-expanded font-sans -z-10 right-80 top-30 text-darkgray">{project.title}</div>
                <p>Features</p>
                {
                  project.features.map((feature, index) => {
                    return <div key={index} className="font-bold flex flex-col gap-4 p-2 border-b border-b-transturquoise">
                      <div className="flex gap-2 ">
                      <span className="font-light text-sm rounded-full text-transturquoise h-fit w-fit px-1.5 bg-darkgray">{index + 1}</span><p>{feature}</p>
                      </div>
                    </div>
                  })
                }
              </div>
          </div>
        })
      }
      <div >

      </div>
    </div>
  )
}

interface project{
  src : string;
  title : string;
  description: string,
  features : string[],
  techstack : string, //change this to ReactNode[] later
  live : string;
  github: string;
  date : string;
}

const projects: project[] = [
  {
  src : "/assets/mindly-preview.png",
  title : "Mindly",
  description: "Developed a full-stack productivity web application that allows users to store and organize important content links(images, videos, articles, audio) in a centralized knowledge base",
  features : ["Developed a full-stack productivity web application that allows users to store and organize important content links(images, videos, articles, audio) in a centralized knowledge base.",
"Implemented both frontend and backend using TypeScript for enhanced type safety and maintainability. Designed robust Mongoose schemas and enforced strict validation using Zod for request payloads.",
"Implemented secure user authentication using JWT.",
"Used React Query for server side state management, data fetching and caching.",
],
  techstack : "",//change this to ReactNode[] later
  live : "https://www.appmindly.live/",
  github: "https://github.com/Dip-Bala/mindly-frontend",
  date : "June 2025"
  },
  {
    src : "/assets/chatroom-preview.png",
  title : "Chat Room",
  description: "",
  features : ["Developed a full-stack productivity web application that allows users to store and organize important content links(images, videos, articles, audio) in a centralized knowledge base.",
    "‣ Implemented both frontend and backend using TypeScript for enhanced type safety and maintainability. Designed robust Mongoose schemas and enforced strict validation using Zod for request payloads.",
    "‣ Implemented secure user authentication using JWT.",
    "‣ Used React Query for server side state management, data fetching and caching.",
    "‣ Created a Chrome Extension that lets users save content directly from the browser in just a few clicks.",
    "‣ Deployed the server application on Render and frontend on Vercel for easy and reliable hosting."],
  techstack : "string", //change this to ReactNode[] later
  live : "chat-room-frontend-chi.vercel.app",
  github: "https://github.com/Dip-Bala/chat-room-frontend",
  date : "July, 2025"
  }
]