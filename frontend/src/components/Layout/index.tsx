import { ReactNode } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

interface LayoutProps {
  children: ReactNode
}

const Layout= ({ children }: LayoutProps) => {
  return (
    <>
      <Header/>
      <Sidebar/>
      <main>{children}</main>
    </>
  )
};


export default Layout;