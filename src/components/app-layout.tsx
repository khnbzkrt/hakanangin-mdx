import "@/styles/globals.css";
import { FC } from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return <main className="container mx-auto">{children}</main>;
};

export default AppLayout;
