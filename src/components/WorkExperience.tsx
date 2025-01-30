"use client";

import WorkExperienceDialog from "@/app/work-experience/WorkExperienceDialog";
import { Experience } from "@/types/experience";
import Link from "next/link";
import { useState } from "react";

interface WorkExperienceProps {
    experiences: Experience[];
}

const WorkExperience = ({ experiences }: WorkExperienceProps) => {
    const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

    return (
        <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 grid gap-10">
            {experiences.map((experience, index) => (
                <div className="grid gap-1 text-sm relative" key={`${experience.company}-${index}`}>
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <Link href={`/work-experience?name=${experience.company}`} className="font-medium max-lg:hidden">
                        {experience.designation}
                    </Link>
                    <div className="lg:hidden">
                        <WorkExperienceDialog
                            experience={experience}
                            isOpen={selectedExperience === experience}
                            onOpen={() => setSelectedExperience(experience)}
                            onClose={() => setSelectedExperience(null)}
                        />
                    </div>
                    <div className="">
                        {experience.company} · {experience.nature}
                    </div>
                    <div className="text-muted-foreground">{experience.duration}</div>
                    <div className="text-muted-foreground">
                        {experience.location} ({experience.mode})
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorkExperience;
