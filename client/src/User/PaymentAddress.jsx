import React, { useEffect, useState } from 'react'
import { useAddUserAddressMutation, useGetUserAddressQuery, useGetUsercartQuery, useInitiatePaymentMutation, usePayMoneyMutation, usePlaceOrderMutation } from '../redux/apis/userApi'
import { Box, Button, Card, CardContent, Divider, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import bgimag from '../img/bg-hero.jpg'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useFormik } from "formik"
import CheckIcon from '@mui/icons-material/Check';
import * as yup from "yup"

import { orange } from '@mui/material/colors'

const PaymentAddress = () => {

    const { id } = useParams()
    const [selectedAddress, setselectedAddress] = useState()
    const { data } = useGetUsercartQuery(id)
    const { data: addressData } = useGetUserAddressQuery()
    const [addAddressTrigger, { }] = useAddUserAddressMutation()
    const navi = useNavigate()
    const [placeOrderTrigger, { data: orderIdData, isSuccess }] = usePlaceOrderMutation()
    const [initiatePaymenttrigger, { isSuccess: initiateSuccess, data: initiateId }] = useInitiatePaymentMutation()
    const [payMoneyTrigger, { isSuccess: moneyPaidSuccess, data: paidMoneyData }] = usePayMoneyMutation()





    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            mobile: "",
            address: "",
            city: "",
            pcode: "",
            lmark: selectedAddress && selectedAddress.lmark || "",
        },
        validationSchema: yup.object({
            fname: yup.string().required(),
            lname: yup.string().required(),
            email: yup.string().required().email(),
            mobile: yup.number().required(),
            address: yup.string().required(),
            city: yup.string().required(),
            pcode: yup.string().required(),
            lmark: yup.string().required(),

        }),
        onSubmit: (values, { resetForm }) => {
            // addAddressTrigger(values)
            setselectedAddress({ ...selectedAddress, complete: true })
        }
    })


    const handleSubmit = (arg) => {
        if (selectedAddress && selectedAddress.complete && arg === "cod") {
            placeOrderTrigger({ cartId: data._id, address: formik.values })
        } else if (selectedAddress && selectedAddress.complete && arg === "pay") {
            initiatePaymenttrigger({ amount: TotalAmount })
        }
    }


    console.log(paidMoneyData);
    useEffect(() => {
        if (selectedAddress) {
            formik.setValues({
                fname: selectedAddress && selectedAddress.fname ? selectedAddress.fname : formik.values.fname,
                lname: selectedAddress && selectedAddress.lname ? selectedAddress.lname : formik.values.lname,
                email: selectedAddress && selectedAddress.email ? selectedAddress.email : formik.values.email,
                mobile: selectedAddress && selectedAddress.mobile ? selectedAddress.mobile : formik.values.mobile,
                address: selectedAddress && selectedAddress.address ? selectedAddress.address : formik.values.address,
                city: selectedAddress && selectedAddress.city ? selectedAddress.city : formik.values.city,
                pcode: selectedAddress && selectedAddress.pcode ? selectedAddress.pcode : formik.values.pcode,
                lmark: selectedAddress && selectedAddress.lmark ? selectedAddress.lmark : formik.values.lmark,
            });
        };
    }, [selectedAddress]);


    useEffect(() => {
        if (initiateSuccess) {
            const razor = window.Razorpay({
                key: import.meta.env.VITE_RAZORPAY_API_KEY,
                amount: TotalAmount * 100,
                currency: "INR",
                order_id: initiateId.id,
                prefill: {
                    contact: "9898989898"
                },
                handler: response => {
                    payMoneyTrigger({ ...response, cartId: data._id, address: formik.values })
                }
            })
            razor.open()
        }

    }, [initiateSuccess])

    useEffect(() => {
        if (isSuccess || moneyPaidSuccess) {
            if (orderIdData) {
                navi(`/orderSuccess/${orderIdData.id}`)
            } else if (paidMoneyData) {
                navi(`/orderSuccess/${paidMoneyData.id}`)
            }
        }
    }, [isSuccess, moneyPaidSuccess]);

    let TotalAmount = 0

    data && data.dishes.map(item => TotalAmount += (item.price * item.qty))

    return !data ? <>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh" }}>
            <Typography sx={{ fontFamily: "poppins", fontSize: 40, fontWeight: 600 }}>No record found</Typography>
            <Box>
                <Button variant='contained' color='warning' sx={{ mt: 2 }} onClick={e => navi("/")} >Book your table</Button>
            </Box>
        </Box>
    </>
        : <Box>

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
                <Typography sx={{ fontSize: "3.5rem", fontWeight: "bold" }}>Paymet</Typography>
                <Box sx={{ display: "flex", marginTop: 2 }}>
                    <Typography sx={{ color: orange[400], marginX: 1 }}>HOME / </Typography>
                    <Typography sx={{ color: orange[400], marginX: 1 }}>Payment </Typography>
                </Box>
            </Box>


            <Box sx={{ p: { md: 10, xs: 2 } }} >
                <form onSubmit={formik.handleSubmit} >

                    <Grid container >
                        <Grid xs={12} md={8} lgOffset={2} xsOffset={0} >

                            <Card>
                                <CardContent>
                                    <Stack direction={"row"} mb={2} justifyContent={"space-between"} alignItems={"center"}>
                                        <Typography sx={{ my: 2, fontSize: 20, fontWeight: 600 }} >Billing address</Typography>
                                        <FormControl sx={{ width: "30%" }} size='small' >
                                            <InputLabel size='small' id="demo-simple-select-label">Select Address</InputLabel>
                                            <Select
                                                disabled={selectedAddress && selectedAddress.complete ? true : false}
                                                onChange={e => setselectedAddress(e.target.value)}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={age}
                                                label="Age"
                                            >
                                                <MenuItem value={{ fname: "", lname: "" }} selected >Select Address</MenuItem>
                                                {
                                                    addressData && addressData.map(item => <MenuItem sx={{ fontWeight: 500 }} value={item}>
                                                        {item.pcode}, {item.address}, {item.city}
                                                    </MenuItem>
                                                    )
                                                }
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                    <Stack justifyContent={"center"} gap={2} >

                                        <Stack gap={2} direction={{ sm: "row", xs: "column" }} >
                                            <TextField disabled={selectedAddress && selectedAddress.complete ? true : false} name='fname' {...formik.getFieldProps("fname")} fullWidth label={selectedAddress && selectedAddress.complete ? "" : "First Name"} size='small' />
                                            <TextField disabled={selectedAddress && selectedAddress.complete ? true : false} name='lname' {...formik.getFieldProps("lname")} fullWidth label={selectedAddress && selectedAddress.complete ? "" : "Last Name"} size='small' />
                                        </Stack>
                                        <Stack gap={2} direction={{ sm: "row", xs: "column" }} >
                                            <TextField disabled={selectedAddress && selectedAddress.complete ? true : false} name='email' {...formik.getFieldProps("email")} fullWidth label={selectedAddress && selectedAddress.complete ? "" : "Email address"} size='small' />
                                            <TextField disabled={selectedAddress && selectedAddress.complete ? true : false} name='mobile' {...formik.getFieldProps("mobile")} fullWidth label={selectedAddress && selectedAddress.complete ? "" : "Phone no."} size='small' />
                                        </Stack>
                                        <TextField disabled={selectedAddress && selectedAddress.complete ? true : false} name='address' {...formik.getFieldProps("address")} fullWidth sx={{ mt: 2 }} label={selectedAddress && selectedAddress.complete ? "" : "Address"} size='small' />

                                        <Stack gap={2} direction={{ sm: "row", xs: "column" }} >
                                            <TextField disabled={selectedAddress && selectedAddress.complete ? true : false} name='city' {...formik.getFieldProps("city")} fullWidth label={selectedAddress && selectedAddress.complete ? "" : "City"} size='small' />
                                            <TextField disabled={selectedAddress && selectedAddress.complete ? true : false} name='pcode' {...formik.getFieldProps("pcode")} fullWidth label={selectedAddress && selectedAddress.complete ? "" : "Postal code"} size='small' />
                                        </Stack>
                                        <Stack gap={2} justifyContent={"space-between"} alignItems={{ sm: "center" }} direction={{ sm: "row", xs: "column" }} >

                                            <TextField disabled={selectedAddress && selectedAddress.complete ? true : false} name='lmark' {...formik.getFieldProps("lmark")} sx={{ width: { xs: "100%", sm: "49%" } }} label={selectedAddress && selectedAddress.complete ? "" : "Landmark"} size='small' />

                                            <Stack gap={2} direction={"row"} >
                                                {
                                                    formik.touched.fname && !selectedAddress && Object.keys(formik.values).length === 8 && Object.keys(formik.errors).length === 0 &&
                                                    <Button onClick={e => addAddressTrigger(formik.values)} type='submit' variant='contained' color='inherit'>Save address</Button>}
                                                <Button disabled={selectedAddress && selectedAddress.complete} type='submit' variant='contained' color='warning' > {selectedAddress && selectedAddress.complete && <CheckIcon color='warning' sx={{ zIndex: 10000, fontSize: 30 }} />} {selectedAddress && selectedAddress.complete ? "Completed" : "Complete"}</Button>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>

                            <Card sx={{ mt: 3 }} >
                                <CardContent>

                                    <Grid container spacing={1} >
                                        <Grid md={6} xs={12} justifyContent={"center"} alignItems={"center"} >
                                            <Card  >
                                                <CardContent  >
                                                    <Box sx={{}}>
                                                        {
                                                            data.dishes.map((item, i) => <Box>
                                                                <img style={i % 2 !== 0 ? { borderRadius: 8, marginLeft: 100 } : { borderRadius: 8 }} src={item.hero} width={100} height={100} alt="" />
                                                            </Box>)
                                                        }
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid md={6} xs={12} >
                                            <Card>
                                                <CardContent>

                                                    <Box sx={{ pt: 2 }}>
                                                        {
                                                            data.dishes.map(item => <Stack my={2} direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                                                                <Typography sx={{ fontFamily: "poppins", fontWeight: 550, fontSize: 18, color: "black" }}>{item.name}({item.qty})</Typography>
                                                                <Typography sx={{ fontFamily: "poppins", fontWeight: 550, fontSize: 18, color: "black" }}>₹{item.price * item.qty}</Typography>
                                                            </Stack>)
                                                        }
                                                        <Divider sx={{ bgcolor: "black", my: 5 }} />
                                                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                                                            <Typography sx={{ fontFamily: "poppins", fontWeight: 550, fontSize: 18, color: "black" }}>Total </Typography>
                                                            <Typography sx={{ fontFamily: "poppins", fontWeight: 550, fontSize: 18, color: "black" }}>₹ {TotalAmount}</Typography>
                                                        </Stack>
                                                        <Box sx={{}}>

                                                            <Button sx={{ my: 3 }} onClick={e => handleSubmit("cod")} fullWidth variant='contained' color='warning' >Cash on Delivery </Button>
                                                            <Button onClick={e => handleSubmit("pay")} fullWidth variant='contained' color='inherit' >Proceed to pay </Button>
                                                        </Box>

                                                    </Box>

                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>

                                </CardContent>
                            </Card>


                        </Grid>


                    </Grid>
                </form>


            </Box>





        </Box >


}

export default PaymentAddress