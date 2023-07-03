import React from "react";
import Layout from "../../../../components/Layout";
import InputField from "../../../../lib/InputField";

type WebsiteName = { websiteName: string };

type WebsiteNameProps = WebsiteName & {
  updateFields: (fields: Partial<WebsiteName>) => void;
};

function WebsiteName({ websiteName, updateFields }: WebsiteNameProps) {
  return (
    <Layout>
      <h1>What is the name of your website?</h1>
      <InputField
        id="website-name"
        htmlFor="website-name"
        type="text"
        name="website-name"
        label=""
        value={websiteName}
        placeholder="ex: MayFair"
        onChange={(e) => updateFields({ websiteName: e.target.value })}
      />
      {/* <button>Next</button> */}
    </Layout>
  );
}

export default WebsiteName;
