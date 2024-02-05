export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-[minmax(auto,900px)] place-content-center" id="mdxLayout">
            {children}
        </div>
    );
}
