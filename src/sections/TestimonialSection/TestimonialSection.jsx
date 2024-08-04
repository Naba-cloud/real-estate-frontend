import React from 'react'
import TeamCard from '../../components/TeamCard/TeamCard'
import { Grid } from '@mui/material'
const TestimonialSection = () => {
    return (
        <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6].map(() => <Grid item lg={4}><TeamCard /></Grid>)}
        </Grid>)

}

export default TestimonialSection