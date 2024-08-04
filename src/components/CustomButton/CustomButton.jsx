import React from 'react'
import { Button } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
const CustomButton = ({text}) => {
  const theme=createTheme({
    palette: {
      primary: {
        main: '#1C3988',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          outlinedPrimary: {
            border: '2px solid',
            borderColor: '#1C3988',
            color: '#1C3988',
            '&:hover': {
              backgroundColor: '#1C3988',
              color: 'white',
              fontWeight: 'bold',
            },
            fontWeight: 'bold',
          },
        },
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
    <Button sx={{height:"55px"}}variant="outlined" color="primary">{text}</Button>
    </ThemeProvider>
  )

}

export default CustomButton