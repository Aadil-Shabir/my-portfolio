import Layout from "@/components/layout/Layout";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
    return (
        <Layout>
            <div className="grid grid-cols-9 gap-4">
                <div className="col-span-9">
                    <p className="text-3xl font-bold mb-4">Projects</p>
                    <Projects />
                </div>
            </div>
        </Layout>
    );
}
