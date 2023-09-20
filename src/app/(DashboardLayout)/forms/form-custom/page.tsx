"use client"

import React from 'react';
import {
    Grid,
    Box,
    Typography,
    FormControl,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    Button,
    SliderValueLabelProps,
} from '@mui/material';
import { SliderThumb } from '@mui/material/Slider';

import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField';
import CustomSelect from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomSelect';
import CustomSlider from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomSlider';
import CustomRangeSlider from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomRangeSlider';
import CustomSwitch from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomSwitch';
import CustomDisabledButton from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomDisabledButton';
import CustomOutlinedButton from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomOutlinedButton';
import CustomFormLabel from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel';
import CustomCheckbox from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomCheckbox';
import CustomRadio from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomRadio';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';
import { IconVolume, IconVolume2 } from '@tabler/icons-react';
import { Stack } from '@mui/system';

function CustomThumbComponent(props: SliderValueLabelProps) {
    const { children, ...other } = props;

    return (
        <SliderThumb {...other}>
            {children}
            <Box
                sx={{
                    height: 9,
                    width: '2px',
                    backgroundColor: '#fff',
                }}
            />
            <Box
                sx={{
                    height: '14px',
                    width: '2px',
                    backgroundColor: '#fff',
                    ml: '2px',
                }}
            />
            <Box
                sx={{
                    height: 9,
                    width: '2px',
                    backgroundColor: '#fff',
                    ml: '2px',
                }}
            />
        </SliderThumb>
    );
}

export default function FormCustom() {
    const [age, setAge] = React.useState('1');
    const [select1, setSelect] = React.useState('1');
    const [select2, setSelect2] = React.useState('1');

    const handleChange = (event: any) => {
        setAge(event.target.value);
    };
    const handleChange4 = (event2: any) => {
        setSelect(event2.target.value);
    };

    const handleChange5 = (event3: any) => {
        setSelect2(event3.target.value);
    };

    const [value, setValue] = React.useState(null);
    const [value2, setValue2] = React.useState(null);

    const [value3, setValue3] = React.useState(30);
    const handleChange6 = (event: any, newValue: any) => {
        setValue3(newValue);
    };

    return (
        <PageContainer title="Custom Form" description="this is Custom Form">
            <ParentCard title="ایجاد سوابق فعالیت">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} lg={4}>
                        <CustomFormLabel htmlFor="name">عنوان</CustomFormLabel>
                        <CustomTextField id="name" placeholder="عنوان را وارد کنید" variant="outlined" fullWidth />
                        <CustomFormLabel htmlFor="demo-simple-select">نوع همکاری</CustomFormLabel>
                        <CustomSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value={1}>تمام وقت</MenuItem>
                            <MenuItem value={2}>پاره وقت</MenuItem>
                        </CustomSelect>
                        <CustomFormLabel htmlFor="time">سمت</CustomFormLabel>
                        <CustomTextField id="cname" placeholder="عنوان شغلی را وارد کنید" variant="outlined" fullWidth />
                    </Grid>
                    {/* ----------------------------------- */}
                    {/* column 2 */}
                    {/* ----------------------------------- */}
                    <Grid item xs={12} sm={12} lg={4}>
                        <CustomFormLabel htmlFor="cname">آدرس</CustomFormLabel>
                        <CustomTextField id="cname" placeholder="آدرس را وارد کنید" variant="outlined" fullWidth />
                        <CustomFormLabel htmlFor="time">نام موسسه</CustomFormLabel>
                        <CustomTextField id="cname" placeholder="نام موسسه را وارد کنید" variant="outlined" fullWidth />
                        <CustomFormLabel htmlFor="time">نام موسسه</CustomFormLabel>
                        <CustomTextField id="cname" placeholder="نام موسسه را وارد کنید" variant="outlined" fullWidth />
                    </Grid>
                    {/* ----------------------------------- */}
                    {/* column 3 */}
                    {/* ----------------------------------- */}
                    <Grid item xs={12} sm={12} lg={4}>
                        <CustomFormLabel htmlFor="date">تاریخ شروع</CustomFormLabel>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                renderInput={(props) => (
                                    <CustomTextField
                                        {...props}
                                        fullWidth
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                width: 18,
                                                height: 18,
                                            },
                                            '& .MuiFormHelperText-root': {
                                                display: 'none',
                                            },
                                        }}
                                    />
                                )}
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </LocalizationProvider>
                        <CustomFormLabel htmlFor="date">تاریخ پایان</CustomFormLabel>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                renderInput={(props) => (
                                    <CustomTextField
                                        {...props}
                                        fullWidth
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                width: 18,
                                                height: 18,
                                            },
                                            '& .MuiFormHelperText-root': {
                                                display: 'none',
                                            },
                                        }}
                                    />
                                )}
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </LocalizationProvider>
                    </Grid>
                    {/* ----------------------------------- */}
                    {/* column 4 */}
                    {/* ----------------------------------- */}

                    <Grid item xs={12} sm={12} lg={12} >
                        {/* <CustomFormLabel>Switch</CustomFormLabel> */}
                        <Grid container spacing={0} my={4}>
                            <Grid item xs={12} sm={6} lg={3}>
                                <FormControlLabel control={<CustomSwitch />} label="گواهینامه" />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={3}>
                                <FormControlLabel control={<CustomSwitch defaultChecked />} label="فعالیت مرتبط" />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={3}>
                                <FormControlLabel control={<CustomSwitch defaultChecked />} label="فعالیت جاری" />
                            </Grid>
                        </Grid>
                        {/* button */}
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                            justifyContent="space-between"
                            mt={2}
                        >
                            <Stack spacing={1} direction="row">
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <Button variant="contained" color="error">
                                    لغو
                                </Button>
                                <Button variant="contained" color="success">
                                    ثبت
                                </Button>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </ParentCard>
        </PageContainer >
    );
};

