import { SectionProps } from "./types";
import "./styles.css";
import { Outlet } from "react-router-dom";

export const Section = ({ title, description, children }: SectionProps) => {
  return (
    <div className="section">
      <p className="sectionTitle">{title}</p>
      {description && <p className="sectionDescription">{description}</p>}
      <div>
        {children}
        <Outlet />
      </div>
    </div>
  );
};
