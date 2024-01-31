import BlogCard from "@/components/card/blog-card";
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
    title: "SDLC (Yazılım Geliştirme Yaşam Döngüsü)",
    content:
      "Merhaba, bu yazıda SDLC (Software Development Life Cycle) kavramının sahip olduğu süreçleri ve süreçler içerisindeki detayları tecrübelerimle beraber aktarmaya çalışacağım.",
    src: sdlcImage,
    link: "/blog/yazilim-gelistirme-yasam-dongusu",
  },
  {
    title: "SDLC (Yazılım Geliştirme Yaşam Döngüsü)",
    content:
      "Merhaba, bu yazıda SDLC (Software Development Life Cycle) kavramının sahip olduğu süreçleri ve süreçler içerisindeki detayları tecrübelerimle beraber aktarmaya çalışacağım.",
    src: sdlcImage,
    link: "/blog/yazilim-gelistirme-yasam-dongusu",
  },
  {
    title: "SDLC (Yazılım Geliştirme Yaşam Döngüsü)",
    content:
      "Merhaba, bu yazıda SDLC (Software Development Life Cycle) kavramının sahip olduğu süreçleri ve süreçler içerisindeki detayları tecrübelerimle beraber aktarmaya çalışacağım.",
    src: sdlcImage,
    link: "/blog/yazilim-gelistirme-yasam-dongusu",
  },
  {
    title: "SDLC (Yazılım Geliştirme Yaşam Döngüsü)",
    content:
      "Merhaba, bu yazıda SDLC (Software Development Life Cycle) kavramının sahip olduğu süreçleri ve süreçler içerisindeki detayları tecrübelerimle beraber aktarmaya çalışacağım.",
    src: sdlcImage,
    link: "/blog/yazilim-gelistirme-yasam-dongusu",
  },
  {
    title: "SDLC (Yazılım Geliştirme Yaşam Döngüsü)",
    content:
      "Merhaba, bu yazıda SDLC (Software Development Life Cycle) kavramının sahip olduğu süreçleri ve süreçler içerisindeki detayları tecrübelerimle beraber aktarmaya çalışacağım.",
    src: sdlcImage,
    link: "/blog/yazilim-gelistirme-yasam-dongusu",
  },
];

export default function Home() {
  return (
    <article className="grid grid-cols-2 gap-4">
      {blogData.map((blog) => (
        <BlogCard
          key={blog.title}
          link={blog.link}
          src={blog.src}
          title={blog.title}
          content={blog.content}
        />
      ))}
    </article>
  );
}
