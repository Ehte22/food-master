import { Box, Button, ButtonGroup, Card, CircularProgress, Divider, IconButton, Stack, Typography } from '@mui/material'
import { orange } from '@mui/material/colors'
import React, { useEffect } from 'react'
import bgimag from '../img/bg-hero.jpg'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import CancelIcon from '@mui/icons-material/Cancel';
import { useGetUsercartQuery, useUpdateUsercartMutation } from '../redux/apis/userApi'
import { json, useNavigate, useParams } from 'react-router-dom'
import { useUpdateDishMutation } from '../redux/apis/adminApi'



const Cart = () => {

    const { id } = useParams()

    const { data, isSuccess } = useGetUsercartQuery(id)
    const [updateCartTrigger, { isSuccess: updateSuccess }] = useUpdateUsercartMutation()


    const navi = useNavigate()
    console.log(data);
    useEffect(() => {
        if ((isSuccess && !data) || (updateSuccess && !data)) {
            navi("/")
        }
    }, [isSuccess, updateSuccess, data])




    let TotalAmount = 0

    data && data.dishes.map(item => TotalAmount += (item.price * item.qty))

    return !data ? <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
    </Box> : (
        <Box>

            <Box
                sx={{
                    backgroundImage: `linear-gradient(to right,hsla(234, 38%, 18%, 0.9), hsla(234, 38%, 18%, 0.9)), url('${bgimag}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '50vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white'
                }}
            >
                <Typography sx={{ fontSize: "3.5rem", fontWeight: "bold" }}>Cart</Typography>
                <Box sx={{ display: "flex", marginTop: 2 }}>
                    <Typography sx={{ color: orange[400], marginX: 1 }}>HOME / </Typography>
                    <Typography sx={{ color: orange[400], marginX: 1 }}>Cart </Typography>
                </Box>
            </Box>



            <Box sx={{ my: 4, p: 2 }}>


                <Card>

                    <Grid container >
                        <Grid xs={12} md={8} sx={{ p: 3, bgcolor: "hsla(234, 38%, 18%, 0.85)" }} >
                            <Box sx={{ mt: 2, p: 1 }} >
                                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}  >
                                    <Typography sx={{ color: "white", fontSize: 24, fontFamily: "poppins", fontWeight: 600 }} >Restorant card</Typography>
                                    <Typography sx={{ color: "white", fontSize: 16, fontFamily: "poppins", fontWeight: 600 }} >{data.dishes.length} item</Typography>
                                </Stack>

                                <Divider sx={{ bgcolor: "white", mt: 4, mb: 4 }} />

                                {
                                    data.dishes.map((item, index) => <Box sx={{ my: 4 }} >

                                        <Stack justifyContent={"space-between"} direction={{ xs: "row", sm: "row" }} alignItems={"center"}>
                                            <Stack gap={2} direction={"row"} alignItems={"center"} >
                                                <Box sx={{ display: { xs: "none", sm: "block" } }} >
                                                    <img src={`${import.meta.env.VITE_URL}/${item.hero}`} height={70} width={60} alt="" />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontFamily: "poppins", fontSize: 19, fontWeight: 600, color: "white" }}>{item.name}</Typography>
                                                    <Typography sx={{ fontFamily: "poppins", fontSize: 14, fontWeight: 600, color: 'orangered' }}>{item.class}</Typography>
                                                </Box>
                                            </Stack>
                                            <ButtonGroup variant='outlined' >

                                                <Button onClick={e => {
                                                    let copy = JSON.parse(JSON.stringify(data.dishes))
                                                    copy[index].qty === 1 ? 1 : copy[index].qty -= 1
                                                    updateCartTrigger({ _id: data._id, dishes: copy, qty: true })
                                                }
                                                } color='warning' variant='outlined' size='small' >-1</Button>
                                                <Button color='warning' variant='outlined' >{item.qty}</Button>
                                                <Button onClick={e => {
                                                    let copy = JSON.parse(JSON.stringify(data.dishes))
                                                    copy[index].qty === 3 ? 3 : copy[index].qty += 1
                                                    updateCartTrigger({ _id: data._id, dishes: copy, qty: true })
                                                }
                                                } color='warning' variant='outlined' size='small'>+1</Button>
                                            </ButtonGroup>

                                            <Stack gap={2} direction={"row"} alignItems={"center"} >
                                                <Typography sx={{ fontFamily: "poppins", fontSize: 14, fontWeight: 600, color: 'orange' }}>{item.price}</Typography>
                                                <IconButton onClick={e => updateCartTrigger({ _id: data._id, dishes: data.dishes.filter(c => c.name !== item.name) })} color='error' ><CancelIcon /></IconButton>
                                            </Stack>

                                        </Stack>

                                        {/* <Divider sx={{ bgcolor: "white", mt: 2, mb: 2 }} /> */}
                                    </Box>)
                                }


                            </Box>
                        </Grid>
                        <Grid xs={12} md={4} sx={{ p: 3, bgcolor: orange[300] }}>

                            <Box sx={{ mt: 3 }} >
                                <Typography sx={{ color: "hsla(234, 38%, 18%, 0.85)", fontSize: 27, fontFamily: "poppins", fontWeight: 700 }} >Review your order</Typography>
                                <Box sx={{ mt: 6 }}>
                                    {
                                        data.dishes.map(item => <Stack my={2} direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                                            <Typography sx={{ fontFamily: "poppins", fontWeight: 550, fontSize: 18, color: "black" }}>{item.name}({item.qty})</Typography>
                                            <Typography sx={{ fontFamily: "poppins", fontWeight: 550, fontSize: 18, color: "black" }}>₹{item.price * item.qty}</Typography>
                                        </Stack>)
                                    }
                                    <Divider sx={{ bgcolor: "black", my: 5 }} />
                                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                                        <Typography sx={{ fontFamily: "poppins", fontWeight: 550, fontSize: 18, color: "black" }}>Items {data.dishes.length}</Typography>
                                        <Typography sx={{ fontFamily: "poppins", fontWeight: 550, fontSize: 18, color: "black" }}>₹ {TotalAmount}</Typography>
                                    </Stack>
                                    <Box sx={{ mt: 10 }}>

                                        <Button onClick={e => navi(`/paymentAddress/${id}`)} fullWidth variant='contained' color='inherit' >Proceed to pay </Button>
                                    </Box>

                                </Box>
                            </Box>


                        </Grid>

                    </Grid>

                </Card>

            </Box>



        </Box >
    )
}

export default Cart