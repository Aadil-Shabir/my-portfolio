// contexts/store.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context value
interface WorkExperienceContextType {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with default values
const WorkExperienceContext = createContext<WorkExperienceContextType | undefined>(undefined);

// Create the provider component
const WorkExperienceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState<string>("initial value");

    return <WorkExperienceContext.Provider value={{ state, setState }}>{children}</WorkExperienceContext.Provider>;
};

// Custom hook to use the context
const useWorkExperience = (): WorkExperienceContextType => {
    const context = useContext(WorkExperienceContext);
    if (context === undefined) {
        throw new Error("useWorkExperience must be used within a WorkExperienceProvider");
    }
    return context;
};

export { WorkExperienceProvider, useWorkExperience };
