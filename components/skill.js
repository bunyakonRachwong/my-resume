"use client";

import { motion } from "framer-motion";

export default function SkillPage() {
  // Variants สำหรับ animation ของ container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Variants สำหรับแต่ละ card
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section
      id="skill"
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100 dark:bg-gray-900"
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Skills
        </h2>

        {/* Programming Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Programming Languages
          </h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
              { name: "JavaScript", logo: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" },
              { name: "C#", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" },
              { name: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 2, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                className="bg-white dark:bg-gray-800 shadow rounded-xl flex items-center gap-4 p-4 cursor-pointer transition-all"
              >
                <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
                <p className="font-medium text-lg text-gray-900 dark:text-gray-100">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Frameworks & Tools */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Frameworks & Tools
          </h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
              { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
              { name: "Docker", logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" },
              { name: "Vue.js", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
              { name: "jQuery", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLME0hpAJOqBGhaVjcgkk8hIKS3S4GAqrLg&s" },
              { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
              { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
              { name: "Express.js", logo: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png" },
              { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
            ].map((tool, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 2, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                className="bg-white dark:bg-gray-800 shadow rounded-xl flex items-center gap-4 p-4 cursor-pointer transition-all"
              >
                <img src={tool.logo} alt={tool.name} className="w-10 h-10" />
                <p className="font-medium text-lg text-gray-900 dark:text-gray-100">{tool.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Databases */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Databases
          </h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
              { name: "MongoDB", logo: "https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" },
            ].map((db, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 2, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                className="bg-white dark:bg-gray-800 shadow rounded-xl flex items-center gap-4 p-4 cursor-pointer transition-all"
              >
                <img src={db.logo} alt={db.name} className="w-10 h-10" />
                <p className="font-medium text-lg text-gray-900 dark:text-gray-100">{db.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
