import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';


function AppBarr() {

 



  return (
    <Box>
       <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{  display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarr;