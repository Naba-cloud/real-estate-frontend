import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import defaultProperty from "../../assets/defaultProperty.jpg"

const TeamCard = () => {
  return (
    
    <Grid
    container>
    <Grid item>
    
     <Card  sx={{ boxShadow:3}}>
     <CardMedia
        component="img"
        sx={{
          width: 150,
          height: 150,
          borderRadius: '80%',
          margin: '15px auto',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
          transition: '0.3s',
        }}
        image={defaultProperty}
        alt="Default Property"
      />
      <CardContent sx={{width:"300px",padding:0}}>
        <Typography align='center' justify='center' sx={{color:'141b2d',fontFamily:"MerriWeather",fontSize:"21.25px",fontWeight:'bold'}} gutterBottom variant="h5" component="div">
        Davis Carder
        </Typography>
        <Typography align='center' justify='center' sx={{color: '#4f5461',fontFamily:"Regular"}} variant="body2" color="text.secondary">
        Super duper position
        </Typography>
      </CardContent>
     
    </Card>
   </Grid>
   </Grid>
  )
}

export default TeamCard