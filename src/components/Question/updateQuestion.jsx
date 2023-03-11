import React from 'react'
import { alpha } from '@mui/material/styles'
import { useEffect, useState } from 'react';
import axios from '../../utils/axios-api'
import {
  Box, Button, Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { ThemeProvider } from '@mui/material';
import theme from '../../styles/theme/theme';

import Notify from '../mesage/message';




// component import

function UpdateQuestion() {
  const [info, setInfo] = useState([]);
  const [section, setSection] = useState('');
  const [selectValue, setSelectValue] = useState([]);
  const [roles, setRoles] = useState([]);

  const [cardData, setCardData] = useState([]);
  const [mainDescription, setMainDescription] = useState();
  const [title, setTitle] = useState();
  const [detail, setDetail] = useState();
  const [roleList, setRoleList] = useState([]);
  const [userNameList, setUserNameList] = useState([]);
  // const [message, setMessage] = useState('')
  const [success, setSuccess] = useState('')
  const [files, setFile] = useState([])
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false)
  const [isSelected, setisSelected] = useState(null);
  const [isSelectedDelete, setisSelectedDelete] = useState(null);
  // const [show, setShow] = useState(null)

  // notification
  const [alertOpen, setAlertOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  // function handleFileChange(event) {
  //   setFile(event.target.files)
  // }
  // const handleSectionChange = (event) => {
  //   setSelectValue(event);
  // };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectValue(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

//   const handleInitialData = async () => {
//     try {
//       await axios({
//         url: `/api/Announcement/GetAnnouncementByPosterUsername`,
//         method: 'GET',
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("accessToken")}`

//         },
//       }).then(function (res) {

//         if (res.status === 200) {
//           setCardData(res.data)
//         }

//       })

//     }
//     catch (error) {
//       //console.log(error);

//     }
//   };
//   useEffect(() => {
//     handleInitialData();
//   }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3} columns={12} marginTop={1} marginBottom={5} justifyContent='center' >
          {/* {cardData.map((elem, index) => ( */}
            <Grid item xs={12} sm={12} md={10} >
            {/* key={cardData.indexOf(elem)} */}
              <Card sx={{ boxShadow: 10 }}>
                <CardContent>
                  <Grid container spacing={1} columns={12}>
                    <Grid item xs={12} sm={12} md={12}>
                      {!(isSelected === index) && <Typography variant='h4' color='secondary'>
                        {/* {elem.title} */} Update Question 1 : title of the question
                      </Typography>}
                      {isSelected === index &&
                        <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth defaultValue='title of the question'
                          onChange={(event) => { setTitle(event.target.value) }}
                        />
                      }
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      {/* <Box sx={{ maxHeight: '20vh', overflow: 'auto' }}> */}
                        {!(isSelected === index) &&
                          <Typography variant='p'>
                            {/* {elem.detail} */} Update Question 1 : choice 1 of the question
                          </Typography>
                        }
                        {isSelected === index &&
                          <TextField id="outlined-basic" label="Detail" variant="outlined" defaultValue='choice 1'
                            onChange={(event) => { setDetail(event.target.value) }}
                          />
                        }

                      {/* </Box> */}
                    </Grid>

                  </Grid>


                </CardContent>
                <CardActions>
                  <Grid container>
                    {/* <Grid item xs={6}>
                      <Box style={{
                        display: "flex",
                        justifyContent: "flex-start"
                      }}>
                        <Button 
                          size="small" 
                          style={{ color: "blue" }} 
                          onClick={() => setShow(show === index ? null : index)}
                        >
                          {show === index ? "Show Less" : "Show More"}
                        </Button>
                      </Box>
                    </Grid> */}
                      {!(isSelected === index) && 
                      <Grid container   direction="row"  justifyContent="flex-end"  alignItems="flex-end">
                        <Grid item marginLeft={2}>
                          <Button style={{ background: 'primary', marginRight: 15 }}
                            variant="contained"
                            onClick={() => {
                              setisSelected(index)
                            //   setTitle(elem.title);
                            setTitle('title');
                            //   setDetail(elem.detail);
                            setDetail('choices');

                            }} >
                              Edit</Button>
                        </Grid>
                        <Grid item marginLeft={2}>
                        <div>
                          <Button 
                            variant="contained"
                            color="error"
                            onClick={() => {
                              handleClickOpen();
                            //   setisSelectedDelete(elem.id)
                            setisSelectedDelete('id')
                            }}
                          >
                            Delete</Button>
                          <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            BackdropProps={{
                              style: {
                                backgroundColor: alpha('#000000', 0.09),
                                boxShadow: 'none',
                              },
                            }}
                            PaperProps={{
                              style: {
                                //backgroundColor: 'transparent',
                                boxShadow: 'none',
                              },
                            }}
                          >
                            <DialogTitle id="alert-dialog-title">
                              {"DELETE ACTION"}
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                Are you sure you want to delete this material?
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose}>Cancel</Button>
                              <Button onClick={async () => {
                                try {
                                  await axios({
                                    url: `/api/DeleteQuestion?key=${isSelectedDelete}`,
                                    method: 'DELETE',
                                    headers: {
                                      "Content-Type": "application/json",

                                    },

                                  }).then(function (res) {

                                    if (res.status === 200) {
                                      handleInitialData();
                                      setMessage("Question is deleted Sucessfully")
                                      setSeverity("success")
                                      setOpen(false)
                                    }

                                  })

                                }
                                catch (error) {
                                  setOpen(false)
                                  setMessage("Couldn't delete the announcement")
                                  setSeverity("error")

                                }
                                setAlertOpen(true);
                              }
                              } autoFocus style={{ color: 'red' }}>
                                Delete
                              </Button>
                            </DialogActions>
                          </Dialog>
                          </div>
                        </Grid>
                      </Grid>}
                      {isSelected === index && 
                      <Grid container justifyContent="flex-end">
                        <Button style={{ marginRight: 15 }}
                          color='primary'
                          variant="contained"
                          onClick={async () => {

                              try {
                                console.log(isSelected)
                                const formData = new FormData();
                                // formData.append("Unique", elem.uniqueKey);
                                formData.append("Title", title);
                                formData.append("Detail", detail);

                                await axios({
                                  url: '/api/UpdateQuestion',
                                  method: 'PUT',
                                  headers: {
                                    "Content-Type": "application/json",

                                  },
                                  data:
                                    formData,

                                }).then(function (res) {

                                  if (res.status === 200) {
                                    setMessage("Announcement is update Sucessfully")
                                    setSeverity("success")
                                  }

                                })

                              }
                              catch (error) {
                                // setMessage(error.response.data);
                                // setSuccess('');
                                console.log(error)
                                setMessage("Couldn'tselectValue update the announcement")
                                setSeverity("error")
                              }
                              setAlertOpen(true);
                            }
                          }
                        >
                          Save</Button>
                        <Button 
                          color='error'
                          variant="contained"
                          onClick={() => {
                            // setisSelected(null)
                            // setUserNameList([])
                            // setRoleList([])
                            // setSection(null)
                            // setSelectValue([])
                          }} >Cancel</Button>
                      </Grid>}
                    </Grid>
                </CardActions>
              </Card>
            </Grid>
          {/* ))} */}
        </Grid>
        <Notify open={alertOpen} message={message} severity={severity} handleClose={handleAlertClose}/>
      </ThemeProvider>
    </>
  )
}

export default UpdateQuestion