"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
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

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

interface TimelineItemProps {
  item: {
    type: string;
    title: string;
    company: string;
    location: string;
    date: string;
    description: string[];
    skills: string[];
  };
  index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const Icon = item.type === "work" ? Briefcase : GraduationCap;

  return (
    <motion.div variants={itemVariants} className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-primary-600" />

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30"
      >
        <Icon className="w-5 h-5 text-white" />
      </motion.div>

      {/* Content */}
      <div className="ml-6">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-6 bg-white dark:bg-dark-800 rounded-xl shadow-lg shadow-dark-900/5 dark:shadow-dark-950/50 border border-dark-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-primary-500 dark:text-primary-400 font-medium">
                {item.company}
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-1 text-sm text-dark-500 dark:text-dark-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {item.date}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {item.location}
              </div>
            </div>
          </div>

          {/* Description */}
          <ul className="space-y-2 mb-4">
            {item.description.map((desc, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-dark-600 dark:text-dark-300"
              >
                <span className="text-primary-500 mt-1.5">▹</span>
                {desc}
              </li>
            ))}
          </ul>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      type: "work",
      title: t.experience.work.title,
      company: t.experience.work.company,
      location: t.experience.work.location,
      date: t.experience.work.date,
      description: t.experience.work.description,
      skills: ["Python", "Django", "PostgreSQL", "Docker", "Playwright", "Redis"],
    },
  ];

  const education = [
    {
      type: "education",
      title: t.experience.education.title,
      company: t.experience.education.company,
      location: t.experience.education.location,
      date: t.experience.education.date,
      description: t.experience.education.description,
      skills: ["Data Structures", "Algorithms", "Software Engineering", "Databases"],
    },
  ];

  return (
    <section id="experience" className="section-padding">
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
            {t.experience.title} <span className="gradient-text">{t.experience.titleHighlight}</span>
          </h2>
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl font-bold mb-8 flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5 text-primary-500" />
              {t.experience.workTitle}
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {experiences.map((exp, index) => (
                <TimelineItem key={exp.title} item={exp} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl font-bold mb-8 flex items-center gap-2"
            >
              <GraduationCap className="w-5 h-5 text-primary-500" />
              {t.experience.educationTitle}
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <TimelineItem key={edu.title} item={edu} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
