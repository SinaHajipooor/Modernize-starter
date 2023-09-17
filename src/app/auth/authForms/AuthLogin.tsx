import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
} from "@mui/material";
import Link from "next/link";
import { loginType } from "@/app/(DashboardLayout)/types/auth/auth";
import CustomCheckbox from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomCheckbox";
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel";
import { useState } from "react";
import { login } from "@/utils/api/auth/apiLogin";
import { toast } from 'react-hot-toast'
import { useRouter } from "next/navigation";



const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
    const router = useRouter();
    //pending 
    const [isLoading, setIsLoading] = useState(false);
    // user information 
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    // onLogin handler
    async function onLogin() {
        try {
            setIsLoading(true);
            const userData = await login(user);
            console.log(userData)
            // navigate
            router.replace('/',)
        } catch (error: any) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }
    // onchange for form inputs
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
                    <FormGroup>
                        <FormControlLabel
                            control={<CustomCheckbox defaultChecked />}
                            label="به خاطر بسپار"
                        />
                    </FormGroup>
                    <Typography
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
                    disabled={isLoading}
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
