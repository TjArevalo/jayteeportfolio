import React, { useState } from "react";
import { FiInstagram, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import Vulkan from "../../assets/images/SevenTeenTwentyThree/IMG_9850.JPG";
import Reminiscent from "../../assets/images/Reminiscent/IMG_5878.JPG";
import Talaysay from "../../assets/images/Talaysay (May 2021)/Additional 10/Talasay.png";
import Lulu from "../../assets/images/Lulu (July 2021)/Additional 10/Lulu.png";
import Justin from "../../assets/images/Justin (March 2021)/Additional 10/Justin.png";
import "./Navbar.scss";
import { slide as Menu } from "react-burger-menu";
import icon from "../../assets/icons/sleepy.png";

export default function Navbar({ setBackground }) {
  const [sublist, setSublist] = useState(true);
  const [portfolio, setPortfolio] = useState(false);

  //Hover effect for shoots
  const onHover = (image) => {
    setBackground(image);
  };

  //Toggles Portfolio list on/off
  const portfolioHandle = () => {
    setPortfolio(!portfolio);
  };

  //Toggles Fashion Sub-bar
  const fashionHandle = () => {
    setSublist(true);
  };
  //Toggles Jewelry Sub-bar
  const jewelryHandle = () => {
    setSublist(false);
  };

  return (
    <div className="Navbar">
      <div className="Navbar__sidebar">
        {/* Mobile */}
        <Menu
          className="Navbar__mobileMenu"
          customBurgerIcon={<img src={icon} alt="menuIcon" />}
        >
          <a id="home" className="Navbar__menu-item" href="/">
            Home
          </a>
          <a id="about" className="Navbar__menu-item" href="/about">
            About
          </a>
          <h3 className="Navbar__menu-item--header">---Fashion---</h3>
          <a id="Vulkan" className="Navbar__menu-item--shoot" href="/Vulkan">
            - Vulkan
          </a>
          <a
            id="Reminiscent"
            className="Navbar__menu-item--shoot"
            href="/Reminiscent"
          >
            - Reminiscent
          </a>
          <h3 className="Navbar__menu-item--header">---Jewelry---</h3>
          <a id="Justin" className="Navbar__menu-item--shoot" href="/Justin">
            - Justin
          </a>
          <a id="Talasay" className="Navbar__menu-item--shoot" href="/Talasay">
            - Talaysay
          </a>
          <a id="Lulu" className="Navbar__menu-item--shoot" href="/Lulu">
            - Lulu
          </a>
        </Menu>

        {/* Desktop menu */}
        <div className="Navbar__mainNav">
          <div className="Navbar__portfolioLink">
            <h2 className="Navbar__links" onClick={portfolioHandle}>
              Portfolio
            </h2>
          </div>

          <div className="Navbar__about">
            <Link to="/about" className="Navbar__links">
              About
            </Link>
          </div>
        </div>

        {portfolio ? (
          <div className="Navbar__portfolio">
            <div className="Navbar__portfolioShoots">
              <div className="Navbar__shootSublist">
                <h3 className="Navbar__shootSubheader" onClick={fashionHandle}>
                  Fashion
                </h3>
                <h3 className="Navbar__shootSubheader" onClick={jewelryHandle}>
                  Jewelry
                </h3>
              </div>
              {sublist ? (
                <div className="Navbar__shootList">
                  <Link
                    to="/Vulkan"
                    className="Navbar__shoot"
                    onMouseEnter={() => onHover(`${Vulkan}`)}
                    onMouseLeave={() => onHover("Black")}
                  >
                    01_21_VULKAN//17:23
                  </Link>
                  <Link
                    to="/Reminiscent"
                    className="Navbar__shoot"
                    onMouseEnter={() => onHover(`${Reminiscent}`)}
                    onMouseLeave={() => onHover("Black")}
                  >
                    02_21_REMINISCENT
                  </Link>
                </div>
              ) : (
                <div className="Navbar__shootList">
                  <Link
                    to="/Justin"
                    className="Navbar__shoot"
                    onMouseEnter={() => onHover(`${Justin}`)}
                    onMouseLeave={() => onHover("Black")}
                  >
                    03_21_JUSTIN
                  </Link>
                  <Link
                    to="/Talaysay"
                    className="Navbar__shoot"
                    onMouseEnter={() => onHover(`${Talaysay}`)}
                    onMouseLeave={() => onHover("Black")}
                  >
                    05_21_TALAYSAY
                  </Link>
                  <Link
                    to="/Lulu"
                    className="Navbar__shoot"
                    onMouseEnter={() => onHover(`${Lulu}`)}
                    onMouseLeave={() => onHover("Black")}
                  >
                    07_21_LULU
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>

      <div className="Navbar__title">
        <Link to="/" className="Navbar__header">
          Sleepy
        </Link>
      </div>

      <div className="Navbar__contact">
        <div className="Navbar__contactIcons">
          <a
            href="https://www.instagram.com/jm.sleepy/"
            className="Navbar__contactLink"
          >
            <FiInstagram size={30} />
          </a>
          <a
            className="Navbar__contactLink"
            href="mailto:sleepyfromthe604@gmail.com"
          >
            <FiMail size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
