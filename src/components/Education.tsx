import { education } from "@/data/education";
import { cn } from "@/lib/utils";

const Education = () => {
    return <EducationList colSpan="12" />;
};

export const EducationList = ({ colSpan = "6" }: { colSpan?: string }) => {
    return (
        <div className="grid grid-cols-12 gap-4">
            {education.map((edu) => (
                <div className={cn("flex flex-col py-2.5 items-start", `col-span-${colSpan}`)} key={edu.duration}>
                    <h1 className="text-xl font-bold">{edu.institute}</h1>
                    <p className="text-base font-medium">{edu.type}</p>
                    <p className="text-muted-foreground">{edu.title}</p>
                    <p className="text-sm text-muted-foreground">{edu.duration}</p>
                    <p>
                        Location:{" "}
                        <span className="text-muted-foreground">
                            {edu.city}, {edu.country}
                        </span>
                    </p>
                    <p>
                        Grade: <span className="text-muted-foreground">{edu.grade}</span>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Education;
