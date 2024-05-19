import { OrganizationCardProps } from "./types";
import OrganizationIcon from "../../../assets/organization-icon.svg";
import "./styles.css";

export const OrganizationCard = ({
  orgName,
  orgId,
  handleClick,
}: OrganizationCardProps) => {
  return (
    <div
      className="orgCard"
      onClick={handleClick}
      key={`organization-${orgId}-card`}
    >
      <img src={OrganizationIcon} alt="Organization" className="orgCardIcon" />
      <p className="orgCardTitle">{orgName}</p>
    </div>
  );
};
