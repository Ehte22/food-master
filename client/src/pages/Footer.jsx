import { Code, VisibilityOff } from '@mui/icons-material'
import { Alert, Avatar, Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, Modal, OutlinedInput, Snackbar, Stack, TextField, Typography } from '@mui/material'
import { orange, yellow } from '@mui/material/colors'
import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React, { useEffect, useState } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useFormik } from 'formik';
import * as yup from "yup"
import { useLoginUsersMutation } from '../redux/apis/authApi';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const [adminModal, setAdminModal] = useState(false)


    return <>
        <Box sx={{ backgroundColor: "hsla(234, 38%, 18%, 0.9)" }}>
            <Grid container>
                <Grid item lg={3} md={6} sm={12} sx={{ marginTop: { lg: "12vh", md: "5vh", xs: "4vh", } }}>
                    <Box sx={{ marginX: "2rem" }}>
                        <Box sx={{ color: orange[400], display: "flex", alignItems: "center", }}>
                            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem", paddingRight: 1 }}>Company</Typography>
                            <Box sx={{ paddingX: 3, backgroundColor: orange[400], width: "0.1rem", height: "0.2rem" }}></Box>
                        </Box>
                        <Box sx={{ display: "flex", color: "white", cursor: "pointer", paddingTop: 1 }}>
                            <Typography> <ChevronRightIcon /></Typography>
                            <Typography sx={{ '&:hover': { fontSize: "1.03rem" } }}> About Us</Typography>
                        </Box>
                        <Box sx={{ display: "flex", color: "white", cursor: "pointer" }}>
                            <Typography> <ChevronRightIcon /></Typography>
                            <Typography sx={{ '&:hover': { fontSize: "1.03rem" } }}> Contact Us</Typography>
                        </Box>
                        <Box sx={{ display: "flex", color: "white", cursor: "pointer" }}>
                            <Typography> <ChevronRightIcon /></Typography>
                            <Typography sx={{ '&:hover': { fontSize: "1.03rem" } }}>Reservation</Typography>
                        </Box>
                        <Box sx={{ display: "flex", color: "white", cursor: "pointer" }}>
                            <Typography> <ChevronRightIcon /></Typography>
                            <Typography sx={{ '&:hover': { fontSize: "1.03rem" } }}>Privacy Policy</Typography>
                        </Box>
                        <Box sx={{ display: "flex", color: "white", cursor: "pointer" }}>
                            <Typography> <ChevronRightIcon /></Typography>
                            <Typography sx={{ '&:hover': { fontSize: "1.03rem" } }}>Tearm & condition</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={3} md={6} sm={12} sx={{ marginTop: { lg: "12vh", md: "5vh", xs: "4vh", } }}>
                    <Box sx={{ marginX: "2rem", }}>
                        <Box sx={{ color: orange[400], display: "flex", alignItems: "center", }}>
                            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem", paddingRight: 1 }}>Contact</Typography>
                            <Box sx={{ paddingX: 3, backgroundColor: orange[400], width: "0.1rem", height: "0.2rem" }}></Box>
                        </Box>
                        <Box sx={{ display: "flex", color: "white", paddingTop: 1, cursor: "pointer" }}>
                            <Typography> <RoomIcon /></Typography>
                            <Typography> 123 Street, New York, USA</Typography>
                        </Box>
                        <Box sx={{ display: "flex", color: "white", paddingTop: 1, cursor: "pointer" }}>
                            <Typography> <CallIcon /></Typography>
                            <Typography> +012 345 67890</Typography>
                        </Box>
                        <Box sx={{ display: "flex", color: "white", paddingTop: 1, cursor: "pointer" }}>
                            <Typography> <EmailIcon /></Typography>
                            <Typography> info@example.com   </Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ cursor: "pointer", margin: 0.5 }}>
                                <Avatar sx={{ backgroundColor: "transparent", border: 1, '&:hover': { backgroundColor: "white", color: orange[400] } }} ><TwitterIcon />  </Avatar>
                            </Box>
                            <Box sx={{ cursor: "pointer", margin: 0.5 }}>
                                <Avatar sx={{ backgroundColor: "transparent", border: 1, '&:hover': { backgroundColor: "white", color: orange[400] } }} ><FacebookIcon />  </Avatar>
                            </Box>
                            <Box sx={{ cursor: "pointer", margin: 0.5 }}>
                                <Avatar sx={{ backgroundColor: "transparent", border: 1, '&:hover': { backgroundColor: "white", color: orange[400] } }} ><YouTubeIcon />  </Avatar>
                            </Box>
                            <Box sx={{ cursor: "pointer", margin: 0.5 }}>
                                <Avatar sx={{ backgroundColor: "transparent", border: 1, '&:hover': { backgroundColor: "white", color: orange[400] } }} ><LinkedInIcon />  </Avatar>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={3} md={6} sm={12} sx={{ marginTop: { lg: "12vh", md: "5vh", xs: "4vh", } }}>
                    <Box sx={{ marginX: "2rem", }}>
                        <Box sx={{ color: orange[400], display: "flex", alignItems: "center", }}>
                            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem", paddingRight: 1 }}>Opening
                            </Typography>
                            <Box sx={{ paddingX: 3, backgroundColor: orange[400], width: "0.1rem", height: "0.2rem" }}></Box>
                        </Box>
                        <Box sx={{ color: "white", paddingTop: 1, cursor: "pointer" }}>
                            <Typography variant='h5'> Monday - Saturday</Typography>
                        </Box>
                        <Box sx={{ color: "white", paddingTop: 1, cursor: "pointer" }}>
                            <Typography fontSize="1.1rem"> 09AM -    09PM </Typography>
                        </Box>
                        <Box sx={{ color: "white", paddingTop: 1, cursor: "pointer" }}>
                            <Typography variant='h5'> Sunday</Typography>
                        </Box>
                        <Box sx={{ color: "white", paddingTop: 1, cursor: "pointer" }}>
                            <Typography fontSize="1.1rem"> 10AM -    08PM </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={3} md={6} sm={12} sx={{ marginTop: { lg: "12vh", md: "5vh", xs: "4vh", } }}>
                    <Stack alignItems={"start"} sx={{ marginX: "2rem", }}>
                        <Box sx={{ color: orange[400], display: "flex", alignItems: "center", }}>
                            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem", paddingRight: 1 }}>Newsletter
                            </Typography>
                            <Box sx={{ paddingX: 3, backgroundColor: orange[400], width: "0.1rem", height: "0.2rem" }}></Box>
                        </Box>
                        <Box sx={{ color: "white", paddingTop: 1, cursor: "pointer", marginRight: 5 }}>
                            <Typography > Dolor amet sit justo amet elitr clita ipsum elitr est.</Typography>
                            <FormControl sx={{ my: 1, width: { sm: '25ch', xs: "100%" } }} >
                                {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                                <OutlinedInput
                                    // id="outlined-adornment-password"
                                    type={'text'}
                                    sx={{ backgroundColor: "white", paddingRight: 0 }}
                                    placeholder='Your Email'

                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton>
                                                <Button sx={{ backgroundColor: orange[400], padding: 1.3, color: "white", '&:hover': { backgroundColor: orange[500] } }}>SING UP</Button>
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                // label="Password"
                                />
                            </FormControl>
                            <Button sx={{ fontWeight: 600 }} onClick={e => setAdminModal(true)} size='small' variant='contained' color='warning' >Admin</Button>
                        </Box>

                    </Stack>
                </Grid>
                <hr style={{ backgroundColor: "white", width: "95%", marginTop: "1.8rem" }} />
                <Box sx={{ marginX: "2rem", marginY: "1rem", display: { md: "flex" }, textAlign: "center", justifyContent: "space-between", width: "100%" }}>
                    <Typography sx={{ color: "white " }}>© Your Site Name, All Right Reserved. Designed By HTML Codex</Typography>
                    <Box sx={{ marginY: { xs: "1rem", sm: 0 } }}>
                        <Button sx={{ color: "white" }}>Home</Button>
                        <Button sx={{ color: "white" }}>Cookies</Button>
                        <Button sx={{ color: "white" }}>Help</Button>
                        <Button sx={{ color: "white" }}>FQAs</Button>
                    </Box>
                </Box>
            </Grid>
            <AdminModal prop={{ setAdminModal, adminModal }} />
        </Box >
    </>
}





