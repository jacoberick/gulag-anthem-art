const MadeWithCode = () => {
  const genProjectsInfo = [
    {
      name: "UMBRELLA",
      href: "https://umbrellacode.xyz",
      imgSrc: "umbrella.jpg",
      id: 1,
    },
  ];

  const parallaxMe = (e) => {
    let text = e.currentTarget.querySelector("p");
    let textPosition = text.getBoundingClientRect();
    text.style.left = `${textPosition.left + (textPosition.left - e.pageX)}px`;
    console.log(textPosition.left - e.pageX);
  };

  return (
    <div id="codeContainer" className="text-black">
      <div id="codeInner" className="max-w-screen-2xl px-14 mx-auto bFour:px-7">
        <h1 className="pt-12 text-4xl bOne:text-3xl uppercase bThree:text-2xl">
          generative projects
        </h1>
        <hr className="border-t-2 border-black" />
        <div id="projectsContainer" className="">
          {genProjectsInfo.map((x) => (
            <a
              href={x.href}
              target="_blank"
              rel="noreferrer"
              className="h-52 overflow-hidden flex items-center my-10 relative text-center transition duration-200 transform hover:scale-105"
              key={x.id}
              onMouseMove={parallaxMe}
            >
              <img src={`./img/${x.imgSrc}`} alt={x.name} className="" />
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-zen text-5xl">
                {x.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MadeWithCode;
