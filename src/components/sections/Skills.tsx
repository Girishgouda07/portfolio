"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Shield,
  Star,
  TrendingUp,
  Rocket,
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "JavaScript", level: 85, icon: "🟨" },
        { name: "Java", level: 80, icon: "☕" },
        { name: "C++", level: 75, icon: "⚡" },
        { name: "C", level: 75, icon: "🔧" },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: <Database className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      skills: [
        { name: "TensorFlow", level: 85, icon: "🧠" },
        { name: "IBM Watsonx", level: 80, icon: "🤖" },
        { name: "IBM Granite", level: 80, icon: "💎" },
        { name: "MediaPipe", level: 75, icon: "👋" },
      ],
    },
    {
      title: "Web Development",
      icon: <Cloud className="h-8 w-8" />,
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      skills: [
        { name: "React.js", level: 85, icon: "⚛️" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "Flask", level: 75, icon: "🌶️" },
        { name: "HTML5", level: 90, icon: "🏗️" },
        { name: "CSS3", level: 85, icon: "🎨" },
      ],
    },
    {
      title: "Databases & Cloud",
      icon: <Smartphone className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      skills: [
        { name: "MySQL", level: 80, icon: "🗄️" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "SQLite", level: 75, icon: "📱" },
        { name: "IBM Cloud", level: 75, icon: "☁️" },
      ],
    },
  ];

  const technologies = [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "C",
    "TensorFlow",
    "IBM Watsonx",
    "IBM Granite",
    "MediaPipe",
    "React.js",
    "Next.js",
    "Node.js",
    "Flask",
    "HTML5",
    "CSS3",
    "MySQL",
    "MongoDB",
    "SQLite",
    "IBM Cloud",
    "Git",
    "GitHub",
    "LaTeX",
  ];

  const expertiseAreas = [
    {
      title: "AI & Machine Learning",
      description: "Developing intelligent systems and AI solutions",
      icon: <Rocket className="h-6 w-6" />,
      color: "text-blue-400",
      stats: "2+ Projects",
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end web application development",
      icon: <Cloud className="h-6 w-6" />,
      color: "text-orange-400",
      stats: "3+ Years",
    },
    {
      title: "Cloud Computing",
      description: "Scalable cloud-based solutions",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "text-green-400",
      stats: "IBM Certified",
    },
    {
      title: "Problem Solving",
      description: "Data Structures and Algorithms expertise",
      icon: <Shield className="h-6 w-6" />,
      color: "text-purple-400",
      stats: "Competitive Coding",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    }),
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5237f9]/5 via-transparent to-[#6b46f9]/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5237f9]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6b46f9]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Badge
              variant="secondary"
              className="text-[#5237f9] border-[#5237f9]/20 bg-[#5237f9]/5 px-4 py-2"
            >
              <Star className="mr-2 h-4 w-4" />
              Technical Excellence
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-[#5237f9] to-[#6b46f9] bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed"
          >
            Building modern, scalable applications with cutting-edge
            technologies and best practices
          </motion.p>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-white/10 rounded-xl p-4 h-full backdrop-blur-sm group-hover:border-[#5237f9]/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className={`${area.color} p-2 rounded-lg bg-white/5`}>
                    {area.icon}
                  </div>
                  <span className="text-xl font-bold text-[#5237f9]">
                    {area.stats}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories - New Design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -3 }}
              className="group relative"
            >
              <div
                className={`${category.bgColor} ${category.borderColor} border rounded-xl p-6 h-full backdrop-blur-sm group-hover:shadow-2xl transition-all duration-300`}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`bg-gradient-to-r ${category.color} p-3 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#5237f9] to-[#6b46f9] rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div key={skillIndex} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-white font-medium text-sm">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[#5237f9] font-bold text-base">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`bg-gradient-to-r ${category.color} h-2 rounded-full relative`}
                            variants={progressVariants}
                            custom={skill.level}
                            initial="hidden"
                            animate={isInView ? "visible" : "visible"}
                            transition={{
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Tags - Enhanced Design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="text-center mb-12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-4"
          >
            Technology <span className="text-[#5237f9]">Stack</span>
          </motion.h3>
          <motion.p variants={itemVariants} className="text-white/60 mb-8">
            Modern tools and frameworks I use to build exceptional applications
          </motion.p>
        </motion.div>

        {/* Moving badges container - Enhanced */}
        <div className="relative overflow-hidden mb-20">
          {/* First row moving right to left */}
          <div className="flex gap-4 mb-4 animate-scroll-right">
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={`row1-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 bg-gradient-to-r from-[#5237f9]/10 to-[#6b46f9]/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-[#5237f9]/20 hover:border-[#5237f9]/40 hover:shadow-[0_0_30px_rgba(82,55,249,0.3)] transition-all duration-300"
              >
                <span className="text-white font-medium text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>

          {/* Second row moving left to right */}
          <div className="flex gap-4 animate-scroll-left">
            {[
              ...technologies.slice().reverse(),
              ...technologies.slice().reverse(),
            ].map((tech, index) => (
              <motion.div
                key={`row2-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 bg-gradient-to-r from-[#6b46f9]/10 to-[#5237f9]/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-[#6b46f9]/20 hover:border-[#6b46f9]/40 hover:shadow-[0_0_30px_rgba(106,70,249,0.3)] transition-all duration-300"
              >
                <span className="text-white font-medium text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
