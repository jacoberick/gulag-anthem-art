const Contact = () => {
  return (
    <div
      id="contactContainer"
      className="bg-black h-screenMinusHeader flex items-center"
    >
      <div
        id="contactInner"
        className="text-white font-jSans max-w-screen-2xl mx-auto p-5"
      >
        <p className="text-xl mb-4 uppercase bThree:text-lg bFive:text-base bFivePFive:text-sm bFourSevenFive:text-xs">
          for all inquiries
        </p>
        <a
          className="hover:underline hover:text-trainBlue transition duration-500"
          href="mailto: gulaganthem@gmail.com"
        >
          <p className="text-5xl bThree:text-4xl bFive:text-3xl bFivePFive:text-2xl bFourSevenFive:text-xl">
            gulaganthem@gmail.com
          </p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
