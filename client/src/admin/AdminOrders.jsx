import { Alert, Box, CircularProgress, FormControl, InputLabel, MenuItem, Select, Snackbar, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useGetAllOrdersQuery, useUpdateOrderStatusMutation } from '../redux/apis/adminApi'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const AdminOrders = () => {

    const { data, isLoading } = useGetAllOrdersQuery()
    const [updateToast, setUpdateToast] = useState(false)
    const [updateStatusTrigger, { isSuccess }] = useUpdateOrderStatusMutation()

    const handleSNACKClose = () => {
        setUpdateToast(false)
    }


    useEffect(() => {
        if (isSuccess) {
            setUpdateToast(true)
        }
    }, [isSuccess])


    console.log(data);


    if (isLoading) return <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} >
        <CircularProgress />
    </Box>


    return (
        data && data[0] && data[0].cartId && data[0].cartId.dishes ?
            <div>

                <Box sx={{ pl: { xs: 0, sm: "180px" }, my: 10 }}>


                    <Snackbar autoHideDuration={3000} onClose={handleSNACKClose} sx={{ backgroundColor: "red", color: "blue" }} anchorOrigin={{
                        vertical: "bottom", horizontal: "right"
                    }} open={updateToast}>
                        <Alert onClose={handleSNACKClose} variant='filled' severity='success' color='warning' sx={{ width: "100%" }}  >
                            Order Update Success
                        </Alert>
                    </Snackbar>




                    <TableContainer  >

                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>No.</TableCell>
                                    <TableCell>Items</TableCell>
                                    <TableCell>User</TableCell>
                                    <TableCell>Pay Mode</TableCell>
                                    <TableCell>Address </TableCell>
                                    <TableCell>Action </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>

                                {
                                    data && data.map((item, i) => {
                                        let TotalAmount = 0
                                        let x = item.cartId.dishes.map(item => TotalAmount += item.price * item.qty)

                                        return <TableRow>
                                            <TableCell>{i + 1}</TableCell>
                                            <TableCell>{item.cartId.dishes.map(d => <Box>

                                                <img style={{ borderRadius: 10 }} height={70} src={`${import.meta.env.VITE_URL}/${d.hero}`} alt="" />
                                            </Box>)}</TableCell>
                                            <TableCell>{item.userId.name}</TableCell>
                                            <TableCell>{TotalAmount} {item.mode === "pay" ? "Online" : "COD"}</TableCell>
                                            <TableCell>{item.address.city} </TableCell>
                                            <TableCell>
                                                <Stack direction={"row"} alignItems={"center"} gap={1}>
                                                    {
                                                        item.status === "delivered" &&
                                                        <CheckCircleIcon color='success' sx={{ fontSize: 20 }} />
                                                    }
                                                    <FormControl color='error' fullWidth size='small' >
                                                        <Select
                                                            disabled={item.status === "delivered"}
                                                            color='warning' onChange={e => updateStatusTrigger({ _id: item._id, status: e.target.value, mode: item.mode })} value={item.status} >
                                                            <MenuItem value="processing">Processing</MenuItem>
                                                            <MenuItem value="dispatched">Dispatched</MenuItem>
                                                            <MenuItem value="delivered">Delivered</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
                                    }
                                    )
                                }


                            </TableBody>


                        </Table>

                    </TableContainer>
                </Box>


            </div>
            : <>

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} >
                    <Typography sx={{ color: "orangered", fontWeight: 800, fontSize: 30 }} >No orders 📿 </Typography>
                </Box>

            </>
    )
}

export default AdminOrders