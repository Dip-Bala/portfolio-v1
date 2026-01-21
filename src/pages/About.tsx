import { motion } from "framer-motion";
import Blog from "../ui/components/Blog";

export function About() {
  return (
    <motion.section
      id="about"
      className="w-full text-lg leading-8 py-10 h-screen overflow-scroll"
      transition={{ duration: 1 }}
    >
      <div className="relative flex flex-col gap-20 sm:px-10 sm:py-20">
        <div className="flex flex-col  items-center justify-between gap-14 md:gap-20 text-offwhite/80">
          <div className="relative flex justify-center items-center shrink-0">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: 1 }}
              className="absolute -top-10  text-8xl sm:text-9xl 
              font-black text-offwhite text-shadow-xl text-shadow-pink/90 
              -rotate-10 pointer-events-none select-none"
            >
              about
            </motion.div>

            <motion.img
              src="/assets/about.png"
              alt="Dipanwita Bala"
              className=" aspect-square 
              drop-shadow-sm drop-shadow-lime-100 transition w-md  "
            />
          </div>

          <motion.div
            className="text-justify"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 10 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg leading-10 tracking-wider text-offwhite/70 max-w-prose mx-auto px-2 text-pretty">
              Hi, I’m Dipanwita. I'm a fullstack developer crafting sleek,
              minimal, and purposeful websites. I obsess over the little details
              so the user never has to.
              <br />
              <br />
              I’m well-versed in web development technologies — from designing
              and developing to deployment. While I handle every stage with
              equal care, I especially enjoy a good UI design challenge.
              <br />
              <br />
              Lately, I’ve been building AI-powered apps that help me solve my
              daily problems. Some projects are practical, some are just for fun
              and experiments — but all of them help me grow.
              <br />
              <br />
              Apart from staring at screens, you’ll often find me in my rooftop
              garden, growing my own vegetables and fruits, caring for plants,
              or simply spending quiet time among them.
              <br />
              <br />
            </p>
          </motion.div>
          <div className="w-full max-w-prose mx-auto mt-10 px-2">
        <h2
          className="text-6xl sm:text-8xl font-black text-offwhite text-shadow-xl text-shadow-pink/90 pb-8"
        >
          Blogs
        </h2>
        <p className="text-offwhite/60 mb-6">
          I write technical blogs inspired by the issues I solve in my work. You
          can find some of them here:
        </p>

        <div className="flex flex-col gap-4">
          {blogs.map((blog) => (
            <Blog blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
        </div>
      </div>
    </motion.section>
  );
}

const blogs = [
  {
    id: 1,
    title: "Stop Using <img> for SVGs in React: A Better Way with SVGR",
    href: "https://dev.to/dipanwita_bala_14a61e4e64/stop-using-for-svgs-in-react-a-better-way-with-svgr-4080",
    platform: "dev.to",
    year: 2026,
  },
  {
    id: 2,
    title: "How I Built a Scalable and Effortless Theme System for My Web Apps",
    href: "https://medium.com/p/900eebbbc720",
    platform: "Medium",
    year: 2026,
  },
];
