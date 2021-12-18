const Footer = () => {
  const pTagStyle = "text-base b675:text-sm";
  return (
    <footer className="h-16 w-full">
      <div
        id="innerFooter"
        className="flex justify-between max-w-7xl px-20 mx-auto items-center h-full b675:px-6 b440:flex-col b440:justify-center"
      >
        <div className="flex items-center">
          <p className={`${pTagStyle} inline font-jSans`}>GULAG ANTHEM</p>
        </div>
        <p className={`${pTagStyle} font-zen`}>
          those who do not build must burn.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
