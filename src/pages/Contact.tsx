import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
    return (
        <motion.div
        id="about"
        className="p-10 text-lg leading-8 max-w-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col gap-20 border border-offwhite/20 p-6">
            <h1 className="text-[100px] py-10 text-offwhite text-roboto font-bold font-stretch-ultra-condensed text-center text-nowrap hover:underline hover:underline-offset-2 decoration-lime  border-b border-offwhite/20">
              Contact
            </h1>
        <p className="mb-4">Let's build something together! Drop me a line at <a href="mailto:dipanwita.bala@example.com" className="text-transturquoise underline">dipanwita.bala@example.com</a></p>
        <div className="flex justify-center gap-4 text-2xl">
          <a href="https://github.com/Dip-Bala" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/dipanwita-bala" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:dipanwita.bala@example.com" target="_blank" ><FaEnvelope /></a>
        </div>
        </div>
      </motion.div>
    )
  }