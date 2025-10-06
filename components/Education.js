"use client";

import { motion } from "framer-motion";

export default function EducationPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-8"
    >
      <div className="w-full max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>

        <motion.ul
          className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ประถม */}
          <motion.li variants={itemVariants}>
            <div className="timeline-middle">
              <CheckIcon />
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic text-sm text-gray-600 dark:text-gray-400">
                2017
              </time>
              <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
                สําเร็จการศึกษาระดับชั้นประถมศึกษา
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                จากโรงเรียมุกดาลัย
              </p>
            </div>
            <hr className="border-gray-300 dark:border-gray-700" />
          </motion.li>

          {/* มัธยมต้น */}
          <motion.li variants={itemVariants}>
            <hr className="border-gray-300 dark:border-gray-700" />
            <div className="timeline-middle">
              <CheckIcon />
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic text-sm text-gray-600 dark:text-gray-400">
                2020
              </time>
              <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
                สําเร็จการศึกษาระดับชั้นมัธยมศึกษาตอนต้น
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                จากโรงเรียมุกดาลัย
              </p>
            </div>
            <hr className="border-gray-300 dark:border-gray-700" />
          </motion.li>

          {/* ปวช */}
          <motion.li variants={itemVariants}>
            <hr className="border-gray-300 dark:border-gray-700" />
            <div className="timeline-middle">
              <CheckIcon />
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic text-sm text-gray-600 dark:text-gray-400">
                2023
              </time>
              <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
                สําเร็จการศึกษาประกาศนียบัตรวิชาชีพ (ปวช.)
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                จากวิทยาลัยการอาชีพนวมินทราชินีมุกดาหาร
              </p>
            </div>
            <hr className="border-gray-300 dark:border-gray-700" />
          </motion.li>

          {/* ปวส */}
          <motion.li variants={itemVariants}>
            <hr className="border-gray-300 dark:border-gray-700" />
            <div className="timeline-middle">
              <CheckIcon />
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic text-sm text-gray-600 dark:text-gray-400">
                2025
              </time>
              <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
                สําเร็จการศึกษาประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                จากวิทยาลัยเทคนิคนวมินทราชินีมุกดาหาร
              </p>
            </div>
            <hr className="border-gray-300 dark:border-gray-700" />
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-6 w-6 text-green-500 dark:text-green-400"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 
        0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 
        0 10-1.06 1.061l2.5 2.5a.75.75 
        0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
