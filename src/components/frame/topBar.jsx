import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import theme from '../../theme/theme';
import { ThemeProvider } from '@mui/material';

export default function TopNavBar() {

  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='secondary'>
              <Toolbar>
                {/* <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Ethio Telecom
                </Typography>
                <Button 
                color="inherit"
                onClick={(e, rowData)=>router.push({
                  pathname: '/leader',
              }, '/leader')}
                >Leader Board</Button>
                <Button color="inherit">Questions</Button>
                <Button 
                color="inherit"
                onClick={(e, rowData)=>router.push({
                  pathname: '/user',
              }, '/user')}
                  >User Management</Button>
                <Button 
                color="inherit"
                onClick={(e, rowData)=>router.push({
                  pathname: '/register',
              }, '/register')}
                ml={5}>Register</Button>
              </Toolbar>
            </AppBar>
          </Box>
    </ThemeProvider>
  
  );
}