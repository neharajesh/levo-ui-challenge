import { LayoutProps } from "./types";
import logo from "./logo.svg";
import "./styles.css";
import { useStateContext } from "../context/StateContext";

export const Layout = ({ children }: LayoutProps) => {
  const { organization } = useStateContext();

  return (
    <div className="page">
      <div className="sidebar">
        <a href="/">
          <img className="logo" src={logo} alt="Levo" />
        </a>
        {organization?.name && <p className="orgName">{organization.name}</p>}
        {organization?.name && <p className="pageName">Test Reports</p>}
      </div>
      <div className="mainContainer">{children}</div>
    </div>
  );
};
