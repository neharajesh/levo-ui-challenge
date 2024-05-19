import { LayoutProps } from "./types";
import logo from "./logo.svg";
import "./styles.css";
import { Outlet } from "react-router-dom";

export const Layout = ({
  organizationName,
  pageName,
  children,
}: LayoutProps) => {
  return (
    <div className="page">
      <div className="sidebar">
        <img className="logo" src={logo} alt="Levo" />
        {organizationName && <p className="orgName">{organizationName}</p>}
        {pageName && <p className="pageName">{pageName}</p>}
      </div>
      <div className="mainContainer">
        {children}
        <Outlet />
      </div>
    </div>
  );
};
