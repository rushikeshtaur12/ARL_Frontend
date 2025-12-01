"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Code, Palette } from "lucide-react";
import PopcornAnimation from "@/components/PopcornAnimation";
import ProjectCard from "@/components/ProjectCard";

// Dummy data for now
const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "Movie Database",
    description: "A popcorn-worthy movie explorer using TMDB API.",
    imageUrl: "/placeholder.png",
    tags: ["React", "API", "Tailwind"],
    link: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Snack E-commerce",
    description: "Order your favorite movie snacks online.",
    imageUrl: "/placeholder.png",
    tags: ["Next.js", "Stripe", "Zustand"],
    link: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Cinema Booking",
    description: "Book tickets for the latest blockbusters.",
    imageUrl: "/placeholder.png",
    tags: ["TypeScript", "PostgreSQL", "Prisma"],
    link: "#",
    githubLink: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-popcorn-kernel via-white to-popcorn-butter/20">
        <PopcornAnimation />
        
        {/* Animated background blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-popcorn-butter/20 rounded-full blur-3xl animate-pulse -z-10" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-popcorn-caramel/20 rounded-full blur-3xl animate-pulse -z-10" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-popcorn-butter/30 text-popcorn-caramel font-bold rounded-full text-sm">
              🍿 Welcome to My Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold font-heading text-popcorn-charred mb-6 leading-tight"
          >
            Make It <span className="text-transparent bg-clip-text bg-gradient-to-r from-popcorn-butter via-popcorn-caramel to-orange-500 drop-shadow-lg">Pop.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            A frontend engineer who turns kernels of ideas into explosive digital experiences.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="px-8 py-4 bg-gradient-to-r from-popcorn-butter to-popcorn-caramel text-popcorn-charred font-bold rounded-full hover:shadow-2xl transition-all shadow-lg transform hover:-translate-y-1 inline-flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-popcorn-charred font-bold rounded-full border-2 border-popcorn-charred hover:bg-popcorn-kernel transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Skills showcase */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center gap-6 flex-wrap"
          >
            {[
              { icon: Code, label: "Full-Stack Development", delay: 0 },
              { icon: Palette, label: "UI/UX Design", delay: 0.1 },
              { icon: Zap, label: "Performance Optimization", delay: 0.2 },
            ].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.label}
                  variants={itemVariants}
                  className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-popcorn-butter/30"
                >
                  <Icon size={18} className="text-popcorn-caramel" />
                  <span className="text-sm font-semibold text-popcorn-charred">{skill.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-popcorn-caramel rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-popcorn-caramel rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 bg-gradient-to-b from-white to-popcorn-kernel/10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-popcorn-butter/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-popcorn-caramel/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <span className="px-4 py-2 bg-popcorn-butter/30 text-popcorn-caramel font-bold rounded-full text-sm">
                ✨ Featured Work
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-5xl font-bold font-heading text-popcorn-charred mb-4">
              Freshly Popped Projects
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-600 max-w-2xl mx-auto text-lg">
              A selection of my latest and greatest creations, crafted with passion and attention to detail.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {FEATURED_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-popcorn-butter to-popcorn-caramel text-popcorn-charred font-bold rounded-full hover:shadow-2xl transition-all shadow-lg transform hover:scale-105 group"
            >
              See All Projects
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
