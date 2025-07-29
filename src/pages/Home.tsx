import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate();
  return (
      <div className="flex w-full h-screen relaive p-4 sm:p-10 md:px-10 bg-darkblack text-offwhite items-center justify-center">
        <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
        <div className="flex flex-col p-4 py-60 md:px-20 md:py-40 lg:p-40 border border-offwhite/50 rounded-xl w-full justify-center gap-10">
          <h1 className="text-7xl text-wrap lg:text-[200px] text-offwhite text-roboto font-medium font-stretch-ultra-condensed text-center md:text-nowrap underline underline-offset-2 decoration-lime mb-0 selection:bg-lime selection:text-darkblack">
            DIPANWITA BALA
          </h1>
          <h2 className="text-5xl lg:text-[100px] text-offwhite text-roboto font-normal font-stretch-ultra-condensed text-center text-nowrap hover:underline hover:underline-offset-2 decoration-pink-500 m-0 selection:bg-pink-600">FULLSTACK DEVELOPER</h2>
        </div>
        <div className="flex justify-between text-lg font-medium">

          <div className="w-20 md:w-35 flex gap-10 cursor-pointer absolute left-15 bottom-50 md:left-30 md:top-95 group -rotate-10 transform hover:scale-110 hover:rotate-5 text-pink-600" onClick={() => navigate('/about')}>
            <p className="transition absolute -rotate-30 transform hover:scale-110 group-hover:rotate-5">about</p>
            <img src="/assets/smile.png" />
          </div>

          <div className="w-20 md:w-25 cursor-pointer absolute md:top-35 top-30 right-30 md:right-70 group transform hover:scale-110 rotate-15 hover:rotate-5 text-lightturquoise" onClick={() => navigate('/skills')}>
            <p className="transition absolute -rotate-10 transform  group-hover:rotate-10 -top-5">skills</p>
            <img src="/assets/skills.png"  />
          </div>

          <div className="w-20 md:w-30 flex gap-10 cursor-pointer absolute top-30 left-30 md:top-30 md:left-145rotate-10 transform group hover:scale-110 hover:rotate-5 text-lime" onClick={() => navigate('/projects')}>
            <a className="transition absolute -rotate-20 group-hover:-rotate-10" >projects</a>
            <img src="/assets/start-up.png" />
          </div>

          <div className="w-20 md:w-35 md:h-35 flex gap-10 cursor-pointer absolute bottom-40 right-40 md:top-115 md:right-40 transform group hover:scale-110 hover:rotate-5 text-orange" onClick={() => navigate('/contact')}>
            <a className="transition absolute  group-hover:-rotate-20">contact</a>
            <img src="/assets/send.png" />
          </div>
        </div>
    </motion.div>
      </div>
  )
}