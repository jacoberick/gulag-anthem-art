import axios from "axios";
import { useState, useEffect } from "react";

const Art = () => {
  const [art, setArt] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/record/")
      .then((response) => {
        setArt({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return <div id="artContainer"></div>;
};

export default Art;
