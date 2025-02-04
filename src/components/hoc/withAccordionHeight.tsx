"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface WithAccordionHeightProps {
    children: React.ReactNode;
    redirectPath?: string;
    maxHeight?: number;
}

const withAccordionHeight = <P extends object>(
    WrappedComponent: React.ComponentType<P>
): React.FC<WithAccordionHeightProps & P> => {
    return function AccordionWithHeight({
        children,
        redirectPath,
        maxHeight = 250,
        ...props
    }: WithAccordionHeightProps & P) {
        const router = useRouter();
        const contentRef = useRef<HTMLDivElement>(null);
        const [showButton, setShowButton] = useState<boolean>(false);

        useEffect(() => {
            const checkHeight = () => {
                if (contentRef.current) {
                    const contentHeight = contentRef.current.scrollHeight;
                    setShowButton(contentHeight > maxHeight);
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
        }, [maxHeight]);

        return (
            <div className="relative">
                <div
                    ref={contentRef}
                    className={`overflow-y-hidden px-2 transition-all duration-300`}
                    style={{ maxHeight: `${maxHeight}px` }}
                >
                    <WrappedComponent {...(props as P)}>{children}</WrappedComponent>
                </div>
                {showButton && (
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white dark:from-black to-transparent pt-8 pb-4">
                        <button
                            onClick={() => redirectPath && router.push(redirectPath)}
                            className="w-full text-center text-yellow-600 hover:text-yellow-800 font-medium"
                        >
                            Show More
                        </button>
                    </div>
                )}
            </div>
        );
    };
};

export default withAccordionHeight;
