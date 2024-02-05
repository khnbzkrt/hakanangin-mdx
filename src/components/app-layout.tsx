import "@/styles/globals.css";
import { FC } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

type AppLayoutProps = {
    children: React.ReactNode;
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className="container max-w-4xl mx-auto min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow p-4 md:px-0">{children}</main>
            <Footer />
        </div>
    );
};

export default AppLayout;
