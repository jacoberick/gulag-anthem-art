import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URI } from "../utility/constants";

const Art = ({ setGlobalArtID }) => {
  const [art, setArt] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URI}/record/`)
      .then((res) => {
        setArt(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //create url for each document from api
  art.forEach((a) => {
    let parsedName = a.name.toLowerCase().replace(/\s/g, "-");
    a.href = parsedName;
  });

  const artCollection = art.map((a) => (
    <Link
      onClick={() => setGlobalArtID(a._id)}
      to={`/art/${a.href}`}
      key={a._id}
      className="w-1/3 bFour:w-1/2 px-5 mt-10 hover:scale-105 duration-300 transform transition"
    >
      <img className="" src={a.jpg} alt={a.name} />
    </Link>
  ));

  return (
    <div id="artContainer" className="text-3xl h-screen bg-black">
      <div id="inner" className="max-w-screen-2xl px-14 mx-auto bFour:px-7">
        <h1 className="pt-12 text-white text-4xl bOne:text-3xl uppercase bThree:text-2xl">
          art
        </h1>
        <hr className="border-2 border-white" />
        <div id="artCollectionContainer" className="flex flex-wrap">
          {artCollection}
        </div>
      </div>
    </div>
  );
};

export default Art;
