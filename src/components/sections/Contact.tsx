"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, FileText, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function Contact() {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.email,
      value: "adityachutia61@gmail.com",
      href: "mailto:adityachutia61@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: t.contact.locationValue,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/GullibleControv",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aditya-chutia-555027202/",
    },
    {
      icon: FileText,
      label: "Resume",
      href: "/resume.pdf",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatus({
        type: "error",
        message: language === "en" ? "Please enter your name" : "お名前を入力してください",
      });
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({
        type: "error",
        message: language === "en" ? "Please enter a valid email" : "有効なメールアドレスを入力してください",
      });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({
        type: "error",
        message: language === "en" ? "Please enter a message" : "メッセージを入力してください",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus({ type: "loading", message: "" });

    try {
      // Using Web3Forms free tier - you can get your own access key at https://web3forms.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          subject: `New Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: language === "en"
            ? "Message sent successfully! I'll get back to you soon."
            : "メッセージを送信しました！近日中にご連絡いたします。",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      // Fallback to mailto if API fails
      const mailtoLink = `mailto:adityachutia61@gmail.com?subject=${encodeURIComponent(
        `Contact from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.open(mailtoLink, "_blank");

      setStatus({
        type: "success",
        message: language === "en"
          ? "Opening your email client... If it doesn't open, please email me directly."
          : "メールクライアントを開いています... 開かない場合は直接メールしてください。",
      });
    }
  };

  // Direct mailto handler as alternative
  const handleMailtoFallback = () => {
    const mailtoLink = `mailto:adityachutia61@gmail.com?subject=${encodeURIComponent(
      `Contact from ${formData.name || "Portfolio Visitor"}`
    )}&body=${encodeURIComponent(
      formData.message
        ? `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        : ""
    )}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-dark-50 dark:bg-dark-900/50">
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
            {t.contact.title} <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">{t.contact.infoTitle}</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div
                      key={info.label}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white dark:bg-dark-800 rounded-xl"
                    >
                      <div className="p-2 sm:p-3 bg-primary-500/10 rounded-lg flex-shrink-0">
                        <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="text-sm text-dark-500 dark:text-dark-400">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm sm:text-base text-dark-900 dark:text-dark-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-dark-900 dark:text-dark-100">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">{t.contact.connectTitle}</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-dark-800 rounded-xl hover:bg-primary-500 hover:text-white transition-all shadow-lg shadow-dark-900/5 dark:shadow-dark-950/50"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View ${link.label}`}
                    >
                      <link.icon className="w-5 h-5" aria-hidden="true" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 sm:p-6 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-xl border border-primary-500/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    {t.contact.statusTitle}
                  </span>
                </div>
                <p className="text-sm text-dark-600 dark:text-dark-400">
                  {t.contact.statusText}
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.contact.form.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder={t.contact.form.namePlaceholder}
                    required
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.contact.form.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder={t.contact.form.emailPlaceholder}
                    required
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.contact.form.message} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder={t.contact.form.messagePlaceholder}
                    required
                    aria-required="true"
                  />
                </div>

                {/* Status Message */}
                {status.type !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-3 rounded-lg ${
                      status.type === "success"
                        ? "bg-green-500/10 text-green-600 dark:text-green-400"
                        : status.type === "error"
                        ? "bg-red-500/10 text-red-600 dark:text-red-400"
                        : "bg-primary-500/10 text-primary-600 dark:text-primary-400"
                    }`}
                  >
                    {status.type === "success" && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
                    {status.type === "error" && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                    {status.type === "loading" && <Loader2 className="w-5 h-5 animate-spin flex-shrink-0" />}
                    <span className="text-sm">{status.message || (language === "en" ? "Sending..." : "送信中...")}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: status.type === "loading" ? 1 : 1.02 }}
                  whileTap={{ scale: status.type === "loading" ? 1 : 0.98 }}
                >
                  {status.type === "loading" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" aria-hidden="true" />
                  )}
                  {t.contact.form.send}
                </motion.button>

                {/* Alternative: Direct Email */}
                <p className="text-center text-sm text-dark-500 dark:text-dark-400">
                  {language === "en" ? "Or " : "または "}
                  <button
                    type="button"
                    onClick={handleMailtoFallback}
                    className="text-primary-500 hover:text-primary-600 underline"
                  >
                    {language === "en" ? "email me directly" : "直接メールする"}
                  </button>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
