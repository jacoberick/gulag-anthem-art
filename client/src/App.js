import Home from "./components/Home";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import IndividualArt from "./components/IndividualArt";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  //global state for selected jpg
  const [artID, setArtID] = useState(
    window.localStorage.getItem("artID")
      ? window.localStorage.getItem("artID")
      : null
  );

  //function that fires onClick of jpg from Art component
  const setGlobalArtID = (id) => {
    setArtID(id);
  };

  //sets local storage in case of refresh of IndividualArt component
  useEffect(() => {
    window.localStorage.setItem("artID", artID);
  }, [artID]);

  return (
    <Router>
      <div id="masterContainer" className="bg-white">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home setGlobalArtID={setGlobalArtID} />}
          ></Route>
          <Route
            path="art/:artId"
            element={<IndividualArt artID={artID} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
