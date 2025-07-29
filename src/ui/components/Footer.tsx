import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-darkblack text-offwhite/70 py-6 px-4 border-t border-offwhite/20 mt-10">
      <div className="flex flex-col items-center gap-4 text-center text-sm  sm:text-base">
        <p className="tracking-wide">
          © 2025 • Made with <span className="text-red-500">🫶</span> by Dipanwita
        </p>
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Dip-Bala"
            target="_blank"
            rel="noreferrer"
            className="hover:text-transturquoise transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/dipanwita-bala"
            target="_blank"
            rel="noreferrer"
            className="hover:text-transturquoise transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:dipanwita.bala@example.com"
            className="hover:text-transturquoise transition-all duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
