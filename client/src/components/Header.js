import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const linkClass =
  "uppercase text-base hover:text-trainBlue transition bOne:text-sm font-zen";

const mobileLinkClass = "uppercase font-zen text-3xl";

const desktopNav = (
  <nav className="bFour:hidden">
    <a className={linkClass} href="/#artContainer">
      art
    </a>
    <a
      rel="noreferrer"
      className={`${linkClass} mx-12`}
      href="https://www.etsy.com/shop/GulagAnthem"
      target="_blank"
    >
      shop
    </a>
    <Link className={linkClass} to="/contact">
      contact
    </Link>
  </nav>
);

const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  const handleBurgerClick = () => {
    document.getElementById("burgerButton").classList.toggle("-rotate-90");
    document
      .getElementsByTagName("body")[0]
      .classList.toggle("overflow-hidden");
    setActiveBurger(!activeBurger);
  };

  const mobileNav = (
    <div
      id="mobileNavContainer"
      className={`transition-all hidden bFour:block bg-trainBlueOpacity text-white h-screenMinusHeader w-3/4 absolute ${
        activeBurger ? "right-0" : "right-full"
      } z-10 p-5`}
    >
      <nav className="flex flex-col justify-center h-full pb-32">
        <a
          onClick={handleBurgerClick}
          className={mobileLinkClass}
          href="/#artContainer"
        >
          art
        </a>
        <a
          onClick={handleBurgerClick}
          rel="noreferrer"
          className={`${mobileLinkClass} py-8`}
          href="https://www.etsy.com/shop/GulagAnthem"
          target="_blank"
        >
          shop
        </a>
        <Link
          onClick={handleBurgerClick}
          className={mobileLinkClass}
          to="/contact"
        >
          contact
        </Link>
      </nav>
    </div>
  );

  return (
    <div id="HeaderContainer">
      <header className="px-14 bFour:px-7 py-3 max-w-screen-2xl mx-auto flex items-center justify-between">
        <Link to="/">
          <p className="uppercase font-jSans text-2xl">ga</p>
        </Link>
        {desktopNav}
        <button
          id="burgerButton"
          onClick={handleBurgerClick}
          className="hidden bFour:block transform transition"
        >
          <FontAwesomeIcon className="text-3xl text-black" icon={faBars} />
        </button>
      </header>
      {mobileNav}
    </div>
  );
};

export default Header;
