export type ChosenCountryType = {
  id: string;
  name: string;
  color: string;
};

export type Continent = {
  key: string;
  value: string;
};

export type CountryInfo = {
  id: string;
  name: string;
  capital: string;
  population: number;
  currency: { name: string; symbol: string };
  subregion: string;
  languages: string;
};
