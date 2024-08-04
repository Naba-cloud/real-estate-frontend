import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';

export const NavBar = () => {
    const theme = createTheme({
        components: {
          MuiStack: {
            variants: [
              {
                props: { variant: 'navbar' },
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 20px',
                  backgroundColor: 'red',
                  color: '#fff',
                },
              },
              {
                props: { variant: 'content' },
                style: {
                  padding: '20px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                },
              },
              {
                props: { variant: 'footer' },
                style: {
                  padding: '10px 20px',
                  backgroundColor: '#3f51b5',
                  color: '#fff',
                },
              },
            ],
          },
        },
      });
  return (
    <ThemeProvider theme={theme}>
  <Stack variant="navbar">
    <Stack variant="content">
        <Typography>TEST1</Typography>
        </Stack>
        <Stack variant="footer">
        <Typography>TEST1</Typography>
        </Stack>
  </Stack>
  </ThemeProvider>
  )
}
