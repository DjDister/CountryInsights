const selectRandomCountries = (
  countries: { name: string }[],
  numberOfCountriesToChoose: string
) => {
  const remainingCountries = [...countries];
  const randomCountries = [] as { id: string; name: string; color: string }[];
  const countryCount = parseInt(numberOfCountriesToChoose);
  const howManyCountriesToChoose =
    countryCount > countries.length ? countries.length : countryCount;
  for (let i = 0; i < howManyCountriesToChoose; i++) {
    const randomIndex = Math.floor(Math.random() * remainingCountries.length);
    const color = `hsl(${randomIndex * 20}, 50%, 50%)`;
    const country = remainingCountries[randomIndex];
    randomCountries.push({ id: `${i}`, name: country.name, color: color });
    remainingCountries.splice(randomIndex, 1);
  }
  return randomCountries;
};

export default selectRandomCountries;
