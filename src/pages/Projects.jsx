import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-200 px-8 py-20 relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500"
      >
        My Projects
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        {/* Projeto 1 */}
        <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 backdrop-blur-lg duration-300 shadow-lg">
          <a href="#" target="_blank" className="block group mb-4">
            <div className="grid grid-cols-4 gap-2 relative overflow-hidden rounded-lg h-72">
              <img
                src="/images/homePurple.jpg"
                alt="Home"
                className="w-full h-full object-cover object-bottom transition-transform duration-500"
              />
              <img
                src="/images/homeRed.jpg"
                alt="Home"
                className="w-full h-full object-cover object-bottom transition-transform duration-500"
              />
              <img
                src="/images/homeBlue.jpg"
                alt="Home"
                className="w-full h-full object-cover object-bottom transition-transform duration-500"
              />
              <img
                src="/images/homeGold.jpg"
                alt="Home"
                className="w-full h-full object-cover object-bottom transition-transform duration-500"
              />
            </div>
          </a>
          <h2 className="text-2xl font-bold mb-2">
            Desenvolvimento de Bancos Digitais White-label
          </h2>
          <p className="text-gray-400 text-sm">
            Atualmente atuo no desenvolvimento de bancos digitais white-label, colaborando com a equipe de design para criar e aprimorar experiências mobile.
            <br />
            Trabalho ativamente na resolução de bugs e implementações de funcionalidades essenciais para o ecossistema bancário, como:
            <br />- PIX por dados bancários
            <br />- Agendamento de boletos
            <br />- Agendamento de PIX
            <br />- Favoritar contatos PIX
            <br />- Emissão de boletos, entre outras.
            <br />
            Além do desenvolvimento, também sou responsável pelo gerenciamento de versões dos aplicativos e pela gestão das publicações nas lojas App Store e Google Play.
            <br />
            Utilizo React Native e TypeScript como base do desenvolvimento, garantindo soluções escaláveis, seguras e com excelente experiência para os usuários. No projeto, aplico bibliotecas como Restyle e Zustand para estilização e gerenciamento de estado, além de utilizar o Expo, junto ao EAS (Expo Application Services), para otimizar o desenvolvimento, build e distribuição das aplicações.
          </p>
        </div>

        {/* Projeto 2 */}
        <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 backdrop-blur-lg duration-300 shadow-lg lg:col-span-2">
          <a href="#" target="_blank" className="block group mb-4">
            <div className="grid grid-cols-3 gap-2 overflow-hidden rounded-lg h-72">
              <img
                src="/images/mac.png"
                alt="Mac"
                className="col-span-2 w-full h-72 object-contain transition-transform duration-500"
              />
              <img
                src="/images/celular.png"
                alt="Celular"
                className="col-span-1 w-full h-72 object-contain transition-transform duration-500"
              />
            </div>
          </a>
          <h2 className="text-2xl font-bold mb-2">Projeto 2</h2>
          <p className="text-gray-400 text-sm">Projeto 2 descrição</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <Link
          to="/"
          className="inline-block px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition font-medium"
        >
          ← Voltar para o início
        </Link>
      </motion.div>
    </section>
  );
};

export default Projects;
