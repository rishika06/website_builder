import React from "react";

import "./landingPage.style.css";

import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <Layout>
      <h1 className="landing-page__heading">Build your own space</h1>
      <Link to="/form" className="landing-page__link">
        Let's start!
      </Link>
    </Layout>
  );
}

export default LandingPage;
