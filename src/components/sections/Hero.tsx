"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { trackResumeDownload } from "@/lib/analytics";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const typewriterVariants = {
    hidden: { width: 0 },
    visible: {
      width: "auto",
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5237f9]/5 via-transparent to-[#5237f9]/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5237f9]/10 via-transparent to-transparent" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { left: 10, top: 20, delay: 0 },
          { left: 20, top: 40, delay: 0.5 },
          { left: 30, top: 60, delay: 1 },
          { left: 40, top: 30, delay: 1.5 },
          { left: 50, top: 50, delay: 2 },
          { left: 60, top: 70, delay: 0.3 },
          { left: 70, top: 25, delay: 1.8 },
          { left: 80, top: 45, delay: 0.8 },
          { left: 90, top: 65, delay: 2.2 },
          { left: 15, top: 80, delay: 1.2 },
          { left: 25, top: 10, delay: 0.7 },
          { left: 35, top: 90, delay: 1.7 },
          { left: 45, top: 15, delay: 0.2 },
          { left: 55, top: 35, delay: 2.5 },
          { left: 65, top: 55, delay: 1.3 },
          { left: 75, top: 75, delay: 0.9 },
          { left: 85, top: 5, delay: 2.1 },
          { left: 95, top: 85, delay: 0.4 },
          { left: 5, top: 35, delay: 1.6 },
          { left: 12, top: 65, delay: 2.3 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#5237f9]/20 rounded-full"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: pos.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-4"
          >
            <span className="text-[#5237f9] text-lg font-medium">
              Hello, I&apos;m
            </span>
          </motion.div>

          {/* Name with Typewriter Effect */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              <motion.span
                variants={typewriterVariants}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="inline-block overflow-hidden whitespace-nowrap"
              >
                GIRISHGOUDA C Sheshanagoudra
              </motion.span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/80 font-light">
              Software Engineer & Full-Stack Development
            </h2>
            <p className="text-lg text-white/60 mt-4 max-w-2xl mx-auto">
              Specializing in AI and Intelligent Systems development with expertise in full-stack web development and cloud computing.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[#5237f9] hover:bg-[#6b46f9] text-white px-8 py-3 text-lg group"
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg group"
              onClick={() => {
                // Track resume download event
                trackResumeDownload();
                // Open local resume PDF from public folder in new tab
                window.open("/resume-girish.pdf", "_blank");
              }}
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Resume
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "5+", label: "Projects Built" },
              { number: "10+", label: "Certifications Earned" },
              { number: "5+", label: "Hackathons" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-bold text-[#5237f9]">
                  {stat.number}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
