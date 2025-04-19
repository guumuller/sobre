import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiExpress, SiTailwindcss } from "react-icons/si";

const Hero = () => (
  <section className="flex flex-col justify-center items-center text-gray-200 px-6 py-32 relative z-10">

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mb-6 px-5 py-2 rounded-full border border-gray-700 text-sm text-gray-400 tracking-widest uppercase backdrop-blur-sm"
    >
      Full Stack Developer
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-7xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500"
    >
      Gustavo Müller
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="mt-4 text-lg md:text-2xl text-center text-gray-400 max-w-2xl"
    >
      Building modern and performant experiences for Web and Mobile.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl"
    >
      <TechCard icon={<FaReact />} label="React" color="text-cyan-400" />
      <TechCard icon={<SiTypescript />} label="TypeScript" color="text-blue-400" />
      <TechCard icon={<FaNodeJs />} label="Node.js" color="text-green-400" />
      <TechCard icon={<SiPostgresql />} label="PostgreSQL" color="text-blue-300" />
      <TechCard icon={<SiExpress />} label="Express" color="text-gray-500" />
      <TechCard icon={<SiTailwindcss />} label="Tailwind CSS" color="text-sky-500" />
    </motion.div>
  </section>
);

const TechCard = ({ icon, label, color }) => (
  <div className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-gray-800/30 backdrop-blur-lg border border-gray-700 hover:scale-105 transition-transform duration-300 shadow-lg">
    <div className={`text-5xl ${color}`}>{icon}</div>
    <p className="text-sm text-gray-300 tracking-wide">{label}</p>
  </div>
);

export default Hero;
