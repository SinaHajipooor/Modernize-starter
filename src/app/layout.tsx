"use client";
import { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import RTL from "@/app/(DashboardLayout)/layout/shared/customizer/RTL";
import { ThemeSettings } from "@/utils/theme/Theme";
import { store } from "@/store/store";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { Provider } from "react-redux";
import NextTopLoader from 'nextjs-toploader';
import "@/app/api/index";
import "@/utils/i18n";
import { NextAppDirEmotionCacheProvider } from "@/utils/theme/EmotionCache";
import AuthContextProvider, { AuthContext } from "@/store/auth/AuthContext";
import './global.css'
import { QueryClientProvider } from "@tanstack/react-query";
import queryClientSetup from '@/services/querySetup'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Spinner from "./(DashboardLayout)/components/ui/Spinner";

export const MyApp = ({ children }: { children: React.ReactNode }) => {
    const theme = ThemeSettings();
    const activeMode = useSelector((state: AppState) => state.customizer.activeMode);
    const customizer = useSelector((state: AppState) => state.customizer);
    const context = useContext(AuthContext)
    useEffect(() => {
        context.authenticate()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <QueryClientProvider client={queryClientSetup}>
                <ReactQueryDevtools initialIsOpen={false} />
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
                <Toaster position="top-center" gutter={12} containerStyle={{ margin: '8px' }} toastOptions={{
                    success: {
                        duration: 3000,
                    }, error: {
                        duration: 5000,
                    }, style: {
                        color: activeMode === 'light' ? 'black' : 'white',
                        fontSize: '16px',
                        maxWidth: '500px',
                        padding: '16px 24px',
                        width: '300px',
                        backgroundColor: activeMode === 'light' ? '#f7f1ff' : '#2b2e3f'
                    }
                }} />
            </QueryClientProvider>
        </>
    );
};




export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [delay, setDelay] = useState(true)
    useEffect(() => {
        setTimeout(() => setDelay(false), 2000)
    }, [])
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <AuthContextProvider>
                    <Provider store={store}>
                        {/* eslint-disable-next-line react/no-children-prop */}
                        {delay ? <Spinner /> : <MyApp children={children} />}
                    </Provider>
                </AuthContextProvider>
            </body>
        </html>
    );
}
