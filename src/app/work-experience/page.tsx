import Layout from "@/components/layout/Layout";
import WorkExperience from "@/components/WorkExperience";
import { experiences } from "@/data/experiences";
import WorkExperienceDetails from "./WorkExperienceDetails";

export default function WorkExperiencePage() {
    return (
        <Layout>
            <div className="grid grid-cols-9 gap-4">
                <div className="lg:col-span-4 col-span-9 lg:block flex justify-center flex-col items-center">
                    <p className="text-3xl font-bold mb-4 lg:text-start text-center">Work Experience</p>
                    <WorkExperience experiences={experiences} />
                </div>
                <div className="lg:col-span-5 col-span-9 max-lg:hidden border rounded-xl p-4 shadow-lg">
                    <WorkExperienceDetails />
                </div>
            </div>
        </Layout>
    );
}
