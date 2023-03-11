import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid,   Avatar, Stack, Container} from '@mui/material';
import theme from '../../theme/theme';
import { ThemeProvider } from '@mui/material';

// icon import
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


export default function LeaderCard() {


//     if ( profile == 'null'){
//       console.log(' no data')
//       return(
//           <h1> no result</h1>
//       )
//   }
//   else {

//       console.log( profile);


  return (

    <>
    <ThemeProvider theme={theme}>
    <Box component='main' sx={{ flexGrow: 1, py: 2, width: '100%' }}>
        <Container maxWidth="lg">
            <Card sx={{ borderRadius: '16px' }}>
                <CardContent sx={{ height: 90, backgroundColor: '#264653'}}>
                    <Stack direction='row'>
                    <Avatar
                        sx={{
                            height: 80,
                            width: 80, 
                            postion: 'absolute',
                            top: 20,
                            left: 10,
                            border: 1
    
                        }}
                    />
                      <Box sx = {{ mt: 5, ml: 5}}> 
                        <Stack>
                        <Typography variant='h4' color='white'>
                            Alem Kebede Biru
                        </Typography>
                        <Typography variant='subtitle1' color='grey'>
                            Ale_234
                        </Typography>
                        </Stack>
                    </Box> 
                    </Stack>
                </CardContent>
                
            </Card>
        </Container>
    </Box>
    </ThemeProvider>

    </>
  );
}

