import { LayoutProps } from "./types";
import { useStateContext } from "../context/StateContext";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./styles.css";

export const Layout = ({ children }: LayoutProps) => {
  const { organization } = useStateContext();

  return (
    <div className="page">
      <div className="sidebar">
        <a href="/">
          <img className="logo" src={Logo} alt="Levo" />
        </a>
        {organization?.name && <p className="orgName">{organization.name}</p>}
        {organization?.name && (
          <NavLink to={`/organization/${organization.id}`} className="pageName">
            Test Reports
          </NavLink>
        )}
      </div>
      <div className="mainContainer">{children}</div>
    </div>
  );
};
