import { OrganizationCardProps } from "./types";
import "./styles.css";
import OrganizationIcon from "./organization-icon.svg";

export const OrganizationCard = ({
  orgName,
  orgId,
  handleClick,
}: OrganizationCardProps) => {
  return (
    <div
      className="card"
      onClick={handleClick}
      key={`organization-${orgId}-card`}
    >
      <img src={OrganizationIcon} alt="Organization" className="cardIcon" />
      <p className="cardTitle">{orgName}</p>
    </div>
  );
};
