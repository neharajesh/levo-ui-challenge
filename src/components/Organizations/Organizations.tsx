import { Section } from "../Section";
import { OrganizationCard } from "./components";
import { useNavigate } from "react-router-dom";
import "./components/styles.css";

export const Organizations = () => {
  const navigate = useNavigate();

  const handleClick = (orgId: string) => {
    navigate(`/organization/${orgId}`);
  };

  return (
    <>
      <Section
        title="Organizations"
        description="Pick the organization you want to access"
      >
        <div className="organizationsList">
          <OrganizationCard
            orgName="Organization A"
            orgId="1"
            handleClick={() => handleClick("1")}
          />
          <OrganizationCard
            orgName="Organization B"
            orgId="2"
            handleClick={() => handleClick("2")}
          />
        </div>
      </Section>
    </>
  );
};
