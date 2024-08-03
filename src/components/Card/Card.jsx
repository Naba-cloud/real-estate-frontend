import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import defaultProperty from "../../assets/defaultProperty.jpg"
export default function PropertyCard({image=defaultProperty,title,text}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        title={title ||`green iguana`}
        image={image||""}
      />
      <CardContent align='left'>
        <Typography gutterBottom variant="h5" component="div">
        Large 4 room Apartment With Beautiful Terrace
        </Typography>
        <Typography  variant="body2" color="text.secondary">
         320.00
        </Typography>
        <Typography  variant="body2" color="text.secondary">
        Barcelone IV
        </Typography>
      </CardContent>
     
    </Card>
  );
}
