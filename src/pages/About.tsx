import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export function About() {
  return (
    <motion.div
      id="about"
      className="sm:p-10 text-lg leading-8 max-w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-20">
        {/* <div className="border border-offwhite/20">
        <h1 className="text-[60px] sm:text-5xl text-offwhite text-roboto font-semibold font-stretch-condensed text-center text-nowrap underline underline-offset-4 decoration-lime ">
          About
        </h1>
        </div> */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 text-offwhite/80">
          <div className="">
            <img
              src="/assets/profile1.jpeg"
              alt="Dipanwita Bala"
              className="w-[280px]  md:w-[340px] rounded-full "
            />
          </div>

          <div className="w-full md:w-[70%] text-justify">
            <p>
              Hi, I'm Dipanwita — a fullstack Dev, building 
              sleek, minimal, and functional websites for people with a purpose of great user experience. 
              I overthink everything I put on the screen so the user doesn't have to overthink it.
              I recently graduated with a B.Tech in ECE-AI and am currently
              seeking full-time opportunities where I can contribute meaningfully
              as a developer.
              Currently, I’m building{" "}
              <a
                className="underline decoration-2 text-pink-500 transition"
                href="https://www.appmindly.live/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mindly
              </a>{" "}
              — a web app to organize all those scattered, important links we
              save and forget. Think of it as a second brain for your browser.
              I enjoy playing with CSS when the inspiration strikes, but if I’m
              being honest, backend is what I feel less frustrating.
              <strong>A few extras: </strong>I love spontaneous plans that somehow turn out
              amazing. You'll occasionally find me painting or dancing on a whim.
              Whatever I create, I build it with intention, love, and dedication.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="/assets/resume.pdf"
           download
            className="inline-flex items-center gap-2 px-5 py-3 border border-offwhite/20 rounded-lg hover:bg-pink-500 transition-colors duration-300 text-offwhite/80 "
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
}
