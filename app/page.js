"use client";
import Image from "next/image";
import AboutPage from "@/components/about";
import SkillPage from "@/components/skill";
import EducationPage from "@/components/Education";

import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomePage() {

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main>
      <motion.section
        id="home"
        className="h-screen dark:bg-gray-900"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-full h-screen flex items-center justify-center ">
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <motion.div className="flex items-center space-x-6" variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                Bunyakon
              </h1>
              <div className="avatar">
                <div className="w-32 md:w-40 rounded-full ring ring-amber-500 ring-offset-2 overflow-hidden">
                  <Image
                    src="/img/IMG1.png"  
                    alt="Profile"
                    width={160}           
                    height={160}
                    className="rounded-full object-cover"
                    priority              
                  />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                Rachiwong
              </h1>
            </motion.div>

            <motion.div className="flex space-x-6 mt-6" variants={itemVariants}>
              <a
                href="https://github.com/bunyakonRachwong/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaGithub className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/bunyakon-t-8b9058386/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaLinkedin className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" />
              </a>
              <a
                href="mailto:buny1299@email.com"
                className="hover:scale-110 transition"
              >
                <FaGoogle className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" />
              </a>
            </motion.div>

            <motion.p className="mt-6 text-lg md:text-xl text-center max-w-md" variants={itemVariants}>
              นักพัฒนาโปรแกรมที่สนใจด้าน{" "}
              <span className="font-semibold text-amber-600">
                Full-Stack Development
              </span>
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <AboutPage />
      <EducationPage />
      <SkillPage />
    </main>
  );
}
