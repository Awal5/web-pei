import React from "react";
import { Link } from "gatsby";

const DashboardSidebar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse"
    >
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              to="/dashboard/articles"
              className="nav-link"
              activeClassName="active"
              aria-current="page"
            >
              <i className="bi bi-file-earmark-text"></i> Kelola Artikel
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/dashboard/products"
              className="nav-link"
              activeClassName="active"
              aria-current="page"
            >
              <i className="bi bi-box"></i> Kelola Produk
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/managements"
              className="nav-link"
              activeClassName="active"
              aria-current="page"
            >
              <i className="bi bi-people-fill"></i> Kelola Manajemen
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardSidebar;
