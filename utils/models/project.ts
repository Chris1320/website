import type { WebMockup, DesktopMockup, MobileMockup } from "~/models/mockup";

export interface ProjectResources {
    images: { description: string; url: string }[];
}

export interface Project {
    id: number;
    name: string;
    dateStart: string;
    dateEnd?: string;
    visible: boolean;
    status: "wip" | "stable" | "archived";
    shortDescription: string;
    longDescription?: string;
    links: { name: string; url: string }[];
    technologies: { name: string; icon: string }[];
    mockups: {
        type: "web" | "mobile" | "desktop";
        data: WebMockup | DesktopMockup | MobileMockup;
    };
    resources: ProjectResources;
}
