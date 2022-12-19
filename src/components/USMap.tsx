import { ComposableMap, ZoomableGroup } from "react-simple-maps";
import BasicMapLayer from "./BasicMapLayer";
import type { Point } from "react-simple-maps";
import CongressionalDistricts from "./CongressionalDistricts";
import { MapViews } from "../utils/constants";

interface USMapProps {
  mapView: string;
}

const USMap = (props: USMapProps) => {
  const { mapView } = props;
  const center: Point = [0, 0];
  const mapParams = {
    zoom: 1,
    focusedStateId: 0,
    // center:[-83.43523233606125, 32.63933616159129],
    // zoom:4,
    // focusedStateId:13,
    tooltip: "",
  };
  const { zoom } = mapParams;
  const handleStateClick = () => {};
  const layer = () => {
    switch (mapView) {
      case MapViews.CONGRESS:
        return <CongressionalDistricts />;
      default:
        return <BasicMapLayer handleStateClick={handleStateClick} />;
    }
  };
  return (
    <ComposableMap
      data-tip=""
      projection="geoAlbersUsa"
      style={{ border: "1px black solid", height: "100%", width: "100%" }}
    >
      <ZoomableGroup
        center={center}
        zoom={zoom}
        // onMoveEnd={(event, zoomEvent) => handleMove(event, focusedStateId)}
      >
        {layer()}
        {/*<Layers mapView={mapView} focusedStateId={focusedStateId} />*/}

        {/*<VotingLayer votingDataContext={votingDataContext} focusedStateId={focusedStateId} setTooltip={setTooltip} handleStateClick={handleStateClick} zoom={zoom}/>*/}
        {/*<Labels />*/}

        {/*<Cities zoom={zoom} />*/}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default USMap;
