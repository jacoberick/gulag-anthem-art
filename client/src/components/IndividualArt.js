import axios from "axios";
import { useEffect, useState } from "react";

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
    <div className="h-screenMinusHeader bg-black p-12">
      <div id="iaInner" className="max-w-screen-2xl mx-auto">
        <img className="w-2/3" src={asset.jpg} alt="" />
      </div>
    </div>
  );
};

export default IndividualArt;
