import "@/styles/globals.css";
import { FC } from "react";
import Header from "./header/Header";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="container max-w-4xl mx-auto">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
