import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAddUsercartMutation, useGetUserDishQuery } from '../redux/apis/userApi'
import { Box, Button, Chip, CircularProgress, IconButton, Input, List, ListItem, Modal, Rating, Stack, TextField, Typography } from '@mui/material'
import bgimag from '../img/bg-hero.jpg'
import { orange, yellow } from '@mui/material/colors'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useGetAllDishesQuery } from '../redux/apis/adminApi'
import CancelIcon from '@mui/icons-material/Cancel';



const Details = () => {


    const { id } = useParams()
    const [qty, setQty] = useState(1)
    const [modal, setModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState([])
    const [addedItem, setAddedItem] = useState([])

    const { data: allDishData } = useGetAllDishesQuery()
    const { data } = useGetUserDishQuery(id)
    const [addCartTrigger, { isSuccess, data: addCartData }] = useAddUsercartMutation()

    console.log(allDishData);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: 290, sm: 380 },
        height: 405,
        bgcolor: "hsla(234, 38%, 18%, 1)",
        boxShadow: 2,
        pt: 3,
        border: `2px solid ${yellow[700]}`,

        borderRadius: 3,
        px: { xs: 1, sm: 3 },
        // pb: 1,
    };

    console.log(addedItem);

    const navi = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            navi(`/cart/${addCartData.id}`)
        }
    }, [isSuccess])



    return !data ? <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

        <CircularProgress />

    </Box> : (
        <Box  >

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
                <Typography sx={{ fontSize: "3.5rem", fontWeight: "bold" }}>Detail</Typography>
                <Box sx={{ display: "flex", marginTop: 2 }}>
                    <Typography sx={{ color: orange[400], marginX: 1 }}>HOME / </Typography>
                    <Typography sx={{ color: orange[400], marginX: 1 }}>Details </Typography>
                </Box>
            </Box>



            <Box sx={{ mt: 5 }} >

                <Grid sx={{ my: 10, px: { xs: 2, sm: 5 } }} container >
                    <Grid xs={12} sm={6}  >
                        <Box sx={{ height: { sm: "100%", xs: "40vh" }, width: { xs: "80vw", sm: "80%" }, borderRadius: 2, backgroundSize: "cover", backgroundPosition: "100% 100%", backgroundImage: `url(${import.meta.env.VITE_URL}/${data.hero})` }} >
                            {/* <img src={`${import.meta.env.VITE_URL}/${data.hero}`} style={{ maxWidth: 500, borderRadius: 4, maxHeight: 500 }} alt="" /> */}
                        </Box>
                    </Grid>


                    <Grid sm={6} xs={12} >
                        <Box sx={{ my: 2 }}  >
                            <Typography sx={{ fontSize: 35, color: orange[500], fontFamily: "poppins", fontWeight: 600 }} >{data.name}</Typography>
                            <Box>
                                <Rating value={4} />
                            </Box>
                            <Typography sx={{ mt: 1 }}>{data.desc}</Typography>

                            <Stack direction={"row"} justifyContent={"space-between"} flexWrap={"nowrap"} pr={3} my={3} alignItems={"center"}  >

                                <Stack direction={"row"} alignItems={"center"} gap={1} >

                                    <Typography sx={{ fontSize: 17, fontFamily: "poppins", fontWeight: 500 }} >Price :   </Typography>
                                    <Typography sx={{ fontSize: 17, fontFamily: "poppins", color: "orangered", fontWeight: 600 }} >{data.price}  </Typography>
                                </Stack>


                                <Box>
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", gap: 3 }}>
                                        <Stack alignItems={"center"} direction={"row"} gap={2} sx={{ textAlign: "end", color: "black", fontWeight: 500, fontFamily: "poppins" }} >Qty:<Typography sx={{ fontWeight: 600 }} >{qty}</Typography></Stack>
                                        <Button onClick={e => setQty(qty === 3 ? 3 : qty + 1)} sx={{ width: "25%" }} variant='outlined' color='warning' >+1   </Button>
                                    </Box>

                                </Box>


                            </Stack>

                            {
                                addedItem.length > 0 ?
                                    <Stack sx={{ my: 2 }} width={"100%"} gap={1} flexWrap={'wrap'} direction={"row"}>
                                        {addedItem.map(item => <>
                                            <Box sx={{ display: "flex", gap: 0.3, borderRadius: 10, bgcolor: "black", color: "white", px: 0.5, alignItems: "center", py: 0.1 }} >
                                                <Typography><img height={30} width={30} style={{ borderRadius: 10 }} src={`${import.meta.env.VITE_URL}/${item.hero}`} alt="" /></Typography>
                                                <Typography sx={{ fontSize: 13 }} >{item.name}</Typography>
                                                <IconButton onClick={e => setAddedItem(addedItem.filter(d => d._id !== item._id))} >
                                                    <CancelIcon sx={{ color: "white", fontSize: 15 }} />
                                                </IconButton>

                                            </Box>
                                        </>)}
                                    </Stack>
                                    : <>
                                        <Button onClick={e => setModal(true)} variant='outlined' color='error' sx={{ my: 2 }} >Add items</Button>
                                    </>
                            }

                            <Button onClick={e => {
                                addCartTrigger({ dishes: [...addedItem, { ...data, qty }] })
                            }} fullWidth variant='contained' color='warning' sx={{ mt: 2, }} >Continue order</Button>
                        </Box>

                    </Grid>



                </Grid>


            </Box>



            {/*modal of add item start  */}

            <Modal onClose={e => setModal(false)} open={modal} >
                <Box sx={style} >
                    <List sx={{ width: "100%", overflowY: "scroll", height: "85%" }}>

                        {
                            allDishData && allDishData.map(item => (item._id !== id) && <ListItem ListItem sx={{ color: "white", width: "100%" }} >
                                <Stack direction={"row"} alignItems={"center"} gap={2} sx={{ width: "100%" }} >
                                    <Typography><img src={`${import.meta.env.VITE_URL}/${item.hero}`} width={70} height={70} style={{ borderRadius: 7 }} alt="" /></Typography>
                                    <Typography sx={{ fontWeight: 600 }} >{item.name}</Typography>
                                    {/* <Stack direction={"row"} >
                                        <Button>-</Button>
                                        <Typography>12</Typography>
                                        <Button>+</Button>
                                    </Stack> */}
                                    <Box sx={{ ml: "auto" }} >
                                        <TextField onChange={e => {
                                            if (e.target.checked) {
                                                setSelectedItem([...selectedItem, item])
                                            } else {
                                                setSelectedItem(selectedItem.filter(pr => pr._id !== item._id))
                                            }
                                        }} type='checkbox' />
                                    </Box>
                                </Stack>
                            </ListItem>)
                        }
                    </List>
                    <Box sx={{ textAlign: "end", pr: 1 }}>
                        <Button onClick={e => {
                            setAddedItem(selectedItem)
                            setSelectedItem([])
                            setModal(false)
                        }} variant='contained' color='warning'> Add Items</Button>
                    </Box>
                </Box>
            </Modal >

            {/*modal of add item end  */}

        </Box >

    )
}

export default Details