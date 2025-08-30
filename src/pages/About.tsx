import { motion } from "framer-motion";


export function About() {
  return (
    <motion.div
      id="about"
      className="sm:p-10 text-lg leading-8 max-w-full"
      // initial={{ opacity: 0, y: 100 }}
      // animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 text-offwhite/80">

          <motion.div
            id="about-image"
            className="drop-shadow-amber-100 drop-shadow-md"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 10 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/assets/about.png"
              alt="Dipanwita Bala"
              className="w-sm aspect-square rounded-full drop-shadow-md drop-shadow-lime-300"
            />
          </motion.div>
          <motion.div
            id="about-image"
            className="w-full md:w-[70%] text-justify"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 10 }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm sm:text-base leading-8 text-offwhite/70 max-w-prose mx-auto px-2 text-justify text-pretty">
  Hi, I’m Dipanwita — a fullstack developer crafting sleek, minimal, and purposeful websites. I obsess over the little details so the user never has to.<br></br>
  I recently graduated with a B.Tech in ECE-AI and am now seeking full-time opportunities where I can grow and contribute as a developer.<br></br>
  Currently, I’m building <a href="https://www.appmindly.live" className="font-semibold text-pink-400 cursor-pointer after:content-['_↗']">Mindly</a> — a web app to organize all those scattered, important links we save and forget.<br></br>
  Beyond code, I thrive on spontaneous plans that somehow turn out amazing. Sometimes you’ll find me painting, sometimes dancing — but always creating with intention, love, and relentless dedication.
</p>

          </motion.div>
        </div>

        {/* <div className="  text-cyan-400 text-center font-semibold text-xl">
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
        </div> */}
      </div>
    </motion.div>
  );
}
