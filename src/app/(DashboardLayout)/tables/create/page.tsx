"use client"

import React, { Children, useState } from 'react';
import {
    Grid,
    MenuItem,
    FormControlLabel,
    Button,
    TextField,
    Box,
    Typography,
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
import { Formik, useFormik, Form } from 'formik';
import * as Yup from 'yup'
import Link from 'next/link';

export default function FormCustom() {
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [file, setFile] = useState(null);
    // upload file 
    const handleFileUpload = (event: any) => {
        const selectedFile = event.target.files[0];
        console.log(selectedFile)
        if (selectedFile) {
            setFile(selectedFile);
        } else {
            setFile(null);
        }
    };

    // validation schema 
    const formValidationSchema = Yup.object({
        title: Yup.string()
            .matches(/^[A-Za-z\s]*$/, 'فقط متن وارد کنید')
            .required('عنوان اجباری است'),
        position: Yup.string().required('سمت اجباری است'),
        address: Yup.string().required('آدرس اجباری است'),
        instituteTitle: Yup.string().required('نام موسسه اجباری است'),
        duration: Yup.number().integer().typeError('لطفا عدد وارد کنید').required('مدت اجباری است'),
        workType: Yup.string().required('نوع همکاری را انتخاب کنید'),
    });
    // form handler 
    const formik = useFormik({
        initialValues: {
            title: '',
            address: '',
            instituteTitle: '',
            position: '',
            duration: null,
            workType: '1',
            startDate: null,
        },
        validationSchema: formValidationSchema,
        onSubmit: (values) => console.log(values)
    })

    return (
        <Box mt={3}>
            <PageContainer title="Custom Form" description="this is Custom Form">
                <ParentCard title="ایجاد سوابق فعالیت" >
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} lg={4}>
                                <CustomFormLabel htmlFor="title">عنوان</CustomFormLabel>
                                <CustomTextField value={formik.values.title} name='title' onChange={formik.handleChange} error={formik.touched.title && Boolean(formik.errors.title)}
                                    helperText={formik.touched.title && formik.errors.title} id="title" placeholder="عنوان را وارد کنید" variant="outlined" fullWidth />
                                <CustomFormLabel htmlFor="position">سمت</CustomFormLabel>
                                <CustomTextField value={formik.values.position} name='position' onChange={formik.handleChange} error={formik.touched.position && Boolean(formik.errors.position)}
                                    helperText={formik.touched.position && formik.errors.position} placeholder="سمت را وارد کنید" variant="outlined" fullWidth />
                                <CustomFormLabel htmlFor="workType">نوع همکاری</CustomFormLabel>
                                <CustomSelect
                                    value={formik.values.workType} name='workType' onChange={(value: any) => {
                                        formik.setFieldValue('workType', value);
                                        formik.setFieldTouched('workType', true);
                                    }} error={formik.touched.workType && Boolean(formik.errors.workType)}
                                    helperText={formik.touched.workType && formik.errors.workType}
                                    labelId="workType"
                                    id="workType"
                                    fullWidth
                                >
                                    <MenuItem value={'1'}>تمام وقت</MenuItem>
                                    <MenuItem value={'2'} >پاره وقت</MenuItem>
                                </CustomSelect>

                            </Grid>
                            {/* ----------------------------------- */}
                            {/* column 2 */}
                            {/* ----------------------------------- */}
                            <Grid item xs={12} sm={12} lg={4}>
                                <CustomFormLabel htmlFor="address">آدرس</CustomFormLabel>
                                <CustomTextField value={formik.values.address} name='address' onChange={formik.handleChange} error={formik.touched.address && Boolean(formik.errors.address)}
                                    helperText={formik.touched.address && formik.errors.address} id="address" placeholder="آدرس را وارد کنید" variant="outlined" fullWidth />
                                <CustomFormLabel htmlFor="instituteTitle">نام موسسه</CustomFormLabel>
                                <CustomTextField value={formik.values.instituteTitle} name='instituteTitle' onChange={formik.handleChange} error={formik.touched.instituteTitle && Boolean(formik.errors.instituteTitle)}
                                    helperText={formik.touched.instituteTitle && formik.errors.instituteTitle} id="instituteTitle" placeholder="نام موسسه را وارد کنید" variant="outlined" fullWidth />
                                <CustomFormLabel htmlFor="duration">مدت</CustomFormLabel>
                                <CustomTextField value={formik.values.duration} name='duration' onChange={formik.handleChange} error={formik.touched.duration && Boolean(formik.errors.duration)}
                                    helperText={formik.touched.duration && formik.errors.duration} id="duration" placeholder="مدت را وارد کنید" variant="outlined" fullWidth />
                            </Grid>
                            {/* ----------------------------------- */}
                            {/* column 3 */}
                            {/* ----------------------------------- */}
                            <Grid item xs={12} sm={12} lg={4}>
                                <CustomFormLabel htmlFor="time">تاریخ شروع</CustomFormLabel>
                                <LocalizationProvider dateAdapter={AdapterDateFns} name='startDate'>
                                    <DatePicker
                                        className='startDate'
                                        value={formik.values.startDate}
                                        onChange={(date) => {
                                            formik.setFieldValue('startDate', date);
                                            formik.setFieldTouched('startDate', true);
                                        }}
                                        renderInput={(props) => (
                                            <CustomTextField
                                                {...props}
                                                fullWidth
                                                size="larg"
                                                sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        width: '20px',
                                                        height: '20px',
                                                    },
                                                    '& .MuiFormHelperText-root': {
                                                        display: 'none',
                                                    },
                                                }}
                                            />
                                        )}
                                    />
                                </LocalizationProvider>



                                <Grid >
                                    <CustomFormLabel htmlFor="endDate">تاریخ پایان</CustomFormLabel>

                                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                                        <DatePicker
                                            renderInput={(props) => (
                                                <CustomTextField

                                                    {...props}
                                                    fullWidth
                                                    size="larg"
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
                                        <FormControlLabel control={<CustomSwitch
                                        />} label="گواهینامه" name='hasCertificate' />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={3}>
                                        <FormControlLabel control={<CustomSwitch name='isRelated' defaultChecked />} label="فعالیت مرتبط" />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={3}>
                                        <FormControlLabel control={<CustomSwitch name='isCurrent' defaultChecked />} label="فعالیت جاری" />
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
                                        <Button LinkComponent={Link} href='/tables/basic' variant="contained" type='reset' color="error">
                                            برگشت
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

