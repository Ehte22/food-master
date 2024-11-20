import { Avatar, Box, Divider, Grid, Typography, } from '@mui/material'
import React, { useState } from 'react'
import bgimag from '../img/bg-hero.jpg'
import menuone from '../img/menu-1.jpg'
import menutwo from '../img/menu-2.jpg'
import menuthree from '../img/menu-3.jpg'
import menufore from '../img/menu-4.jpg'
import menufive from '../img/menu-5.jpg'
import menusix from '../img/menu-6.jpg'
import menusevan from '../img/menu-7.jpg'
import menuseight from '../img/menu-8.jpg'
// import CardCover from '@mui/joy/CardCover';

import { orange } from '@mui/material/colors';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { useGetAllDishesQuery } from '../redux/apis/adminApi'
import { Link } from 'react-router-dom'


const Menu = () => {


    const { data } = useGetAllDishesQuery()


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
            <Typography sx={{ fontSize: "3.5rem", fontWeight: "bold" }}>Menu</Typography>
            <Box sx={{ display: "flex", marginTop: 2 }}>
                <Typography sx={{ color: orange[400], marginX: 1 }}>HOME / </Typography>
                <Typography sx={{ color: orange[400], marginX: 1 }}>PAGES / </Typography>
                <Typography>Menu</Typography>
            </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "4rem" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: 40, color: orange[400], border: "1.5px solid " }}></Box>
                <Typography sx={{ marginX: 1, color: orange[400], fontSize: "2rem" }}>Food Menu</Typography>
                <Box sx={{ width: 40, color: orange[400], border: "1.5px solid " }}></Box>
            </Box>
            <Typography sx={{ fontSize: { sm: "3rem", xs: "2.5rem" }, textShadow: `1px 1px 3px ${"black"}`, color: 'black' }}>Most Popular Items</Typography>
            <Box sx={{ display: { xs: "flex", }, flexWrap: "wrap", justifyContent: "space-between", marginTop: "3rem" }}>
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
                    data && data.map(item => <Grid item md={6} xs={12}>
                        <Link style={{ textDecoration: "none", color: "black" }}
                            to={`/details/${item._id}`}
                        >
                            <Box sx={{ display: "flex", cursor: "pointer", marginTop: 3 }}>
                                <Avatar src={`${import.meta.env.VITE_URL}/${item.hero}`} sx={{ borderRadius: 0.9, width: "6rem", height: "5.5rem" }} />
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
    </>
}

export default Menu