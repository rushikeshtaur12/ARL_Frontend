"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    link: string;
    githubLink?: string;
}

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/projects");
                if (res.ok) {
                    const data = await res.json();
                    setProjects(data);
                } else {
                    // Fallback to dummy data if backend is not reachable or empty
                    setProjects([
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
                        {
                            id: 4,
                            title: "Popcorn Clicker",
                            description: "An addictive idle game about popping corn.",
                            imageUrl: "/placeholder.png",
                            tags: ["GameDev", "Canvas", "JavaScript"],
                            link: "#",
                            githubLink: "#",
                        },
                        {
                            id: 5,
                            title: "Portfolio v1",
                            description: "My previous portfolio site.",
                            imageUrl: "/placeholder.png",
                            tags: ["HTML", "CSS", "jQuery"],
                            link: "#",
                            githubLink: "#",
                        },
                    ]);
                }
            } catch (error) {
                console.error("Failed to fetch projects", error);
                // Fallback to dummy data
                setProjects([
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
                    {
                        id: 4,
                        title: "Popcorn Clicker",
                        description: "An addictive idle game about popping corn.",
                        imageUrl: "/placeholder.png",
                        tags: ["GameDev", "Canvas", "JavaScript"],
                        link: "#",
                        githubLink: "#",
                    },
                    {
                        id: 5,
                        title: "Portfolio v1",
                        description: "My previous portfolio site.",
                        imageUrl: "/placeholder.png",
                        tags: ["HTML", "CSS", "jQuery"],
                        link: "#",
                        githubLink: "#",
                    },
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-popcorn-charred mb-4">
                        My Projects
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A collection of my best work, served hot and fresh.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-popcorn-butter"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
