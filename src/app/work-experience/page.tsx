import Layout from "@/components/layout/Layout";
import WorkExperience from "@/components/WorkExperience";
import { experiences } from "@/data/experiences";
import WorkExperienceDetails from "./WorkExperienceDetails";

export default function WorkExperiencePage() {
    return (
        <Layout>
            <div className="grid grid-cols-9 gap-4">
                <div className="col-span-4">
                    <p className="text-3xl font-bold mb-4">Work Experience</p>
                    <WorkExperience experiences={experiences} />
                </div>
                <div className="col-span-5 border rounded-xl p-4 shadow-lg">
                    <WorkExperienceDetails />
                </div>
            </div>
        </Layout>
    );
}
