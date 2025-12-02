"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Zap, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const navVariants = {
    hidden: { y: -100 },
    visible: {
        y: 0,
        transition: {
            stiffness: 100,
            damping: 20,
        },
    },
};

const linkVariants = {
    hover: {
        y: -3,
        transition: { duration: 0.2 },
    },
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    const navLinks = ["Home", "Projects", "Contact"];

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/90 dark:bg-popcorn-charred/90 backdrop-blur-xl shadow-lg border-b border-gray-100 dark:border-gray-800"
                    : "bg-gradient-to-b from-popcorn-kernel/50 to-transparent dark:from-popcorn-charred/50"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-2xl font-bold font-heading text-popcorn-charred dark:text-popcorn-kernel hover:text-popcorn-caramel dark:hover:text-popcorn-butter transition-colors group"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <Zap className="w-6 h-6 text-popcorn-butter" />
                            </motion.div>
                            Pop<span className="text-popcorn-butter">corn</span>.
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-1 items-center">
                        {navLinks.map((item, index) => (
                            <motion.div
                                key={item}
                                variants={linkVariants}
                                whileHover="hover"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    className="px-4 py-2 text-popcorn-charred dark:text-popcorn-kernel hover:text-popcorn-caramel dark:hover:text-popcorn-butter font-semibold transition-colors relative group"
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-popcorn-butter to-popcorn-caramel group-hover:w-full transition-all duration-300" />
                                </Link>
                            </motion.div>
                        ))}

                        {/* Theme Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="ml-4 p-2 rounded-lg bg-popcorn-butter/20 dark:bg-popcorn-butter/10 text-popcorn-charred dark:text-popcorn-kernel hover:bg-popcorn-butter/40 dark:hover:bg-popcorn-butter/20 transition-colors"
                            title="Toggle theme"
                        >
                            <motion.div
                                animate={{ rotate: isDark ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </motion.div>
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button & Theme Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-popcorn-butter/20 dark:bg-popcorn-butter/10 text-popcorn-charred dark:text-popcorn-kernel hover:bg-popcorn-butter/40 dark:hover:bg-popcorn-butter/20 transition-colors"
                            title="Toggle theme"
                        >
                            <motion.div
                                animate={{ rotate: isDark ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </motion.div>
                        </motion.button>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center justify-center w-10 h-10 rounded-lg bg-popcorn-butter/20 dark:bg-popcorn-butter/10 text-popcorn-charred dark:text-popcorn-kernel hover:bg-popcorn-butter/40 dark:hover:bg-popcorn-butter/20 transition-colors"
                        >
                            <motion.div
                                animate={{ rotate: isOpen ? 90 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </motion.div>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-white/95 dark:bg-popcorn-charred/95 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-lg"
            >
                <div className="px-4 py-4 space-y-2 sm:px-6">
                    {navLinks.map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="block px-4 py-3 text-base font-semibold text-popcorn-charred dark:text-popcorn-kernel hover:text-popcorn-caramel dark:hover:text-popcorn-butter hover:bg-popcorn-butter/10 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.nav>
    );
}
