import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => (
  <section className="flex flex-col justify-center items-center text-gray-200 px-6 py-32 relative z-10">

    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mb-12"
    >
      Let's Connect!
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="text-lg md:text-2xl text-center text-gray-400 max-w-2xl mb-16"
    >
      Got an idea, a challenge, or just want to chat? 🚀  
      I’m always open to new connections — let’s build something great together!
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full"
    >
      <ContactCard
        icon={<FaEnvelope />}
        label="Email"
        value="gustavomullerleonini@gmail.com"
        link="mailto:gustavomullerleonini@gmail.com"
        color="text-blue-400"
        delay={0.8}
      />
      <ContactCard
        icon={<FaPhone />}
        label="Phone"
        value="+55 51 98903-9582"
        link="tel:5551989039582"
        color="text-green-400"
        delay={1}
      />
      <ContactCard
        icon={<FaLinkedin />}
        label="LinkedIn"
        value="/gustavomuller"
        link="https://www.linkedin.com/in/gustavo-m%C3%BCller-leonini-machado-aaa542264/"
        color="text-blue-500"
        delay={1.2}
      />
      <ContactCard
        icon={<FaGithub />}
        label="GitHub"
        value="/guumuller"
        link="https://github.com/guumuller"
        color="text-gray-400"
        delay={1.4}
      />
    </motion.div>
  </section>
);

const ContactCard = ({ icon, label, value, link, color, delay }) => (
  <motion.a
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center justify-center gap-4 p-8 rounded-xl bg-gray-800/30 backdrop-blur-lg border border-gray-700 hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer"
  >
    <div className={`text-6xl ${color}`}>{icon}</div>
    <p className="text-xl font-semibold text-gray-200">{label}</p>
    <p className="text-base text-gray-400">{value}</p>
  </motion.a>
);

export default Contact;
