import { Box, Avatar, Typography, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { useSelector } from '@/store/hooks';
import { IconPower } from '@tabler/icons-react';
import { AppState } from '@/store/store';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export const Profile = () => {
    const customizer = useSelector((state: AppState) => state.customizer);
    const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
    const hideMenu = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
    const sessions = useSession()

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
                        <Typography fontWeight={600} variant="body1">{sessions.data?.user.first_name} {sessions.data?.user.last_name}</Typography>
                        <Typography variant="caption">{sessions.data?.user.mobile}</Typography>
                    </Box>
                    <Box sx={{ ml: 'auto' }}>
                        <Tooltip title="Logout" placement="top">
                            <IconButton
                                onClick={() => signOut({
                                    redirect: true,
                                    callbackUrl: `${window.location.origin}/auth/login`
                                })}
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
