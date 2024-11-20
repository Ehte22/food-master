import { Box, Button, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import bgimag from '../img/bg-hero.jpg'

import videoposter from '../img/video.jpg'

// import CardCover from '@mui/joy/CardCover';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseIcon from '@mui/icons-material/Pause';
import { grey, orange } from '@mui/material/colors';
import { useGetUserOrderQuery, useInitiatePaymentMutation, usePayMoneyMutation } from '../redux/apis/userApi';
import { useNavigate } from 'react-router-dom';



const Booking = () => {
    const [isPlaying, setPlaying] = useState(false);

    const [selectedPaymentId, setselectedPaymentId] = useState(null)

    const { data } = useGetUserOrderQuery()

    const [initiatePaymentTrigger, { isSuccess: initiateSuccess, data: initiateId }] = useInitiatePaymentMutation()
    const [payMoneyTrigger] = usePayMoneyMutation()


    const handlePlayPause = () => {
        const video = document.getElementById('videoPlayer');
        if (video) {
            if (isPlaying) {
                video.pause();
            } else {
                video.play();
            }
            setPlaying(!isPlaying);
        }
    }

    console.log(data);

    const navi = useNavigate()

    useEffect(() => {
        if (initiateSuccess) {
            const razor = window.Razorpay({
                key: import.meta.env.VITE_RAZORPAY_API_KEY,
                amount: initiateId.totalAmout * 100,
                currency: "INR",
                order_id: initiateId.id,
                prefill: {
                    contact: "8446414152"
                },
                handler: response => {
                    payMoneyTrigger({ ...response, orderId: selectedPaymentId })
                }
            })
            razor.open()
        }

    }, [initiateSuccess])

    console.log(data);

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
            <Typography sx={{ fontSize: "3.5rem", fontWeight: "bold" }}>Booking</Typography>
            <Box sx={{ display: "flex", marginTop: 2 }}>
                <Typography sx={{ color: orange[400], marginX: 1 }}>HOME / </Typography>
                <Typography sx={{ color: orange[400], marginX: 1 }}>PAGES / </Typography>
                <Typography  >Booking</Typography>
            </Box>
        </Box>

        <Box>

            {

                data && data[0] && data[0].cartId && data[0].cartId.dishes ?
                    <TableContainer>

                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>No.</TableCell>
                                    <TableCell>Img</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Mode </TableCell>
                                    <TableCell>Status </TableCell>
                                    <TableCell>Actions </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>

                                {
                                    data && data.map((item, i) => <TableRow key={i}>
                                        <TableCell>{i + 1}</TableCell>
                                        <TableCell>

                                            {
                                                item.cartId.dishes.map((d, i) => <Box key={i}>

                                                    <img style={{ borderRadius: 5 }} src={`${import.meta.env.VITE_URL}/${d.hero}`} height={60} alt="" />
                                                </Box>)
                                            }

                                        </TableCell>
                                        <TableCell>
                                            {
                                                item.cartId.dishes.map((d, i) => <Typography key={i} sx={{ my: 1, fontWeight: 600, fontFamily: "poppins" }}>
                                                    {d.name},
                                                </Typography>)

                                            }
                                        </TableCell>
                                        <TableCell  >{item.mode === "pay" || item.status === "delivered" ? <Typography>Paid</Typography> : <Button variant='outlined' onClick={e => {
                                            let TotalAmount = 0

                                            const x = item.cartId.dishes.map(p => TotalAmount += p.qty * p.price)
                                            initiatePaymentTrigger({ amount: TotalAmount })
                                            setselectedPaymentId(item._id)
                                        }} color='warning'>  Pay now</Button>}</TableCell>
                                        <TableCell><Typography sx={{ textTransform: "capitalize" }}>{item.status}</Typography></TableCell>
                                        <TableCell><Button color='warning' variant='contained' onClick={e => {
                                            navi(`/orderStatus/${item._id}`)
                                        }}      >Check status</Button></TableCell>
                                    </TableRow>)
                                }


                            </TableBody>


                        </Table>

                    </TableContainer>

                    : <Box sx={{ my: 5, textAlign: "center" }} >
                        <Typography sx={{ fontSize: 30, fontWeight: 700, textAlign: "center" }}  >You have No orders</Typography>
                        <Button sx={{ my: 2 }} onClick={e => navi("/menu")} variant='contained' color='warning' > Book Now </Button>
                    </Box>

            }





        </Box>









        <Grid container sx={{ marginY: "5rem" }}>
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
                    <TextField id="filled-multiline-static" rows={3} label="Special Request" variant="filled" multiline sx={{
                        backgroundColor: "white", height: "100px", width: { md: "100%", xs: "100%" }, marginTop: { xs: 2 }, margin: 0, border: `3px solid 
                        ${grey[800]}`
                    }} InputLabelProps={{ style: { color: "gray", } }} />
                    <Button sx={{ backgroundColor: orange[400], "&:hover": { backgroundColor: orange[600] }, width: "100%", padding: { md: "0.8rem", xs: "0.6rem" }, marginTop: 2 }}>BOOK NOW</Button>
                </Box>
            </Grid>
        </Grid >
    </>
}

export default Booking