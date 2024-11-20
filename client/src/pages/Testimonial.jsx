import { Avatar, Box, Card, Grid, Typography, } from '@mui/material'
import bgimag from '../img/bg-hero.jpg'

import avtarimg1 from '../img/testimonial-2.jpg'
import avtarimg2 from '../img/testimonial-3.jpg'
import avtarimg3 from '../img/testimonial-4.jpg'
// import CardCover from '@mui/joy/CardCover';
import { orange } from '@mui/material/colors';

const Testimonial = () => {
    return <>
        <Box
            sx={{
                backgroundImage: `linear-gradient(to right,hsla(234, 38%, 18%, 0.9), hsla(234, 38%, 18%, 0.9)), url('${bgimag}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '70vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
            }}
        >
            <Typography sx={{ fontSize: "3.5rem", fontWeight: "bold" }}>Testimonial</Typography>
            <Box sx={{ display: "flex", marginTop: 2 }}>
                <Typography sx={{ color: orange[400], marginX: 1 }}>HOME / </Typography>
                <Typography sx={{ color: orange[400], marginX: 1 }}>PAGES / </Typography>
                <Typography>Testimonial</Typography>
            </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", marginY: 8 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: 40, color: orange[400], border: "1.5px solid " }}></Box>
                <Typography sx={{ marginX: 1, color: orange[400], fontSize: "1.7rem" }}>Testimonial</Typography>
                <Box sx={{ width: 40, color: orange[400], border: "1.5px solid " }}></Box>
            </Box>
            <Typography sx={{ fontSize: { sm: "2.9rem", xs: "2.5rem" }, textShadow: `1px 1px 3px ${"black"}`, color: 'black' }}>Our Clients Say!!!</Typography>
        </Box>
        <Box sx={{ marginX: "2rem", marginBottom: "3rem" }}>
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <Card sx={{ paddingX: "2vw", }}>
                        <Typography sx={{ fontSize: "6rem", height: "15vh", fontWeight: "bold", color: orange[400] }}>“</Typography>
                        <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam facilis earum exercitationem unde alias optio eligendi.</Typography>
                        <Box sx={{ display: "flex", marginY: 2 }}>
                            <Avatar src={avtarimg1} />
                            <Box sx={{ marginLeft: 2 }}>
                                <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>Client Name</Typography>
                                <Typography sx={{ color: "gray" }}>Profession</Typography>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card sx={{ paddingX: "2vw", }}>
                        <Typography sx={{ fontSize: "6rem", height: "15vh", fontWeight: "bold", color: orange[400] }}>“</Typography>
                        <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam facilis earum exercitationem unde alias optio eligendi.</Typography>
                        <Box sx={{ display: "flex", marginY: 2 }}>
                            <Avatar src={avtarimg2} />
                            <Box sx={{ marginLeft: 2 }}>
                                <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>Client Name</Typography>
                                <Typography sx={{ color: "gray" }}>Profession</Typography>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card sx={{ paddingX: "2vw", }}>
                        <Typography sx={{ fontSize: "6rem", height: "15vh", fontWeight: "bold", color: orange[400] }}>“</Typography>
                        <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam facilis earum exercitationem unde alias optio eligendi.</Typography>
                        <Box sx={{ display: "flex", marginY: 2 }}>
                            <Avatar src={avtarimg3} />
                            <Box sx={{ marginLeft: 2 }}>
                                <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>Client Name</Typography>
                                <Typography sx={{ color: "gray" }}>Profession</Typography>
                            </Box>
                        </Box>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    </>
}

export default Testimonial