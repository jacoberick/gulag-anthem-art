import IconLinks from "./IconLinks";

const buttonClass =
  "text-black font-zen bg-white px-32 py-2 bFivePFive:px-20 rounded block text-center mb-6 bFivePFive:text-sm bFourSevenFive:px-12";

const TreeLink = (props) => {
  return (
    <div
      id="treeLinkContainer"
      className="h-screen bg-black flex justify-center "
    >
      <div id="linkContainer" className="flex flex-col items-center p-5">
        <h1 className="text-white uppercase text-3xl bFivePFive:text-2xl">
          gulag anthem
        </h1>
        <hr className="border-t-2 border-white mb-8 w-full" />
        <IconLinks />
        <div className="mt-8">
          <a
            rel="noreferrer"
            target="_blank"
            className={buttonClass}
            href="https://www.etsy.com/shop/GulagAnthem"
          >
            <button>Prints</button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className={buttonClass}
            href="https://opensea.io/gulaganthem"
          >
            <button>NFTs</button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className={buttonClass}
            href="http://gulaganthem.com"
          >
            <button>gulaganthem.com</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TreeLink;
