import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import bgimag from '../img/bg-hero.jpg'
import { grey, orange } from '@mui/material/colors'
import DraftsIcon from '@mui/icons-material/Drafts';
// import { Box, Button, Grid, TextField, Typography, } from '@mui/material'
// import React, { useState } from 'react'





const Contact = () => {
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
            <Typography sx={{ fontSize: "3.5rem", fontWeight: "bold" }}>Contact</Typography>
            <Box sx={{ display: "flex", marginTop: 2 }}>
                <Typography sx={{ color: orange[400], marginX: 1 }}>HOME / </Typography>
                <Typography sx={{ color: orange[400], marginX: 1 }}>PAGES / </Typography>
                <Typography>Contact</Typography>
            </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", marginY: 8 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: 40, color: orange[400], border: "1.5px solid " }}></Box>
                <Typography sx={{ marginX: 1, color: orange[400], fontSize: "1.7rem" }}>Contact us</Typography>
                <Box sx={{ width: 40, color: orange[400], border: "1.5px solid " }}></Box>
            </Box>
            <Typography sx={{ fontSize: { sm: "2.9rem", xs: "2.5rem" }, textShadow: `1px 1px 3px ${"black"}`, color: 'black' }}>Contact For Any Query</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", marginX: 8 }}>
            <Grid container>
                <Grid item md={4} sm={4} xs={12} sx={{ marginY: 1 }}>
                    <Box sx={{ color: orange[400], display: "flex", alignItems: "center", }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", paddingRight: 1 }}>Booking</Typography>
                        <Box sx={{ paddingX: 3, backgroundColor: orange[400], width: "0.1rem", height: "0.2rem" }}></Box>
                    </Box>
                    <Box sx={{ display: "flex", my: 1 }}>
                        <DraftsIcon sx={{ color: "orange" }} />
                        <Typography>book@example.com</Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={4} xs={12} sx={{ marginY: 1 }}>
                    <Box sx={{ color: orange[400], display: "flex", alignItems: "center", }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", paddingRight: 1 }}>General</Typography>
                        <Box sx={{ paddingX: 3, backgroundColor: orange[400], width: "0.1rem", height: "0.2rem" }}></Box>
                    </Box>
                    <Box sx={{ display: "flex", my: 1 }}>
                        <DraftsIcon sx={{ color: "orange" }} />
                        <Typography>info@example.com</Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={4} xs={12} sx={{ marginY: 1 }}>
                    <Box sx={{ color: orange[400], display: "flex", alignItems: "center", }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", paddingRight: 1 }}>Technical</Typography>
                        <Box sx={{ paddingX: 3, backgroundColor: orange[400], width: "0.1rem", height: "0.2rem" }}></Box>
                    </Box>
                    <Box sx={{ display: "flex", my: 1 }}>
                        <DraftsIcon sx={{ color: "orange" }} />
                        <Typography>tech@example.com</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Grid container sx={{ marginY: 5 }}>
            <Grid md={6} sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar sx={{ width: "80%", height: "100%" }} src='https://cdn.pixabay.com/photo/2016/04/02/21/01/earth-1303628_1280.png' />
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

        </Grid>
    </>
}

export default Contact