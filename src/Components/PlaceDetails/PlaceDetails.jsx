import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const PlaceDetails = ({ place }) => {
  console.log(place);

  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1599458252573-56ae36120de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80'}
        title={place.name ? place.name : '(entry not found)'}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>{place.name ? place.name : '(entry not found)'}</Typography>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
