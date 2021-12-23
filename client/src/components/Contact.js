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
        <p className="text-xl mb-4 uppercase b750:text-lg b500:text-base b450:text-sm b350:text-xs">
          for all inquiries
        </p>
        <a
          className="hover:underline hover:text-trainBlue transition duration-500"
          href="mailto: gulaganthem@gmail.com"
        >
          <p className="text-5xl b750:text-4xl b500:text-3xl b450:text-2xl b350:text-xl">
            gulaganthem@gmail.com
          </p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
