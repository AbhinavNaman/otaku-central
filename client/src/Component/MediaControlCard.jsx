import React, {useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


export default function MediaControlCard({data}) {

  return (
    <Card sx={{ display: 'flex', width:'auto', borderRadius:'10px' }}
     elevation={6}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent style={{}}>
        <Typography gutterBottom variant="h5" component="div">
          {data?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data?.desc}
        </Typography>
        <br />
        <Rating name="read-only" value={data?.ratingValue} readOnly />
      </CardContent>
      <CardActions>
        <Button size="small">view</Button>
        <Button size="small">Add to bucket</Button>
      
      </CardActions>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={data?.imgSrc}
        alt="Live from space album cover"
      />
    </Card>
  );
}
