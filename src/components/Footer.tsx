"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Heart } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/GullibleControv",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:adityachutia61@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/aditya-chutia",
    icon: Linkedin,
  },
];

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-dark-200 dark:border-dark-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-dark-500 dark:text-dark-400 text-sm flex items-center gap-1"
          >
            {language === "en" ? (
              <>
                Built with
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                by Aditya Chutia &copy; {currentYear}
              </>
            ) : (
              <>
                {t.footer.builtWith}
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                {t.footer.by} &copy; {currentYear}
              </>
            )}
          </motion.p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-dark-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-dark-100 dark:hover:bg-dark-800 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-dark-500 dark:text-dark-400 text-sm"
          >
            {language === "en" ? "Osaka, Japan" : "大阪府"}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
