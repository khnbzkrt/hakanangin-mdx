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
      <div className="grid grid-cols-[200px,1fr] min-h-[200px] shadow-md rounded-2xl p-4 gap-4">
        <div className="relative">
          <Image src={src} fill loading="lazy" alt={title} />
        </div>
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
