import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const LayoutDashboard = ({ pageTitle, children }) => {
  return (
    <Fragment>
      <Helmet>
        <title>{pageTitle} - PT Pindad Enjiniring Indonesia</title>
      </Helmet>
      <div className="dashboard-wrapper">{children}</div>
    </Fragment>
  );
};

export default LayoutDashboard;
