import { ChosenCountryType, CountryInfo } from "../../types";

const fetchInsightDataAboutCountries = async (
  countries: ChosenCountryType[]
): Promise<CountryInfo[] | { name: string; id: string }[]> => {
  const promises = countries.map((country) =>
    fetch(`https://restcountries.com/v3.1/name/${country.name}`)
      .then((response) => response.json())
      .then((data) => {
        return {
          id: country.id,
          name: data[0].name.official,
          capital: data[0].capital[0],
          population: data[0].population,
          currency: data[0].currencies[Object.keys(data[0].currencies)[0]],
          subregion: data[0].subregion,
          languages: data[0].languages[Object.keys(data[0].languages)[0]],
        };
      })
      .catch(() => {
        return {
          id: country.id,
          name: country.name,
        };
      })
  );
  const data = await Promise.all(promises);
  return data;
};

export default fetchInsightDataAboutCountries;
