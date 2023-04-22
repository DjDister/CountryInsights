import { useState } from "react";
import "./App.css";
import WorldMap from "./components/WorldMap/WorldMap";
import { chosenCountryType } from "../types";

function App() {
  const [chosenCountries, setChosenCountries] = useState<chosenCountryType[]>([
    { name: "Poland", color: "red" },
    { name: "Germany", color: "blue" },
  ]);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "50%" }}>
          <WorldMap chosenCountries={chosenCountries} />
        </div>
      </div>
    </>
  );
}

export default App;
