import { Project, ContactFormData } from "../types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const api = {
    getProjects: async (): Promise<Project[]> => {
        const response = await fetch(`${API_BASE_URL}/api/projects`);
        if (!response.ok) {
            throw new Error("Failed to fetch projects");
        }
        return response.json();
    },

    getProjectById: async (id: string | number): Promise<Project> => {
        const response = await fetch(`${API_BASE_URL}/api/projects/${id}`);
        if (!response.ok) {
            throw new Error("Failed to fetch project");
        }
        return response.json();
    },

    sendContactMessage: async (data: ContactFormData): Promise<void> => {
        const response = await fetch(`${API_BASE_URL}/api/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Failed to send message");
        }
    },
};
