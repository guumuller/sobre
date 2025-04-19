import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const startDate = new Date("2020-02-16T00:00:00");

  const calculateTimeElapsed = () => {
    const now = new Date();
    const timeDiff = now - startDate;

    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) % 365;

    return { years, days };
  };

  const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="mt-20 py-8 px-6 bg-gray-800/30 backdrop-blur-lg border-t border-gray-700 text-gray-300 text-center relative z-10">

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg md:text-xl font-medium mb-4"
      >
        I've been developing software for{" "}
        <span className="text-cyan-400 font-bold">
          {timeElapsed.years} years
        </span>{" "}
        and{" "}
        <span className="text-cyan-400 font-bold">
          {timeElapsed.days} days
        </span>
        .
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-sm text-gray-500 mb-6"
      >
        &copy; {new Date().getFullYear()} Gustavo Müller Leonini. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
