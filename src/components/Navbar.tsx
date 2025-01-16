import Link from "next/link";
import ThemeModeToggle from "./ThemeModeToggle";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-screen-8xl mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-semibold">
                    <Link href="/">AB Memon</Link>
                </div>
                <div className="space-x-4">
                    <ThemeModeToggle />
                    <Link href="/" className="text-gray-300 hover:text-white">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-300 hover:text-white">
                        About
                    </Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
