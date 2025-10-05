"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  // Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hover: { scale: 1.05, rotate: 2, transition: { type: "spring", stiffness: 300 } },
    float: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

    const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.05, ease: "easeOut" } },
  };

  const name = "Bunyakon Rachiwong";

  return (
    <motion.section
      id="about"
      className="h-screen flex items-center justify-center dark:bg-gray-900 p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="w-full max-w-5xl p-6 h-150" variants={itemVariants}>
        <motion.p 
          className="text-6xl font-bold mb-4 text-center"
          variants={itemVariants}
        >
          About Me
        </motion.p>

        <motion.div className="flex gap-4 mt-8 pt-4 items-center" variants={itemVariants}>
          {/* ซ้าย */}
          <motion.div className="flex-1 p-6 text-lg flex flex-col" variants={itemVariants}>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-400 text-transparent bg-clip-text">
              Hello, I'm
            </h2>
            {/* <h2 className="text-4xl font-bold mb-4">Bunyakon Rachiwong</h2> */}
            <motion.div
            className="inline-flex text-4xl font-bold mb-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible">
                {name.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                    {char}
                </motion.span>
                ))}
            </motion.div>

            <div className="space-y-2">
              <p>
                "นักพัฒนา Software ที่มีประสบการณ์ด้าน Web Application ด้วย JavaScript, React และ Node.js 
                มุ่งเน้นการเขียนโค้ดที่สะอาด เข้าใจง่าย และปรับปรุงประสิทธิภาพระบบอยู่เสมอ สนใจงานด้าน Cybersecurity และ DevOps"
              </p>
            </div>
          </motion.div>

            <motion.div className="flex-[0.7] max-w-78 flex flex-col gap-4" variants={itemVariants}>
                {[
                "/img/IMG2.png",
                ].map((src, i) => (
                <motion.img 
                    key={i}
                    src={src} 
                    className="rounded-lg shadow-lg cursor-pointer"
                    variants={imageVariants}
                    whileHover="hover"
                    animate="float"
                />
                ))}
            </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
