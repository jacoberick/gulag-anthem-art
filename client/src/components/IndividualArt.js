import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const IndividualArt = ({ artID }) => {
  const [asset, setAsset] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/record/${artID}`)
      .then((res) => {
        setAsset(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [artID]);

  return (
    <div className="relative h-screenMinusHeader bg-black p-12 flex items-center justify-center">
      <div id="iaInner" className="max-w-screen-2xl flex justify-center">
        <img className="w-1/2 mr-12" src={asset.jpg} alt="" />
        <div
          id="artInfo"
          className="font-jSans text-white text-3xl flex flex-col justify-center"
        >
          <p id="name" className="">
            {asset.name}
          </p>
          <p id="year">{asset.year}</p>
          <p id="poem" className="text-base font-zen max-w-sm mt-4">
            {asset.poem}
          </p>

          <Link className="self-center" to="/#artContainer">
            <button className="text-base hover:shadow-whiteGlow transition mt-16 font-zen border-2 border-white px-4 pt-1 pb-2 rounded">
              Return
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndividualArt;
