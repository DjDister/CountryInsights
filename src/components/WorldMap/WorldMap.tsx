import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { ChosenCountryType, ContinentKeys } from "../../../types";
import { ZoomableGroup } from "react-simple-maps";

export default function WorldMap({
  chosenCountries,
  continent,
}: {
  chosenCountries: ChosenCountryType[];
  continent: ContinentKeys;
}) {
  const removedOutlineStyle = {
    outline: "none",
    outlineColor: "none",
    borderColor: "none",
    border: "none",
  };
  const coordinates = {
    af: { center: [20, 0] },
    as: { center: [90, 25] },
    eu: { center: [20, 55] },
    na: { center: [-100, 40] },
    oc: { center: [145, -30] },
    sa: { center: [-60, -15] },
  };
  const { center } = coordinates[continent] || {
    center: [0, 0],
  };
  return (
    <ComposableMap>
      <ZoomableGroup center={[center[0], center[1]]} zoom={1.4}>
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
      </ZoomableGroup>
    </ComposableMap>
  );
}
