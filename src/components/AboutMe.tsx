"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import BugFound from "./BugFound";
import { aboutMe } from "@/data/aboutMe";
import Link from "next/link";

const AboutMe = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentTextSize = searchParams.get("textSize") || "16";

    const updateTextSize = (newSize: string) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set("textSize", newSize);

        router.push(`?${params.toString()}`);
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2.5 items-center justify-end w-full">
                <span>Text Size:</span>
                <Slider
                    defaultValue={[Number(currentTextSize)]}
                    max={30}
                    min={10}
                    className="max-w-[200px]"
                    step={2}
                    onValueChange={(value) => updateTextSize(value[0].toString())}
                />
            </div>
            <AboutMeText size={currentTextSize} />
            <div className="flex flex-col">
                <p>Do you have a question for AB Memon?</p>
                <Link href="contact-me" className="text-blue-500 dark:text-yellow-500">
                    Ask directly from him!
                </Link>
            </div>
        </div>
    );
};

export const AboutMeText = ({ size }: { size: string }) => {
    return (
        <div className="flex flex-col gap-4">
            {Number(size) > 30 && <BugFound />}
            {Number(size) < 10 && <BugFound />}
            {aboutMe.map((abouts) => (
                <div className="flex flex-col gap-1" key={abouts.question}>
                    <p className={cn("font-semibold")} style={{ fontSize: `${size}px` }}>
                        Q: {abouts.question}
                    </p>
                    <p style={{ fontSize: `${size}px` }} className="whitespace-pre-wrap">
                        Ans: {abouts.answer}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default AboutMe;
