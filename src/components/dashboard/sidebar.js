import React from "react";
import { Col, Container, Image } from "react-bootstrap";
import { Link } from "gatsby";

import userIcon from "@/assets/feather-icon/user.svg";

const DashboardSidebar = ({ username }) => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse"
    >
      <Container className="justify-content-center d-flex pt-4">
        <Col xs={6} md={4} className="m-auto text-center">
          <Image src={userIcon} roundedCircle className="p-3" />
          {/* <p>{username}</p> */}
        </Col>
      </Container>

      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              to="/dashboard/articles"
              className="nav-link"
              activeClassName="active"
              aria-current="page"
            >
              <i className="bi bi-file-earmark-text"></i> Articles
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/dashboard/products"
              className="nav-link"
              activeClassName="active"
              aria-current="page"
            >
              <i className="bi bi-box"></i> Products
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/managements"
              className="nav-link"
              activeClassName="active"
              aria-current="page"
            >
              <i className="bi bi-people-fill"></i> Managements
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardSidebar;
