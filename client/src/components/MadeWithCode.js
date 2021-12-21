const MadeWithCode = () => {
  const genProjectsInfo = [
    {
      name: "UMBRELLA",
      href: "https://umbrellacode.xyz",
      imgSrc: "umbrella.jpg",
      id: 1,
    },
  ];

  const followMouse = (e) => {
    let container = e.currentTarget;
    let img = container.querySelector("img");
    let text = container.querySelector("p");

    let textX =
      (container.offsetWidth / 2 - e.nativeEvent.offsetX) / 15 -
      text.offsetWidth / 2;
    let imgX = (textX + text.offsetWidth / 2) / 10;

    let y = e.nativeEvent.offsetY / 5;
    text.style.transform = `translate(${textX}px, -50%)`;
    img.style.transform = `translate(${imgX}px) scale(1.5)`;
  };

  const returnTextPosition = (e) => {
    let text = e.currentTarget.querySelector("p");
    let img = e.currentTarget.querySelector("img");
    text.style.transform = "translate(-50%, -50%)";
    img.style.transform = "translate(0)";
  };

  return (
    <div id="codeContainer" className="text-black">
      <div id="codeInner" className="max-w-screen-2xl px-14 mx-auto bFour:px-7">
        <h1 className="pt-12 text-4xl bOne:text-3xl uppercase bThree:text-2xl">
          generative projects
        </h1>
        <hr className="border-t-2 border-black" />
        <div
          id="projectsContainer"
          className=""
          onMouseMove={followMouse}
          onMouseLeave={returnTextPosition}
        >
          {genProjectsInfo.map((x) => (
            <div className="my-10">
              <a
                href={x.href}
                target="_blank"
                rel="noreferrer"
                className="h-52 overflow-hidden flex items-center relative transform"
                key={x.id}
              >
                <img
                  src={`./img/${x.imgSrc}`}
                  alt={x.name}
                  className="transform scale-150"
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
