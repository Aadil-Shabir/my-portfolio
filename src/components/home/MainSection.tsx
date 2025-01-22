"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import WorkExperience from "../WorkExperience";
import { useState } from "react";
import { experiences } from "@/data/experiences";
import AccordionContentWrapper from "../AccordionContentWrapper";
import withAccordionHeight from "../hoc/withAccordionHeight";
import { AboutMeText } from "../AboutMe";

const EnhancedAccordionContent = withAccordionHeight(AccordionContentWrapper);

const MainSection = () => {
    const [accordionValue, setAccordionValue] = useState<string>("about-me");

    const toggleAccordion = (value: string) => {
        setAccordionValue((prevValue) => (prevValue === value ? "" : value));
    };

    return (
        <div>
            <Accordion type="single" collapsible value={accordionValue}>
                <AccordionItem value="about-me">
                    <AccordionTrigger onClick={() => toggleAccordion("about-me")}>About Me</AccordionTrigger>
                    <AccordionContent>
                        <EnhancedAccordionContent redirectPath="/about-me" maxHeight={250}>
                            <AboutMeText size="16" />
                        </EnhancedAccordionContent>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="work-experience">
                    <AccordionTrigger onClick={() => toggleAccordion("work-experience")}>
                        Work Experience
                    </AccordionTrigger>
                    <AccordionContent>
                        <EnhancedAccordionContent redirectPath="/work-experience" maxHeight={250}>
                            <WorkExperience experiences={experiences} />
                        </EnhancedAccordionContent>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default MainSection;
