import React from 'react'
import {AppBar, Typography, Toolbar, Button, Box, Tabs, Tab} from '@mui/material'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Header = () => {
  const [value, setValue] = useState();
  return (
  <AppBar
    position="sticky"
  sx={{
    background: "linear-gradient(0deg, rgba(235,251,97,1) 0%, rgba(4,152,255,1) 100%)"
  }}>
    <Toolbar>
      <Typography variant="h4">Ukraine War Blog</Typography>
      { isLoggedIn && <Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
        <Tabs textColor="inherit" value={value} onChange={(e,val)=>setValue(val)}>
          <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
          <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
        </Tabs>
      </Box> }
      <Box display="flex" marginLeft="auto">
       { !isLoggedIn && <> <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1, borderRadius:10}} color="warning">Login</Button>
        <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1, borderRadius:10}} color="warning">Signup</Button> </> }
       { isLoggedIn && <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:1, borderRadius:10}} color="warning">Logout</Button>}
      </Box>
    </Toolbar>
  </AppBar>
  );
};

export default Header