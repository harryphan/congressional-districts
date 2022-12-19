import USMap from '../components/USMap';
import React from 'react';
import {
  Box,
  Container,
  Link,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import MapViewSelector from '../components/MapViewSelector';
import Copyright from '../Copyright';
import { MapViews } from '../utils/constants';

const USMapContainer = () => {
  const [mapView, setMapView] = React.useState(MapViews.CONGRESS);
  const changeMapView = (event: SelectChangeEvent) => {
    const newMapView = event.target.value;
    setMapView(newMapView);
  };
  return (
    <Container>
      <Box height={'10vh'}>
        <Typography variant="h3">US Map</Typography>
      </Box>
      <Box height={'5vh'} width={'25%'}>
        <MapViewSelector changeMapView={changeMapView} mapView={mapView} />
      </Box>
      <Box height={'70vh'} width={'100%'}>
        <USMap mapView={mapView} />
      </Box>
      <Box height={'10vh'}>
        <Typography variant="caption" gutterBottom>
          Source code:{' '}
          <Link href="https://github.com/harryphan/us-district-map">
            Github
          </Link>
          <br />
          Data sources:{' '}
          <Link href="https://www.cnn.com/election/2020/results/president?iid=politics_election_national_map">
            CNN
          </Link>
          &nbsp;
          <Link href="https://www.politico.com/2020-election/results/">
            Politico
          </Link>
          &nbsp;
          <Link href="https://covid.cdc.gov/covid-data-tracker/#county-view">
            CDC
          </Link>
        </Typography>
      </Box>
      <Box height={'5vh'}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default USMapContainer;
