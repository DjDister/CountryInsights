import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { chosenCountryType } from "../../../types";

export default function WorldMap({
  chosenCountries,
}: {
  chosenCountries: chosenCountryType[];
}) {
  const removedOutlineStyle = {
    outline: "none",
    outlineColor: "none",
    borderColor: "none",
    border: "none",
  };
  return (
    <ComposableMap>
      <Geographies geography={"/countriesmap.json"}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const chosenCountry = chosenCountries.find(
              (country) => country.name === geo.properties.name
            );
            return (
              <Geography
                onMouseDown={() => undefined}
                onMouseUp={() => undefined}
                onClick={() => undefined}
                fill={
                  chosenCountry?.name === geo.properties.name
                    ? chosenCountry?.color
                    : "white"
                }
                stroke="#000000"
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: removedOutlineStyle,
                  hover: removedOutlineStyle,
                  pressed: removedOutlineStyle,
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}
