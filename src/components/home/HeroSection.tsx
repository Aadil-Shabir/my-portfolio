import Image from "next/image";
import ThemeModeToggle from "../ThemeModeToggle";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="flex flex-col w-full items-center h-full justify-center sm:p-10 bg-[#EEEEEE] dark:bg-[#151515]">
            <div className="grid grid-cols-12 sm:gap-8 gap-4 w-full">
                <div className="col-span-3 flex flex-col gap-4 border rounded-xl sm:p-4">
                    <div className="relative overflow-hidden rounded-full shadow-lg">
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
                            "Self-taught Full Stack Web Developer with years of experience working with both small and
                            large companies. I've successfully developed and launched over{" "}
                            <span className="bg-yellow-400">three SaaS</span> applications serving 1000+ users.
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
                <div className="col-span-9 flex flex-col items-center text-center gap-4">
                    <p className="sm:text-4xl font-bold">Hey there!</p>
                    <ThemeModeToggle />
                    <p className="sm:text-3xl font-bold">
                        I'm AB Memon, a passionate <span className="text-yellow-400 bg-black">Web Developer.</span>
                    </p>
                    <p className="sm:text-3xl font-bold">
                        I specialize in crafting modern, responsive, and high-performance web applications using Next.js
                        and Node.js.
                    </p>
                    <p className="sm:text-3xl font-bold">Let's turn your ideas into digital realities!</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
