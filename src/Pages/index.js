import * as React from 'react';
import { Container, Box } from '@mui/material';
import SignIn from '../components/Auth/login';
import SignUp from '../components/Auth/register';

function HomePage() {

    return (
      <>
      <Box>
        <SignIn/>
      </Box>
      </>
    );
    
  }
  
  export default HomePage