import React from "react";
import "./Header.css";
import { Container } from "react-bootstrap";
import { RiPantoneLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
function Header() {
  const navLinks = [
    {
      display: "Home",
      url: "#",
    },
    {
      display: "About",
      url: "#",
    },
    {
      display: "Courses",
      url: "#",
    },
    {
      display: "Pages",
      url: "#",
    },
    {
      display: "Blog",
      url: "#",
    },
  ];
  return (
    <>
      <header className="header">
        <Container>
          <div className="navigation d-flex justify-content-between align-items-center">
            <div className="logo ">
              <h2
                style={{ color: "aqua" }}
                className="d-flex align-items-center"
              >
                <RiPantoneLine className="icon" /> LearnHere
              </h2>
            </div>
            <div className="nav">
              <div className="nav_menu">
                <ul className="nav_list">
                  {navLinks.map((x, index) => {
                    return (
                      <li className="nav_item" key={index} item={x}>
                        <a href={x.url}>{x.display}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* <div className="mobile_menu">
              <h2 style={{ color: "aqua" }}>
                {" "}
                <AiOutlineMenu className="icon" />
              </h2>
            </div> */}
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
