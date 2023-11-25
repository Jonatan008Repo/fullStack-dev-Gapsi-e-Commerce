import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src="../assets/img/logo.png" alt="" style={{ height: '100%' }} />
        </IconButton>
        <Typography variant="h6" componen="div" sx={{ flexGrow: 1 }}>
          e-Comerce Gapsi
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

