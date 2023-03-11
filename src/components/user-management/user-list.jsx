import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Container , Stack, Card } from '@mui/material';
import Button from '@mui/material/Button';
import CRUDTable from '../CRUD-Table';



export default function UserManagement() {

    // if ( contact == 'null'){
    //     console.log(' no data')
    //     return(
    //         <h1> no result</h1>
    //     )
    // }
    // else {
  
    //     console.log( contact);

    const columns = [
        {
            title: "UserName", field: "username", 
        },
        {
            title: "Name", field: "name", 
        }
    ]

    const tableData = [
        {
            username: 'ale@brkal' , name: 'Alem'
        },
        {
            username: 'ale@brkal' , name: 'Alemwa'
        },
        {
            username: 'ale@brkal' , name: 'Alemtu'
        }
    ]


  return (
        <>
        <Box mt={4}>
                <Typography ml={3} variant='h6' mt={2} mb={1}>
                   User List Table
                </Typography>
                <Grid container spacing={2}>
                    <Grid  item xs={12} sm={12}>
                        <CRUDTable
                        columns={columns}
                        data={tableData}
                        editable={{
                            onRowUpdate: () => {

                            },
                            onRowDelete: () => {
                                
                            }
                        }}
                        actions={[]}
                        title='User List'
                        />
                    </Grid>
                </Grid>
        </Box>
        </>
  );
}

