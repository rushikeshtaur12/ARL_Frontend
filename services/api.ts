import { Project, ContactFormData } from "../types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function handleResponse(res: Response) {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API Error: ${res.status} - ${text}`);
  }
  return res.json();
}

export const api = {
  getProjects: async (): Promise<Project[]> => {
    const res = await fetch(`${API_BASE_URL}/projects`, {
      cache: "no-store",         // important for Next.js SSR
    });
    return handleResponse(res);
  },

  getProjectById: async (id: string | number): Promise<Project> => {
    const res = await fetch(`${API_BASE_URL}/projects/${id}`, {
      cache: "no-store",
    });
    return handleResponse(res);
  },

  sendContactMessage: async (data: ContactFormData): Promise<void> => {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Contact form failed: ${text}`);
    }
  },
};
