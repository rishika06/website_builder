import React, { ReactNode } from "react";
import "./layout.style.css";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div className="layout__container">{children}</div>;
}

export default Layout;
