import { motion } from "framer-motion";

export function About() {
  return (
    <motion.div
      id="about"
      className="p-10 text-lg leading-8 max-w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-20 border border-offwhite/20 p-6">
        <h1 className="text-[100px] text-offwhite text-roboto font-bold font-stretch-ultra-condensed text-center text-nowrap underline underline-offset-2 decoration-lime py-10 border-b border-offwhite/20">
          About
        </h1>
        <div className="flex items-center justify-between gap-20 text-offwhite/50">
          <div className="relative rounded-full shadow-2xl shadow-offwhite/10">
            <img
              src="/assets/photo1.png"
              className="object-cover w-full h-full  rounded-full"
              alt="Dipanwita Bala"
            />
          </div>
          <div className="w-[70%]">
            <p>
              Hi, I'm Dipanwita — a Software Developer passionate about crafting sleek, clean, and functional web applications.
              <br /><br/>
              I work with TypeScript, React.js, Node.js, and MongoDB, always with an eye for user experience and minimal, thoughtful design.
              <br /><br/>
              I recently graduated with a B.Tech in ECE-AI and am currently seeking full-time opportunities where I can contribute meaningfully as a developer.
              <br /><br/>
              Right now, I’m building{" "}
              <a
                className="underline decoration-2 text-pink-500"
                href="https://www.appmindly.live/"
                target="_blank"
              >
                Mindly
              </a>{" "}
              — a web app to organize all those scattered, important links
              we save and forget. Think of it as a second brain for your browser.
              <br /><br />
              I enjoy playing with CSS when the inspiration strikes, but if I’m
              being honest, backend is what I feel less frustating .
              <br /><br />
              A few fun extras: I love spontaneous plans that somehow turn out
              amazing. You'll occasionally find me painting or dancing on a whim.
              Whatever I create, I build it with intention, love, and dedication.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
