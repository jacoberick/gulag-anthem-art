import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const linkClass =
  "uppercase text-base hover:text-trainBlue transition bOne:text-sm ";

const desktopNav = (
  <nav className="font-zen bFour:hidden">
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

const mobileNav = <nav className=""></nav>;

const Header = () => {
  return (
    <div id="HeaderContainer">
      <header className="px-14 bFour:px-7 py-3 max-w-screen-2xl mx-auto flex items-center justify-between">
        <Link to="/">
          <p className="uppercase font-jSans text-2xl">ga</p>
        </Link>
        {desktopNav}
        <button className="hidden bFour:block">
          <FontAwesomeIcon className="text-3xl text-black" icon={faBars} />
        </button>
      </header>
      {mobileNav}
    </div>
  );
};

export default Header;
