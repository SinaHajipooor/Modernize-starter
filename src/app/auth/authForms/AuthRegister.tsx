import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel";
import { registerType } from "@/app/(DashboardLayout)/types/auth/auth";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { Stack } from "@mui/system";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";


const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
    const router = useRouter()
    // pending
    const [isLoading, setIsLoading] = useState(false);
    // user information
    const [user, setUser] = useState({ email: '', username: '', password: '' })
    // onChange handler for form inputs 
    function onChangeHandler(e: any, fieldName: any) {
        setUser((curUser) => ({ ...curUser, [fieldName]: e.target.value }))
    }
    // register handler
    function onRegister() {
        try {
            //     start pending 
            setIsLoading(true);
            // request 
        } catch (error: any) {
            console.log('Failed to sign up' + error.message)
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }
    // ui
    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h3" mb={1}>
                    {title}
                </Typography>
            ) : null}
            <Box>
                <Stack mb={3}>
                    <CustomFormLabel htmlFor="name">نام</CustomFormLabel>
                    <CustomTextField onChange={(e: any) => onChangeHandler(e, 'username')} id="name" variant="outlined" fullWidth />
                    <CustomFormLabel htmlFor="email">آدرس ایمیل</CustomFormLabel>
                    <CustomTextField onChange={(e: any) => onChangeHandler(e, 'email')} id="email" variant="outlined" fullWidth />
                    <CustomFormLabel htmlFor="password">رمز عبور</CustomFormLabel>
                    <CustomTextField onChange={(e: any) => onChangeHandler(e, 'password')} id="password" variant="outlined" fullWidth />
                </Stack>
                <Button
                    disabled={isLoading}
                    onClick={onRegister}
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    component={Link}
                    href=""
                >
                    ثبت نام
                </Button>
            </Box >
            {subtitle}
        </>
    );
}
export default AuthRegister;
