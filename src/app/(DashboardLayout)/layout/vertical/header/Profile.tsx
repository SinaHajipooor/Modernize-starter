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
import { useContext } from 'react'
import { AuthContext } from '@/store/auth/AuthContext';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';



const Profile = () => {
    // get user data from context 
    const context = useContext(AuthContext)
    // get router 
    const router = useRouter();
    const [anchorEl2, setAnchorEl2] = useState(null);
    const handleClick2 = (event: any) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    // logout user 
    async function logoutHandler() {
        try {
            const response = context.logout();
            toast.success('Logout successfully');
            console.log(response)
            // redirect to login page 
        } catch (error: any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

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
                    src={"/images/profile/user-1.jpg"}
                    alt={'ProfileImg'}
                    sx={{
                        width: 30,
                        height: 30,
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
                    <Avatar src={"/images/profile/user-1.jpg"} alt={"ProfileImg"} sx={{ width: 45, height: 45 }} />
                    <Box>
                        <Typography variant="h6" color="textPrimary" fontWeight={400}>
                            {context.user.username}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                            Designer
                        </Typography>
                        {/* user role  */}
                    </Box>
                </Stack>
                <Divider />
                {dropdownData.profile.map((profile) => (
                    <Box key={profile.title}>
                        <Box sx={{ py: 1.5, px: 0, }} className="hover-text-primary">
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
                                            variant="h6"
                                            fontWeight={400}
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
                    <Button onClick={logoutHandler} href="" variant="outlined" color="primary" component={Link} fullWidth>
                        خروج
                    </Button>
                </Box>
            </Menu>
        </Box >
    );
};

export default Profile;
