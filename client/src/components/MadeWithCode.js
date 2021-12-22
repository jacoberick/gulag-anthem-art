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
    let container = e.currentTarget;
    let containerRect = container.getBoundingClientRect();
    let mouseX = e.clientX - containerRect.left;
    let mouseY = e.clientY - containerRect.top;
    let img = container.querySelector("img");
    let text = container.querySelector("p");

    // x values
    let textX =
      (container.offsetWidth / 2 - mouseX) / 15 - text.offsetWidth / 2;
    let imgX = (textX + text.offsetWidth / 2) / 10;

    // y values
    let textY =
      (container.offsetHeight / 2 - mouseY) / 15 - text.offsetHeight / 2;
    let imgY = textY / 10;

    //style updates
    text.style.transform = `translate(${textX}px, ${textY}px)`;
    img.style.transform = `translate(${imgX}px, ${imgY}px) scale(1.25)`;
  };

  const resetParallax = (e) => {
    let text = e.currentTarget.querySelector("p");
    let img = e.currentTarget.querySelector("img");
    text.style.transform = "translate(-50%, -50%)";
    img.style.transform = "translate(0) scale(1.25)";
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
            <div
              onMouseMove={parallaxMe}
              onMouseLeave={resetParallax}
              key={x.id}
              className="my-10 linkContainer"
            >
              <a
                href={x.href}
                target="_blank"
                rel="noreferrer"
                className="h-52 overflow-hidden flex items-center relative transform"
              >
                <img
                  src={`./img/${x.imgSrc}`}
                  alt={x.name}
                  className="transform scale-125"
                />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-zen text-5xl duration-75 whitespace-nowrap pointer-events-none">
                  {x.name}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MadeWithCode;
