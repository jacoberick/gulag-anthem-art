import { Link } from "react-router-dom";

const Header = () => {
  const linkClass = "uppercase text-base hover:text-trainBlue transition";
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
          <a className={`${linkClass} mx-12`} href="/">
            shop
          </a>
          <a className={linkClass} href="/">
            contact
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
