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
    });

    function formatDate(date: any) {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        return `${month}/${day}/${year}`;
    }

    // form handler 
    const formik = useFormik({
        initialValues: {
            title: '',
            address: '',
            instituteTitle: '',
            position: '',
            duration: undefined,
            workType: 1,
            startDate: null,
            endDate: null,
            hasCertificate: false,
            isRelated: false,
            isCurrent: false,
        },
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log(formatDate(formik.values.startDate))
        }
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
                                <CustomTextField value={formik.values.position} name='position' id='position' onChange={formik.handleChange} error={formik.touched.position && Boolean(formik.errors.position)}
                                    helperText={formik.touched.position && formik.errors.position} placeholder="سمت را وارد کنید" variant="outlined" fullWidth />
                                <CustomFormLabel htmlFor="workType">نوع همکاری</CustomFormLabel>
                                <CustomSelect
                                    value={formik.values.workType} name='workType' onChange={formik.handleChange} error={formik.touched.workType && Boolean(formik.errors.workType)}
                                    helperText={formik.touched.workType && formik.errors.workType}
                                    labelId="workType"
                                    id="workType"
                                    fullWidth
                                >
                                    <MenuItem value={1}>تمام وقت</MenuItem>
                                    <MenuItem value={2} >پاره وقت</MenuItem>
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
                                <CustomFormLabel htmlFor="endDate">تاریخ پایان</CustomFormLabel>
                                <LocalizationProvider dateAdapter={AdapterDateFns} name='endDate'>
                                    <DatePicker
                                        className='endDate'
                                        value={formik.values.endDate}
                                        onChange={(date) => {
                                            formik.setFieldValue('endDate', date);
                                            formik.setFieldTouched('endDate', true);
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
                                        />} label="گواهینامه" value={formik.values.hasCertificate} name='hasCertificate' onChange={formik.handleChange} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={3}>
                                        <FormControlLabel control={<CustomSwitch value={formik.values.isRelated} name='isRelated' onChange={formik.handleChange} />} label="فعالیت مرتبط" />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={3}>
                                        <FormControlLabel control={<CustomSwitch value={formik.values.isCurrent} name='isCurrent' onChange={formik.handleChange} />} label="فعالیت جاری" />
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

