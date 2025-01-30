"use client";

import Overview from "./Overview";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import Toolbar from "./Toolbar";

interface LayoutProps {
    children: ReactNode;
    toolbar?: boolean;
    goBack?: boolean;
}

const Layout = ({ children, toolbar, goBack = true }: LayoutProps) => {
    const [brightness, setBrightness] = useState<string>("100%");

    return (
        <div className="flex flex-col w-full items-center h-full justify-center sm:p-10 bg-[#EEEEEE] dark:bg-[#151515]">
            <div
                className="w-full h-full"
                style={{
                    filter: `brightness(${brightness})`, // Apply brightness to the wrapper
                }}
            >
                <div className="grid grid-cols-12 sm:gap-8 gap-4 w-full">
                    <div className="lg:col-span-3 col-span-12 lg:shadow-lg lg:rounded-xl">
                        <Overview goBack={goBack} />
                    </div>
                    <div
                        className={cn(
                            toolbar ? "lg:col-span-7 col-span-12" : "lg:col-span-9 col-span-12",
                            "sm:p-4 px-4 py-8"
                        )}
                    >
                        {children}
                    </div>
                    {toolbar && (
                        <div className="lg:col-span-2 col-span-12">
                            <Toolbar setBrightness={setBrightness} brightness={brightness} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Layout;
