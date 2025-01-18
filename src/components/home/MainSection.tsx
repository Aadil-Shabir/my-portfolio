"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import WorkExperience from "../WorkExperience";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { experiences } from "@/data/experiences";

const MainSection = () => {
    const router = useRouter();
    const contentRef = useRef<HTMLDivElement>(null);
    const [showButton, setShowButton] = useState<boolean>(false);
    const [accordionValue, setAccordionValue] = useState<string>("");

    useEffect(() => {
        const checkHeight = () => {
            if (contentRef.current) {
                const contentHeight = contentRef.current.scrollHeight;
                setShowButton(contentHeight > 250);
            }
        };

        checkHeight();

        const resizeObserver = new ResizeObserver(checkHeight);
        if (contentRef.current) {
            resizeObserver.observe(contentRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, [accordionValue]);

    const toggleAccordion = (value: string) => {
        setAccordionValue((prevValue) => (prevValue === value ? "" : value));
    };

    return (
        <div>
            <Accordion type="single" collapsible value={accordionValue}>
                <AccordionItem value="work-experience" defaultChecked>
                    <AccordionTrigger onClick={() => toggleAccordion("work-experience")}>
                        Work Experience
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="relative">
                            <div
                                ref={contentRef}
                                className="overflow-y-hidden px-2 transition-all duration-300 max-h-[250px]"
                            >
                                <WorkExperience experiences={experiences} />
                            </div>
                            {showButton && (
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white dark:from-black to-transparent pt-8 pb-4">
                                    <button
                                        onClick={() => router.push("/work-experience")}
                                        className="w-full text-center text-yellow-600 hover:text-yellow-800 font-medium"
                                    >
                                        Show More
                                    </button>
                                </div>
                            )}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default MainSection;
