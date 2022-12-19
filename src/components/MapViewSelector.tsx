import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { MapViews } from '../utils/constants';
import React from 'react';
interface MapViewSelectorProps {
  changeMapView: (event: SelectChangeEvent) => void;
  mapView: string;
}

const MapViewSelector = (props: MapViewSelectorProps) => {
  const { mapView, changeMapView } = props;
  const { BASIC, CONGRESS } = MapViews;
  return (
    <FormControl variant="standard" fullWidth>
      <Select value={mapView} onChange={changeMapView}>
        <MenuItem value={BASIC}>Basic</MenuItem>
        <MenuItem value={CONGRESS}>Congressional Districts</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MapViewSelector;
