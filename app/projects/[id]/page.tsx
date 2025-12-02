"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Star } from "lucide-react";
import { api } from "@/services/api";
import { Project } from "@/types";

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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function ProjectDetails() {
    const { id } = useParams();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const data = await api.getProjectById(id as string);
                setProject(data);
            } catch (error) {
                console.error("Failed to fetch project", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProject();
        }
    }, [id]);

    if (loading) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen flex justify-center items-center"
            >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="rounded-full h-16 w-16 border-4 border-popcorn-butter border-t-popcorn-caramel"
                />
            </motion.div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold mb-4 text-popcorn-charred"
                >
                    Project Not Found
                </motion.h1>
                <Link href="/projects" className="text-popcorn-caramel dark:text-white hover:underline text-lg">
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-popcorn-kernel to-popcorn-kernel dark:from-gray-900 dark:to-popcorn-charred transition-colors duration-300"
        >
            <div className="max-w-5xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Back button */}
                    <motion.div variants={itemVariants}>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-popcorn-caramel hover:text-popcorn-charred dark:hover:text-popcorn-kernel font-semibold mb-8 transition-colors hover:gap-3 group"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Projects
                        </Link>
                    </motion.div>

                    {/* Image section */}
                    <motion.div
                        variants={itemVariants}
                        className="h-80 md:h-96 bg-gradient-to-br from-popcorn-butter via-popcorn-caramel to-orange-400 rounded-3xl overflow-hidden shadow-2xl mb-12 flex items-center justify-center relative"
                    >
                        {project.imageUrl && project.imageUrl !== "/placeholder.png" ? (
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        ) : (
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="text-center text-popcorn-kernel"
                            >
                                <Star className="w-16 h-16 mx-auto mb-4" />
                                <h2 className="text-4xl font-bold text-popcorn-charred dark:text-popcorn-kernel">{project.title}</h2>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Content card */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border-2 border-gray-100 dark:border-gray-700 p-8 md:p-12"
                    >
                        {/* Title */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-bold font-heading text-popcorn-charred dark:text-white mb-6"
                        >
                            {project.title}
                        </motion.h1>

                        {/* Tags */}
                        <motion.div
                            variants={itemVariants}
                            className="mb-10"
                        >
                            <h2 className="text-2xl font-bold font-heading text-popcorn-charred dark:text-white mb-4">
                                Skills & Technologies
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {project.tags.map((tag, index) => (
                                    <motion.span
                                        key={tag}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        className="px-6 py-3 bg-gradient-to-r from-popcorn-butter to-popcorn-caramel text-popcorn-charred dark:text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            variants={itemVariants}
                            className="text-gray-700 dark:text-gray-300 mb-10 text-lg leading-relaxed space-y-4"
                        >
                            <p>{project.description}</p>
                        </motion.div>

                        {/* Action buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1"
                            >
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="w-full px-8 py-4 bg-gradient-to-r from-popcorn-butter to-popcorn-caramel text-popcorn-charred dark:text-white font-bold text-lg rounded-xl hover:shadow-lg transition-shadow flex items-center justify-center gap-3 group"
                                >
                                    <ExternalLink size={20} className="group-hover:rotate-45  transition-transform" />
                                    Live Demo
                                </Link>
                            </motion.div>

                            {project.githubLink && (
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1"
                                >
                                    <Link
                                        href={project.githubLink}
                                        target="_blank"
                                        className="w-full px-8 py-4 bg-white dark:bg-gray-800 text-popcorn-charred dark:text-white font-bold text-lg rounded-xl border-3 border-popcorn-charred dark:border-popcorn-kernel hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-3 group shadow-lg"
                                    >
                                        <Github size={20} className="group-hover:-rotate-12 transition-transform" />
                                        View Code
                                    </Link>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
