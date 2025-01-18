import { Experience } from "@/types/experience";

interface WorkExperienceProps {
    experiences: Experience[];
}

const WorkExperience = ({ experiences }: WorkExperienceProps) => {
    return (
        <div className="">
            <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 grid gap-10">
                {experiences.map((experience, index) => (
                    <div className="grid gap-1 text-sm relative" key={`${experience.company}-${index}`}>
                        <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                        <div className="font-medium">{experience.designation}</div>
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
        </div>
    );
};

export default WorkExperience;
