import { useMediaQuery, Box, Drawer, useTheme, Slide, IconButton } from '@mui/material';
import SidebarItems from './SidebarItems';
import Logo from '../../shared/logo/Logo';
import { useSelector, useDispatch } from '@/store/hooks';
import { hoverSidebar, toggleMobileSidebar } from '@/store/customizer/CustomizerSlice';
import Scrollbar from '@/app/(DashboardLayout)/components/custom-scroll/Scrollbar';
import { Profile } from './SidebarProfile/Profile';
import { AppState } from '@/store/store';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';


// const Sidebar = () => {
//     const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
//     const customizer = useSelector((state: AppState) => state.customizer);
//     const dispatch = useDispatch();
//     const theme = useTheme();
//     const toggleWidth =
//         customizer.isCollapse && !customizer.isSidebarHover
//             ? customizer.MiniSidebarWidth
//             : customizer.SidebarWidth;

//     const onHoverEnter = () => {
//         if (customizer.isCollapse) {
//             dispatch(hoverSidebar(true));
//         }
//     };

//     const onHoverLeave = () => {
//         dispatch(hoverSidebar(false));
//     };

//     if (lgUp) {
//         return (
//             <Box
//                 sx={{
//                     zIndex: 100,
//                     width: toggleWidth,
//                     flexShrink: 0,
//                     ...(customizer.isCollapse && {
//                         position: 'absolute',
//                     }),
//                 }}
//             >
//                 {/* ------------------------------------------- */}
//                 {/* Sidebar for desktop */}
//                 {/* ------------------------------------------- */}
//                 <Drawer
//                     anchor="left"
//                     open
//                     onMouseEnter={onHoverEnter}
//                     onMouseLeave={onHoverLeave}
//                     variant="permanent"
//                     PaperProps={{
//                         sx: {
//                             transition: theme.transitions.create('width', {
//                                 duration: theme.transitions.duration.shortest,
//                             }),
//                             width: toggleWidth,
//                             boxSizing: 'border-box',
//                         },
//                     }}
//                 >
//                     {/* ------------------------------------------- */}
//                     {/* Sidebar Box */}
//                     {/* ------------------------------------------- */}
//                     <Box
//                         sx={{
//                             height: '100%',
//                         }}
//                     >
//                         {/* ------------------------------------------- */}
//                         {/* Logo */}
//                         {/* ------------------------------------------- */}
//                         <Box px={3}>
//                             <Logo />
//                         </Box>
//                         <Scrollbar sx={{ height: 'calc(100% - 190px)' }}>

//                             {/* ------------------------------------------- */}
//                             {/* Sidebar Items */}
//                             {/* ------------------------------------------- */}
//                             <SidebarItems />
//                         </Scrollbar>
//                         <Profile />
//                     </Box>
//                 </Drawer>
//             </Box>
//         );
//     }

//     return (
//         <Drawer

//             anchor="left"
//             open={customizer.isMobileSidebar}
//             onClose={() => dispatch(toggleMobileSidebar())}
//             variant="temporary"
//             PaperProps={{
//                 sx: {
//                     width: customizer.SidebarWidth,

//                     // backgroundColor:
//                     //  customizer.activeMode === 'dark'
//                     //   ? customizer.darkBackground900
//                     //   : customizer.activeSidebarBg,
//                     // color: customizer.activeSidebarBg === '#ffffff' ? '' : 'white',
//                     border: '0 !important',
//                     boxShadow: (theme) => theme.shadows[8],
//                 },
//             }}
//         >
//             {/* ------------------------------------------- */}
//             {/* Logo */}
//             {/* ------------------------------------------- */}
//             <Box px={2}>
//                 <Logo />
//             </Box>
//             {/* ------------------------------------------- */}
//             {/* Sidebar For Mobile */}
//             {/* ------------------------------------------- */}
//             <SidebarItems />
//         </Drawer>
//     );
// };


const Sidebar = () => {
    const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
    const customizer = useSelector((state: AppState) => state.customizer);
    const dispatch = useDispatch();
    const theme = useTheme();
    const toggleWidth =
        customizer.isCollapse && !customizer.isSidebarHover
            ? customizer.MiniSidebarWidth
            : customizer.SidebarWidth;

    //     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const onHoverEnter = () => {
        // if (customizer.isCollapse) {
        //     dispatch(hoverSidebar(true));
        // }
    };

    const onHoverLeave = () => {
        // dispatch(hoverSidebar(false));
    };

    //     const handleSidebarToggle = () => {
    //         setIsSidebarOpen(!isSidebarOpen);
    //     };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleCloseSidebar = () => {
        setTimeout(() => {
            setIsSidebarOpen(false);
        }, 200); // Delay the state update to allow the closing animation

    };

    return (
        <Box
            sx={{
                zIndex: 100,
                width: toggleWidth,
                flexShrink: 0,
                ...(customizer.isCollapse && {
                    position: 'absolute',
                }),
            }}
        >
            {/* Sidebar for desktop */}
            <Drawer
                anchor="left"
                open={isSidebarOpen}
                onClose={handleCloseSidebar}
                // onMouseEnter={onHoverEnter}
                // onMouseLeave={onHoverLeave}
                closeAfterTransition
                variant="permanent"
                PaperProps={{
                    sx: {
                        width: toggleWidth,
                        boxSizing: 'border-box',
                        transition: 'width 0.3s ease', // Add a CSS transition for width
                    },
                }}
            >
                {/* Sidebar Box */}
                <Box
                    sx={{
                        height: '100%',
                    }}
                >
                    {/* Logo */}
                    <Box px={3}>
                        <Logo />
                    </Box>
                    <Scrollbar sx={{ height: 'calc(100% - 190px)' }}>
                        {/* Sidebar Items */}
                        <SidebarItems />
                    </Scrollbar>
                    <Profile />
                </Box>
            </Drawer>

            {/* Sidebar toggle button for mobile */}
            {!lgUp && (
                <IconButton
                    color="inherit"
                    aria-label="open sidebar"
                    onClick={handleSidebarToggle}
                    sx={{
                        display: 'none',
                        [theme.breakpoints.down('md')]: {
                            display: 'block',
                        },
                    }}
                >
                    {isSidebarOpen ? <ChevronLeftIcon /> : <MenuIcon />}
                </IconButton>
            )}
        </Box>
    );
};

export default Sidebar;