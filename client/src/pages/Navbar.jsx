import { Alert, AppBar, Avatar, Box, Button, Fade, FormControl, Grid, IconButton, InputLabel, Menu, MenuItem, Select, Snackbar, Stack, Toolbar, Tooltip, Typography } from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react'
import { indigo, orange } from '@mui/material/colors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VerticalAlignTopOutlinedIcon from '@mui/icons-material/VerticalAlignTopOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLogOutUsersMutation } from '../redux/apis/authApi';

const Navbar = () => {
    const { user } = useSelector(state => state.auth)
    const [menulist, setMenulist] = useState()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [outMenu, setOutMenu] = useState({})
    const [outToast, setOutToast] = useState(false)
    const [logOutTrigger, { isSuccess }] = useLogOutUsersMutation()


    const open = Boolean(anchorEl);
    const navi = useNavigate()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Adds smooth scrolling animation
        });
    };

    const handleSNACKClose = () => {
        setOutToast(false)
    }

    useEffect(() => {
        if (isSuccess) {
            setOutToast(true)
        }
    }, [isSuccess])

    return <Box>

        <Snackbar autoHideDuration={4000} onClose={handleSNACKClose} sx={{ backgroundColor: "red", color: "blue" }} anchorOrigin={{
            vertical: "bottom", horizontal: "right"
        }} open={outToast}>
            <Alert onClose={handleSNACKClose} variant='filled' severity='success' color='error' sx={{ width: "100%" }}  >
                Logout Success
            </Alert>
        </Snackbar>

        <AppBar position="fixed" sx={{ backgroundColor: 'hsla(234, 38%, 18%, 0.8)', margin: 0 }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", marginY: "1vh" }}>
                <Typography variant="h6" sx={{}}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Box sx={{ display: "flex", alignContent: "center" }}>
                            <RestaurantIcon sx={{ color: orange[400], fontSize: "3rem", marginRight: "5px", cursor: "pointer" }} />
                            <Typography sx={{ fontWeight: "bold", color: orange[400], fontSize: "2rem", cursor: "pointer" }}>Restorant</Typography>
                        </Box>
                    </Link>
                </Typography>

                <IconButton onClick={e => (setMenulist(!menulist))}>
                    <MenuIcon sx={{ display: { md: "none" }, color: "gray", padding: "5px 10px", borderRadius: 1, border: '5px solid gray', }} />
                </IconButton>
                <Box sx={{ alignItems: "center", display: { lg: "flex", md: "flex", xs: 'none' } }}>
                    <Link to="/" style={{ color: "white", textDecoration: "none", }}><Typography sx={{ marginLeft: 3, fontSize: "0.85rem", fontWeight: "bold", cursor: "pointer", '&:hover': { color: orange[400] } }}>HOME</Typography></Link>
                    <Link to="/about" style={{ color: "white", textDecoration: "none", }}><Typography sx={{ marginLeft: 3, fontSize: "0.85rem", fontWeight: "bold", cursor: "pointer", '&:hover': { color: orange[400] } }}>ABOUT</Typography></Link>
                    <Link to="/services" style={{ color: "white", textDecoration: "none", }}><Typography sx={{ marginLeft: 3, fontSize: "0.85rem", fontWeight: "bold", cursor: "pointer", '&:hover': { color: orange[400] } }}>SERVICE</Typography></Link>
                    <Link to="/menu" style={{ color: "white", textDecoration: "none", }}><Typography sx={{ marginLeft: 3, fontSize: "0.85rem", fontWeight: "bold", cursor: "pointer", '&:hover': { color: orange[400] } }}>MENU</Typography></Link>
                    <Box >
                        <Button
                            sx={{ marginLeft: 3, fontSize: "0.85rem", fontWeight: "bold", color: "white", '&:hover': { color: orange[400] } }}
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"

                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            PAGES <KeyboardArrowDownIcon />
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <Link to="/booking" style={{ color: "gray", textDecoration: "none" }}><MenuItem sx={{ ":hover": { backgroundColor: orange[400], color: "white" } }}>Booking</MenuItem></Link>
                            <Link to="/ourteam" style={{ color: "gray", textDecoration: "none" }}><MenuItem sx={{ ":hover": { backgroundColor: orange[400], color: "white" } }}>Our Team</MenuItem></Link>
                            <Link to="/testimonial" style={{ color: "gray", textDecoration: "none" }}><MenuItem sx={{ ":hover": { backgroundColor: orange[400], color: "white" } }}>Testimonial</MenuItem></Link>
                        </Menu>
                    </Box>
                    <Link to="/contact" style={{ color: "white", textDecoration: "none" }}> <Typography sx={{ marginLeft: 3, fontSize: "0.85rem", fontWeight: "bold", cursor: "pointer", '&:hover': { color: orange[400] } }}>CONTACT</Typography></Link>
                    {
                        user && user.user && <Box sx={{ ml: 2 }}>
                            <Tooltip
                                aria-controls={outMenu ? 'demo-positioned-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={e => setOutMenu({ open: true, anchorEl: e.currentTarget })} id='log-button' title={`Hello ${user.name}`}  >
                                <Avatar src={user.user.length < 50 ? `${import.meta.env.VITE_URL}/${user.user}` : user.user} />
                            </Tooltip>
                            <Menu
                                onClose={e => setOutMenu({})}
                                anchorEl={outMenu.anchorEl}
                                id='logout' open={outMenu.open}
                                sx={{}}
                            >
                                <Button onClick={e => logOutTrigger()} variant='text' color='warning' >Log out</Button>
                            </Menu>
                        </Box>
                    }
                    {
                        user ? <Link to={"/menu"} ><Button sx={{ marginLeft: 3, backgroundColor: orange[400], "&:hover": { backgroundColor: orange[600] }, color: "white", padding: "10px 1.7vw" }}>BOOK A TABLE</Button></Link>
                            : <Link style={{ textDecoration: "none", color: "white", fontWeight: 600 }} to="/login"><Button sx={{ marginLeft: 3, backgroundColor: orange[400], "&:hover": { backgroundColor: orange[600] }, color: "white", padding: "10px 1.7vw" }}>Login</Button></Link>
                    }
                </Box>
            </Toolbar>
            {/* small screen components */}
            {
                menulist && <Box sx={{ display: { md: "none" } }}> <hr />
                    <Stack direction={"row"} sx={{ pr: 2, py: (user && user.user) ? 0 : 2 }} alignItems={"center"} justifyContent={"space-between"} >

                        <Link to="/" style={{ textDecoration: "none", color: "white" }}><Typography sx={{ margin: "0 3rem -15px  3rem", fontSize: "1rem", fontWeight: "bold", }}>HOME</Typography></Link>
                        {
                            user && user.user && <Box sx={{ ml: 2, }}>
                                <Tooltip
                                    aria-controls={outMenu ? 'demo-positioned-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={e => setOutMenu({ open: true, anchorEl: e.currentTarget })} id='log-button' title={`Hello ${user.name}`}  >
                                    <Avatar src={user.user.length < 50 ? `${import.meta.env.VITE_URL}/${user.user}` : user.user} />
                                </Tooltip>
                                <Menu
                                    onClose={e => setOutMenu({})}
                                    anchorEl={outMenu.anchorEl}
                                    id='logout' open={outMenu.open}
                                    sx={{}}
                                >
                                    <Button onClick={e => logOutTrigger()} variant='text' color='warning' >Log out</Button>
                                </Menu>
                            </Box>
                        }
                    </Stack>

                    <Link to="/about" style={{ textDecoration: "none", color: "white" }}><Typography sx={{ margin: "1rem 3rem", fontSize: "1rem", fontWeight: "bold", }}>ABOUT</Typography></Link>
                    <Link to="/services" style={{ textDecoration: "none", color: "white" }}><Typography sx={{ margin: "1rem 3rem", fontSize: "1rem", fontWeight: "bold", }}>SERVICE</Typography></Link>
                    <Link to="/menu" style={{ textDecoration: "none", color: "white" }}><Typography sx={{ margin: "1rem 3rem", fontSize: "1rem", fontWeight: "bold", }}>MENU</Typography></Link>
                    <Box >
                        <Button
                            sx={{ margin: "-0.5rem 2.5rem", fontSize: "1rem", fontWeight: "bold", color: "white", '&:hover': { color: orange[400] } }}
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"

                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            PAGES <KeyboardArrowDownIcon />
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <Link to="/booking" style={{ color: "gray", textDecoration: "none" }}><MenuItem sx={{ ":hover": { backgroundColor: orange[400], color: "white" } }}>Booking</MenuItem></Link>
                            <Link to="/ourteam" style={{ color: "gray", textDecoration: "none" }}><MenuItem sx={{ ":hover": { backgroundColor: orange[400], color: "white" } }}>Our Team</MenuItem></Link>
                            <Link to="/testimonial" style={{ color: "gray", textDecoration: "none" }}><MenuItem sx={{ ":hover": { backgroundColor: orange[400], color: "white" } }}>Testimonial</MenuItem></Link>
                        </Menu>
                    </Box>

                    <Link to="/contact" style={{ textDecoration: "none", color: "white" }}><Typography sx={{ margin: "1rem 3rem", fontSize: "1rem", fontWeight: "bold", }}>CONTACT</Typography></Link>

                    {
                        user ? <Link to={"/menu"} ><Button onClick={e => navi("/menu")} sx={{ margin: "0.4rem 1rem", backgroundColor: orange[400], "&:hover": { backgroundColor: orange[600] }, color: "white", padding: "10px 3vw" }}>BOOK A TABLE</Button></Link>
                            : <Button sx={{ margin: "0.4rem 2.8rem", backgroundColor: orange[400], "&:hover": { backgroundColor: orange[600] }, color: "white", padding: "10px 3vw" }}><Link style={{ textDecoration: "none", color: "white", fontWeight: 600 }} to="/login">Login</Link></Button>
                    }
                </Box>
            }
        </AppBar >

        {/* fix button */}
        <Button onClick={handleScrollToTop} variant='contained' sx={{ position: "fixed", right: 0, marginRight: 3, bottom: 50, paddingY: 1, backgroundColor: orange[400], zIndex: 2, '&:hover': { backgroundColor: orange[400] } }

        }>
            <VerticalAlignTopOutlinedIcon />
        </Button >
        {/* fix button */}
    </Box>
}

export default Navbar