const AdminModal = ({ prop }) => {
    const { setAdminModal, adminModal } = prop
    const [loginToast, setLoginToast] = useState(false)
    const [logInTrigger, { isSuccess, isLoading, isError, error }] = useLoginUsersMutation()


    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required()
        }),

        onSubmit: (values, { resetForm }) => {
            console.log("sa");
            logInTrigger({ ...values, role: "admin" })
        }

    })


    const style = {
        position: 'absolute',
        top: '50%',
        border: `2px solid ${yellow[700]}`,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: 290, sm: 380 },
        height: 330,
        bgcolor: "hsla(234, 38%, 18%, 1)",
        boxShadow: 2,
        pt: 3,
        borderRadius: 3,
        px: { xs: 1, sm: 3 },
        // pb: 1,
    };

    const handleClose = () => {
        setAdminModal(false)
    }

    const navi = useNavigate()

    const handleSNACKClose = () => {
        setLoginToast(false)
    }



    useEffect(() => {
        if (isSuccess) {
            setLoginToast(true)
            setAdminModal(false)
            setTimeout(() => {
                navi("/admin")
            }, 1000)
        }
    }, [isSuccess || isError])




    return <form onSubmit={formik.handleSubmit}  >


        <Snackbar autoHideDuration={4000} onClose={handleSNACKClose} sx={{ backgroundColor: "red", color: "blue" }} anchorOrigin={{
            vertical: "bottom", horizontal: "right"
        }} open={loginToast}>
            <Alert onClose={handleSNACKClose} variant='filled' severity='success' color='warning' sx={{ width: "100%" }}  >
                {
                    isSuccess ? "Login Success" : `${JSON.stringify(error)}`
                }
            </Alert>
        </Snackbar>


        <Modal open={adminModal} onClose={handleClose} >
            <form onSubmit={formik.handleSubmit}>

                <Box sx={style}>
                    <Stack direction={"row"} alignItems={"center"} gap={0.8}>
                        <Typography sx={{ fontFamily: "poppins", color: orange[400], fontSize: 23, fontWeight: 700 }} >Hello  </Typography>
                        <Typography sx={{ fontFamily: "poppins", color: "white", fontSize: 19, fontWeight: 700 }}  >Owner</Typography>
                        <Typography sx={{ fontFamily: "poppins", color: "white", fontSize: 19, fontWeight: 700 }}  >😍</Typography>

                    </Stack>
                    <TextField {...formik.getFieldProps("email")} placeholder='Enter email here' fullWidth size='small' variant='outlined' sx={{ mt: 4 }} inputProps={{
                        style: {
                            border: "2px solid orange",
                            borderRadius: 4,
                            color: "white",
                            fontFamily: "poppins"
                        }
                    }} color={'warning'} />
                    <TextField type='password' {...formik.getFieldProps("password")} placeholder='Enter password here' fullWidth size='small' variant='outlined' sx={{ my: 3 }} inputProps={{
                        style: {
                            border: "2px solid orange",
                            borderRadius: 4,
                            color: "white",
                            fontFamily: "poppins"
                        }
                    }} color='warning' />

                    <Button type='submit' sx={{ mt: 2 }} variant='contained' color='inherit'>Log in</Button>

                </Box>
            </form>

        </Modal>





    </form>


}









export default Footer