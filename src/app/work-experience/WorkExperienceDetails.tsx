"use client";

import { experiences } from "@/data/experiences";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const WorkExperienceDetails = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <WorkExperienceContent />
        </Suspense>
    );
};

const WorkExperienceContent = () => {
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    const workExperience = experiences.find((experience) => experience.company === name);

    return (
        <div className="flex flex-col gap-4 h-full shadow-lg">
            {!workExperience ? (
                <div className="w-full h-full flex items-center justify-center">
                    <p className="dark:text-yellow-500">Please select a Work Experience to know more about it.</p>
                </div>
            ) : (
                <>
                    <p className="text-2xl font-semibold text-center">{workExperience.company}</p>
                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-3">
                            <p className="text-muted-foreground text-sm">My Role</p>
                            <p>{workExperience.designation}</p>
                        </div>
                        <div className="col-span-3">
                            <p className="text-muted-foreground text-sm">Job Nature</p>
                            <p>{workExperience.nature}</p>
                        </div>
                        <div className="col-span-3">
                            <p className="text-muted-foreground text-sm">Duration</p>
                            <p>{workExperience.duration}</p>
                        </div>
                        <div className="col-span-3">
                            <p className="text-muted-foreground text-sm">Company&apos;s Location</p>
                            <p>{workExperience.location}</p>
                        </div>
                        <div className="col-span-3">
                            <p className="text-muted-foreground text-sm">Job Mode</p>
                            <p>{workExperience.mode}</p>
                        </div>
                        <div className="col-span-3">
                            <p className="text-muted-foreground text-sm">Company&apos;s URL</p>
                            <Link href={workExperience.link || ""} className="text-blue-600" target="_blank">
                                {workExperience.link ? "Link" : "-"}
                            </Link>
                        </div>
                        {workExperience.projectLink && (
                            <div className="col-span-3">
                                <p className="text-muted-foreground text-sm">Project&apos;s Link</p>
                                <Link href={workExperience.projectLink} className="text-blue-600" target="_blank">
                                    Link
                                </Link>
                            </div>
                        )}
                        <div className="col-span-6 py-2">
                            <p className="text-muted-foreground text-lg font-medium">My Contributions:</p>
                            <div className="flex flex-col gap-4 py-2">
                                {workExperience.details?.map((detail, index) => (
                                    <div className="flex gap-4" key={index}>
                                        <span className="font-bold text-xl">•</span>
                                        <p>{detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default WorkExperienceDetails;
