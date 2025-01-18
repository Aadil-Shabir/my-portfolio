"use client";

import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface OverviewProps {
    goBack?: boolean;
}

const Overview = ({ goBack }: OverviewProps) => {
    const router = useRouter();

    return (
        <div className={cn("flex flex-col gap-4 border rounded-xl sm:p-4", goBack && "relative")}>
            {goBack && (
                <div className="absolute top-2 right-2 z-10">
                    <Button size="icon" variant="ghost" onClick={() => router.back()}>
                        <ChevronLeft />
                    </Button>
                </div>
            )}
            <div className="relative overflow-hidden rounded-full shadow-lg z-0">
                <Image
                    src="/assets/AB-Memon.png"
                    alt="AB Memon Image"
                    sizes="800px"
                    className="w-full h-auto transform shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:opacity-90"
                    height={100}
                    width={100}
                />
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
                <p className="text-2xl font-bold">AB Memon</p>
                <p className="text-xl font-semibold border-t leading-[35px]">Full Stack Developer</p>
                <p className="text-base italic font-medium sm:my-2">
                    "Self-taught Full Stack Web Developer with years of experience working with both small and large
                    companies. I've successfully developed and launched over{" "}
                    <span className="bg-yellow-400 text-black">three SaaS</span> applications serving 1000+ users.
                    Currently, I'm focused on AI integration and building AI Agents."
                </p>
            </div>
            <div className="flex justify-center gap-4">
                <Link href="https://www.linkedin.com/in/ab-memon-31642b1b5/" target="_blank">
                    <FaLinkedin className="size-6" />
                </Link>
                <Link href="https://github.com/Aadil-Shabir" target="_blank">
                    <FaGithub className="size-6" />
                </Link>
                <Link href="https://web.facebook.com/profile.php?id=100008695171133" target="_blank">
                    <FaFacebook className="size-6" />
                </Link>
                <Link href="https://x.com/AadilSh39994756" target="_blank">
                    <FaTwitter className="size-6" />
                </Link>
            </div>
        </div>
    );
};

export default Overview;
