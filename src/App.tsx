import { useEffect, useState } from "react";
import DownArrowIcon from "./assets/svg/DownArrowIcon";
import GlobeIcon from "./assets/svg/GlobeIcon";
import Dropdown from "./components/Dropdown/Dropdown";
import WorldMap from "./components/WorldMap/WorldMap";
import { ChosenCountryType, ContinentKeys, CountryInfo } from "../types";
import continents from "./const/continents";
import styles from "./App.module.css";
import isInputValueValid from "./utils/isInputValueValid";
import Input from "./components/Input/Input";
import useQueryContinents from "./hooks/useQueryContinents";
import fetchInsightDataAboutCountries from "./utils/fetchInsightDataAboutCountries";
import CountryCard from "./components/CountryCard/CountryCard";
import selectRandomCountries from "./utils/selectRandomCountries";
import EmptyCountryCard from "./components/CountryCard/EmptyCountryCard";

function App() {
  const [chosenContinent, setChosenContinent] = useState(continents[0]);
  const [chosenCountries, setChosenCountries] = useState<ChosenCountryType[]>(
    []
  );
  const [numberOfCountries, setNumberOfCountries] = useState("2");
  const [errorInInputValue, setErrorInInputValue] = useState(false);
  const [countriesInsightData, setCountriesInsightData] = useState<
    CountryInfo[] | { name: string; id: string }[]
  >([]);

  const { loading, error, data } = useQueryContinents<{
    continent: { countries: { name: string }[] };
  }>(chosenContinent.key);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorInInputValue(!isInputValueValid(e.target.value));
    setNumberOfCountries(e.target.value);
  };

  const handleClick = () => {
    if (data && data.continent && data.continent.countries) {
      const randomCountries = selectRandomCountries(
        data.continent.countries,
        numberOfCountries
      );
      setChosenCountries(randomCountries);
    }
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const countries = await fetchInsightDataAboutCountries(chosenCountries);
      setCountriesInsightData(countries);
      setIsLoading(false);
    };
    fetchData();
  }, [chosenCountries]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.flexRow}>
        <div className={styles.halfWidthCont}>
          <WorldMap
            chosenCountries={chosenCountries}
            continent={chosenContinent.key.toLocaleLowerCase() as ContinentKeys}
          />
        </div>
        <div className={styles.halfWidthCont}>
          <Dropdown
            options={continents}
            label="Select a continent"
            customInputStyle={{ width: 300, height: 40 }}
            unfoldIcon={<DownArrowIcon />}
            inputIcon={<GlobeIcon />}
            hintText="Select a continent"
            selectedVal={chosenContinent}
            handleChange={(val) => {
              setChosenContinent(val);
              setChosenCountries([]);
              setCountriesInsightData([]);
            }}
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
          <button
            disabled={loading || errorInInputValue}
            onClick={handleClick}
            className={styles.button}
            style={{
              backgroundColor: errorInInputValue ? "grey" : "#8FDE5D",
            }}
          >
            Show
          </button>
        </div>
      </div>
      <div className={styles.countriesContainer}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          countriesInsightData.map((country, index) => {
            const color =
              chosenCountries.find(
                (chosenCountry) => chosenCountry.id === country.id
              )?.color || "black";
            if ("population" in country) {
              return <CountryCard key={index} color={color} {...country} />;
            } else
              return (
                <EmptyCountryCard key={index} color={color} {...country} />
              );
          })
        )}
      </div>
    </div>
  );
}

export default App;
