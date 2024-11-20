import { Avatar, Box, Card, Grid, Typography, } from '@mui/material'
import React, { useState } from 'react'
import bgimag from '../img/bg-hero.jpg'

import teamone from '../img/team-1.jpg'
import teamtow from '../img/team-2.jpg'
import teamthree from '../img/team-3.jpg'
import teamfore from '../img/team-4.jpg'
// import CardCover from '@mui/joy/CardCover';
import { grey, orange } from '@mui/material/colors';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const OurTeam = () => {
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
            <Typography sx={{ fontSize: "3.5rem", fontWeight: "bold" }}>Our Team</Typography>
            <Box sx={{ display: "flex", marginTop: 2 }}>
                <Typography sx={{ color: orange[400], marginX: 1 }}>HOME / </Typography>
                <Typography sx={{ color: orange[400], marginX: 1 }}>PAGES / </Typography>
                <Typography>Team</Typography>
            </Box>
        </Box>
        <Box sx={{ marginX: 5, marginTop: 8 }}>
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

export default OurTeam