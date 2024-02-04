import BlogCard from "@/components/card/blog-card";
import branchingImage from "/public/blog/branching.png";
import sdlcImage from "/public/blog/sdlc.webp";

const blogData = [
    {
        title: "SDLC (Yazılım Geliştirme Yaşam Döngüsü)",
        content:
            "Merhaba, bu yazıda SDLC (Software Development Life Cycle) kavramının sahip olduğu süreçleri ve süreçler içerisindeki detayları tecrübelerimle beraber aktarmaya çalışacağım.",
        src: sdlcImage,
        link: "/blog/yazilim-gelistirme-yasam-dongusu",
    },
    {
        title: "Development Sürecinde Branching İşlemleri",
        content:
            "Merhaba, bu yazı içeriğinde size aktarmak istediğim konu, geliştirme sürecinde kullandığımız git repolarındaki branch sistemi. Pratikte branchler oluştururken hangi mantıkla nasıl bir yöntem izlediğimden bahsetmek istiyorum.",
        src: branchingImage,
        link: "/blog/development-surecinde-branching-islemleri",
    },
];

export default function Home() {
    return (
        <article className="grid grid-cols-1 gap-4">
            {blogData.map((blog) => (
                <BlogCard key={blog.title} link={blog.link} src={blog.src} title={blog.title} content={blog.content} />
            ))}
        </article>
    );
}
