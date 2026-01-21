import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Project } from "./pages/Project";
import { Skills } from './ui/components/Skills';
import { Navbar } from './ui/components/Navbar';
import Footer from './ui/components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


const MainLayout = () => {
  return (
    <div className="bg-darkblack text-offwhite min-h-screen">
      {/* <Header /> */}
      <Navbar />
      <div className="px-6 md:px-10 lg:px-20 ">
        <Outlet />
      </div>
    </div>
  );
};




// function Navbar() {
//   const navigate = useNavigate();

//   return (
//     <div>
//           <h1 className="text-md text-offwhite text-roboto font-medium font-stretch-ultra-condensed text-center text-nowrap underline underline-offset-2">
//             db
//           </h1>
//         <div className="flex justify-between text-lg font-medium">
//           <div className="w-35 flex gap-10 cursor-pointer absolute top-100 group -rotate-10 left-50 transform hover:scale-110 hover:rotate-5 " onClick={() => navigate('/about')}>
//             <p className="transition absolute -rotate-30 transform hover:scale-110 group-hover:rotate-5">about</p>
//             <img src="/assets/smile.png" />
//           </div>

//           <div className="w-25 cursor-pointer absolute top-35 group  right-70 transform hover:scale-110 rotate-15 hover:rotate-5 text-lightturquoise" onClick={() => navigate('/skills')}>
//             <p className="transition absolute -rotate-10 transform  group-hover:rotate-10 -top-5">skills</p>
//             <img src="/assets/skills.png" className="" />
//           </div>

//           <div className="w-30 flex gap-10 cursor-pointer absolute top-30 rotate-10 left-145 transform group hover:scale-110 hover:rotate-5 text-lime" onClick={() => navigate('/projects')}>
//             <a className="transition absolute -rotate-20 group-hover:-rotate-10" >projects</a>
//             <img src="/assets/start-up.png" />
//           </div>

//           <div className="w-35 flex gap-10 cursor-pointer absolute top-110 right-50 transform group hover:scale-110 hover:rotate-5 text-orange" onClick={() => navigate('/contact')}>
//             <a className="transition absolute  group-hover:-rotate-20">contact</a>
//             <img src="/assets/send.png" />
//           </div>
//         </div>
//     </div>
//   )
// }

