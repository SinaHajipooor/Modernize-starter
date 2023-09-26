import Image from "next/image";
import { Box, Card, CardContent, Grid, Typography, Grow } from "@mui/material";

import icon1 from "public/images/svgs/icon-connect.svg";
import icon2 from "public/images/svgs/icon-user-male.svg";
import icon3 from "public/images/svgs/icon-briefcase.svg";
import icon4 from "public/images/svgs/icon-mailbox.svg";
import icon5 from "public/images/svgs/icon-favorites.svg";
import icon6 from "public/images/svgs/icon-speech-bubble.svg";

const topcards = [
    {
        icon: icon2,
        title: "ادمین",
        digits: "96",
        bgcolor: "primary",
    },
    {
        icon: icon3,
        title: "کاربر شماره 1",
        digits: "3,650",
        bgcolor: "warning",
    },
    {
        icon: icon4,
        title: "کاربر شماره 2",
        digits: "356",
        bgcolor: "secondary",
    },
    {
        icon: icon5,
        title: "کاربر شماره 3",
        digits: "696",
        bgcolor: "error",
    },
];

const TopCards = () => {
    return (
        <Grid container spacing={3}>
            {topcards.map((topcard, i) => (
                <Grow in key={i} timeout={(i + 1) * 800}>
                    <Grid item xs={12} sm={3} md={3} mt={1.5}>
                        <Card sx={{ height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '0px 2px 7px rgba(0, 0, 0, 0.1)' }}>
                            <CardContent>
                                <Box textAlign="center">
                                    <Image src={topcard.icon} alt={topcard.title} width="50" height="50" />
                                    <Typography color={topcard.bgcolor + '.main'} mt={1} variant="subtitle1" fontWeight={600}>
                                        {topcard.title}
                                    </Typography>
                                    <Typography color={topcard.bgcolor + '.main'} variant="h5" fontWeight={400}>
                                        {topcard.digits}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grow>
            ))}
        </Grid>
    );
};


export default TopCards;
