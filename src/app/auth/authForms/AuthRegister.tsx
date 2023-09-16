import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel";
import { Stack } from "@mui/system";
import { registerType } from "@/app/(DashboardLayout)/types/auth/auth";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";


const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
    // user information
    const [user, setUser] = useState({ email: '', username: '', password: '' })
    // register handler
    function onRegister() { }
    // onChange handler for form inputs 
    function onChangeHandler(e: any, fieldName: any) {
        setUser((curUser) => ({ ...curUser, [fieldName]: e.target.value }))
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
