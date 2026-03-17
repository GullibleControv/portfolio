"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Bot, Car, Newspaper } from "lucide-react";

const projects = [
  {
    title: "CalBol",
    subtitle: "AI Auto-Reply SaaS",
    description:
      "An AI-powered customer support automation platform using RAG (Retrieval Augmented Generation). Features hybrid response system combining keyword matching with AI, confidence scoring with automatic human escalation, and multi-platform support.",
    icon: Bot,
    image: "/projects/calbol.png",
    tags: ["Django", "OpenAI", "LangChain", "Celery", "PostgreSQL", "Redis"],
    features: [
      "RAG Pipeline for intelligent responses",
      "Multi-platform: Email, WhatsApp, Instagram",
      "Confidence scoring & human escalation",
      "Bilingual support (EN/JA)",
    ],
    github: "https://github.com/GullibleControv/calbol",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "IntelliPark",
    subtitle: "AI Smart Parking System",
    description:
      "Real-time parking detection system using YOLO11 computer vision. Features polygon-based space mapping, booking system with conflict detection, and support for multiple video sources including YouTube and RTSP streams.",
    icon: Car,
    image: "/projects/intellipark.png",
    tags: ["Flask", "YOLO11", "OpenCV", "PostgreSQL", "Docker", "JavaScript"],
    features: [
      "YOLO11 real-time vehicle detection",
      "Canvas-based polygon drawing",
      "Booking system with conflict detection",
      "Multi-source: YouTube, RTSP, Webcam",
    ],
    github: "https://github.com/GullibleControv/IntelliPark",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Anime News Platform",
    subtitle: "News Aggregator",
    description:
      "A Django-based news platform with automated ETL pipeline using Jikan API. Features complete Docker deployment with Nginx, SSL, and multi-platform deployment configurations for Render, Heroku, and Railway.",
    icon: Newspaper,
    image: "/projects/anime-news.png",
    tags: ["Django", "Docker", "Nginx", "PostgreSQL", "Jikan API"],
    features: [
      "Automated ETL pipeline",
      "Docker 3-container architecture",
      "Let's Encrypt SSL",
      "Multi-platform deployment",
    ],
    github: "https://github.com/GullibleControv/Anime_News_Platform",
    color: "from-pink-500 to-rose-600",
  },
];

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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            full-stack development, AI/ML, and DevOps.
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
                  className={`relative aspect-video rounded-2xl bg-gradient-to-br ${project.color} p-8 flex items-center justify-center overflow-hidden`}
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
                    <project.icon className="w-32 h-32 text-white/90" />
                  </motion.div>

                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-xl backdrop-blur-sm"
                  />
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm"
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
                  <div className="p-6 bg-white dark:bg-dark-800 rounded-xl shadow-lg shadow-dark-900/5 dark:shadow-dark-950/50">
                    <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-2">
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
                        className="px-3 py-1 text-sm font-mono bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 rounded-full"
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
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </motion.a>
                    {/* <motion.a
                      href="#"
                      className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.a> */}
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
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
