import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <div className="flex items-center gap-4">
            <Link href={"https://www.linkedin.com/in/hakan-angin/"} target="_blank">
                <FaLinkedin size={22} />
            </Link>
            <Link href={"https://github.com/khnbzkrt"} target="_blank">
                <FaGithub size={22} />
            </Link>
            <Link href={"https://twitter.com/khnbzkrt"} target="_blank">
                <BsTwitterX />
            </Link>
        </div>
    );
};

export default SocialLinks;
