import { Box, Card, Grid, Typography, } from '@mui/material'
import React, { useState } from 'react'
import bgimag from '../img/bg-hero.jpg'

import PersonIcon from '@mui/icons-material/Person';
import { orange } from '@mui/material/colors';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const Services = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [issecHover, setIssecHover] = useState(false)
    const [istheHover, setIstheHover] = useState(false)
    const [isforHover, setIsforHover] = useState(false)
    const [isHovered1, setIsHovered1] = useState(false);
    const [issecHover2, setIssecHover2] = useState(false)
    const [istheHover3, setIstheHover3] = useState(false)
    const [isforHover4, setIsforHover4] = useState(false)
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
            <Typography sx={{ fontSize: "3.5rem", fontWeight: "bold" }}>Services</Typography>
            <Box sx={{ display: "flex", marginTop: 2 }}>
                <Typography sx={{ color: orange[400], marginX: 1 }}>HOME / </Typography>
                <Typography sx={{ color: orange[400], marginX: 1 }}>PAGES / </Typography>
                <Typography>Services</Typography>
            </Box>
        </Box>
        <Box sx={{ marginX: "6vw", marginTop: "5rem" }}>
            <Grid container spacing={2}>
                <Grid item md={3} sm={6}
                >
                    <Card
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        sx={{
                            padding: '1.5rem 1.5rem',
                            '&:hover': { backgroundColor: 'darkorange' },
                            transition: 'background-color 0.7s, color 0.6s',
                        }}
                    >
                        <PersonIcon
                            sx={{
                                color: isHovered ? 'white' : orange[400],
                                fontSize: '7vw',
                                padding: 0,
                                borderRadius: 0,
                            }}
                        />
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                marginBottom: '1vh',
                                color: isHovered ? 'white' : 'black',
                            }}
                        >
                            Master Chefs
                        </Typography>
                        <Typography sx={{ color: isHovered ? 'white' : 'black' }}>
                            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                        </Typography>
                    </Card>
                </Grid>
                <Grid item md={3} sm={6}
                >
                    <Card
                        onMouseEnter={() => setIssecHover(true)}
                        onMouseLeave={() => setIssecHover(false)}
                        sx={{
                            padding: '1.5rem 1.5rem',
                            '&:hover': { backgroundColor: 'darkorange' },
                            transition: 'background-color 0.7s, color 0.6s',
                        }}
                    >
                        <RestaurantIcon
                            sx={{
                                color: issecHover ? 'white' : orange[400],
                                fontSize: '7vw',
                                padding: 0,
                                borderRadius: 0,
                            }}
                        />
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                marginBottom: '1vh',
                                color: issecHover ? 'white' : 'black',
                            }}
                        >
                            Master Chefs
                        </Typography>
                        <Typography sx={{ color: issecHover ? 'white' : 'black' }}>
                            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                        </Typography>
                    </Card>
                </Grid>
                <Grid item md={3} sm={6}
                >
                    <Card
                        onMouseEnter={() => setIstheHover(true)}
                        onMouseLeave={() => setIstheHover(false)}
                        sx={{
                            padding: '1.5rem 1.5rem',
                            '&:hover': { backgroundColor: 'darkorange' },
                            transition: 'background-color 0.7s, color 0.6s',
                        }}
                    >
                        <ShoppingCartIcon
                            sx={{
                                color: istheHover ? 'white' : orange[400],
                                fontSize: '7vw',
                                padding: 0,
                                borderRadius: 0,
                            }}
                        />
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                marginBottom: '1vh',
                                color: istheHover ? 'white' : 'black',
                            }}
                        >
                            Master Chefs
                        </Typography>
                        <Typography sx={{ color: istheHover ? 'white' : 'black' }}>
                            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                        </Typography>
                    </Card>
                </Grid>
                <Grid item md={3} sm={6}
                >
                    <Card
                        onMouseEnter={() => setIsforHover(true)}
                        onMouseLeave={() => setIsforHover(false)}
                        sx={{
                            padding: '1.5rem 1.5rem',
                            '&:hover': { backgroundColor: 'darkorange' },
                            transition: 'background-color 0.7s, color 0.6s',
                        }}
                    >
                        <HeadsetMicIcon
                            sx={{
                                color: isforHover ? 'white' : orange[400],
                                fontSize: '7vw',
                                padding: 0,
                                borderRadius: 0,
                            }}
                        />
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                marginBottom: '1vh',
                                color: isforHover ? 'white' : 'black',
                            }}
                        >
                            Master Chefs
                        </Typography>
                        <Typography sx={{ color: isforHover ? 'white' : 'black' }}>
                            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Box>
        <Box sx={{ marginX: "6vw", marginY: "1rem" }}>
            <Grid container spacing={2}>
                <Grid item md={3} sm={6}
                >
                    <Card
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}
                        sx={{
                            padding: '1.5rem 1.5rem',
                            '&:hover': { backgroundColor: 'darkorange' },
                            transition: 'background-color 0.7s, color 0.6s',
                        }}
                    >
                        <PersonIcon
                            sx={{
                                color: isHovered1 ? 'white' : orange[400],
                                fontSize: '7vw',
                                padding: 0,
                                borderRadius: 0,
                            }}
                        />
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                marginBottom: '1vh',
                                color: isHovered1 ? 'white' : 'black',
                            }}
                        >
                            Master Chefs
                        </Typography>
                        <Typography sx={{ color: isHovered1 ? 'white' : 'black' }}>
                            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                        </Typography>
                    </Card>
                </Grid>
                <Grid item md={3} sm={6}
                >
                    <Card
                        onMouseEnter={() => setIssecHover2(true)}
                        onMouseLeave={() => setIssecHover2(false)}
                        sx={{
                            padding: '1.5rem 1.5rem',
                            '&:hover': { backgroundColor: 'darkorange' },
                            transition: 'background-color 0.7s, color 0.6s',
                        }}
                    >
                        <RestaurantIcon
                            sx={{
                                color: issecHover2 ? 'white' : orange[400],
                                fontSize: '7vw',
                                padding: 0,
                                borderRadius: 0,
                            }}
                        />
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                marginBottom: '1vh',
                                color: issecHover2 ? 'white' : 'black',
                            }}
                        >
                            Master Chefs
                        </Typography>
                        <Typography sx={{ color: issecHover ? 'white' : 'black' }}>
                            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                        </Typography>
                    </Card>
                </Grid>
                <Grid item md={3} sm={6}
                >
                    <Card
                        onMouseEnter={() => setIstheHover3(true)}
                        onMouseLeave={() => setIstheHover3(false)}
                        sx={{
                            padding: '1.5rem 1.5rem',
                            '&:hover': { backgroundColor: 'darkorange' },
                            transition: 'background-color 0.7s, color 0.6s',
                        }}
                    >
                        <ShoppingCartIcon
                            sx={{
                                color: istheHover3 ? 'white' : orange[400],
                                fontSize: '7vw',
                                padding: 0,
                                borderRadius: 0,
                            }}
                        />
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                marginBottom: '1vh',
                                color: istheHover3 ? 'white' : 'black',
                            }}
                        >
                            Master Chefs
                        </Typography>
                        <Typography sx={{ color: istheHover3 ? 'white' : 'black' }}>
                            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                        </Typography>
                    </Card>
                </Grid>
                <Grid item md={3} sm={6}
                >
                    <Card
                        onMouseEnter={() => setIsforHover4(true)}
                        onMouseLeave={() => setIsforHover4(false)}
                        sx={{
                            padding: '1.5rem 1.5rem',
                            '&:hover': { backgroundColor: 'darkorange' },
                            transition: 'background-color 0.7s, color 0.6s',
                        }}
                    >
                        <HeadsetMicIcon
                            sx={{
                                color: isforHover4 ? 'white' : orange[400],
                                fontSize: '7vw',
                                padding: 0,
                                borderRadius: 0,
                            }}
                        />
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                marginBottom: '1vh',
                                color: isforHover4 ? 'white' : 'black',
                            }}
                        >
                            Master Chefs
                        </Typography>
                        <Typography sx={{ color: isforHover4 ? 'white' : 'black' }}>
                            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </>
}

export default Services