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

  // create url for each document from api
  art.forEach((a) => {
    let parsedName = a.name.toLowerCase().replace(/\s/g, "-");
    a.href = parsedName;
  });

  const artCollection = art.map((a) => (
    <Link
      onClick={() => setGlobalArtID(a._id)}
      to={`/art/${a.href}`}
      key={a._id}
      className="flex items-center w-1/3 b600:w-1/2 b500:w-full px-5 b500:px-0 mt-10 hover:scale-105 duration-300 transform transition"
    >
      <img className="" src={a.jpg} alt={a.name} />
    </Link>
  ));

  return (
    <div id="artContainer" className="text-3xl bg-black pb-12">
      <div id="inner" className="max-w-screen-2xl px-14 mx-auto b600:px-7">
        <h1 className="pt-12 text-white text-4xl b1000:text-3xl uppercase b750:text-2xl">
          art
        </h1>
        <hr className="border-t-2 border-white" />
        <div id="artCollectionContainer" className="flex flex-wrap">
          {artCollection}
        </div>
      </div>
    </div>
  );
};

export default Art;
