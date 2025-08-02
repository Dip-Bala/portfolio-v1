import { motion } from "framer-motion";


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
              src="/assets/profile2.jpeg"
              alt="Dipanwita Bala"
              className="w-xs aspect-square rounded-3xl grayscale shadow-2xl shadow-lime/60"
            />
          </div>

          <div className="w-full md:w-[70%] text-justify">
            <p className="text-sm sm:text-base leading-relaxed text-offwhite max-w-prose mx-auto px-2 text-justify">
              Hi, I’m <span className="text-lime">Dipanwita</span> — a fullstack developer crafting sleek, minimal, and purposeful websites with a sharp focus on user experience. I overthink every detail on the screen so the user never has to. <br></br>
              I recently graduated with a B.Tech in ECE-AI and am actively seeking full-time opportunities where I can contribute meaningfully as a developer.<br></br>
               Right now, I’m building <a href="https://www.appmindly.live" className="italic text-pink-400 cursor-pointer ">Mindly</a> — a web app designed to organize all those scattered, important links we save and forget.<br></br>
                Design pulls me in now and then, but the backend feels less frustating. A few extras? I live for spontaneous plans that somehow turn out amazing. You’ll occasionally catch me painting or dancing on a whim. Whatever I create — I put my full intention, love, and relentless dedication.
            </p>

            {/* <p>
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
            </p> */}
          </div>
        </div>

        <div className="  text-cyan-400 text-center font-semibold text-xl">
         <h2 className="py-6">Some of my Artwork</h2>
         <div className="flex gap-8 overflow-x-auto whitespace-nowrap">
          <img src="/assets/art1.jpeg" className="w-60"/>
          <img src="/assets/art1.jpeg" className="w-60"/>
          <img src="/assets/art1.jpeg" className="w-60"/>
          <img src="/assets/art1.jpeg" className="w-60"/>
          <img src="/assets/art1.jpeg" className="w-60"/>
          <img src="/assets/art1.jpeg" className="w-60"/>
         </div>
        </div>
        <div>
          I am a Shinobi at heart but mundane by Birth
        </div>
      </div>
    </motion.div>
  );
}
