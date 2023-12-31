import { Box, Typography, FormGroup, FormControlLabel, Button, Stack, } from "@mui/material";
import Link from "next/link";
import { loginType } from "@/app/(DashboardLayout)/types/auth/auth";
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel";
import { useState } from "react";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation"


const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
    // user infor
    const [user, setUser] = useState({ username: '', password: '' });
    const router = useRouter()
    // onchange for form inputs
    function onChangeHandler(e: any, fieldName: any) {
        setUser((curUser) => ({ ...curUser, [fieldName]: e.target.value }))
    }
    // onLogin handler
    async function onLogin() {
        const response = await signIn('credentials', { username: user.username, password: user.password, redirect: false });
        if (response?.error) {
            throw new Error(response.error)
        } else {
            router.refresh()
            router.replace('/')
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
            <Stack>
                <Box>
                    <CustomFormLabel htmlFor="username">نام کاربری</CustomFormLabel>
                    <CustomTextField onChange={(e: any) => onChangeHandler(e, 'username')} id="username" variant="outlined" fullWidth />
                </Box>
                <Box>
                    <CustomFormLabel htmlFor="password">رمز عبور</CustomFormLabel>
                    <CustomTextField
                        onChange={(e: any) => onChangeHandler(e, 'password')}
                        id="password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={user.password}
                    />
                </Box>
                <Stack
                    justifyContent="space-between"
                    direction="row"
                    alignItems="center"
                    my={2}
                >
                    <Typography
                        my={1}
                        href="/auth/two-steps"
                        component={Link}
                        fontWeight="500"
                        sx={{
                            textDecoration: 'none',
                            color: 'primary.main',
                        }}
                    >
                        ورود با تلفن همراه
                    </Typography>
                    <Typography
                        my={1}
                        href="/auth/register"
                        component={Link}
                        fontWeight="500"
                        sx={{
                            textDecoration: 'none',
                            color: 'primary.main',
                        }}
                    >
                        ثبت‌ نام
                    </Typography>
                </Stack>
            </Stack>
            <Box>
                <Button
                    onClick={onLogin}
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    component={Link}
                    href=""
                    type="submit"
                >
                    ورود
                </Button>
            </Box>
            {/* forget password text */}
            {subtitle}
        </>
    );
}
export default AuthLogin;
