import congressDistricts from "../data/US-district-current.topo.json";
import { Tooltip } from "@mui/material";
import { Geographies, Geography } from "react-simple-maps";
import React from "react";

const CongressCounties = () => {
  return (
    <Geographies geography={congressDistricts}>
      {({ geographies }) =>
        geographies.map((geo, index) => {
          const { STATE, CONG_DIST } = geo.properties;
          return (
            <Tooltip
              key={index}
              title={
                <div>
                  <div>State: {STATE}</div>
                  <div>District: {CONG_DIST}</div>
                </div>
              }
              placement={"right-end"}
              arrow
            >
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={"#FFF"}
                style={{
                  default: {
                    stroke: "#000",
                    strokeWidth: 0.1,
                    outline: "none",
                  },
                  hover: {
                    fill: "#CFD8DC",
                    stroke: "#607D8B",
                    strokeWidth: 0.1,
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

export default CongressCounties;
