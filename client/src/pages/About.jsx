import React from 'react'
import bgimag from '../img/bg-hero.jpg'
import { Avatar, Box, Button, Card, Grid, Typography } from '@mui/material'
import { orange } from '@mui/material/colors'
import aboutone from '../img/about-1.jpg'
import abouttow from '../img/about-2.jpg'
import aboutthree from '../img/about-3.jpg'
import aboutfore from '../img/about-4.jpg'
import teamone from '../img/team-1.jpg'
import teamtow from '../img/team-2.jpg'
import teamthree from '../img/team-3.jpg'
import teamfore from '../img/team-4.jpg'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const About = () => {

    return <>
        <Box
            sx={{
                backgroundImage: `linear-gradient(to right,hsla(234, 38%, 18%, 0.9), hsla(234, 38%, 18%, 0.9)), url('${bgimag}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '70vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
            }}
        >
            <Typography sx={{ fontSize: "3.5rem", fontWeight: "bold" }}>About Us</Typography>
            <Box sx={{ display: "flex", marginTop: 2 }}>
                <Typography sx={{ color: orange[400], marginX: 1 }}>HOME / </Typography>
                <Typography sx={{ color: orange[400], marginX: 1 }}>PAGES / </Typography>
                <Typography>ABOUT</Typography>
            </Box>
        </Box>

        <Box sx={{ marginX: "6vw", marginY: "5rem" }} >
            <Grid container spacing={12}>
                <Grid item lg={6} md={6} xs={12}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Avatar src={aboutone} sx={{ borderRadius: 0, width: { md: "21vw", xs: "45%" }, height: { md: "21vw", xs: "45%" }, marginRight: "1.5vw" }}></Avatar>
                        <Avatar src={abouttow} sx={{ borderRadius: 0, width: { md: "15vw", xs: "28vw" }, height: { md: "15vw", xs: "28vw" }, alignSelf: "end" }}></Avatar>
                    </Box>
                    <Box sx={{ display: "flex", marginTop: "2vh", justifyContent: "center" }}>
                        <Avatar src={aboutthree} sx={{ borderRadius: 0, width: { md: "15vw", xs: "28vw" }, height: { md: "15vw", xs: "28vw" }, alignSelf: "self-start", marginRight: "1.5vw", marginLeft: { md: "12vw", xs: "20vw" } }}></Avatar>
                        <Avatar src={aboutfore} sx={{ borderRadius: 0, width: { md: "21vw", xs: "45%" }, height: { md: "21vw", xs: "45%" }, }}></Avatar>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Box sx={{ marginTop: { md: 5, xs: 1 } }}>
                        <Typography sx={{ fontFamily: "Segoe UI", color: orange[400] }}>About Us</Typography>
                        <Typography sx={{ fontSize: { sm: '2.5rem', xs: '7vw' }, fontWeight: 'bold', textShadow: '1px 1px 2px black' }}>
                            Welcome to <RestaurantIcon sx={{ fontSize: { sm: "2.5rem", xs: '7vw' }, color: orange[400] }} /> Restoran
                        </Typography>
                        <Typography sx={{ marginY: 3, color: "gray" }}>
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
                        </Typography>
                        <Typography sx={{ marginY: 3, color: "gray" }}>
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                        </Typography>
                        <Box sx={{ display: { sm: "flex", xs: "block" }, justifyContent: "space-between" }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', borderLeft: "6px solid orange", marginBottom: { xs: 2, sm: 0 } }}>
                                <Typography sx={{ fontSize: "3rem", fontWeight: "bold", color: orange[400], paddingX: "1.5rem" }}>15</Typography>
                                <Box sx={{}}>
                                    <Typography>Years of</Typography>
                                    <Typography sx={{ fontWeight: "bold" }}>EXPERIENCE</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', borderLeft: "6px solid orange" }}>
                                <Typography sx={{ fontSize: "3rem", fontWeight: "bold", color: orange[400], paddingX: "1.5rem" }}>50</Typography>
                                <Box sx={{}}>
                                    <Typography>Popular</Typography>
                                    <Typography sx={{ fontWeight: "bold" }}>MASTER CHEFS</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Button variant='contained' sx={{ backgroundColor: orange[400], marginTop: 4, padding: "1rem 1.9rem", "&:hover": { backgroundColor: orange[600] } }}>READ MORE</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box >
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
    </>
}

export default About