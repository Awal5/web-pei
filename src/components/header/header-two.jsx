import React, { useState, useEffect, useContext } from "react";
import { LogoImage, NavLinks } from "@/data";
import { Col, Container, Row, Image } from "react-bootstrap";
import { SearchContext } from "@/context/search-context";
import { MenuContext } from "@/context/menu-context";
import { Link } from "gatsby";

const HeaderTwo = () => {
  // State for sticky header
  const [sticky, setSticky] = useState(false);
  // Context for search and menu status
  const { searchStatus, updateSearchStatus } = useContext(SearchContext);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);

  // Handler for search button click
  const handleSearchClick = e => {
    e.preventDefault();
    updateSearchStatus(!searchStatus);
  };

  // Handler for menu button click
  const handleMenuClick = e => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <header
      className={`header_01  ${
        true === sticky ? "fixedHeader animated flipInX" : null
      }`}
      id="header"
    >
      <Container fluid>
        <Row className="justify-content-between">
          <Col className="col-6" lg={2} md={3} sm={3}>
            <div className="logo">
              <Link to="/">
                <Image src={LogoImage.light} alt="" width={150} height={100} />
              </Link>
            </div>
          </Col>
          <Col lg={8} sm={8} md={7} className="d-none d-lg-block ">
            <nav className="mainmenu text-center">
              <ul>
                {NavLinks.map((links, index) => {
                  return (
                    <li
                      key={index}
                      className={`${
                        undefined !== links.subItems
                          ? "menu-item-has-children"
                          : ""
                      }`}
                    >
                      <Link to={links.url}>{links.name}</Link>
                      {undefined !== links.subItems ? (
                        <ul className="sub-menu">
                          {links.subItems.map((subLinks, index) => (
                            <li
                              key={index}
                              className={`${
                                undefined !== links.subItems
                                  ? "menu-item-has-children"
                                  : ""
                              }`}
                            >
                              <Link to={subLinks.url}>{subLinks.name}</Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </Col>
          <Col lg={2} md={2} sm={4} className="col-6">
            <div className="navigator text-right">
              <a
                className="search searchToggler"
                href="#"
                onClick={handleSearchClick}
              >
                <i className="mei-magnifying-glass"></i>
              </a>
              <a
                href="#"
                className="menu mobilemenu d-none d-md-none d-lg-none"
              >
                <i className="mei-menu"></i>
              </a>
              <a
                id="open-overlay-nav"
                className="menu hamburger"
                onClick={handleMenuClick}
                href="#"
              >
                <i className="mei-menu"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderTwo;
