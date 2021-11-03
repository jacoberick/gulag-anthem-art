const Header = () => {
  const linkClass = "uppercase text-base hover:text-trainBlue transition";
  return (
    <div id="HeaderContainer">
      <header className="px-12 py-3 max-w-7xl mx-auto flex items-center justify-between">
        <p className="uppercase font-jSans text-2xl">ga</p>
        <nav className="font-zen">
          <a className={linkClass} href="">
            art
          </a>
          <a className={`${linkClass} mx-8`} href="">
            shop
          </a>
          <a className={linkClass} href="">
            contact
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
