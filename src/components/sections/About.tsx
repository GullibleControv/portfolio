"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Brain, Wrench, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const techCategories = [
  {
    titleKey: "languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    titleKey: "frameworks",
    icon: Globe,
    skills: ["Django", "Flask", "React", "Next.js", "Tailwind CSS"],
    color: "from-green-500 to-emerald-500",
  },
  {
    titleKey: "aiml",
    icon: Brain,
    skills: ["OpenAI API", "LangChain", "YOLO", "OpenCV", "RAG"],
    color: "from-purple-500 to-pink-500",
  },
  {
    titleKey: "databases",
    icon: Database,
    skills: ["PostgreSQL", "Redis", "SQLite", "Supabase"],
    color: "from-orange-500 to-red-500",
  },
  {
    titleKey: "devops",
    icon: Cloud,
    skills: ["Docker", "Nginx", "Git", "GitHub Actions", "Vercel"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    titleKey: "tools",
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
  const { t } = useLanguage();

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
            {t.about.title} <span className="gradient-text">{t.about.titleHighlight}</span>
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
              {t.about.bio1}{" "}
              <span className="text-primary-500 font-medium">
                {t.about.role}
              </span>{" "}
              {t.about.bio1cont}{" "}
              <span className="text-primary-500 font-medium">{t.about.locationHighlight}</span>
              {t.about.bio1end}
            </p>

            <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              {t.about.bio2}{" "}
              <span className="text-primary-500 font-medium">
                {t.about.company}
              </span>
              {t.about.bio2cont}
            </p>

            <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              {t.about.bio3}{" "}
              <span className="text-primary-500 font-medium">
                {t.about.project1}
              </span>{" "}
              {t.about.bio3cont}{" "}
              <span className="text-primary-500 font-medium">
                {t.about.project2}
              </span>
              {t.about.bio3end}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-dark-100 dark:bg-dark-800 rounded-lg">
                <span className="text-2xl">🎓</span>
                <span className="text-sm text-dark-600 dark:text-dark-300">
                  {t.about.degree}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-dark-100 dark:bg-dark-800 rounded-lg">
                <span className="text-2xl">🇯🇵</span>
                <span className="text-sm text-dark-600 dark:text-dark-300">
                  {t.about.jlpt}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-dark-100 dark:bg-dark-800 rounded-lg">
                <span className="text-2xl">💼</span>
                <span className="text-sm text-dark-600 dark:text-dark-300">
                  {t.about.openTo}
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
                key={category.titleKey}
                variants={itemVariants}
                className="group p-4 bg-white dark:bg-dark-900 rounded-xl border border-dark-200 dark:border-dark-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}
                  >
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm">
                    {t.about.categories[category.titleKey as keyof typeof t.about.categories]}
                  </h3>
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
