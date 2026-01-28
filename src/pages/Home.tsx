import { motion } from "framer-motion";
import { Skills } from "../ui/components/Skills";
import { GrLocationPin } from "react-icons/gr";
import { MdOutlineArrowOutward } from "react-icons/md";

export function Home() {
  return (
    <div className="flex w-full px-2 py-20 text-offwhite items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col w-full justify-center gap-4">
          <h1 className="text-5xl sm:text-9xl lg:text-[200px] text-wrap text-offwhite text-roboto  sm:font-medium font-stretch-ultra-condensed text-center md:text-nowrap mb-0 selection:bg-lime selection:text-darkblack text-shadow-xs sm:text-shadow-md text-shadow-lime">
            DIPANWITA BALA
          </h1>
          <h2 className="text-xl md:text-3xl italic lowercase text-lime text-roboto font-normal font-stretch-ultra-condensed text-center text-nowrap hover:underline hover:underline-offset-2 decoration-pink-500 m-0 selection:bg-pink-600">
            I'm a Fullstack Developer
          </h2>
        </div>
        <div className="text-sm md:text-lg text-offwhite/90 mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-4">
          <a
            href="https://maps.app.goo.gl/x1zG65GNTsWfQgbdA"
            target="_blank"
            className="flex underline lime hover:text-pink items-center gap-2 hover:scale-110"
          >
            <span className="text-pink">
              <GrLocationPin />
            </span>
            <span> West Bengal, India</span>
          </a>
          <a
            href="/assets/resume.pdf"
            download
            className="flex underline lime hover:text-pink items-center gap-2 hover:scale-110"
          >
            <span className="text-pink">
              <MdOutlineArrowOutward />
            </span>
            <span>Resume</span>
          </a>
        </div>
        <Skills />
      </motion.div>
    </div>
  );
}
