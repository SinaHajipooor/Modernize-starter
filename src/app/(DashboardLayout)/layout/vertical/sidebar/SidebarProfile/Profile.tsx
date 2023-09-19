import { Box, Avatar, Typography, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { useSelector } from '@/store/hooks';
import { IconPower } from '@tabler/icons-react';
import { AppState } from '@/store/store';
import Link from 'next/link';
import { useContext } from 'react'
import { AuthContext } from '@/store/auth/AuthContext';

export const Profile = () => {
    const customizer = useSelector((state: AppState) => state.customizer);
    const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
    const hideMenu = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
    const context = useContext(AuthContext);
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
    return (
        <Box
            display={'flex'}
            alignItems="center"
            gap={2}
            sx={{ m: 3, p: 2, bgcolor: `${'secondary.light'}` }}
        >
            {!hideMenu ? (
                <>
                    <Avatar alt="Remy Sharp" src={"/images/profile/user-1.jpg"} sx={{ height: 40, width: 40 }} />

                    <Box>
                        <Typography variant="h6">Mathew</Typography>
                        <Typography variant="caption">Designer</Typography>
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
