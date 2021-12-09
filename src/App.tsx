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
import AppBarr from './components/AppBarr';
import { Button, Checkbox, Container, Grid, TextField } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import GridItemPX from './components/GridItemPX';

function App() {


  return (
    <Box sx={{height:'100vh', width:'auto',backgroundColor:'lightgray',display:'flex',alignItems: 'center',justifyContent: 'center'}}>
      <Box sx={{backgroundColor:'white', width:'80vw',height:'85vh',borderRadius:'4rem',padding:'2rem'}}>
        <Typography variant="h4" sx={{textAlign:'center',fontSize:'2rem',marginTop:'2rem'}} >Quests e Tasks</Typography>
        <Grid  spacing={2}>
          <GridItemPX nome={'teste'} xp={2000} checked={false} ></GridItemPX>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
