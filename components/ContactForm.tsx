"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-popcorn-butter focus:ring-2 focus:ring-popcorn-butter/20 outline-none transition-all"
                    placeholder="Your Name"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-popcorn-butter focus:ring-2 focus:ring-popcorn-butter/20 outline-none transition-all"
                    placeholder="you@example.com"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-popcorn-butter focus:ring-2 focus:ring-popcorn-butter/20 outline-none transition-all"
                    placeholder="Let's build something popping..."
                />
            </div>
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-colors ${status === "success"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-popcorn-caramel hover:bg-yellow-600"
                    }`}
            >
                {status === "loading" ? (
                    "Sending..."
                ) : status === "success" ? (
                    "Message Sent!"
                ) : (
                    <>
                        Send Message <Send size={18} />
                    </>
                )}
            </motion.button>
            {status === "error" && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
            )}
        </form>
    );
}
