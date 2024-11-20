import { Avatar, Box, Card, Typography } from '@mui/material'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useGetAllOrdersQuery } from '../redux/apis/adminApi';
import { blue, green, orange, yellow } from '@mui/material/colors';
import { useSelector } from 'react-redux';

import teamone from '../img/team-1.jpg'
import teamtow from '../img/team-2.jpg'
import teamthree from '../img/team-3.jpg'
import teamfore from '../img/team-4.jpg'
import avtarimg1 from '../img/testimonial-2.jpg'
import avtarimg2 from '../img/testimonial-3.jpg'
import avtarimg3 from '../img/testimonial-4.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useGetAllDishesQuery } from '../redux/apis/adminApi'
import { Link } from 'react-router-dom'

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {

    const { admin } = useSelector(state => state.auth)

    const { data } = useGetAllOrdersQuery()

    return data && (
        <Box sx={{ pl: { xs: 0, md: "180px" }, mt: 10 }}>

            <Grid container>
                <Grid md={5}>
                    <Chart orderData={data} />
                </Grid>
                <Grid md={5}>
                    <Box sx={{ py: 8, px: 1 }} >

                        <Typography sx={{ color: "orangered", fontFamily: "poppins", fontSize: 27, fontWeight: 600 }} >Hello {admin.name}</Typography>

                        <Typography sx={{ color: "black", mt: 3, fontFamily: "poppins", fontSize: 20, fontWeight: 600 }} >Efficiently manage your system with our Admin Dash – a streamlined interface for seamless control and insightful data oversight.</Typography>





                    </Box>
                </Grid>

            </Grid>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", marginY: 8 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ width: 40, color: orange[400], border: "1.5px solid " }}></Box>
                    <Typography sx={{ marginX: 1, color: orange[400], fontSize: "1.7rem" }}>Team Members</Typography>
                    <Box sx={{ width: 40, color: orange[400], border: "1.5px solid " }}></Box>
                </Box>
                <Typography sx={{ fontSize: { sm: "2.9rem", xs: "2.5rem" }, textShadow: `1px 1px 3px ${"black"}`, color: 'black' }}>Our Master Chefs</Typography>
            </Box>
            <Box sx={{ marginX: 5 }}>
                <Grid container sx={{ marginBottom: "6rem" }} spacing={3} >
                    <Grid item lg={3} md={6} xs={12} sm={6} >
                        <Card sx={{
                            textAlign: "center", '&:hover': {
                                '& .MuiAvatar-root': {
                                    transform: 'scale(1.1)', // Increase the scale on hover
                                    transition: 'transform 0.3s ease-in-out', // Smooth transition for scale
                                },
                                '& .hidden-box': {
                                    opacity: 1, // Show the hidden box
                                    transition: 'ease-in 0.6s', // Smooth transition for opacity
                                    // display: 'flex',
                                },
                            },

                        }}>
                            <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
                                <Avatar src={teamone} sx={{ height: "17vw", width: "17vw" }} />
                            </Box>
                            <Typography sx={{ fontSize: "1.8rem", fontWeight: "bold" }}>Full Name</Typography>
                            <Typography>Designation</Typography>
                            <Box className="hidden-box " sx={{ opacity: "0", display: "flex", justifyContent: "center", gap: "8px", marginTop: "1rem", }}>
                                <Typography sx={{ paddingTop: 1, height: "2rem", width: "2.5rem", backgroundColor: orange[400], borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                                    <FacebookIcon sx={{ color: "white" }} />
                                </Typography>
                                <Typography sx={{ paddingTop: 1, height: "2rem", width: "2.5rem", backgroundColor: orange[400], borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                                    <TwitterIcon sx={{ color: "white" }} />
                                </Typography>
                                <Typography sx={{ paddingTop: 1, height: "2rem", width: "2.5rem", backgroundColor: orange[400], borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                                    <InstagramIcon sx={{ color: "white" }} />
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12} sm={6} >
                        <Card sx={{
                            textAlign: "center", '&:hover': {
                                '& .MuiAvatar-root': {
                                    transform: 'scale(1.1)', // Increase the scale on hover
                                    transition: 'transform 0.3s ease-in-out', // Smooth transition for scale
                                },
                                '& .hidden-box': {
                                    opacity: 1, // Show the hidden box
                                    transition: 'ease-in 0.6s', // Smooth transition for opacity
                                    display: 'flex',
                                },
                            },

                        }}>
                            <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
                                <Avatar src={teamtow} sx={{ height: "17vw", width: "17vw" }} />
                            </Box>
                            <Typography sx={{ fontSize: "1.8rem", fontWeight: "bold" }}>Full Name</Typography>
                            <Typography>Designation</Typography>
                            <Box className="hidden-box" sx={{ display: "flex", opacity: 0, justifyContent: "center", gap: "8px", marginTop: "1rem", }}>
                                <Typography sx={{ paddingTop: 1, height: "2rem", width: "2.5rem", backgroundColor: orange[400], borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                                    <FacebookIcon sx={{ color: "white" }} />
                                </Typography>
                                <Typography sx={{ paddingTop: 1, height: "2rem", width: "2.5rem", backgroundColor: orange[400], borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                                    <TwitterIcon sx={{ color: "white" }} />
                                </Typography>
                                <Typography sx={{ paddingTop: 1, height: "2rem", width: "2.5rem", backgroundColor: orange[400], borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                                    <InstagramIcon sx={{ color: "white" }} />
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12} sm={6} >
                        <Card sx={{
                            textAlign: "center", '&:hover': {
                                '& .MuiAvatar-root': {
                                    transform: 'scale(1.1)', // Increase the scale on hover
                                    transition: 'transform 0.3s ease-in-out', // Smooth transition for scale
                                },
                                '& .hidden-box': {
                                    opacity: 1, // Show the hidden box
                                    transition: 'ease-in 0.6s', // Smooth transition for opacity
                                    display: 'flex',
                                },
                            },

                        }}>
                            <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
                                <Avatar src={teamthree} sx={{ height: "17vw", width: "17vw" }} />
                            </Box>
                            <Typography sx={{ fontSize: "1.8rem", fontWeight: "bold" }}>Full Name</Typography>
                            <Typography>Designation</Typography>
                            <Box className="hidden-box" sx={{ display: "flex", opacity: 0, justifyContent: "center", gap: "8px", marginTop: "1rem", }}>
                                <Typography sx={{ paddingTop: 1, height: "2rem", width: "2.5rem", backgroundColor: orange[400], borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                                    <FacebookIcon sx={{ color: "white" }} />
                                </Typography>
                                <Typography sx={{ paddingTop: 1, height: "2rem", width: "2.5rem", backgroundColor: orange[400], borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                                    <TwitterIcon sx={{ color: "white" }} />
                                </Typography>
                                <Typography sx={{ paddingTop: 1, height: "2rem", width: "2.5rem", backgroundColor: orange[400], borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                                    <InstagramIcon sx={{ color: "white" }} />
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12} sm={6} >
                        <Card sx={{
                            textAlign: "center", '&:hover': {
                                '& .MuiAvatar-root': {
                                    transform: 'scale(1.1)', // Increase the scale on hover
                                    transition: 'transform 0.3s ease-in-out', // Smooth transition for scale
                                },
                                '& .hidden-box': {
                                    opacity: 1, // Show the hidden box
                                    transition: 'ease-in 0.6s', // Smooth transition for opacity
                                    display: 'flex',
                                },
                            },

                        }}>
                            <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
                                <Avatar src={teamfore} sx={{ height: "17vw", width: "17vw" }} />
                            </Box>
                            <Typography sx={{ fontSize: "1.8rem", fontWeight: "bold" }}>Full Name</Typography>
                            <Typography>Designation</Typography>
                            <Box className="hidden-box" sx={{ display: "flex", opacity: 0, justifyContent: "center", gap: "8px", marginTop: "1rem", }}>
                                <Typography sx={{ paddingTop: 1, height: "2rem", width: "2.5rem", backgroundColor: orange[400], borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                                    <FacebookIcon sx={{ color: "white" }} />
                                </Typography>
                                <Typography sx={{ paddingTop: 1, height: "2rem", width: "2.5rem", backgroundColor: orange[400], borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                                    <TwitterIcon sx={{ color: "white" }} />
                                </Typography>
                                <Typography sx={{ paddingTop: 1, height: "2rem", width: "2.5rem", backgroundColor: orange[400], borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                                    <InstagramIcon sx={{ color: "white" }} />
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                </Grid >
            </Box>
            {/* Team Member end */}
            {/* Teastimonial start */}
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", marginY: 8 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ width: 40, color: orange[400], border: "1.5px solid " }}></Box>
                    <Typography sx={{ marginX: 1, color: orange[400], fontSize: "1.7rem" }}>Testimonial</Typography>
                    <Box sx={{ width: 40, color: orange[400], border: "1.5px solid " }}></Box>
                </Box>
                <Typography sx={{ fontSize: { sm: "2.9rem", xs: "2.5rem" }, textShadow: `1px 1px 3px ${"black"}`, color: 'black' }}>Our Clients Say!!!</Typography>
            </Box>
            <Box sx={{ marginX: "2rem", marginBottom: "3rem" }}>
                <Grid container spacing={2}>
                    <Grid item md={4}>
                        <Card sx={{ paddingX: "2vw", }}>
                            <Typography sx={{ fontSize: "6rem", height: "15vh", fontWeight: "bold", color: orange[400] }}>“</Typography>
                            <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam facilis earum exercitationem unde alias optio eligendi.</Typography>
                            <Box sx={{ display: "flex", marginY: 2 }}>
                                <Avatar src={avtarimg1} />
                                <Box sx={{ marginLeft: 2 }}>
                                    <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>Client Name</Typography>
                                    <Typography sx={{ color: "gray" }}>Profession</Typography>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card sx={{ paddingX: "2vw", }}>
                            <Typography sx={{ fontSize: "6rem", height: "15vh", fontWeight: "bold", color: orange[400] }}>“</Typography>
                            <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam facilis earum exercitationem unde alias optio eligendi.</Typography>
                            <Box sx={{ display: "flex", marginY: 2 }}>
                                <Avatar src={avtarimg2} />
                                <Box sx={{ marginLeft: 2 }}>
                                    <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>Client Name</Typography>
                                    <Typography sx={{ color: "gray" }}>Profession</Typography>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card sx={{ paddingX: "2vw", }}>
                            <Typography sx={{ fontSize: "6rem", height: "15vh", fontWeight: "bold", color: orange[400] }}>“</Typography>
                            <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam facilis earum exercitationem unde alias optio eligendi.</Typography>
                            <Box sx={{ display: "flex", marginY: 2 }}>
                                <Avatar src={avtarimg3} />
                                <Box sx={{ marginLeft: 2 }}>
                                    <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>Client Name</Typography>
                                    <Typography sx={{ color: "gray" }}>Profession</Typography>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>

                </Grid>
            </Box>





        </Box >
    )
}



const Chart = ({ orderData }) => {

    const data = {

        labels: ["processing", "dispatched", 'delivered'],
        datasets: [
            {
                label: '# of Votes',
                data: orderData && [orderData.filter(item => item.status === "processing").length, orderData.filter(item => item.status === "dispatched").length, orderData.filter(item => item.status === "delivered").length],
                backgroundColor: [
                    `${yellow[300]}`,
                    `${orange[400]}`,
                    `${green[400]}`,
                ],
                borderColor: [
                    'rgba(255, 0, 10, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    return <Doughnut data={data} />;

}


export default Dashboard