// import { motion } from "framer-motion";
// import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

// export function Contact() {
//   return (
//     <motion.div
//       id="contact"
//       className="sm:p-10 text-base leading-7 text-offwhite/80"
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="backdrop-blur-md border border-offwhite/20 rounded-xl p-8 shadow-xl max-w-3xl mx-auto">
//         <h1 className="text-[70px] text-center font-bold font-stretch-ultra-condensed text-offwhite mb-10 hover:underline decoration-lime underline-offset-4">
//           Contact
//         </h1>

//         <p className="text-center mb-8 text-offwhite/70">
//           Let's build something awesome together! Send me a message or reach me via social links.
//         </p>

//         <form
//           action="https://formspree.io/f/your-form-id" // <-- Replace with your actual Formspree ID
//           method="POST"
//           className="space-y-6"
//         >
//           <div className="grid sm:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               className="bg-offwhite/10 text-offwhite/90 placeholder:text-offwhite/40 p-3 rounded-md border border-offwhite/20 focus:outline-none focus:border-lime"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               className="bg-offwhite/10 text-offwhite/90 placeholder:text-offwhite/40 p-3 rounded-md border border-offwhite/20 focus:outline-none focus:border-lime"
//               required
//             />
//           </div>
//           <textarea
//             name="message"
//             rows={5}
//             placeholder="Your Message"
//             className="w-full bg-offwhite/10 text-offwhite/90 placeholder:text-offwhite/40 p-3 rounded-md border border-offwhite/20 focus:outline-none focus:border-lime"
//             required
//           ></textarea>

//           <button
//             type="submit"
//             className="w-full bg-lime text-black font-semibold py-2 rounded-md hover:bg-lime/80 transition"
//           >
//             Send Message
//           </button>
//         </form>

//         <div className="flex justify-center gap-6 mt-10 text-2xl text-offwhite/70">
//           <a
//             href="https://github.com/Dip-Bala"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:text-lime transition"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/dipanwita-bala-21999c/"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:text-lime transition"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="mailto:dipanwita.bala.02@gmail.com"
//             className="hover:text-lime transition"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaEnvelope />
//           </a>
//         </div>

//         <div className="text-center mt-6">
//           <a
//             href="/assets/resume.pdf"
//             download
//             className="inline-block mt-4 text-lime font-semibold border border-lime px-4 py-2 rounded hover:bg-lime hover:text-black transition"
//           >
//             View Résumé
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <motion.div
      id="contact"
      className="sm:p-10 text-base leading-7 text-offwhite/80"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* <h1 className="text-4xl text-center font-semibold font-stretch-ultra-condensed text-offwhite mb-10 hover:underline decoration-lime underline-offset-4 pt-10">
        Let's talk.
      </h1> */}

      <p className="text-center mb-8 text-offwhite/70">
        I’m always eager to connect with fellow developers and designers — to
        share knowledge, creative ideas, or just hang out. Feel free to reach
        out if you'd like to collaborate or need my help. I am just one text
        message away.
      </p>

      <div className="flex justify-center gap-6 mt-10 text-2xl text-offwhite/70">
        <a
          href="https://github.com/Dip-Bala"
          target="_blank"
          rel="noreferrer"
          className="hover:text-lime transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/dipanwita-bala-21999c/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-lime transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:dipanwita.bala.02@gmail.com"
          className="hover:text-lime transition"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className="text-center mt-6">
        <a
          href="/assets/resume.pdf"
          download
          className="inline-block mt-4 text-lime font-semibold border border-lime px-4 py-2 rounded hover:bg-lime hover:text-black transition"
        >
          View Résumé
        </a>
      </div>
    </motion.div>
  );
}
