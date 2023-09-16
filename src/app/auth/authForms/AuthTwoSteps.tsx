import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel";
import { Stack } from "@mui/system";

const AuthTwoSteps = () => (
    <>
        <Box mt={4}>
            <Stack mb={3}>
                <CustomFormLabel htmlFor="code">
                    کد 6 رقمی را وارد کنید{" "}
                </CustomFormLabel>
                <Stack spacing={2} direction="row">
                    <CustomTextField id="code" variant="outlined" fullWidth />
                    <CustomTextField id="code" variant="outlined" fullWidth />
                    <CustomTextField id="code" variant="outlined" fullWidth />
                    <CustomTextField id="code" variant="outlined" fullWidth />
                    <CustomTextField id="code" variant="outlined" fullWidth />
                    <CustomTextField id="code" variant="outlined" fullWidth />
                </Stack>
            </Stack>
            <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                component={Link}
                href="/"
            >
                احراز هویت
            </Button>

            <Stack direction="row" spacing={1} mt={3} justifyContent='center'>
                <Typography color="textSecondary" variant="h6" fontWeight="400">
                    کد را دریافت نکردید ؟
                </Typography>
                <Typography
                    component={Link}
                    href="/"
                    fontWeight="500"
                    sx={{
                        textDecoration: "none",
                        color: "primary.main",
                    }}
                >
                    دوباره ارسال کن
                </Typography>
            </Stack>
        </Box>
    </>
);

export default AuthTwoSteps;
