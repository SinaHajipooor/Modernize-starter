"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import RTL from "@/app/(DashboardLayout)/layout/shared/customizer/RTL";
import { ThemeSettings } from "@/utils/theme/Theme";
import { store } from "@/store/store";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { Provider } from "react-redux";
import NextTopLoader from 'nextjs-toploader';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "@/app/api/index";
import "@/utils/i18n";
import { NextAppDirEmotionCacheProvider } from "@/utils/theme/EmotionCache";
import { LinearProgress } from "@mui/material";



export const MyApp = ({ children }: { children: React.ReactNode }) => {
    const theme = ThemeSettings();

    const customizer = useSelector((state: AppState) => state.customizer);

    return (
        <>
            <NextTopLoader color="#5D87FF" />
            <NextAppDirEmotionCacheProvider options={{ key: 'modernize' }}>
                <ThemeProvider theme={theme}>
                    <RTL direction={customizer.activeDir}>
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        {children}
                    </RTL>
                </ThemeProvider>
            </NextAppDirEmotionCacheProvider>
        </>
    );
};



export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => setLoading(true), 0);
    }, []);
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Provider store={store}>
                    {loading ? (
                        // eslint-disable-next-line react/no-children-prop
                        <MyApp children={children} />
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                height: "100vh",
                            }}
                        >

                            <LinearProgress variant="determinate" />

                        </Box>
                    )}
                </Provider>
            </body>
        </html>
    );
}
