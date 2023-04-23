export type ChosenCountryType = {
  name: string;
  color: string;
};

export type Continent = {
  key: string;
  value: string;
};

export type CountryInfo = {
  name: string;
  capital: string;
  population: number;
  currency: { name: string; symbol: string };
  subregion: string;
  languages: string;
};
