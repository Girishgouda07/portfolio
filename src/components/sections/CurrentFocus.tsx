"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Target, Code, Cloud, Zap } from "lucide-react";

const CurrentFocus = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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

  const focusAreas = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full-Stack Development",
      description: "Mastering modern web technologies and frameworks",
      color: "text-blue-400",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Technologies",
      description: "Building scalable applications on cloud platforms",
      color: "text-orange-400",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-World Solutions",
      description: "Creating applications that solve practical problems",
      color: "text-green-400",
    },
  ];

  return (
    <section id="focus" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <Badge
              variant="secondary"
              className="text-primary border-primary/20"
            >
              <Target className="mr-2 h-4 w-4" />
              Current Focus
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            What I&apos;m <span className="text-primary">Working On</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/60 max-w-3xl mx-auto mb-12"
          >
            As a 4th year Computer Science Engineering student, I'm focused on strengthening my programming and software development skills, building practical solutions through academic and internship projects, and continuously learning new technologies. I enjoy problem solving, software development, and working on projects that help me apply my technical knowledge to real-world applications.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#141414] border border-white/10 rounded-lg p-6 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4 ${area.color}`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-white/60">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentFocus;