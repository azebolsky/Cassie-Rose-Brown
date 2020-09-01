import React from "react";
import { Link } from "react-scroll";
import "./SideDrawer.css";

const sideDrawer = (props) => {
  let drawerClasses = "Sidebar-close";
  if (props.show) {
    drawerClasses = "Sidebar-open";
  }

  return (
    <div className={drawerClasses}>
      <ul>
        <img
          className="sidebar-img"
          src="https://i.imgur.com/QwpDS0N.png"
          alt="Cassie Brown"
        />
        <li>
          <Link
            className="side-link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="side-link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="side-link"
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            className="side-link"
            activeClass="active"
            to="recipes"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Recipes
          </Link>
        </li>
        <li>
          <Link
            className="side-link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li>
          <div className="social-media">
            <div>
              <a
                href="https://www.linkedin.com/in/cassiebrownrd/"
                className="fa fa-linkedin sidedrawer-social"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>li</p>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/cassiebrownrd/"
                className="fa fa-paper-plane sidedrawer-social"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>email</p>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default sideDrawer;
