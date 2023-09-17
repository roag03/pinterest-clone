import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Mainboard from "./components/Mainboard";
import unsplash from "./api/unsplash";

function App() {
  const [pins, setNewPins] = useState([]);
  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ["ocean", "HotGirls", "smoking", "models", "boose"];
    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;
          pinData = pinData.concat(results);
          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setNewPins(pinData)
    })
  };
  useEffect(() => {
     getNewPins()
  }, [])
  

  const onSearchSubmit = (term) => {
    console.log("see these images", term);
    getImages(term).then((res) => {
      let results = res.data.results;
      let newPins = [...results, ...pins];
      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    });
  };

  return (
    <div className="app">
      <header className="app__header">
        {/* header */}
        <Header onSubmit={onSearchSubmit} />
        {/* mainboard */}
        <Mainboard pins={pins} />
      </header>
    </div>
  );
}

export default App;
