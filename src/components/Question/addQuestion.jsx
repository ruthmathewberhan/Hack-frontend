import { useEffect, useState } from 'react';
// import axios from '../../utils/axios-api'
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Divider
} from '@mui/material';
import { ThemeProvider } from '@mui/material';
import theme from '../../styles/theme/theme';



function AddQuestions() {

    const [roleData, setRoleData] = useState([]);

  

    // const getAnnouncementRole = async (id) => {
    //   try {      
    //     await axios({
    //       url: `/api/Announcement/GetAnnouncementByRolename?rolename=admin`,
    //       method: 'GET',
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${localStorage.getItem("accessToken")}`
  
    //       },
    //     }).then(function (res) {
  
    //       if (res.status === 200) {
    //         setRoleData(res.data)
  
    //       }
  
    //     })
  
    //   }
    //   catch (error) {
    //     //console.log(error);
  
    //   }
    // };

    // useEffect(() => {
    //   getAnnouncementRole();
    // }, []);

  return (
    <>
    <ThemeProvider theme={theme}>
    <Grid container spacing={3} columns={12} marginTop={1} marginBottom={5} justifyContent='center' >
          
          {/*  announcement Role */}
          {/* {roleData.map((elem, index) => ( */}
            <Grid item xs={12} sm={12} md={10} key={roleData.indexOf(elem)}>
              <Card sx={{ boxShadow: 10 }}>
                <CardContent>
                <Box style={{ background: theme.palette.tableHeader.main, 
                        borderRadius: 5 }} sx={{ padding: 1, justifyItems: 'center', mb:2}} >
                      {
                          <Typography  variant='h6' color='primary' align='center'>
                            {/* {elem.title} */} Qiestion 1 : title display
                          </Typography>
                        }
                </Box>
                <Stack sx = {{ mb: 2,}} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem/>}>

                    <Grid container spacing={1} columns={12} sx = {{ mb: 1}}>
                      <Grid item xs={12} sm={12} md={12} sx = {{ ml: 2}}>
                            <Typography variant='p'>
                              {/* {elem.detail} */} Qiestion 1 : Choice dispaly
                            </Typography>
                      </Grid>
                    </Grid>
                  </Stack>
                </CardContent>

              </Card>
            </Grid>
          {/* ))} */}
        </Grid>
    </ThemeProvider>

    </>
  )
}

export default AddQuestions