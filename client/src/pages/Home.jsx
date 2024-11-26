import { Alert, Avatar, Box, Button, Card, CardMedia, Divider, Drawer, FormControl, Grid, IconButton, InputLabel, Modal, NativeSelect, Slider, Snackbar, SnackbarContent, TextField, Typography, colors, keyframes } from '@mui/material'
import React, { useEffect, useState } from 'react'
import bgimag from '../img/bg-hero.jpg'
import hero from '../img/hero.png'
import aboutone from '../img/about-1.jpg'
import abouttow from '../img/about-2.jpg'
import aboutthree from '../img/about-3.jpg'
import aboutfore from '../img/about-4.jpg'
import menuone from '../img/menu-1.jpg'
import menutwo from '../img/menu-2.jpg'
import menuthree from '../img/menu-3.jpg'
import menufore from '../img/menu-4.jpg'
import menufive from '../img/menu-5.jpg'
import menusix from '../img/menu-6.jpg'
import menusevan from '../img/menu-7.jpg'
import menuseight from '../img/menu-8.jpg'
import videoposter from '../img/video.jpg'
import teamone from '../img/team-1.jpg'
import teamtow from '../img/team-2.jpg'
import teamthree from '../img/team-3.jpg'
import teamfore from '../img/team-4.jpg'
import avtarimg1 from '../img/testimonial-2.jpg'
import avtarimg2 from '../img/testimonial-3.jpg'
import avtarimg3 from '../img/testimonial-4.jpg'
// import CardCover from '@mui/joy/CardCover';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseIcon from '@mui/icons-material/Pause';
import PersonIcon from '@mui/icons-material/Person';
import { grey, orange } from '@mui/material/colors';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useSelector } from 'react-redux'
import { useGetAllDishesQuery } from '../redux/apis/adminApi'
import { Link } from 'react-router-dom'

