import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  if (pathname === "/treelink") return null;

  const linkClass =
    "uppercase text-base hover:text-trainBlue transition bOne:text-sm ";
  return (
    <div id="HeaderContainer">
      <header className="px-14 py-3 max-w-screen-2xl mx-auto flex items-center justify-between">
        <Link to="/">
          <p className="uppercase font-jSans text-2xl">ga</p>
        </Link>
        <nav className="font-zen">
          <a className={linkClass} href="/#artContainer">
            art
          </a>
          <a
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
      </header>
    </div>
  );
};

export default Header;
