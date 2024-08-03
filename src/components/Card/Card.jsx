import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import defaultProperty from "../../assets/defaultProperty.jpg"

export default function PropertyCard({image=defaultProperty,title,apartmentinfo,price,location}) {
  return (
    <Card sx={{ maxWidth: 300,boxShadow:3}}>
      <CardMedia
        sx={{ height: 250 }}
        title={title ||`green iguana`}
        image={image||""}
      />
      <CardContent sx={{width:"300px"}} align='left'>
        <Typography  sx={{color:'141b2d',fontFamily:"MerriWeather",fontSize:"21.25px",fontWeight:'bold'}} gutterBottom variant="h5" component="div">
        Large 4-room apartment with beautiful terrace
        </Typography>
        <Typography  sx={{color: '#1c3988',fontWeight:'bold',fontFamily:"Open Sans"}}  variant="body2" color="text.primary">
         380000€ 
        </Typography>
        <Typography sx={{color: '#4f5461',fontFamily:"Regular"}} variant="body2" color="text.secondary">
        Barcelone IV.
        </Typography>
      </CardContent>
     
    </Card>
  );
}
