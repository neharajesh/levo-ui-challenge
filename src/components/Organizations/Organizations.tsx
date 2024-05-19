import { Section } from "../Section";
import { OrganizationCard } from "./components";
import { useNavigate } from "react-router-dom";
import "./components/styles.css";
import { useStateContext } from "../context/StateContext";
import { Organizations as Orgs, Reports } from "../data";
import { Organization as OrgType } from "../data/types";

export const Organizations = () => {
  const navigate = useNavigate();
  const { setOrganization, setReports } = useStateContext();

  const getOrganizationReports = (orgReportIds: Array<string>) => {
    return Reports.filter((report) => orgReportIds.includes(report.id));
  };

  const handleClick = (organization: OrgType) => {
    setOrganization(organization);
    setReports(getOrganizationReports(organization.reports));
    navigate(`/organization/${organization.id}`);
  };

  return (
    <>
      <Section
        title="Organizations"
        description="Pick the organization you want to access"
      >
        <div className="organizationsList">
          {Orgs.map((organization) => (
            <OrganizationCard
              key={organization.id}
              orgName={organization.name}
              orgId={organization.id}
              handleClick={() => handleClick(organization)}
            />
          ))}
        </div>
      </Section>
    </>
  );
};
