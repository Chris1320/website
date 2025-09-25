import type { WebMockup } from "~/models/mockup";

export interface ProjectResources {
    images: { description: string; url: string }[];
}

export interface Project {
    id: number;
    name: string;
    dateStart: string;
    dateEnd?: string;
    description: string;
    links: { name: string; url: string }[];
    technologies: { name: string; icon: string }[];
    mockups: {
        type: "web" | "mobile" | "desktop";
        data: WebMockup;
    };
    resources: ProjectResources;
}