const Home = () => {



    const { loggenIn } = useSelector(state => state.auth)
    const [loginToast, setLoginToast] = useState(false)

    const { data } = useGetAllDishesQuery()

    //    burger animation start
    const rotateAnimation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
    //    burger animation end

    // card product start
    const [isHovered, setIsHovered] = useState(false);
    const [issecHover, setIssecHover] = useState(false)
    const [istheHover, setIstheHover] = useState(false)
    const [isforHover, setIsforHover] = useState(false)


    const [cartData, setCartData] = useState(null)

    // card product end
    // video
    const [isPlaying, setPlaying] = useState(false);

    const handlePlayPause = () => {
        const video = document.getElementById('videoPlayer');
        if (video) {
            if (isPlaying) {
                video.pause()
            } else {
                video.play()
            }
            setPlaying(!isPlaying);
        }

    }
    // video


    const handleSNACKClose = () => {
        setLoginToast(false)
    }


    useEffect(() => {
        if (loggenIn) {
            setLoginToast(true)
        }
    }, [loggenIn])

    const handleCartModalClose = () => {
        setCartData(null)
    }


    return <>
        <Box
            id="home"
            sx={{
                backgroundImage: `linear-gradient(to right,hsla(234, 38%, 18%, 0.9), hsla(234, 38%, 18%, 0.9)), url('${bgimag}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
            }}
        >

            <Snackbar autoHideDuration={4000} onClose={handleSNACKClose} sx={{ backgroundColor: "red", color: "blue" }} anchorOrigin={{
                vertical: "bottom", horizontal: "right"
            }} open={loginToast}>
                <Alert onClose={handleSNACKClose} variant='filled' severity='success' color='warning' sx={{ width: "100%" }}  >
                    Login Success
                </Alert>
            </Snackbar>


            <Grid container sx={{ marginTop: "4rem", }}>
                <Grid md={5} sx={{ marginX: "6vw", }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: { md: "start", xs: "center" }, marginTop: { xs: "10rem" } }}>
                        <Box sx={{ textAlign: { xs: "center", md: "left" }, width: { md: "42vw", xs: "80vw", sm: "60vw" }, }} >
                            <Typography sx={{ fontSize: { lg: "4rem", md: "3rem", xs: "3rem" }, fontFamily: 'sans-serif', fontWeight: "bold", lineHeight: 1.3, wordWrap: "break-word" }}>Enjoy Our
                                Delicious Meal</Typography>
                        </Box>
                        <Typography sx={{ marginY: 2 }}>
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                        </Typography>
                        <Link to={"/menu"}>
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: 'orange', '&:hover': { backgroundColor: 'darkorange' }, padding: "2.4vh 4vw", fontSize: "1rem", border: "4px solid #795548" }}
                            > BOOK A TABLE</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid md={5} sx={{ overflow: "hidden" }}>
                    {/* <Box sx={{ width: "90%" }}> */}
                    <CardMedia
                        component="img"
                        // height=""
                        sx={{
                            ":hover": {
                                boxShadow: `
                            0 0 5px rgba(255, 69, 0, 0.5),
                            0 0 10px rgba(255, 140, 0, 0.6),
                            0 0 15px rgba(255, 165, 0, 0.7),
                            0 0 20px rgba(255, 69, 0, 0.5),
                            0 0 25px rgba(255, 140, 0, 0.4),
                            0 0 30px rgba(255, 69, 0, 0.3)
                          `, transition: 'box-shadow 0.7s ease-in-out'
                            }, borderRadius: '50%', height: { md: '37vw', xs: "75vw" }, width: { md: '37vw', xs: "75vw" }, margin: { xs: "3rem" }, animation: `${rotateAnimation} 30s linear infinite`
                        }}
                        image={hero}
                        alt="Placeholder"
                    />
                    {/* </Box> */}
                </Grid>
            </Grid>

        </Box >
        {/* card product start */}
        <Box sx={{ marginX: "6vw", marginY: "5rem" }}>
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
        {/* card product end */}
        {/* Welcome Restorant start */}
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
        {/* Welcome Restorant end */}
        {/* Food Menu start */}
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: 40, color: orange[400], border: "1.5px solid " }}></Box>
                <Typography sx={{ marginX: 1, color: orange[400], fontSize: "2rem" }}>Food Menu</Typography>
                <Box sx={{ width: 40, color: orange[400], border: "1.5px solid " }}></Box>
            </Box>
            <Typography sx={{ fontSize: { sm: "3rem", xs: "2.5rem" }, textShadow: `1px 1px 3px ${"black"}`, color: 'black' }}>Most Popular Items</Typography>
            <Box sx={{ display: { xs: "flex", }, justifyContent: "space-between", marginTop: "3rem", flexWrap: "wrap" }}>
                <Box sx={{ display: 'flex', alignContent: 'center', marginLeft: { sm: "2rem", xs: "1rem" } }}>
                    <Typography sx={{ fontSize: "3rem", fontWeight: "bold", color: orange[400], paddingX: "0.5rem" }}><FreeBreakfastIcon sx={{ fontSize: { sm: "3rem", xs: "2rem" } }} /></Typography>
                    <Box sx={{}}>
                        <Typography>
                            Popular</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>Breakfast</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignContent: 'center', marginLeft: { sm: "2rem", xs: "1rem" } }}>
                    <Typography sx={{ fontSize: "3rem", fontWeight: "bold", color: orange[400], paddingX: "0.5rem" }}><LunchDiningIcon sx={{ fontSize: { sm: "3rem", xs: "2rem" } }} /></Typography>
                    <Box sx={{}}>
                        <Typography>Special</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>Launch</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignContent: 'center', marginLeft: { sm: "2rem", xs: "1rem" } }}>
                    <Typography sx={{ fontSize: "3rem", fontWeight: "bold", color: orange[400], paddingX: "0.5rem" }}><RestaurantIcon sx={{ fontSize: { sm: "3rem", xs: "2rem" } }} /></Typography>
                    <Box sx={{}}>
                        <Typography>Lovely</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>Dinner</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box sx={{ marginX: "6vw", marginY: "3rem" }}>
            <Grid container spacing={5}>
                {
                    data && data.map((item, i) => <Grid key={i} item md={6} xs={12}>
                        <Link onClick={() => setCartData(item)} style={{ textDecoration: "none", color: "black" }}
                            to={`/details/${item._id}`}
                        >
                            <Box sx={{ display: "flex", cursor: "pointer", marginTop: 3 }}>
                                <Avatar src={item.hero} sx={{ borderRadius: 0.9, width: "6rem", height: "5.5rem" }} />
                                <Box sx={{ marginLeft: "2vw", width: { xs: "100%", md: "100%" } }} >
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>{item.name}</Typography>
                                        <Typography sx={{ fontSize: "1.6rem", fontWeight: "bold", color: orange[400] }}>₹{item.price}</Typography>
                                    </Box>
                                    <Divider sx={{ my: 1 }} />
                                    <Typography sx={{ fontSize: 13, color: "gray", fontStyle: "italic" }}>{item.desc}</Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Grid>)
                }

                {/* <Grid item md={6} xs={12}>
                    <Box sx={{ display: "flex" }}>
                        <Avatar src={menutwo} sx={{ borderRadius: 0.5, width: "6rem", height: "6rem" }} />
                        <Box sx={{ marginLeft: "2vw", width: { xs: "100%", md: "100%" } }} >
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>Chicken Burger</Typography>
                                <Typography sx={{ fontSize: "1.6rem", fontWeight: "bold", color: orange[400] }}>$115</Typography>
                            </Box>
                            <hr />
                            <Typography sx={{ color: "gray", fontStyle: "italic" }}>Ipsum ipsum clita erat amet dolor justo diam</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", marginTop: 3 }}>
                        <Avatar src={menufore} sx={{ borderRadius: 0.5, width: "6rem", height: "6rem" }} />
                        <Box sx={{ marginLeft: "2vw", width: { xs: "100%", md: "100%" } }} >
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>Chicken Burger</Typography>
                                <Typography sx={{ fontSize: "1.6rem", fontWeight: "bold", color: orange[400] }}>$115</Typography>
                            </Box>
                            <hr />
                            <Typography sx={{ color: "gray", fontStyle: "italic" }}>Ipsum ipsum clita erat amet dolor justo diam</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", marginTop: 3 }}>
                        <Avatar src={menusix} sx={{ borderRadius: 0.5, width: "6rem", height: "6rem" }} />
                        <Box sx={{ marginLeft: "2vw", width: { xs: "100%", md: "100%" } }} >
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>Chicken Burger</Typography>
                                <Typography sx={{ fontSize: "1.6rem", fontWeight: "bold", color: orange[400] }}>$115</Typography>
                            </Box>
                            <hr />
                            <Typography sx={{ color: "gray", fontStyle: "italic" }}>Ipsum ipsum clita erat amet dolor justo diam</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", marginTop: 3 }}>
                        <Avatar src={menuseight} sx={{ borderRadius: 0.5, width: "6rem", height: "6rem" }} />
                        <Box sx={{ marginLeft: "2vw", width: { xs: "100%", md: "100%" } }} >
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>Chicken Burger</Typography>
                                <Typography sx={{ fontSize: "1.6rem", fontWeight: "bold", color: orange[400] }}>$115</Typography>
                            </Box>
                            <hr />
                            <Typography sx={{ color: "gray", fontStyle: "italic" }}>Ipsum ipsum clita erat amet dolor justo diam</Typography>
                        </Box>
                    </Box>
                </Grid> */}

            </Grid>

        </Box>

        {/* Food Menu end */}
        {/* Book A Table Online start */}
        <Grid container>
            <Grid md={6} xs={12}>
                <div style={{ position: 'relative' }}>
                    <video id="videoPlayer" poster={videoposter} width="100%" height="100%" controls>
                        <source src="https://youtu.be/V7S2qRqIBhM?si=CAa7lw61c5Zxzl_B" type="video/mp4" />
                        Your browser does not support the video tag.
                        <source
                            src={videoposter}
                        // type="video/mp4"
                        />
                    </video>
                    <IconButton
                        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        onClick={handlePlayPause}
                    >
                        {isPlaying ? <PauseIcon sx={{ color: orange[400], fontSize: "8rem" }} /> : <PlayCircleIcon sx={{ color: orange[400], fontSize: "8rem" }} />}
                    </IconButton>
                </div>
            </Grid>
            <Grid md={6} xs={12} sx={{ backgroundColor: "hsla(234, 38%, 18%, 1)", px: "3vw" }}>

                <Typography sx={{ color: orange[400], fontSize: "1.6rem" }}>Reservation</Typography>
                <Typography sx={{ color: "white ", fontSize: "2rem", fontWeight: "bold" }}>Book A Table Online</Typography>

                <Box sx={{ display: { md: "flex" }, justifyContent: "space-between" }}>
                    <TextField id="filled-basic" label="Your Name" variant="filled" sx={{
                        backgroundColor: "white", height: "60px", width: { md: "47%", xs: "100%" }, marginTop: { xs: 2 }, margin: 0, border: `3px solid 
                        ${grey[800]}`
                    }} InputLabelProps={{ style: { color: "gray", } }} />
                    <TextField id="filled-basic" label="Your Email" variant="filled" sx={{
                        backgroundColor: "white", height: "60px", width: { md: "47%", xs: "100%" }, marginTop: { xs: 2 }, border: `3px solid 
                        ${grey[800]}`
                    }} InputLabelProps={{ style: { color: "gray", } }} />
                </Box>
                <Box sx={{ display: { md: "flex" }, justifyContent: "space-between" }}>
                    <TextField id="filled-basic" variant="filled" type='date' sx={{
                        backgroundColor: "white", height: "60px", width: { md: "47%", xs: "100%" }, marginTop: { xs: 2 }, margin: 0, border: `3px solid 
                        ${grey[800]}`
                    }} InputLabelProps={{ style: { color: "gray", } }} />
                    <TextField id="filled-basic" label="Your People" variant="filled" sx={{
                        backgroundColor: "white", height: "60px", width: { md: "47%", xs: "100%" }, marginTop: { xs: 2 }, border: `3px solid 
                        ${grey[800]}`
                    }} InputLabelProps={{ style: { color: "gray", } }} />
                </Box>
                <Box sx={{}}>
                    <TextField id="filled-multiline-static" rows={3} label="Special Request" defaultValue="defaultValue" variant="filled" multiline sx={{
                        backgroundColor: "white", height: "100px", width: { md: "100%", xs: "100%" }, marginTop: { xs: 2 }, margin: 0, border: `3px solid 
                        ${grey[800]}`
                    }} InputLabelProps={{ style: { color: "gray", } }} />
                    <Button sx={{ backgroundColor: orange[400], "&:hover": { backgroundColor: orange[600] }, width: "100%", padding: { md: "0.8rem", xs: "0.6rem" }, marginTop: 2 }}>BOOK NOW</Button>
                </Box>
            </Grid>
        </Grid >
        {/* Book A Table Online end */}


        {/* Team Member start */}
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
        {/* Teastimonial end */}


        {/* cart mdoal start */}


        {/* cart mdoal end */}





    </>
}

export default Home