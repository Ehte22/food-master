import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { blue, orange, yellow } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleLogin } from "@react-oauth/google"
import { useContinueWithGoogleMutation, useLoginUsersMutation } from '../redux/apis/authApi'
import { Form, Formik, useFormik } from 'formik'
import { printToast } from '../reusable/toast'

const Login = () => {

    const { user } = useSelector(state => state.auth)

    const [loginTrigger, { isSuccess, isError, error }] = useLoginUsersMutation()
    const [loginWithGoogleTrigger, { isSuccess: googleLoginSuccess }] = useContinueWithGoogleMutation()

    const navi = useNavigate();
    useEffect(() => {
        if (isSuccess || googleLoginSuccess) {
            navi("/");
        }
    }, [isSuccess, googleLoginSuccess]);


    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required().min(6)
        }),
        onSubmit: (values, { resetForm }) => {
            loginTrigger({ ...values, role: "user" })
            resetForm()
            console.log(values);
        }
    })

    useEffect(() => {
        if (isError) {
            printToast.showError(error.data.message)
        }
    }, [isError])



    return (
        <Box sx={{ height: "100vh", backgroundColor: "hsla(234, 38%, 18%, 0.9)" }} >

            <Box sx={{
                backgroundSize: "cover",
                // backgroundPosition: "100% 100%",
                height: "100vh",
                borderRadius: 2,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "100% 20%",
                backgroundImage: "url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600')",
                backgroundColor: "rgba(0, 0, 0, 0.4)" // Set the opacity to 0.4
            }}>
                <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)", height: "100%", width: "100%" }}>
                    <Grid container >
                        <Grid xs={12} md={6} mdOffset={3} >

                            <form onSubmit={formik.handleSubmit}>
                                <Box sx={{ flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>

                                    <Card sx={{ backgroundColor: "white", width: "60%", paddingX: 3, pt: 5, pb: 2 }} >
                                        <Typography sx={{ fontFamily: "poppins", fontSize: 25, fontWeight: 600, color: 'orangered', mb: 2, marginLeft: 2 }}>Login</Typography>
                                        <CardContent>
                                            <TextField
                                                {...formik.getFieldProps('email')}
                                                // onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
                                                fullWidth size='medium' sx={{ my: 1, }} error={formik.touched.email && (formik.errors.email)} name='email' label={"Email"} color='primary' />
                                            {
                                                (formik.touched.email && (formik.errors.email)) && <Typography sx={{ fontSize: 10, color: "red" }}>{formik.errors.email}</Typography>
                                            }
                                            <TextField
                                                {...formik.getFieldProps('password')}
                                                error={formik.touched.password && (formik.errors.password)}
                                                // onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
                                                fullWidth size='medium' sx={{ my: 1 }} type='password' name='password' label={"Password"} color='primary' />
                                            {
                                                (formik.touched.password && (formik.errors.password)) && <Typography sx={{ fontSize: 10, color: "red" }}>{formik.errors.password}</Typography>
                                            }
                                            <Box sx={{ textAlign: "end", mt: 3 }} >

                                                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: { xs: 4, sm: 0 }, justifyContent: "space-between" }}>

                                                    {/* Google login code 👇👇👇 */}

                                                    <GoogleLogin useOneTap onSuccess={({ credential }) => loginWithGoogleTrigger({ credential })}
                                                        onError={err => console.log(err)}
                                                    />
                                                    <Button type='submit' color='warning'
                                                        sx={{ fontWeight: 600 }} variant='contained' >Login</Button>
                                                </Box>
                                            </Box>
                                            <Box sx={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", gap: 0.6, mt: 1 }}>
                                                <Typography sx={{ color: "black", fontSize: 14 }} >Don't have an account?</Typography>
                                                <Typography sx={{ color: blue[700], fontWeight: 600, fontSize: 14, cursor: "pointer" }} ><Link to={"/register"}>Register</Link></Typography>

                                            </Box>
                                        </CardContent>
                                    </Card>

                                </Box>
                            </form>

                        </Grid>


                    </Grid>
                </Box>
            </Box>




        </Box >
    )
}

export default Login