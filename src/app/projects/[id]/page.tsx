import Layout from "@/components/layout/Layout";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { projects } from "@/data/projects";
import { Params } from "next/dist/server/request/params";
import Image from "next/image";

export default async function ProjectPage({ params }: { params: Params }) {
    const { id } = await params;

    const project = projects.find((item) => item.title === id);

    return (
        <Layout>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{id}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {project && (
                <div className="flex flex-col w-full gap-4 my-4">
                    <p className="text-2xl font-semibold">{project.title}</p>
                    <div className="relative overflow-hidden rounded-xl shadow-sm dark:shadow-gray-500 z-10">
                        <Image
                            src={project.img}
                            alt={project.title}
                            width={1500}
                            height={1500}
                            className="w-full h-auto"
                        />
                    </div>
                    <p>
                        <span className="font-semibold line-clamp-1">Description: </span>
                        {project.description}
                    </p>
                </div>
            )}
        </Layout>
    );
}
