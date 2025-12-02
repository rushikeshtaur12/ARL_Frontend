"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { useState } from "react";

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

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const socialLinks = [
        { icon: Github, label: "GitHub", href: "#" },
        { icon: Linkedin, label: "LinkedIn", href: "#" },
        { icon: Twitter, label: "Twitter", href: "#" },
        { icon: Mail, label: "Email", href: "mailto:hello@popcorn.dev" },
    ];

    return (
        <footer className="relative bg-gradient-to-b from-popcorn-charred to-black text-popcorn-kernel">
            {/* Scroll to top button */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-popcorn-butter to-popcorn-caramel text-popcorn-charred rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
                <ArrowUp size={24} />
            </motion.button>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
                >
                    {/* Brand Section */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-3xl font-bold font-heading mb-4">
                            Pop<span className="text-popcorn-butter">corn</span>.
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Freshly popped designs and code for your digital cravings. Crafted with passion and butter.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-gradient-to-b from-popcorn-butter to-popcorn-caramel rounded-full" />
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {["Home", "Projects", "Contact"].map((link) => (
                                <motion.li
                                    key={link}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                                        className="text-gray-300 hover:text-popcorn-butter transition-colors font-medium"
                                    >
                                        {link}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Connect Section */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-gradient-to-b from-popcorn-butter to-popcorn-caramel rounded-full" />
                            Connect
                        </h4>
                        <div className="flex gap-4">
                            {socialLinks.slice(0, 3).map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-white/10 rounded-full text-gray-300 hover:text-popcorn-butter hover:bg-white/20 transition-colors"
                                        title={social.label}
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Contact Section */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-gradient-to-b from-popcorn-butter to-popcorn-caramel rounded-full" />
                            Contact
                        </h4>
                        <motion.a
                            href="mailto:hello@popcorn.dev"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-popcorn-butter/20 to-popcorn-caramel/20 rounded-lg text-popcorn-butter font-semibold hover:from-popcorn-butter/30 hover:to-popcorn-caramel/30 transition-colors"
                        >
                            <Mail size={18} />
                            Get in Touch
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    className="h-px bg-gradient-to-r from-transparent via-popcorn-butter/50 to-transparent mb-8"
                />

                {/* Bottom Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
                >
                    <motion.p variants={itemVariants} className="text-gray-400">
                        &copy; {new Date().getFullYear()} Popcorn Portfolio. All rights reserved.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex gap-6">
                        <Link href="#" className="text-gray-400 hover:text-popcorn-butter transition-colors text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-popcorn-butter transition-colors text-sm">
                            Terms of Service
                        </Link>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-gray-500 text-sm"
                    >
                        Made with <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="inline-block"
                        >
                            ❤️
                        </motion.span> by Rushikesh
                    </motion.p>
                </motion.div>
            </div>

            {/* Animated background gradient */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-popcorn-butter/5 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-popcorn-caramel/5 rounded-full blur-3xl -z-10 animate-pulse" />
        </footer>
    );
}
