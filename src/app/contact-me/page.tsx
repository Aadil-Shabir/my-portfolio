import ContactMe from "@/components/ContactMe";
import Layout from "@/components/layout/Layout";

export default function ContactMePage() {
    return (
        <Layout>
            <div className="grid grid-cols-9 gap-4">
                <div className="col-span-9">
                    <p className="text-3xl font-bold mb-4">Contact Me</p>
                    <ContactMe />
                </div>
            </div>
        </Layout>
    );
}
