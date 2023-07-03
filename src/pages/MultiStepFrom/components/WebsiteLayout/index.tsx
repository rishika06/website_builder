import React, { useState } from "react";
import "./websiteLayout.style.css";
import Layout from "../../../../components/Layout";
import Card from "../../../../components/Card";
import { websiteLayoutCardList } from "../../../../constants/websiteLayoutCardList";
import Modal from "../../../../components/Modal";

import "./websiteLayout.style.css";
import SampleWebsite from "../../../SampleWebsite";

function WebsiteLayout() {
  const [open, setOpen] = useState(false);
  const [sampleOpen, setSampleOpen] = useState(false);
  return (
    <>
      <Layout>
        <div className="website-layout__container">
          {websiteLayoutCardList?.map((item) => (
            <Card
              heading={item.heading}
              desc={item.desc}
              onWireframeClick={() => setOpen(true)}
              onSampleClick={() => setSampleOpen(true)}
              disable={item.disable}
            />
          ))}
        </div>
        {open && (
          <Modal setOpen={setOpen} width="200px" height="200px">
            hello
          </Modal>
        )}

        {sampleOpen && (
          <Modal setOpen={setSampleOpen} width="90%" height="90%">
            <SampleWebsite />
          </Modal>
        )}
      </Layout>
    </>
  );
}

export default WebsiteLayout;
