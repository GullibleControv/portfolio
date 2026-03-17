"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Brain, Wrench, Globe } from "lucide-react";

const techCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frameworks",
    icon: Globe,
    skills: ["Django", "Flask", "React", "Next.js", "Tailwind CSS"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: ["OpenAI API", "LangChain", "YOLO", "OpenCV", "RAG"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "Redis", "SQLite", "Supabase"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: ["Docker", "Nginx", "Git", "GitHub Actions", "Vercel"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Celery", "Playwright", "Gunicorn", "VS Code", "Linux"],
    color: "from-yellow-500 to-orange-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              I&apos;m a passionate{" "}
              <span className="text-primary-500 font-medium">
                Full-Stack Developer
              </span>{" "}
              with a strong focus on building intelligent applications. Currently
              based in{" "}
              <span className="text-primary-500 font-medium">Osaka, Japan</span>,
              I combine my love for clean code with cutting-edge AI technologies.
            </p>

            <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              I recently completed an internship at{" "}
              <span className="text-primary-500 font-medium">
                Japan AI Consulting
              </span>
              , where I worked on production Django applications, built automated
              testing systems with Playwright, and collaborated on AI-powered
              solutions.
            </p>

            <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              My personal projects include an{" "}
              <span className="text-primary-500 font-medium">
                AI-powered auto-reply SaaS
              </span>{" "}
              using RAG technology and a{" "}
              <span className="text-primary-500 font-medium">
                smart parking system
              </span>{" "}
              with YOLO real-time detection. I&apos;m always excited to learn new
              technologies and tackle challenging problems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-dark-100 dark:bg-dark-800 rounded-lg">
                <span className="text-2xl">🎓</span>
                <span className="text-sm text-dark-600 dark:text-dark-300">
                  B.Sc. Computer Science
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-dark-100 dark:bg-dark-800 rounded-lg">
                <span className="text-2xl">🇯🇵</span>
                <span className="text-sm text-dark-600 dark:text-dark-300">
                  JLPT N4
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-dark-100 dark:bg-dark-800 rounded-lg">
                <span className="text-2xl">💼</span>
                <span className="text-sm text-dark-600 dark:text-dark-300">
                  Open to Opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {techCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group p-4 bg-white dark:bg-dark-900 rounded-xl border border-dark-200 dark:border-dark-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}
                  >
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-dark-100 dark:bg-dark-800 rounded text-dark-600 dark:text-dark-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
