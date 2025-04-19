import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaHandshake, FaCertificate } from "react-icons/fa";

const About = () => (
  <section className="flex flex-col justify-center items-center text-gray-200 px-6 py-32 relative z-10">

    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mb-12"
    >
      About Me
    </motion.h2>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="grid gap-10 max-w-5xl w-full"
    >
      <AboutCard
        icon={<FaLaptopCode />}
        color="text-blue-400"
        delay={0.3}
        text="I am a passionate Software Developer with a strong dedication to learning and overcoming challenges, both personally and professionally..."
      />

      <AboutCard
        icon={<FaHandshake />}
        color="text-green-400"
        delay={0.5}
        text="Currently, I specialize in mobile development focused on digital banking solutions and also work on creating landing pages at GBX Brasil..."
      />

      <AboutCard
        icon={<FaCertificate />}
        color="text-yellow-400"
        delay={0.7}
        text="With experience in building websites, configuring, and testing applications, I bring a versatile skill set to my work..."
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="mt-10"
      >
        <h3 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-500">
          Education
        </h3>

        <div className="grid gap-10">
          <AboutCard
            icon={<FaGraduationCap />}
            color="text-red-400"
            delay={1}
            text="I graduated from Senac Distrito Criativo, where I had my first contact with the world of technology through a technical programming course..."
          />

          <AboutCard
            icon={<FaCertificate />}
            color="text-purple-400"
            delay={1.2}
            text="I participated in the Geração Caldeira 2024 program, promoted by Instituto Caldeira, where I earned 10 certificates of completion on the Alura platform..."
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

const AboutCard = ({ icon, color, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="flex items-start gap-6 p-6 rounded-xl bg-gray-800/30 backdrop-blur-lg border border-gray-700 hover:scale-[1.02] transition-transform duration-300 shadow-lg"
  >
    <div className={`text-6xl md:text-7xl ${color}`}>{icon}</div>
    <p className="text-lg text-gray-300 leading-relaxed">{text}</p>
  </motion.div>
);

export default About;
