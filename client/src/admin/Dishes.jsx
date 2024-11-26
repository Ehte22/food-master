import { Alert, Badge, Box, Button, Card, CardContent, CardMedia, Chip, FormControl, IconButton, InputLabel, MenuItem, Modal, NativeSelect, Select, Snackbar, Stack, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { orange } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import bgimag from '../img/bg-hero.jpg'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from '@emotion/styled';
import { useAddDishMutation, useDeleteDishMutation, useGetAllDishesQuery, useUpdateDishMutation } from '../redux/apis/adminApi';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const Dishes = () => {


    const [addModal, setaddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [dishData, setDishData] = useState({})
    const [addToast, setAddToast] = useState(false)
    const [selectedDish, setSelectedDish] = useState({})

    // dish triggers
    const [dishAddTrigger, { isSuccess }] = useAddDishMutation()
    const [dishDeleteTrigger, { isSuccess: DeleteSuccess }] = useDeleteDishMutation()
    const [dishUpdateTrigger, { }] = useUpdateDishMutation()
    const { data } = useGetAllDishesQuery()

    const handleAddModalClose = () => {
        setaddModal(false)
    }
    const handleEditModalClose = () => {
        setEditModal(false)
    }

    const handleAddToastClose = () => {
        setAddToast(false)
    }

    const handleUpdateDish = () => {
        if (selectedDish.newImg) {
            const fd = new FormData()
            fd.append("name", selectedDish.name)
            fd.append("desc", selectedDish.desc)
            fd.append("price", selectedDish.price)
            fd.append("class", selectedDish.class)
            fd.append("hero", selectedDish.newImg)
            dishUpdateTrigger({ _id: selectedDish._id, data: fd })
        } else {
            dishUpdateTrigger({ _id: selectedDish._id, data: selectedDish })
        }

    }


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: 380,
        height: "auto",
        backgroundImage: `linear-gradient(to right,hsla(234, 38%, 18%, 1), hsla(234, 38%, 18%, 1)), url('${bgimag}')`,
        boxShadow: 2,
        pt: 3,
        borderRadius: 3,
        px: 3,
        // pb: 1,
    };


    useEffect(() => {
        if (isSuccess) {
            setAddToast(true)
        }
    }, [isSuccess])
    console.log(selectedDish);
    return (
        <div>

            <Box sx={{ pl: { xs: 0, sm: "180px" }, mt: 10 }}>

                <Grid container justifyContent={{ xs: "center", sm: "normal" }} alignItems={"center"} >

                    <Grid xs={12}  >

                        <Box sx={{
                            width: { sm: "13%" },
                            backgroundImage: `linear-gradient(to right,hsla(234, 38%, 18%, 0.916), hsla(234, 38%, 18%, 0.9)), url('${bgimag}')`,
                            mx: 3, borderRadius: 2, backgroundSize: "100% 100%", display: "flex", justifyContent: "center", alignItems: "center", height: 70, px: 10, py: 10, pl: 11
                        }} >
                            <Box sx={{ position: "relative", zIndex: 0 }}>
                                <svg style={{}} width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.5417 17.6667C41.4744 17.6608 45.3193 18.8297 48.5833 21.0233V8.83333C48.5833 6.49059 47.6527 4.24379 45.9961 2.58722C44.3395 0.930652 42.0927 0 39.75 0L8.83333 0C6.49059 0 4.24379 0.930652 2.58722 2.58722C0.930652 4.24379 0 6.49059 0 8.83333L0 39.75C0 42.0927 0.930652 44.3395 2.58722 45.9961C4.24379 47.6527 6.49059 48.5833 8.83333 48.5833H21.0233C19.0242 45.5913 17.8749 42.1126 17.698 38.5185C17.5211 34.9243 18.3234 31.3496 20.0192 28.1757C21.7149 25.0019 24.2405 22.3479 27.3266 20.4971C30.4126 18.6463 33.9432 17.668 37.5417 17.6667Z" fill="white" />
                                </svg>
                                <IconButton onClick={e => setaddModal(true)} sx={{
                                    position: "absolute",
                                    bottom: -5, right: -9, zIndex: 1
                                }}>
                                    <AddCircleIcon sx={{ zIndex: 2, ml: 0.33, mt: 0.01, cursor: "pointer", color: "white", fontSize: 28, }} />
                                </IconButton>


                            </Box>
                        </Box>

                    </Grid>
                </Grid>


                <Box>
                    {/* Modls start */}
                    {/* add modal code start */}
                    <Modal open={addModal} onClose={handleAddModalClose}   >

                        <Box sx={style}>
                            <Typography sx={{ color: orange[400], fontSize: 26, fontFamily: "poppins", fontWeight: 700 }}>Add Dish</Typography>
                            <TextField onChange={e => setDishData({ ...dishData, name: e.target.value })} placeholder='Enter name here' fullWidth size='small' variant='outlined' sx={{ mt: 2.5 }} inputProps={{
                                style: {
                                    border: "2px solid orange",
                                    borderRadius: 4,
                                    color: "white",
                                    fontFamily: "poppins"
                                }
                            }} color={'warning'} />
                            <TextField onChange={e => setDishData({ ...dishData, desc: e.target.value })} placeholder='Enter desc here' fullWidth size='small' variant='outlined' sx={{ mt: 2.5 }} inputProps={{
                                style: {
                                    border: "2px solid orange",
                                    borderRadius: 4,
                                    color: "white",
                                    fontFamily: "poppins"
                                }
                            }} color={'warning'} />
                            <TextField onChange={e => setDishData({ ...dishData, price: e.target.value })} placeholder='Enter price here' fullWidth size='small' variant='outlined' sx={{ mt: 2.5 }} inputProps={{
                                style: {
                                    border: "2px solid orange",
                                    borderRadius: 4,
                                    color: "white",
                                    fontFamily: "poppins"
                                }
                            }} color={'warning'} />
                            <FormControl size='medium' sx={{ mt: 0.5 }} color='warning' fullWidth>
                                <InputLabel variant="filled" htmlFor="uncontrolled-native">
                                    Class
                                </InputLabel>
                                <NativeSelect
                                    onChange={e => setDishData({ ...dishData, class: e.target.value })}
                                    defaultValue={30}
                                    inputProps={{
                                        name: 'type',
                                        id: 'uncontrolled-native',
                                        style: {
                                            color: "white",
                                            backgroundColor: "black"
                                        }
                                    }

                                    }
                                >
                                    <option value={"veg"} selected style={{ backgroundClip: "black", color: "black" }} >Choose class</option>
                                    <option style={{ backgroundClip: "black", color: "black" }} value={"veg"}>veg</option>
                                    <option style={{ backgroundClip: "black", color: "black" }} value={"non-veg"}>non-veg</option>
                                </NativeSelect>
                            </FormControl>

                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                color='warning'
                                sx={{ mt: 2 }}
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload file
                                <VisuallyHiddenInput onChange={e => setDishData({ ...dishData, hero: e.target.files[0] })} type="file" />
                            </Button>
                            <Box sx={{ textAlign: "end", my: 2, mb: 3 }}>
                                <Button onClick={e => {
                                    const fd = new FormData()
                                    fd.append("name", dishData.name)
                                    fd.append("desc", dishData.desc)
                                    fd.append("price", dishData.price)
                                    fd.append("class", dishData.class)
                                    fd.append("hero", dishData.hero)
                                    dishAddTrigger(fd)
                                    handleAddModalClose()
                                }} variant='contained' color='inherit' >Add Dish</Button>
                            </Box>

                        </Box>
                    </Modal>


                    {/* add modal code end */}


                    {/* edit modal start */}
                    <Modal open={editModal} onClose={handleEditModalClose}   >

                        <Box sx={style}>
                            <Typography sx={{ color: orange[400], fontSize: 26, fontFamily: "poppins", fontWeight: 700 }}>Update Dish</Typography>
                            <TextField value={selectedDish.name} onChange={e => setSelectedDish({ ...selectedDish, name: e.target.value })} placeholder='Enter name here' fullWidth size='small' variant='outlined' sx={{ mt: 2.5 }} inputProps={{
                                style: {
                                    border: "2px solid orange",
                                    borderRadius: 4,
                                    color: "white",
                                    fontFamily: "poppins"
                                }
                            }} color={'warning'} />
                            <TextField value={selectedDish.desc} onChange={e => setSelectedDish({ ...selectedDish, desc: e.target.value })} placeholder='Enter desc here' fullWidth size='small' variant='outlined' sx={{ mt: 2.5 }} inputProps={{
                                style: {
                                    border: "2px solid orange",
                                    borderRadius: 4,
                                    color: "white",
                                    fontFamily: "poppins"
                                }
                            }} color={'warning'} />
                            <TextField value={selectedDish.price} onChange={e => setSelectedDish({ ...selectedDish, price: e.target.value })} placeholder='Enter price here' fullWidth size='small' variant='outlined' sx={{ mt: 2.5 }} inputProps={{
                                style: {
                                    border: "2px solid orange",
                                    borderRadius: 4,
                                    color: "white",
                                    fontFamily: "poppins"
                                }
                            }} color={'warning'} />
                            <FormControl size='medium' sx={{ mt: 0.5 }} color='warning' fullWidth>
                                <InputLabel variant="filled" htmlFor="uncontrolled-native">
                                    Class
                                </InputLabel>
                                <NativeSelect
                                    value={selectedDish.class}
                                    onChange={e => setSelectedDish({ ...selectedDish, class: e.target.value })}
                                    defaultValue={30}
                                    inputProps={{
                                        name: 'class',
                                        id: 'uncontrolled-native',
                                        style: {
                                            color: "white",
                                            backgroundColor: "black"
                                        }
                                    }

                                    }
                                >
                                    <option style={{ backgroundClip: "black", color: "black" }} value={"veg"}>veg</option>
                                    <option style={{ backgroundClip: "black", color: "black" }} value={"non-veg"}>non-veg</option>
                                </NativeSelect>
                            </FormControl>


                            {
                                selectedDish.newImg ? <Stack mt={3} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Button
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        color='warning'
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        Upload file
                                        <VisuallyHiddenInput onChange={e => setSelectedDish({ ...selectedDish, newImg: e.target.files[0] })} type="file" />
                                    </Button>
                                    <Button variant='outlined' color='success' onClick={e => setSelectedDish({ ...selectedDish, newImg: false })}>Cancle</Button>
                                </Stack>
                                    : <>
                                        <Stack alignItems={"center"} direction={"row"} justifyContent={"space-between"} mt={3}>
                                            <img height={80} width={60}
                                                src={`${import.meta.env.VITE_URL}/${selectedDish.hero}`}
                                                // src={`http://localhost:5000/${selectedDish.hero}`} 
                                                alt="" />
                                            <Button variant='outlined' color='error' onClick={e => setSelectedDish({ ...selectedDish, newImg: true })}>Change image</Button>
                                        </Stack>
                                    </>
                            }



                            <Box sx={{ textAlign: "end", my: 2, mb: 3 }}>
                                <Button onClick={e => {
                                    handleUpdateDish()
                                    handleEditModalClose()
                                }} variant='contained' color='inherit' >Update Dish</Button>
                            </Box>

                        </Box>
                    </Modal>
                    {/* edit modal end */}
                    {/* Modls end */}
                </Box>

                {/* add Toast start */}
                <Snackbar autoHideDuration={4000} onClose={handleAddToastClose} sx={{ backgroundColor: "red", color: "blue" }} anchorOrigin={{
                    vertical: "bottom", horizontal: "right"
                }} open={addToast}>
                    <Alert onClose={handleAddToastClose} variant='filled' severity='success' color='warning' sx={{ width: "100%" }}  >
                        Dish Add Success
                    </Alert>
                </Snackbar>
                {/* add Toast end */}


                {/* Dish data start */}
                <Box sx={{ px: { sm: 3, xs: 0 }, mt: 4 }}>
                    <Grid container justifyContent={{ xs: "center", sm: "normal" }} alignItems={"center"}  >

                        {
                            data && data.map((item, i) => <Grid key={i} my={3} lg={4} md={6} sm={12} >
                                <Card sx={{ maxWidth: { xs: 400, sm: 300 }, borderRadius: 2 }}>
                                    <Box
                                        sx={{
                                            height: "250px", width: "300px",
                                            backgroundSize: "100% 100%",
                                            // backgroundImage: `url(${import.meta.env.VITE_URL}/${item.hero})`
                                            backgroundImage: `url(${item.hero})`
                                        }}
                                    >
                                        <Box sx={{ textAlign: "end" }}>

                                            <Typography variant='button' sx={{ px: 1.4, borderRadius: 1.2, py: 0.5, backgroundColor: orange[400], fontFamily: "poppins", textTransform: "capitalize", fontWeight: 600, fontSize: 18 }}>₹{item.price}</Typography>
                                        </Box>

                                        {/* <img

                                            // src={`http://localhost:5000/${item.hero}`}
                                            src={`${import.meta.env.VITE_URL}/${item.hero}`}
                                            style={{
                                                // backgroundSize: "100% 100%",
                                                height: 250, width: 300
                                            }} /> */}
                                    </Box>
                                    <CardContent sx={{ color: "white", backgroundImage: `linear-gradient(to right,hsla(234, 38%, 18%, 0.84), hsla(234, 38%, 18%, 0.9)), url('${bgimag}')`, m: -1 }} >
                                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                            <Typography sx={{ fontFamily: "poppins", textTransform: "capitalize", fontWeight: 600, fontSize: 20 }}>{item.name}</Typography>
                                        </Stack>
                                        <Typography sx={{ fontFamily: "poppins", fontWeight: 500, fontSize: 13 }}>{item.desc}</Typography>
                                        <Stack direction={"row"} mt={2} alignItems={"center"} justifyContent={"space-between"} >
                                            <Chip sx={{ borderRadius: 3 }} label={item.class} color='warning' />
                                            <Stack direction={"row"} gap={1} alignItems={"center"} >
                                                <Button onClick={e => dishDeleteTrigger(item._id)} color='error' variant='outlined' >Delete</Button>
                                                <Button onClick={e => {
                                                    setSelectedDish(item)
                                                    setEditModal(true)
                                                }} color='warning' variant='outlined' >Edit</Button>
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>)
                        }
                    </Grid>

                </Box>
                {/* Dish data end */}






            </Box >


        </div >
    )
}

export default Dishes