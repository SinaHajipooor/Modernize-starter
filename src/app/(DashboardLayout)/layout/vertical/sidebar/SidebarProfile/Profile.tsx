import { Box, Avatar, Typography, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { useSelector } from '@/store/hooks';
import { IconPower } from '@tabler/icons-react';
import { AppState } from '@/store/store';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/store/auth/AuthContext';
import useUserData from '@/app/auth/hooks/useUserData';

export const Profile = () => {
    const customizer = useSelector((state: AppState) => state.customizer);
    const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
    const hideMenu = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
    const context = useContext(AuthContext);
    const uesrname = context.user.firstName + ' ' + context.user.lastName;
    // logout user 
    async function logoutHandler() {
        try {
            const response = context.logout();
            console.log(response)
            // redirect to login page 
        } catch (error: any) {
            console.log(error.message)
        }
    }


    const { userData } = useUserData()


    const [isVisible, setIsVisible] = useState(false);

    // Add an effect to toggle visibility when data arrives
    useEffect(() => {
        if (userData?.data.first_name) {
            setIsVisible(true);
        }
    }, [userData]);

    return (
        <Box
            display="flex"
            alignItems="center"
            gap={2}
            sx={{
                m: 3,
                p: 2,
                bgcolor: 'secondary.light',
                opacity: isVisible ? 1 : 0,
                transform: `scale(${isVisible ? 1 : 0.5})`,
                transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}
        >
            {!hideMenu ? (
                <>
                    <Avatar alt="Remy Sharp" src={userData?.data.avatar} sx={{ height: 40, width: 40 }} />
                    <Box>
                        <Typography variant="body1" fontWeight={600}>
                            {userData?.data.first_name} {userData?.data.last_name}
                        </Typography>
                        <Typography variant="caption">{userData?.data.mobile}</Typography>
                    </Box>
                    <Box sx={{ ml: 'auto' }}>
                        <Tooltip title="Logout" placement="top">
                            <IconButton
                                onClick={logoutHandler}
                                color="primary"
                                component={Link}
                                href=""
                                aria-label="logout"
                                size="small"
                            >
                                <IconPower size="20" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </>
            ) : (
                ''
            )}
        </Box>
    );
};
