const Contact = () => {
  return (
    <div
      id="contactContainer"
      className="bg-black h-screenMinusHeader flex items-center"
    >
      <div
        id="contactInner"
        className="text-white font-jSans text-5xl max-w-screen-2xl mx-auto"
      >
        <p className="text-xl mb-4 uppercase">for all inquiries</p>
        <a
          className="hover:underline hover:text-trainBlue transition duration-500"
          href="mailto: gulaganthem@gmail.com"
        >
          <p>gulaganthem@gmail.com</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
