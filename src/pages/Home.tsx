import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'
import { Skills } from "./Skills";

export function Home() {
  const navigate = useNavigate();
  return (
      <div className="flex w-full relaive p-4 sm:p-10 md:px-10 bg-darkblack text-offwhite items-center justify-center">
        <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
        <div className="flex flex-col w-full justify-center gap-10">
          <div className="">
          <h1 className="text-7xl sm:text-9xl lg:text-[200px] text-wrap text-offwhite text-roboto font-medium font-stretch-ultra-condensed text-center md:text-nowrap  mb-0 selection:bg-lime selection:text-darkblack text-shadow-lg text-shadow-lime">
            DIPANWITA BALA
          </h1>
          </div>
          <div className="">
          <h2 className="text-xl md:text-3xl italic lowercase text-lime text-roboto font-normal font-stretch-ultra-condensed text-center text-nowrap hover:underline hover:underline-offset-2 decoration-pink-500 m-0 selection:bg-pink-600">I'm a Fullstack Developer</h2>
          </div>
        </div>
        <Skills />
    </motion.div>
      </div>
  )
}