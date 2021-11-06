import axios from "axios";
import { useState, useEffect } from "react";

const Art = () => {
  const [art, setArt] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/record/")
      .then((res) => {
        setArt(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const artCollection = art.map((a) => (
    <img key={a._id} src={a.cloudinary_link} alt={a.name} />
  ));

  return (
    <div id="artContainer" className="mt-16 text-3xl h-screen bg-black">
      <div id="inner" className="max-w-7xl px-12 mx-auto">
        <h1 className="pt-12 text-white text-4xl">ART</h1>
        <hr className="border-2 border-white" />
        <div id="artCollectionContainer">{artCollection}</div>
      </div>
    </div>
  );
};

export default Art;
