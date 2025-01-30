"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

const ThemeModeToggle = () => {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="flex items-start justify-between gap-2">
            <label className="text-sm" htmlFor="theme-mode">
                {theme && theme === "dark" ? "Dark Mode" : "Light Mode"}
            </label>
            <Switch
                onCheckedChange={(value) => (value === true ? setTheme("dark") : setTheme("light"))}
                checked={theme === "dark" ? true : false}
                id="theme-mode"
            />
        </div>
    );
};

export default ThemeModeToggle;
