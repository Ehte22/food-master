import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const OrderSuccess = () => {

    const [show, setshow] = useState(false)

    const { id } = useParams()


    useEffect(() => {
        setTimeout(() => {
            setshow(true)
        }, 2000)
    }, [])



    return !show ? <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} >
        <CircularProgress />
    </Box>
        : (
            <div>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 3, justifyContent: "center", alignItems: "center", height: "100vh" }} >

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }} >
                        <CheckCircleIcon color='warning' sx={{ fontSize: 30 }} />
                        <Typography> Order success </Typography>
                    </Box>

                    <Link to={`/orderStatus/${id}`} style={{ textDecoration: "none", color: "black" }} >  <Button variant='outlined' color='inherit' sx={{ ml: 1 }}  >Check status</Button></Link>
                </Box>



            </div>
        )
}

export default OrderSuccess