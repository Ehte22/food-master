import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { blue, orange, yellow } from '@mui/material/colors'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterUsersMutation } from '../redux/apis/authApi'
import { useFormik } from 'formik'
import * as yup from 'yup'


const Register = () => {


    const [userData, setUserData] = useState({})

    const [registerTrigger, { isSuccess }] = useRegisterUsersMutation()

    const handleChange = (e) => {
        const { name, type, value, files } = e.target
        if (type === "file") {
            setUserData({ ...userData, [name]: files[0] })
        } else {
            setUserData({ ...userData, [name]: value })
        }
    }



    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            user: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            password: yup.string().required().min(6),
            user: yup.string().required()
        }),
        onSubmit: (values, { resetForm }) => {
            const fd = new FormData()
            fd.append("name", values.name)
            fd.append("email", values.email)
            fd.append("password", values.password)
            fd.append("user", values.user)
            registerTrigger(fd)
        }
    })

    const getErr = (arg) => {
        return (formik.touched[arg] && formik.errors[arg]) ? true : false
    }


    const navi = useNavigate()
    useEffect(() => {
        if (isSuccess) {

            navi("/")
        }
    }, [isSuccess])



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
                                    <Card sx={{ backgroundColor: "white", width: "60%", paddingX: 5, pt: 5, pb: 2 }} >
                                        <Typography sx={{ fontFamily: "poppins", fontSize: 25, fontWeight: 600, color: 'orangered', marginLeft: 2 }}>Register</Typography>
                                        <CardContent>

                                            <TextField error={getErr('name')} {...formik.getFieldProps('name')} fullWidth size='medium' sx={{ my: 1 }} name='name' label={"Name"} color='primary' />
                                            {getErr('name') && <Typography sx={{ fontSize: 10, color: "red" }}>{formik.errors.name}</Typography>}
                                            <TextField error={getErr('email')} {...formik.getFieldProps('email')} fullWidth size='medium' sx={{ my: 1 }} name='email' label={"Email"} color='primary' />
                                            {getErr('email') && <Typography sx={{ fontSize: 10, color: "red" }}>{formik.errors.email}</Typography>}
                                            <TextField type='password' error={getErr('password')} {...formik.getFieldProps('password')} fullWidth size='medium' sx={{ my: 1 }} name='password' label={"Password"} color='primary' />
                                            {getErr('password') && <Typography sx={{ fontSize: 10, color: "red" }}>{formik.errors.password}</Typography>}
                                            <Box sx={{ my: 1 }} >
                                                <TextField onChange={(e) => {
                                                    formik.setFieldValue('user', e.target.files[0])
                                                }} name='user' type='file' />
                                                {getErr('user') && <Typography sx={{ fontSize: 10, color: "red" }}>{formik.errors.user}</Typography>}
                                            </Box>
                                            <Box sx={{ textAlign: "end", mt: 3 }} >

                                                <Button type='submit' sx={{ bgcolor: "orange", fontWeight: 600 }} variant='contained' >Register</Button>
                                            </Box>

                                            <Box sx={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", gap: 0.5, mt: 1 }}>
                                                <Typography sx={{ color: "black", fontSize: 14 }} >Already have an account?</Typography>
                                                <Typography sx={{ color: blue[700], fontWeight: 600, fontSize: 14, cursor: "pointer" }} ><Link to={"/login"}>Login</Link></Typography>

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

export default Register