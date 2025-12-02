"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";

interface ProjectProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    link: string;
    githubLink?: string;
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
    hover: {
        y: -15,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
        transition: {
            duration: 0.3,
        },
    },
};

const imageVariants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.4,
        },
    },
};

const tagVariants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
        },
    },
};

export default function ProjectCard({ project }: { project: ProjectProps }) {
    const handleCardClick = () => {
        window.location.href = `/projects/${project.id}`;
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={handleCardClick}
            className="group relative h-full bg-gradient-to-br from-white to-popcorn-kernel dark:from-gray-900 dark:to-popcorn-charred rounded-2xl overflow-hidden border-2 border-gray-100 dark:border-gray-800 cursor-pointer"
        >
            {/* Animated gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-popcorn-butter/0 to-popcorn-caramel/0 group-hover:from-popcorn-butter/10 group-hover:to-popcorn-caramel/10 transition-all duration-500 pointer-events-none" />

            {/* Image section */}
            <motion.div
                variants={imageVariants}
                className="relative h-56 bg-gradient-to-br from-popcorn-butter via-popcorn-caramel to-orange-400 overflow-hidden"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="inline-block mb-2"
                        >
                            <Sparkles className="w-8 h-8 text-popcorn-kernel" />
                        </motion.div>
                        <p className="text-popcorn-kernel font-bold text-lg">
                            {project.title}
                        </p>
                    </div>
                </div>

                {/* Animated overlay */}
                <motion.div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"
                />
            </motion.div>

            {/* Content section */}
            <div className="relative p-6 pb-4 flex flex-col h-full">
                <motion.h3
                    className="text-2xl font-bold font-heading text-popcorn-charred dark:text-popcorn-kernel mb-3 line-clamp-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                >
                    {project.title}
                </motion.h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                        <motion.span
                            key={tag}
                            variants={tagVariants}
                            whileHover="hover"
                            className="px-3 py-1.5 bg-gradient-to-r from-popcorn-butter/90 to-popcorn-caramel/90 text-popcorn-charred dark:text-popcorn-charred text-xs font-bold rounded-full shadow-md hover:shadow-lg transition-shadow"
                            style={{
                                animation: `pulse 2s ease-in-out ${index * 0.1}s infinite`,
                            }}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-auto">
                    <motion.div
                        className="flex-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = `/projects/${project.id}`;
                            }}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-popcorn-butter to-popcorn-caramel text-popcorn-charred dark:text-popcorn-charred font-bold rounded-lg hover:shadow-lg transition-shadow group/btn"
                        >
                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            Details
                        </button>
                    </motion.div>

                    {project.link && (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center px-3 py-2.5 bg-white dark:bg-gray-800 border-2 border-popcorn-butter text-popcorn-caramel dark:text-popcorn-butter font-bold rounded-lg hover:bg-popcorn-kernel dark:hover:bg-gray-700 transition-colors"
                                title="Live Demo"
                            >
                                <ExternalLink size={16} />
                            </a>
                        </motion.div>
                    )}

                    {project.githubLink && (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center px-3 py-2.5 bg-white dark:bg-gray-800 border-2 border-popcorn-charred dark:border-popcorn-kernel text-popcorn-charred dark:text-popcorn-kernel font-bold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                title="View Code"
                            >
                                <Github size={16} />
                            </a>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Animated border gradient */}
            <style>{`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.8;
                    }
                }
            `}</style>
        </motion.div>
    );
}
