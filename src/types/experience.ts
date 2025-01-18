export type Experience = {
    designation: string;
    company: string;
    duration: string;
    link?: string;
    location: string;
    mode: "On-site" | "Remote" | "Hybrid";
    nature: "Full-time" | "Part-time" | "Contract" | "Freelance";
};
