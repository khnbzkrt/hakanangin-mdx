import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

type BlogCardProps = {
    title: string;
    src: StaticImageData;
    content: string;
    link: string;
};

const BlogCard: FC<BlogCardProps> = ({ src, title, content, link }) => {
    return (
        <Link href={link}>
            <div className="grid grid-rows-[1fr] md:grid-cols-[200px,1fr] min-h-[200px] shadow-md rounded-2xl p-6 gap-8">
                <div className="relative min-h-[300px] md:min-h-0">
                    <Image src={src} fill loading="lazy" alt={title} className="object-center object-contain" />
                </div>
                <div>
                    <h1>{title}</h1>
                    <p className="leading-8">{content}</p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
