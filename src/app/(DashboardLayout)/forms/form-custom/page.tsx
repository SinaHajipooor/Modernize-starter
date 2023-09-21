"use client"

import React, { useState } from 'react';
import {
    Grid,
    MenuItem,
    FormControlLabel,
    Button,
    TextField,
    Box,
} from '@mui/material';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField';
import CustomSelect from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomSelect';
import CustomSwitch from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomSwitch';
import CustomFormLabel from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';
import { Stack } from '@mui/system';
import { format } from 'date-fns';


export default function FormCustom() {
    const [age, setAge] = React.useState('1');
    const [select1, setSelect] = React.useState('1');
    const [select2, setSelect2] = React.useState('1');

    //     const handleChange = (event: any) => {
    //         setAge(event.target.value);
    //     };
    const handleChange4 = (event2: any) => {
        setSelect(event2.target.value);
    };

    const handleChange5 = (event3: any) => {
        setSelect2(event3.target.value);
    };

    const [value, setValue] = React.useState(null);
    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (newValue: any) => {
        // Handle the selected date here
        console.log(newValue);
        // Format the selected date into "mm/dd/yyyy" format
        const formattedDate = format(newValue, 'MM/dd/yyyy');
        console.log('Formatted Date:', formattedDate);
        setSelectedDate(newValue);
    };

    const handleFileUpload = (event: any) => {
        const selectedFile = event.target.files[0];
        console.log(selectedFile)
        if (selectedFile) {
            setFile(selectedFile.name);
        } else {
            setFile(null);
        }
    };


    const [file, setFile] = useState(null);

    function handleChange(event: any) {
        console.log(event.target.files)
        setFile(event.target.files[0]);
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
                        <CustomFormLabel htmlFor="time">مدت</CustomFormLabel>
                        <CustomTextField id="cname" placeholder="مدت را وارد کنید" variant="outlined" fullWidth />

                    </Grid>
                    {/* ----------------------------------- */}
                    {/* column 3 */}
                    {/* ----------------------------------- */}
                    <Grid item xs={12} sm={12} lg={4}>

                        <Grid>
                            <CustomFormLabel htmlFor="date">تاریخ شروع</CustomFormLabel>
                            <LocalizationProvider dateAdapter={AdapterDateFns} >
                                <DatePicker
                                    renderInput={(props) => (
                                        <CustomTextField
                                            {...props}
                                            fullWidth
                                            size="small"
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    width: '18px',
                                                    height: '18px',
                                                },
                                                '& .MuiFormHelperText-root': {
                                                    display: 'none',
                                                },
                                            }}
                                        />
                                    )}
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                />

                            </LocalizationProvider>
                        </Grid>
                        <Grid mt={5}>
                            <CustomFormLabel htmlFor="date">تاریخ پایان</CustomFormLabel>

                            <LocalizationProvider dateAdapter={AdapterDateFns} >
                                <DatePicker
                                    renderInput={(props) => (
                                        <CustomTextField
                                            {...props}
                                            fullWidth
                                            size="small"
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    width: '18px',
                                                    height: '18px',
                                                },
                                                '& .MuiFormHelperText-root': {
                                                    display: 'none',
                                                },
                                            }}
                                        />
                                    )}
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                />
                            </LocalizationProvider>

                        </Grid>
                        <Grid mt={7}>
                            <Box border={0.2} borderRadius={4} display="flex" justifyContent="space-between" borderColor='#dbdbdb' height={45}>
                                <TextField
                                    type="file"
                                    id="file-input"
                                    onChange={handleFileUpload}
                                    style={{ display: 'none' }}
                                />
                                <label htmlFor="file-input">
                                    <Button variant="contained" component="span" style={{ height: '100%' }}>
                                        Choose File
                                    </Button>
                                </label>
                                {file && (
                                    <span style={{ display: 'flex', alignItems: 'center', paddingRight: '8px', paddingLeft: '8px' }}>
                                        {file}
                                    </span>
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                    {/* ----------------------------------- */}
                    {/* column 4 */}
                    {/* ----------------------------------- */}

                    <Grid item xs={12} sm={12} lg={12} >
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

