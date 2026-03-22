"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Bot, Car, Newspaper } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "CalBol",
      subtitle: t.projects.calbol.subtitle,
      description: t.projects.calbol.description,
      icon: Bot,
      tags: ["Django", "OpenAI", "LangChain", "Celery", "PostgreSQL", "Redis"],
      features: t.projects.calbol.features,
      github: "https://github.com/GullibleControv/calbol",
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "IntelliPark",
      subtitle: t.projects.intellipark.subtitle,
      description: t.projects.intellipark.description,
      icon: Car,
      tags: ["Flask", "YOLO11", "OpenCV", "PostgreSQL", "Docker", "JavaScript"],
      features: t.projects.intellipark.features,
      github: "https://github.com/GullibleControv/IntelliPark",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Anime News Platform",
      subtitle: t.projects.animenews.subtitle,
      description: t.projects.animenews.description,
      icon: Newspaper,
      tags: ["Django", "Docker", "Nginx", "PostgreSQL", "Jikan API"],
      features: t.projects.animenews.features,
      github: "https://github.com/GullibleControv/Anime_News_Platform",
      color: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-dark-50 dark:bg-dark-900/50">
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
            {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`group grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image/Icon Side */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative aspect-video rounded-xl sm:rounded-2xl bg-gradient-to-br ${project.color} p-4 sm:p-8 flex items-center justify-center overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />
                  </div>

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative z-10"
                  >
                    <project.icon className="w-20 h-20 sm:w-32 sm:h-32 text-white/90" />
                  </motion.div>

                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 sm:w-16 sm:h-16 bg-white/10 rounded-xl backdrop-blur-sm"
                  />
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 bg-white/10 rounded-lg backdrop-blur-sm"
                  />
                </motion.div>
              </div>

              {/* Project Info Side */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="space-y-4">
                  {/* Title */}
                  <div>
                    <p className="text-primary-500 dark:text-primary-400 font-mono text-sm mb-1">
                      {project.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description Card */}
                  <div className="p-4 sm:p-6 bg-white dark:bg-dark-800 rounded-xl shadow-lg shadow-dark-900/5 dark:shadow-dark-950/50">
                    <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-400"
                      >
                        <span className="text-primary-500 mt-1">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-mono bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github className="w-5 h-5" aria-hidden="true" />
                      <span>{t.projects.viewCode}</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/GullibleControv?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-lg font-medium transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.projects.viewAll}
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
