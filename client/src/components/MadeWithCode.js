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
    let text = container.querySelector("p");
    let x = container.offsetWidth / 2 - e.nativeEvent.offsetX;
    let y = container.offsetHeight / 2 - e.nativeEvent.offsetY / 15;
    text.style.transform = `translate(${x}px, ${y}px)`;
    console.log(container.offsetHeight, e.nativeEvent);
  };

  const returnTextPosition = (e) => {
    let text = e.currentTarget.querySelector("p");
    text.innerHTML = "UMBRELLA";
    text.style.transform = "translate(-50%, -50%)";
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
              className="h-52 overflow-hidden flex items-center my-10 relative transition duration-200 transform"
              key={x.id}
              onMouseMove={followMouse}
              onMouseLeave={returnTextPosition}
            >
              <img src={`./img/${x.imgSrc}`} alt={x.name} className="" />
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-zen text-5xl transition-all duration-75 whitespace-nowrap pointer-events-none">
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
