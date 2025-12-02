export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    link: string;
    githubLink?: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}
