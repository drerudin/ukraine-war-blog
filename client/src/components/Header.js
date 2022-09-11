import React from 'react'
import {AppBar, Typography, Toolbar, Button, Box} from '@mui/material'

const Header = () => {
  return (
  <AppBar
  sx={{
    background: "linear-gradient(0deg, rgba(235,251,97,1) 0%, rgba(4,152,255,1) 100%)"
  }}>
    <Toolbar>
      <Typography variant="h4">Ukraine War Blog</Typography>
      <Box display="flex" marginLeft="auto">
        <Button variant='contained' sx={{margin:1, borderRadius:10}} color="inherit">Login</Button>
        <Button variant='contained' sx={{margin:1, borderRadius:10}} color="inherit">Signup</Button>
      </Box>
    </Toolbar>
  </AppBar>
  );
};

export default Header