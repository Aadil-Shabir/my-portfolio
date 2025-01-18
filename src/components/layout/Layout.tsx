import Overview from "./Overview";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Toolbar from "./Toolbar";

interface LayoutProps {
    children: ReactNode;
    toolbar?: boolean;
    goBack?: boolean;
}

const Layout = ({ children, toolbar, goBack = true }: LayoutProps) => {
    return (
        <div className="flex flex-col w-full items-center h-full justify-center sm:p-10 bg-[#EEEEEE] dark:bg-[#151515]">
            <div className="grid grid-cols-12 sm:gap-8 gap-4 w-full">
                <div className="col-span-3">
                    <Overview goBack={goBack} />
                </div>
                <div className={cn(toolbar ? "col-span-7" : "col-span-9")}>{children}</div>
                {toolbar && (
                    <div className="col-span-2">
                        <Toolbar />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Layout;
