import HeroSection from "@/components/home/HeroSection";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
    return (
        <div className="relative">
            <GridPattern
                width={20}
                height={20}
                x={100}
                y={100}
                className={cn("[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]")}
            />
            <HeroSection />
        </div>
    );
}
