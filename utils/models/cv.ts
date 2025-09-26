export interface EducationInformation {
    institution: string; // Name of the school or university
    degree: string; // e.g., "Bachelor of Science in Computer Science"
    concentration: string; // e.g., "Major in Software Development"
    GWA: string | null; // General Weighted Average or GPA
    thesisTitle: string | null; // Title of thesis or capstone project
    location: string; // City, Country
    startDate: string | null; // ISO 8601 format (YYYY-MM)
    endDate: string | null; // ISO 8601 format (YYYY-MM) or "Present"
    relevantCoursework: string[]; // List of relevant coursework
}

export interface WorkExperience {
    organization: string; // Name of the company or organization
    role: string; // e.g., "Software Engineer"
    location: string; // City, Country
    startDate: string; // ISO 8601 format (YYYY-MM)
    endDate: string; // ISO 8601 format (YYYY-MM) or "Present"
    responsibilities: string[]; // List of responsibilities and achievements
}

export interface Certificate {
    title: string; // Title of the certificate or award
    issuer: string; // Name of the issuing organization
    date: string; // ISO 8601 format (YYYY-MM)
    description: string | null; // Brief description of the certificate or award
    image: string; // URL to an image of the certificate or award
    link: string | null; // URL to the certificate or award details
}

export interface SkillOrInterest {
    area: string; // e.g., "Programming Languages", "Hobbies"
    details: string[]; // List of skills or interests in that area
}

export interface CurriculumVitae {
    name: string; // Full name
    imageUrl: string | null; // URL to profile image
    overview: {
        email: {
            display: string;
            link: string;
        };
        phone: {
            display: string;
            link: string;
        };
        website: {
            display: string;
            link: string;
        };
        location: {
            display: string;
            link: string;
        };
    };
    summary: string; // Brief professional summary or objective
    education: EducationInformation[];
    experience: WorkExperience[];
    awardsAndCertificates: Certificate[];
    skillsAndInterests: SkillOrInterest[];
}
