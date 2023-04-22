import { useState } from "react";
import DownArrowIcon from "./assets/svg/DownArrowIcon";
import GlobeIcon from "./assets/svg/GlobeIcon";
import Dropdown from "./components/Dropdown/Dropdown";
import WorldMap from "./components/WorldMap/WorldMap";
import { ChosenCountryType } from "../types";
import continents from "./const/continents";
import styles from "./App.module.css";

function App() {
  const [value, setValue] = useState(continents[0]);
  const [chosenCountries, setChosenCountries] = useState<ChosenCountryType[]>(
    []
  );

  return (
    <div className={styles.pageContainer}>
      <div className={styles.halfWidthCont}>
        <WorldMap chosenCountries={chosenCountries} />
      </div>
      <div className={styles.halfWidthCont}>
        <Dropdown
          options={continents}
          label="Select a continent"
          customInputStyle={{ width: 300, height: 40 }}
          unfoldIcon={<DownArrowIcon />}
          inputIcon={<GlobeIcon />}
          hintText="Select a continent"
          selectedVal={value}
          handleChange={(val) => setValue(val)}
        />
        <input />
      </div>
    </div>
  );
}

export default App;
