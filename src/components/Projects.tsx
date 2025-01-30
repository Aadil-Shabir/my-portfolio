import { projects } from "@/data/projects";
import { truncateLength } from "@/lib/turncateLength";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    return (
        <div className="grid grid-cols-12 gap-4 w-full">
            {projects.map((project) => (
                <div
                    className="flex lg:flex-row flex-col sm:gap-8 gap-4 items-center border-b col-span-12 sm:p-4 justify-start"
                    key={`${project.title}-${project.id}`}
                >
                    <Link
                        href={`/projects/${project.title}`}
                        className="relative overflow-hidden rounded-xl lg:w-5/12 shadow-sm dark:shadow-gray-500 z-10"
                    >
                        <Image
                            src={project.img}
                            alt={`${project.title}-image`}
                            width={400}
                            className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 hover:opacity-90"
                            height={400}
                        />
                    </Link>
                    <div className="flex flex-col gap-4 lg:w-7/12">
                        <Link href={`/projects/${project.title}`} className="text-2xl font-semibold">
                            {project.title}
                        </Link>
                        <p>{truncateLength(project.description, 350)}</p>
                        <div className="flex gap-2.5 items-center">
                            {project.tools.map((tool) => (
                                <div className="px-2.5 py-1 border rounded-2xl hover:opacity-50" key={tool}>
                                    <p className="text-xs pointer-events-none">{tool}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const ProjectsList = () => {
    return (
        <div className="grid grid-cols-12 gap-4">
            {projects.map((project) => (
                <div
                    className="flex flex-col gap-2 lg:col-span-4 sm:col-span-6 col-span-12"
                    key={`${project.title}-${project.id}`}
                >
                    <Link
                        href={`/projects/${project.title}`}
                        className="relative overflow-hidden rounded-xl shadow-sm dark:shadow-gray-500 z-10"
                    >
                        <Image
                            src={project.img}
                            alt={`${project.title}-image`}
                            width={400}
                            className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 hover:opacity-90"
                            height={400}
                        />
                    </Link>
                    <Link href={`/projects/${project.title}`} className="text-xl font-semibold px-1">
                        {project.title}
                    </Link>
                    <p className="px-1">{truncateLength(project.description, 100)}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;
