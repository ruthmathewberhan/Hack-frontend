import * as React from 'react';
import { Container, Box } from '@mui/material';
import SignIn from '../components/Auth/login';
import SignUp from '../components/Auth/register';

function Register() {

    return (
      <>
      <Box>
        <SignUp/>
      </Box>
      </>
    );
    
  }
  
  export default Register