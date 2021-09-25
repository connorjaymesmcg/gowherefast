import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid, Button } from '@material-ui/core';

import { getPlacesData } from './api';
import { getWeatherData } from './api';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import Map from './Components/Map/Map';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  // useEffect(() => {}, [type, bounds]);

  const refreshLocation = () => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getWeatherData(coords.lat, coords.lng).then((data) => setWeatherData(data));
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
  };

  console.log(places);
  console.log(filteredPlaces);

  return (
    <>
      <CssBaseline />
      <Header setCoords={setCoords} />

      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            refreshLocation={refreshLocation}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map setCoords={setCoords} setBounds={setBounds} coords={coords} places={filteredPlaces.length ? filteredPlaces : places} setChildClicked={setChildClicked} weatherData={weatherData} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
