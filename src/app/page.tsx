import MainSection from "@/components/home/MainSection";
import Layout from "@/components/layout/Layout";

export default function Home() {
    return (
        <Layout toolbar goBack={false}>
            <MainSection />
        </Layout>
    );
}
