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
import { useFormik } from 'formik';

export default function FormCustom() {

    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [file, setFile] = useState(null);


    const handleFileUpload = (event: any) => {
        const selectedFile = event.target.files[0];
        console.log(selectedFile)
        if (selectedFile) {
            setFile(selectedFile);
        } else {
            setFile(null);
        }
    };

    const formik = useFormik({
        initialValues: {
            title: '',
            workType: 1,
            position: '',
            address: '',
            instituteTitle: '',
            duration: '',
            isCurrent: false,
            isRelated: false,
            hasCertificate: false
        },
        onSubmit: () => { }
    })
    // handle form submite
    function submitHandler(e: any) {
        e.preventDefault();
        console.log({ ...formik.values, startDate, endDate, file })
    }

    return (
        <Box mt={3}>
            <PageContainer title="Custom Form" description="this is Custom Form">
                <ParentCard title="ایجاد سوابق فعالیت" >
                    <form onSubmit={submitHandler}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} lg={4}>
                                <CustomFormLabel htmlFor="title">عنوان</CustomFormLabel>
                                <CustomTextField value={formik.values.title} name='title' id="title" placeholder="عنوان را وارد کنید" variant="outlined" fullWidth onChange={formik.handleChange} />
                                <CustomFormLabel htmlFor="workType">نوع همکاری</CustomFormLabel>
                                <CustomSelect
                                    name='workType'
                                    value={formik.values.workType}
                                    onChange={formik.handleChange}
                                    labelId="workType"
                                    id="workType"
                                    fullWidth

                                >
                                    <MenuItem value={1}>تمام وقت</MenuItem>
                                    <MenuItem value={2} >پاره وقت</MenuItem>
                                </CustomSelect>
                                <CustomFormLabel htmlFor="position">سمت</CustomFormLabel>
                                <CustomTextField name='position' value={formik.values.position} onChange={formik.handleChange} placeholder="عنوان شغلی را وارد کنید" variant="outlined" fullWidth />
                            </Grid>
                            {/* ----------------------------------- */}
                            {/* column 2 */}
                            {/* ----------------------------------- */}
                            <Grid item xs={12} sm={12} lg={4}>
                                <CustomFormLabel htmlFor="address">آدرس</CustomFormLabel>
                                <CustomTextField name='address' value={formik.values.address} onChange={formik.handleChange} id="address" placeholder="آدرس را وارد کنید" variant="outlined" fullWidth />
                                <CustomFormLabel htmlFor="instituteTitle">نام موسسه</CustomFormLabel>
                                <CustomTextField name='instituteTitle' value={formik.values.instituteTitle} onChange={formik.handleChange} id="instituteTitle" placeholder="نام موسسه را وارد کنید" variant="outlined" fullWidth />
                                <CustomFormLabel htmlFor="duration">مدت</CustomFormLabel>
                                <CustomTextField name='duration' value={formik.values.duration} id="duration" placeholder="مدت را وارد کنید" variant="outlined" fullWidth onChange={formik.handleChange} />

                            </Grid>
                            {/* ----------------------------------- */}
                            {/* column 3 */}
                            {/* ----------------------------------- */}
                            <Grid item xs={12} sm={12} lg={4}>

                                <Grid>
                                    <CustomFormLabel htmlFor="time">تاریخ شروع</CustomFormLabel>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} name='startDate'>
                                        <DatePicker
                                            className='startDate'
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
                                            value={startDate}
                                            onChange={(newDate) => setStartDate(newDate)}

                                        />

                                    </LocalizationProvider>
                                </Grid>
                                <Grid mt={5}>
                                    <CustomFormLabel htmlFor="endDate">تاریخ پایان</CustomFormLabel>

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
                                            value={endDate}
                                            onChange={(newDate) => setEndDate(newDate)}
                                        />
                                    </LocalizationProvider>

                                </Grid>
                                <Grid mt={7}>
                                    <Box
                                        border={0.2}
                                        borderRadius={1}
                                        overflow="hidden"
                                        display="flex"
                                        justifyContent="start"
                                        borderColor="#bcbcbc"
                                        height={45}
                                    >
                                        <label htmlFor="file-input">
                                            <Button
                                                variant="contained"
                                                component="span"
                                                style={{ height: '100%', overflow: 'hidden', width: '100px' }}
                                            >
                                                آپلود فایل
                                            </Button>
                                        </label>
                                        <span
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'start',
                                                paddingRight: '18px',
                                                paddingLeft: '8px',
                                            }}
                                        >
                                            {file && 'فایل مورد نظر انتخاب شد'}
                                        </span>
                                        <TextField
                                            name="file"
                                            type="file"
                                            id="file-input"
                                            onChange={handleFileUpload}
                                            style={{ display: 'none' }}
                                        />
                                    </Box>

                                </Grid>
                            </Grid>
                            {/* ----------------------------------- */}
                            {/* column 4 */}
                            {/* ----------------------------------- */}

                            <Grid item xs={12} sm={12} lg={12} >
                                <Grid container spacing={0} my={4}>

                                    <Grid item xs={12} sm={6} lg={3}>
                                        <FormControlLabel control={<CustomSwitch value={formik.values.hasCertificate}
                                        />} label="گواهینامه" name='hasCertificate' onChange={formik.handleChange} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={3}>
                                        <FormControlLabel control={<CustomSwitch value={formik.values.isRelated} name='isRelated' onChange={formik.handleChange} defaultChecked />} label="فعالیت مرتبط" />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={3}>
                                        <FormControlLabel control={<CustomSwitch value={formik.values.isCurrent} name='isCurrent' onChange={formik.handleChange} defaultChecked />} label="فعالیت جاری" />
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
                                        <Button variant="contained" type='reset' color="error">
                                            لغو
                                        </Button>
                                        <Button type='submit' variant="contained" color="success">
                                            ثبت
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>
                    </form>
                </ParentCard>
            </PageContainer >
        </Box >
    );
};

