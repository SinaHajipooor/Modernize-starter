import React, { useState } from 'react';
import Link from 'next/link';
import {
    Box,
    Menu,
    Avatar,
    Typography,
    Divider,
    Button,
    IconButton,
} from '@mui/material';
import * as dropdownData from './data';
import { Stack } from '@mui/system';
import { signOut, useSession } from 'next-auth/react';



const Profile = () => {

    const session = useSession()
    const [anchorEl2, setAnchorEl2] = useState(null);

    // handlers
    const handleClick2 = (event: any) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    return (
        <Box>
            <IconButton
                size="large"
                aria-label="show 11 new notifications"
                color="inherit"
                aria-controls="msgs-menu"
                aria-haspopup="true"
                sx={{
                    ...(typeof anchorEl2 === 'object' && {
                        color: 'primary.main',
                    }),
                }}
                onClick={handleClick2}
            >
                <Avatar
                    src={session.data?.user.avatar}
                    alt={'ProfileImg'}
                    sx={{
                        width: 28,
                        height: 28,
                    }}
                />
            </IconButton>
            {/* ------------------------------------------- */}
            {/* Message Dropdown */}
            {/* ------------------------------------------- */}
            <Menu
                id="msgs-menu"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                sx={{
                    '& .MuiMenu-paper': {
                        width: '230px',
                        p: 1,
                    },
                }}
            >
                <Stack direction="row" py={0} pb={2} spacing={2} alignItems="center">
                    <Avatar src={session.data?.user.avatar} alt={"ProfileImg"} sx={{ width: 45, height: 45 }} />
                    <Box>
                        <Typography variant="body1" color="textPrimary" fontWeight={700}>
                            {/* {context.user.firstName} {context.user.lastName} */}
                            {session.data?.user.first_name} {session.data?.user.last_name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {session.data?.user.mobile}
                            {/* {context.user.mobile} */}
                        </Typography>
                        {/* user role  */}
                    </Box>
                </Stack>
                <Divider />
                {dropdownData.profile.map((profile) => (
                    <Box key={profile.title}>
                        <Box sx={{ py: 1, px: 0, }} className="hover-text-primary">
                            <Link href={profile.href}>
                                <Stack direction="row" spacing={2} alignItems='center'>
                                    <Box
                                        width="30px"
                                        height="30px"
                                        bgcolor="primary.light"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center" flexShrink="0"
                                    >
                                        <Avatar
                                            src={profile.icon}
                                            alt={profile.icon}
                                            sx={{
                                                width: 15,
                                                height: 15,
                                                borderRadius: 0,
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="body2"
                                            fontWeight={600}
                                            color="textPrimary"
                                            className="text-hover"
                                            noWrap
                                            sx={{
                                                width: '240px',
                                            }}
                                        >
                                            {profile.title}
                                        </Typography>

                                    </Box>
                                </Stack>
                            </Link>
                        </Box>
                    </Box>
                ))}
                <Box mt={2}>
                    <Button onClick={() => signOut({
                        redirect: true,
                        callbackUrl: `${window.location.origin}/auth/login`
                    })} href="" variant="outlined" color="primary" component={Link} fullWidth>
                        خروج
                    </Button>
                </Box>
            </Menu>
        </Box >
    );
};

export default Profile;
