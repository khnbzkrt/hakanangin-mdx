import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../SocialLinks";
import patiIcon from "/public/icons/pati.webp";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between gap-4 md:gap-6 w-full">
            <div className="flex items-center gap-6">
                <Link href={"/"} className="font-bold text-xl flex items-center gap-2">
                    <Image src={patiIcon} width={20} height={20} alt="pati" />
                    <span>Hakan Angın</span>
                </Link>

                <Link href={"/blog"} className="font-medium hover:underline">
                    Blog
                </Link>
            </div>

            <SocialLinks />
        </nav>
    );
};

export default Navbar;
