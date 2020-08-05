import React from "react";
import { Link } from "react-scroll";
import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div className="Sidebar">
      <ul>
        <img
          className="sidebar-img"
          src="https://i.imgur.com/QwpDS0N.png"
          alt="Cassie Brown"
        />
        <li>
          <Link
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
                className="fa fa-linkedin"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>li</p>
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/sassyrosebrown"
                className="fa fa-twitter"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>tw</p>
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/cassierose16"
                className="fa fa-facebook"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p>fb</p>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
