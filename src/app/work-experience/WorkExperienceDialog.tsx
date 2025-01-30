import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Experience } from "@/types/experience";
import Link from "next/link";

interface WorkExperienceDialogProps {
    experience: Experience;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const WorkExperienceDialog = ({ experience, isOpen, onOpen, onClose }: WorkExperienceDialogProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={(isOpen) => (isOpen ? onOpen() : onClose())}>
            <DialogTrigger className="font-medium">{experience.designation}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="py-2">{experience.company}</DialogTitle>
                    <div className="grid grid-cols-6 gap-4 py-4 max-h-[400px] overflow-scroll text-start">
                        <div className="md:col-span-3 col-span-6">
                            <p className="text-muted-foreground text-sm">My Role</p>
                            <p>{experience.designation}</p>
                        </div>
                        <div className="md:col-span-3 col-span-6">
                            <p className="text-muted-foreground text-sm">Job Nature</p>
                            <p>{experience.nature}</p>
                        </div>
                        <div className="md:col-span-3 col-span-6">
                            <p className="text-muted-foreground text-sm">Duration</p>
                            <p>{experience.duration}</p>
                        </div>
                        <div className="md:col-span-3 col-span-6">
                            <p className="text-muted-foreground text-sm">Company's Location</p>
                            <p>{experience.location}</p>
                        </div>
                        <div className="md:col-span-3 col-span-6">
                            <p className="text-muted-foreground text-sm">Job Mode</p>
                            <p>{experience.mode}</p>
                        </div>
                        <div className="md:col-span-3 col-span-6">
                            <p className="text-muted-foreground text-sm">Company's URL</p>
                            <Link href={experience.link || ""} className="text-blue-600" target="_blank">
                                {experience.link ? "Link" : "-"}
                            </Link>
                        </div>
                        {experience.projectLink && (
                            <div className="md:col-span-3 col-span-6">
                                <p className="text-muted-foreground text-sm">Project's Link</p>
                                <Link href={experience.projectLink} className="text-blue-600" target="_blank">
                                    {experience.projectLink ? "Link" : "-"}
                                </Link>
                            </div>
                        )}
                        <div className="col-span-6 py-2">
                            <p className="text-muted-foreground text-lg font-medium">My Contributions:</p>
                            <div className="flex flex-col gap-4 py-2">
                                {experience.details &&
                                    experience.details.length &&
                                    experience.details.map((detail, index) => (
                                        <div className="flex gap-4" key={index}>
                                            <span className="font-bold text-xl">{". "}</span>
                                            <p className="text-start">{detail}</p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default WorkExperienceDialog;
