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

const AuthLogin = ({ title, subtitle, subtext }: loginType) => (
    <>
        {title ? (
            <Typography fontWeight="700" variant="h3" mb={1}>
                {title}
            </Typography>
        ) : null}

        {subtext}

        {/* <AuthSocialButtons title="Sign in with" />
        <Box mt={3}>
            <Divider>
                <Typography
                    component="span"
                    color="textSecondary"
                    variant="h6"
                    fontWeight="400"
                    position="relative"
                    px={2}
                >
                    or sign in with
                </Typography>
            </Divider>
        </Box> */}

        <Stack>
            <Box>
                <CustomFormLabel htmlFor="username">نام کاربری</CustomFormLabel>
                <CustomTextField id="username" variant="outlined" fullWidth />
            </Box>
            <Box>
                <CustomFormLabel htmlFor="password">رمز عبور</CustomFormLabel>
                <CustomTextField
                    id="password"
                    type="password"
                    variant="outlined"
                    fullWidth
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
                    component={Link}
                    href="/auth/auth2/register"
                    fontWeight="500"
                    sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                    }}
                >
                    ثبت‌ نام
                </Typography>
                {/* <Typography
                    component={Link}
                    href="/auth/auth1/forgot-password"
                    fontWeight="500"
                    sx={{
                        textDecoration: "none",
                        color: "primary.main",
                    }}
                >
                    رمز عبور خود را فراموش کردید ؟
                </Typography> */}
            </Stack>
        </Stack>
        <Box>
            <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                component={Link}
                href="/"
                type="submit"
            >
                ورود
            </Button>
        </Box>
        {subtitle}
    </>
);

export default AuthLogin;
