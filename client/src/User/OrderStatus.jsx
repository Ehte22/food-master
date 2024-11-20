import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Divider, Stack, Step, StepConnector, StepLabel, Stepper, Typography, keyframes } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import hero from '../img/hero.png'

import { useParams } from 'react-router-dom'
import { useGetUserOrderStatusQuery, useInitiatePaymentMutation, usePayMoneyMutation } from '../redux/apis/userApi'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { orange } from '@mui/material/colors'
import { useEffect } from 'react'


const OrderStatus = () => {

    const { id } = useParams()

    const { data } = useGetUserOrderStatusQuery(id)

    console.log(data);

    const [initiatePaymentTrigger, { isSuccess: initiateSuccess, data: initiateId }] = useInitiatePaymentMutation()
    const [payMoneyTrigger] = usePayMoneyMutation()


    let TotalAmount = 0

    data && data.cartId.dishes.map(item => TotalAmount += (item.price * item.qty))

    const rotateAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
    `;


    useEffect(() => {
        if (initiateSuccess) {
            const razor = window.Razorpay({
                key: import.meta.env.VITE_RAZORPAY_API_KEY,
                amount: TotalAmount * 100,
                currency: "INR",
                order_id: initiateId.id,
                prefill: {
                    contact: "8446414152"
                },
                handler: response => {
                    payMoneyTrigger({ ...response, orderId: id })
                }
            })
            razor.open()
        }

    }, [initiateSuccess])



    return !data ? <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"} >
        <CircularProgress />

    </Stack> : (
        <div>


            <Box sx={{
                px: { md: 20, xs: 2 },
                my: { md: 20, xs: 10 },
                // p: { xs: 2, sm: 1, md: 0 }
            }}  >

                <Grid container alignItems={"center"} justifyContent={"center"} >

                    <Grid xs={12} sm={6}   >
                        <Card>
                            <CardContent sx={{ p: 3 }}      >
                                <Typography sx={{ fontWeight: 600, fontSize: 25, color: "hsla(234, 38%, 18%, 1)" }} > <LocationOnIcon color='warning' sx={{ fontSize: 26 }} /> Billing address</Typography>
                                <Box sx={{ mt: 3 }} >
                                    <Stack direction={"row"} alignItems={"center"} gap={1} sx={{ fontWeight: 500, fontSize: 18, color: "hsla(234, 38%, 18%, 1)" }} >{data.address.fname} {data.address.lname} - {data.address.mobile} </Stack>
                                    <Typography sx={{ fontWeight: 500, fontSize: 14, color: "hsla(234, 38%, 18%, 1)" }} >{data.address.address} {data.address.city} - {data.address.pcode} </Typography>
                                </Box>

                                <Stack direction={"row"} alignItems={"center"} gap={1} sx={{ fontWeight: 600, mt: 4, fontSize: 25, color: "hsla(234, 38%, 18%, 1)" }} > <FoodBankIcon color='warning' sx={{ fontSize: 29 }} /> Order Details</Stack>


                                <Box sx={{ mt: 6 }}>
                                    {
                                        data.cartId.dishes.map(item => <Stack my={2} direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                                            <Typography sx={{ fontFamily: "poppins", fontWeight: 550, fontSize: 18, color: "black" }}>{item.name}({item.qty})</Typography>
                                            <Typography sx={{ fontFamily: "poppins", fontWeight: 550, fontSize: 18, color: "black" }}>₹{item.price * item.qty}</Typography>
                                        </Stack>)
                                    }
                                    <Divider sx={{ bgcolor: "black", my: 5 }} />
                                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                                        <Typography sx={{ fontFamily: "poppins", fontWeight: 550, fontSize: 18, color: "black" }}>Total</Typography>
                                        <Typography sx={{ fontFamily: "poppins", fontWeight: 550, fontSize: 18, color: "black" }}>₹ {TotalAmount}</Typography>
                                    </Stack>
                                    {/* <Divider sx={{ bgcolor: "black", my: 2 }} /> */}

                                    <Stack direction={"row"} mt={1} justifyContent={"space-between"} alignItems={"center"} >
                                        <Typography sx={{ fontFamily: "poppins", fontWeight: 550, fontSize: 18, color: "black" }}>Payment Status</Typography>
                                        <Typography sx={{ fontFamily: "poppins", fontWeight: 550, fontSize: 18, color: "black" }}>{data.mode === "cod" && data.status !== "delivered" ? "Pending" : "Paid"}</Typography>
                                    </Stack>


                                </Box>




                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid sx={{}} xs={12} sm={6}   >
                        <Card >
                            <Box sx={{ p: 1, bgcolor: "hsla(234, 38%, 18%, 0.9)" }} >

                                <Stack gap={0.5} mr={2} direction={"row"} justifyContent={"space-between"} alignItems={"center"}  >

                                    <Stack alignItems={"center"} direction={"row"} >
                                        <RestaurantIcon sx={{ fontSize: "2rem", color: orange[400] }} />
                                        <Typography sx={{ color: orange[400], fontSize: 25, fontWeight: 600, fontFamily: "poppins" }}  >Restorant</Typography>
                                    </Stack>
                                    <CardMedia
                                        component="img"
                                        // height=""
                                        sx={{ height: { xs: 40 }, width: { xs: 40 }, animation: `${rotateAnimation} 10s linear infinite` }}
                                        image={hero}
                                        alt="Placeholder"
                                    />

                                </Stack>
                            </Box>
                            <CardContent>

                                <Stepper connector={<StepConnector style={{ height: 80, borderLeft: "1.4px solid black", borderRadius: 2 }} />} activeStep={
                                    data.status === "processing" ? 1 : data.status === "dispatched" ? 2 : data.status === "delivered" ? 3 : 1}
                                    variant='outlined' orientation='vertical'  >
                                    <Step sx={{}}   >
                                        <StepLabel StepIconProps={{ style: { color: "orangered" } }} style={{ color: "orangered" }}>Processing</StepLabel>
                                    </Step>
                                    <Step >
                                        <StepLabel
                                            StepIconProps={{
                                                style: { color: (data.status === "dispatched" || data.status === "delivered") ? "orangered" : "blue" }
                                            }} >Dispatched</StepLabel>
                                    </Step>
                                    <Step>
                                        <StepLabel StepIconProps={{ style: { color: data.status === "delivered" ? "orangered" : "blue" } }} >Delivered</StepLabel>
                                    </Step>
                                </Stepper>


                                <Box>
                                    {
                                        data.mode === "cod" && data.status !== "delivered" ? <Button onClick={e => { initiatePaymentTrigger({ amount: TotalAmount }) }} sx={{ mt: 2 }} variant='contained' color='warning' >Pay now</Button>
                                            : <Typography sx={{ color: "orangered", fontFamily: "poppins", fontWeight: 600, fontSize: 20, mt: 2, mb: 1 }} >Thanks for Buying</Typography>
                                    }

                                    <Typography sx={{ color: "black", fontFamily: "poppins", fontWeight: 600, fontSize: 14, mt: 2, mb: 1 }} >Contact Admin for fast delivery - <a href="tel:+9665879005">+91 9665879005</a>   </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>


                </Grid>

            </Box>



        </div >
    )
}

export default OrderStatus