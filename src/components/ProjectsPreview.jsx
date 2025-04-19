import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";

const ProjectsPreview = () => (
  <section className="flex flex-col justify-center items-center text-gray-200 px-6 py-32 relative z-10">

    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mb-12"
    >
      Works
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-lg md:text-2xl text-center text-gray-400 max-w-3xl mb-12"
    >
      Confira alguns exemplos de pejetos que tabalhei
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="flex flex-col items-center gap-8 max-w-2xl w-full"
    >
      <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-lg border border-gray-700 shadow-lg text-center">
        <p className="text-gray-300 mb-4">Quer ver tudo em detalhes?</p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105"
        >
          <FaRocket className="text-xl" />
          Ver Projetos
        </Link>
      </div>
    </motion.div>

  </section>
);

export default ProjectsPreview;
