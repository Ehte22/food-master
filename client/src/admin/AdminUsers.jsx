import React, { useEffect, useState } from 'react'
import { useGetAllUsersQuery, useUpdateUserMutation } from '../redux/apis/adminApi'
import { Alert, Box, Snackbar, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const AdminUsers = () => {

    const [updateToast, setUpdateToast] = useState(false)
    const { data } = useGetAllUsersQuery()

    console.log(data);

    const [updateUserTrigger, { isSuccess }] = useUpdateUserMutation()

    const handleSNACKClose = () => {
        setUpdateToast(false)
    }


    useEffect(() => {
        if (isSuccess) {
            setUpdateToast(true)
        }
    }, [isSuccess])



    return (
        <Box sx={{ pl: { xs: 0, sm: "180px" }, mt: 10 }}>


            <Snackbar autoHideDuration={3000} onClose={handleSNACKClose} sx={{ backgroundColor: "red", color: "blue" }} anchorOrigin={{
                vertical: "bottom", horizontal: "right"
            }} open={updateToast}>
                <Alert onClose={handleSNACKClose} variant='filled' severity='success' color='warning' sx={{ width: "100%" }}  >
                    User  Update Success
                </Alert>
            </Snackbar>



            <TableContainer>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell>Img</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email </TableCell>
                            <TableCell>Active </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>

                        {
                            data && data.map((item, i) => <TableRow>
                                <TableCell>{i + 1}</TableCell>
                                <TableCell><img style={{ borderRadius: 5 }} src={item.user.length < 50 ? `${import.meta.env.VITE_URL}/${item.user}` : item.user} height={60} alt="" /></TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell><Switch onChange={e => updateUserTrigger({ _id: item._id, active: !item.active })} checked={item.active} /></TableCell>
                            </TableRow>)
                        }


                    </TableBody>


                </Table>

            </TableContainer>



        </Box>
    )
}

export default AdminUsers