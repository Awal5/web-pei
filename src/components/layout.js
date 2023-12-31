import React, { Fragment, useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { SearchContext } from "@/context/search-context";
import { MenuContext } from "@/context/menu-context";
import SearchPopup from "@/components/search-popup";
import PopupMenu from "@/components/popup-menu";
import { Link as ScrollLink } from "react-scroll";
import Axios from "axios";

import "typeface-oswald";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/css/animate.css";
import "@/css/font-awesome.min.css";
import "@/css/icons.css";
import "@/css/preset.css";
import "@/css/theme.css";
import "@/css/responsive.css";

Axios.defaults.withCredentials = true;

const Layout = ({ PageTitle, children }) => {
  const { searchStatus } = useContext(SearchContext);
  const { menuStatus } = useContext(MenuContext);
  const [scrollTop, setScrollTop] = useState(false);

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrollTop]);

  return (
    <Fragment>
      <Helmet>
        <title>{PageTitle} - PT Pindad Enjiniring Indonesia</title>
      </Helmet>
      <div id="wrapper">{children}</div>
      {true === searchStatus ? <SearchPopup /> : null}
      {true === menuStatus ? <PopupMenu /> : null}

      {scrollTop === true ? (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          className="scroll-to-top showit"
        >
          <i className="fa fa-angle-double-up"></i>
        </ScrollLink>
      ) : null}
    </Fragment>
  );
};

export default Layout;
