import { Dispatch, SetStateAction } from "react";
import ThemeModeToggle from "../ThemeModeToggle";
import { Slider } from "@/components/ui/slider";

interface ToolbarProps {
    brightness: string;
    setBrightness: Dispatch<SetStateAction<string>>;
}

const Toolbar = ({ brightness, setBrightness }: ToolbarProps) => {
    const handleBrightnessChange = (value: number[]) => {
        const brightnessValue = `${value[0]}%`;
        setBrightness(brightnessValue);
    };
    return (
        <div className="border rounded-xl p-4 h-full flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <p className="border-b pb-2 font-medium">Theme</p>
                <ThemeModeToggle />
            </div>
            <div className="flex flex-col gap-4">
                <p className="border-b pb-2 font-medium">Brightness</p>
                <Slider defaultValue={[100]} max={100} step={1} onValueChange={handleBrightnessChange} />
                <p className="text-sm text-muted-foreground">Brightness: {brightness}</p>
            </div>
        </div>
    );
};

export default Toolbar;
