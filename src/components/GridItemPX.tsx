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

import { Button, Checkbox, Container, Grid, TextField } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

type Props = {
    nome: string,
    xp: number,
    checked: boolean
}

function GridItemPX(props   : Props) {


  return (
   
        <Grid item sm={12} sx={{display:'flex',flexDirection:'row',alignItems: 'center',justifyContent: 'Start' , width:'auto',height:'auto',border:'solid',borderRadius:'0.4rem',borderWidth:'0.07rem',marginTop:'2rem',padding:'4px'}}>
           <Box sx={{display: 'flex',justifyContent: 'start',alignItems:'center',flex:1}}>
           <Checkbox
              checked={props.checked}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <Typography  variant="body2" component="p"   > {props.nome}  {props.xp}<strong>K</strong> XP </Typography>
           </Box>
          
            <Button  variant="outlined" sx={{justifySelf:'end',marginRight:'6px'}}><CheckCircleIcon></CheckCircleIcon></Button>
            <Button  variant="outlined" sx={{justifySelf:'end',color:'red',borderColor:'red'}}><RemoveCircleIcon/></Button>
            
           
          </Grid>
       
  );
}

export default GridItemPX;