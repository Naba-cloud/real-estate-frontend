import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomInput from '../../components/CustomInput/CustomInput'
import { Box,Grid, Typography } from '@mui/material'
import paperPlane from "../../assets/paperPlane.png"
const NewsLetterSection = () => {
  return (
   <Box sx={{display:'flex',flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}}>
    <Box>
         <img src={paperPlane}/>
    </Box>
    <Box sx={{display:"flex",flexDirection:"column"}}>
    <Box>
    <Typography align='right' width={"500px"} sx={{fontWeight:"bold",fontFamily:"MerriWeather"}} variant='h4' component={"div"}>
            Subscribe to our newsletter
        </Typography>
        <Typography align='right' width={"520px"} variant='h6' component={"div"}>
        Get the latest news and interesting offers and real estate
        </Typography>
    </Box>
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
   
   <CustomInput/>
    <CustomButton  text="Subscribe"/>
    </Box>
    </Box>
    </Box>
 
  )
}

export default NewsLetterSection