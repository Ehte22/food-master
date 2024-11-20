import React, { useState } from 'react'
import { AppBar, Box, CardMedia, Stack, Typography, keyframes, Divider, Drawer, Toolbar, List, ListItem, Tooltip, Button, IconButton, useMediaQuery, createTheme } from "@mui/material"
import { orange } from '@mui/material/colors'
import hero from '../img/hero.png'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Link, useLocation } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import SegmentIcon from '@mui/icons-material/Segment';
import { useLogOutUsersMutation } from '../redux/apis/authApi';


const AdminLayout = () => {

    const [open, setOpen] = useState(false)
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));



    return (
        <div>

            <Box sx={{ position: "fixed", zIndex: 999 }}>

                <AdminNavbar setOpen={setOpen} />
                <AdminDashboard setOpen={setOpen} open={open} />
            </Box>


        </div>
    )
}


const AdminDashboard = ({ setOpen, open }) => {

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

    const [logOutTrigger, { isSuccess }] = useLogOutUsersMutation()





    return <>


        <Drawer sx={{}} onClose={e => setOpen(false)} variant={isSmallScreen ? "temporary" : "permanent"} color='hsla(234, 38%, 18%, 1)' open={isSmallScreen ? open : true} >

            <Box sx={{ bgcolor: "hsla(234, 38%, 18%, 0.9)", height: "100%", width: "180px" }}>


                <Typography sx={{ mt: 1 }}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Box sx={{ display: "flex", alignContent: "center", }}>
                            <RestaurantIcon sx={{ color: orange[400], fontSize: 35, marginRight: "5px", cursor: "pointer" }} />
                            <Typography sx={{ fontWeight: "bold", color: orange[400], fontSize: 25, cursor: "pointer" }}>Restorant</Typography>
                        </Box>
                    </Link>
                </Typography>

                {/* components */}

                <Box sx={{ mt: 5 }} >

                    <List sx={{}}  >

                        <Tooltip title={"Dashboard"}> <ListItem sx={{ cursor: "pointer", fontWeight: "550", mb: 2, color: "white", fontFamily: "poppins" }}><Link style={{ textDecoration: "none", color: "white" }} to={"/admin"} >Dashboard</Link></ListItem></Tooltip>
                        <Tooltip title={"Orders"}> <ListItem sx={{ cursor: "pointer", fontWeight: "550", my: 2, color: "white", fontFamily: "poppins" }}><Link style={{ textDecoration: "none", color: "white" }} to={"/admin/orders"} >Orders</Link></ListItem></Tooltip>
                        <Tooltip title={"Dishes"}> <ListItem sx={{ cursor: "pointer", fontWeight: "550", my: 2, color: "white", fontFamily: "poppins" }}><Link style={{ textDecoration: "none", color: "white" }} to={"/admin/dishesh"} >Dishes</Link></ListItem></Tooltip>
                        <Tooltip title={"Users"}> <ListItem sx={{ cursor: "pointer", fontWeight: "550", my: 2, color: "white", fontFamily: "poppins" }}><Link style={{ textDecoration: "none", color: "white" }} to={"/admin/users"} >Users</Link></ListItem></Tooltip>
                        <Tooltip title={"History"}> <ListItem sx={{ cursor: "pointer", fontWeight: "550", my: 2, color: "white", fontFamily: "poppins" }}><Link style={{ textDecoration: "none", color: "white" }} to={"/admin/history"} >History</Link></ListItem></Tooltip>

                        <ListItem sx={{ mt: 5 }} >
                            <Button onClick={e => logOutTrigger()} color='inherit' variant='contained' size='small' > <LogoutIcon sx={{ fontSize: 20 }} /> Log out</Button>
                        </ListItem>
                    </List>


                </Box>

            </Box>

        </Drawer>


    </>

}





const AdminNavbar = ({ setOpen }) => {

    const rotateAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
    `;

    const { pathname } = useLocation()

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div style={{ marginBottom: 60, }}>

            <AppBar style={{ position: "fixed", }} sx={{ backgroundColor: 'hsla(234, 38%, 18%, 1)', px: { xs: 1, md: 2 }, py: { xs: 2, sm: 1 } }} color='warning'   >


                <Box sx={{ pl: { xs: 0, sm: "180px" } }}>
                    <Stack justifyContent={{ xs: "space-between", sm: "start" }} direction={"row"} alignItems={"center"} gap={{ xs: 0, md: 2.5 }} >
                        <IconButton color='inherit' onClick={e => setOpen(true)} sx={{ cursor: "pointer", display: { xs: "block", sm: "none" } }}>
                            <SegmentIcon />
                        </IconButton>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>

                            <Link to={"/admin"}>
                                <Stack gap={0.5} mr={2} direction={"row"} alignItems={"center"}  >
                                    <RestaurantIcon sx={{ fontSize: "2rem", color: orange[400] }} />
                                    <CardMedia
                                        component="img"
                                        // height=""
                                        sx={{ height: { xs: 40 }, width: { xs: 40 }, animation: `${rotateAnimation} 10s linear infinite` }}
                                        image={hero}
                                        alt="Placeholder"
                                    />
                                </Stack>
                            </Link>
                        </Box>
                        {
                            pathname === "/admin" ?
                                <Link onClick={handleClose} style={{ textDecoration: "none" }} to={"/admin"} ><Typography sx={{ color: orange[400], fontWeight: 600, fontFamily: "poppins" }} >Dashboard</Typography></Link>
                                : pathname === "/admin/dishesh" ?
                                    <Link onClick={handleClose} style={{ textDecoration: "none" }} to={"/admin/dishesh"} ><Typography sx={{ color: orange[400], fontWeight: 600, fontFamily: "poppins" }} >Dishes</Typography></Link>
                                    : pathname === "/admin/orders" ?
                                        <Link onClick={handleClose} style={{ textDecoration: "none" }} to={"/admin/dishesh"} ><Typography sx={{ color: orange[400], fontWeight: 600, fontFamily: "poppins" }} >Orders</Typography></Link>
                                        : pathname === "/admin/users" ?
                                            <Link onClick={handleClose} style={{ textDecoration: "none" }} to={"/admin/dishesh"} ><Typography sx={{ color: orange[400], fontWeight: 600, fontFamily: "poppins" }} >Users</Typography></Link>
                                            : pathname === "/admin/history" ?
                                                <Link onClick={handleClose} style={{ textDecoration: "none" }} to={"/admin/dishesh"} ><Typography sx={{ color: orange[400], fontWeight: 600, fontFamily: "poppins" }} >History</Typography></Link>
                                                : <></>
                        }

                    </Stack>

                </Box>


            </AppBar>


        </div >
    )
}



export default AdminLayout