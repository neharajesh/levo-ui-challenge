import { Section } from "../Section";
import { OrganizationCard } from "./components";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import { Organizations as Orgs, Reports } from "../data";
import { Organization as OrgType } from "../data/types";
import "./components/styles.css";

export const Organizations = () => {
  const navigate = useNavigate();
  const { updateOrganization, updateReports } = useStateContext();

  const getOrganizationReports = (orgReportIds: Array<string>) =>
    Reports.filter((report) => orgReportIds.includes(report.id));

  const handleClick = (organization: OrgType) => {
    updateOrganization(organization);
    updateReports(getOrganizationReports(organization.reports));
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
