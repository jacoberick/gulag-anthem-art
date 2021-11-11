import Home from "./components/Home";
import Contact from "./components/Contact";
import Art from "./components/Art";
import NotFound from "./components/NotFound";
import IndividualArt from "./components/IndividualArt";
import TreeLink from "./components/TreeLink";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { WithHeader, WithoutHeader } from "./layouts/_layouts";

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
        {/* <Header /> */}
        <Routes>
          <Route
            path="/"
            element={
              <WithHeader>
                <Home />
                <Art setGlobalArtID={setGlobalArtID} />
              </WithHeader>
            }
          ></Route>
          <Route
            path="art/:artId"
            element={
              <WithHeader>
                <IndividualArt artID={artID} />
              </WithHeader>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <WithHeader>
                <Contact />
              </WithHeader>
            }
          ></Route>
          <Route
            path="/treelink"
            element={
              <WithoutHeader>
                <TreeLink />
              </WithoutHeader>
            }
          ></Route>
          <Route
            path="*"
            element={
              <WithHeader>
                <NotFound />
              </WithHeader>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
