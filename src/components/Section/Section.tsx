import { SectionProps } from "./types";
import "./styles.css";

export const Section = ({ title, description, children }: SectionProps) => {
  return (
    <div className="section">
      <p className="sectionTitle">{title}</p>
      {description && <p className="sectionDescription">{description}</p>}
      <div className="sectionChildren">{children}</div>
    </div>
  );
};
