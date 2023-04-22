import { useState } from "react";
import DownArrowIcon from "./assets/svg/DownArrowIcon";
import GlobeIcon from "./assets/svg/GlobeIcon";
import Dropdown from "./components/Dropdown/Dropdown";
import WorldMap from "./components/WorldMap/WorldMap";
import { ChosenCountryType } from "../types";
import continents from "./const/continents";
import styles from "./App.module.css";
import isInputValueValid from "./utils/isInputValueValid";
import Input from "./components/Input/Input";

function App() {
  const [value, setValue] = useState(continents[0]);
  const [chosenCountries, setChosenCountries] = useState<ChosenCountryType[]>(
    []
  );
  const [numberOfCountries, setNumberOfCountries] = useState("2");
  const [errorInInputValue, setErrorInInputValue] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorInInputValue(!isInputValueValid(e.target.value));
    setNumberOfCountries(e.target.value);
  };

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
        <Input
          className={styles.input}
          label="Number of countries to show"
          value={numberOfCountries}
          customInputStyle={{ width: 300, height: 40 }}
          handleChange={handleChange}
          underInputText={
            errorInInputValue
              ? "Please enter a number between 2 and 10"
              : undefined
          }
        />
        <button className={styles.button}>Show</button>
      </div>
    </div>
  );
}

export default App;
