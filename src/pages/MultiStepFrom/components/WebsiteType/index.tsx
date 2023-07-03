import Layout from "../../../../components/Layout";
import RadioCard from "../../../../lib/RadioCard";
import { websiteTypeList } from "../../../../constants/websiteTypeList";

import "./websiteType.style.css";

type WebsiteType = { websiteType: string };

type WebsiteTypeProps = WebsiteType & {
  updateFields: (fields: Partial<WebsiteType>) => void;
};

function WebsiteType({ websiteType, updateFields }: WebsiteTypeProps) {
  return (
    <Layout>
      <h1>What type of website do you wish to create?</h1>
      <div className="website-type__cards">
        {websiteTypeList?.map((item: any) => (
          <RadioCard
            key={item.id}
            id={item.id}
            htmlFor={item.htmlFor}
            handleRadioChange={(e) =>
              updateFields({ websiteType: e.target.value })
            }
            label={item.label}
            radioCardDesc={item.radioCardDesc}
            value={item.value || websiteType}
            disable={item.disable}
            // checked={false}
          />
        ))}
      </div>
    </Layout>
  );
}

export default WebsiteType;
