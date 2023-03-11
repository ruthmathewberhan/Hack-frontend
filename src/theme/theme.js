import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({

  palette: {
    primary:{
      main:'#264653',
    },
    secondary: {
      main:'#008000',
    },
    button: {
      main: "#008000",
      secondary: 'white',
      third: '#bababa',
    },
    tableHeader: {
      main:'#C1CC9D',
      unit: '#264653',
      sub: '#606c38'
    }, // #606c38
    card: {
      main:'#606c38',
    },
    common: {
      main: '#ffffff'
    },
    editIcon: {
      main: "#606c38",
    },
    deleteIcon: {
      main: "red",
    },
    error: {
      main: red.A400,
    },
    stepper: {
      iconColor: 'green' // or logic to change color
  },
  },
});

export default theme;