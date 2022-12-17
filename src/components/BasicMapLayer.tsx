import React from "react";
import statesBoundaries from "../data/states-10m.json";
import { Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "@mui/material";

interface BasicMapLayerProps {
  handleStateClick: () => void;
}

const BasicMapLayer = (props: BasicMapLayerProps) => {
  const { handleStateClick } = props;
  return (
    <Geographies geography={statesBoundaries}>
      {({ geographies }) =>
        geographies.map((geo, index) => {
          return (
            <Tooltip
              key={index}
              title={geo.properties.name}
              placement={"right-end"}
              arrow
            >
              <Geography
                key={geo.rsmKey}
                stroke="#000"
                geography={geo}
                fill={"#FFF"}
                onClick={() => handleStateClick()}
                style={{
                  default: {
                    stroke: "#000",
                    strokeWidth: 0.2,
                    outline: "none",
                  },
                  hover: {
                    fill: "#CFD8DC",
                    stroke: "#607D8B",
                    strokeWidth: 1,
                    outline: "none",
                  },
                }}
              />
            </Tooltip>
          );
        })
      }
    </Geographies>
  );
};
export default BasicMapLayer;
