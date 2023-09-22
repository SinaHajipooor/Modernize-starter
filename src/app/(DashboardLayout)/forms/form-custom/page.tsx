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
import { useForm } from 'react-hook-form';


export default function FormCustom() {

    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);



    //     const handleFileUpload = (event: any) => {
    //         const selectedFile = event.target.files[0];
    //         console.log(selectedFile)
    //         if (selectedFile) {
    //             setFile(selectedFile.name);
    //         } else {
    //             setFile(null);
    //         }
    //     };


    //     const [file, setFile] = useState(null);

    //     function handleChange(event: any) {
    //         console.log(event.target.files)
    //         setFile(event.target.files[0]);
    //     };

    const { register, handleSubmit } = useForm()


    // submit the form 
    function onSubmitHandler(data: any) {
        console.log(data)
    }

    return (
        <Box mt={3}>
            <PageContainer title="Custom Form" description="this is Custom Form">
                <ParentCard title="ایجاد سوابق فعالیت" >
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} lg={4}>
                                <CustomFormLabel htmlFor="title">عنوان</CustomFormLabel>
                                <CustomTextField  {...register('title')} id="title" placeholder="عنوان را وارد کنید" variant="outlined" fullWidth />
                                <CustomFormLabel htmlFor="workType">نوع همکاری</CustomFormLabel>
                                <CustomSelect
                                    {...register('workType')}
                                    labelId="workType"
                                    id="workType"
                                    fullWidth
                                >
                                    <MenuItem >تمام وقت</MenuItem>
                                    <MenuItem >پاره وقت</MenuItem>
                                </CustomSelect>
                                <CustomFormLabel htmlFor="position">سمت</CustomFormLabel>
                                <CustomTextField {...register('position')} placeholder="عنوان شغلی را وارد کنید" variant="outlined" fullWidth />
                            </Grid>
                            {/* ----------------------------------- */}
                            {/* column 2 */}
                            {/* ----------------------------------- */}
                            <Grid item xs={12} sm={12} lg={4}>
                                <CustomFormLabel htmlFor="address">آدرس</CustomFormLabel>
                                <CustomTextField {...register('address')} id="address" placeholder="آدرس را وارد کنید" variant="outlined" fullWidth />
                                <CustomFormLabel htmlFor="instituteTitle">نام موسسه</CustomFormLabel>
                                <CustomTextField {...register('instituteTitle')} id="instituteTitle" placeholder="نام موسسه را وارد کنید" variant="outlined" fullWidth />
                                <CustomFormLabel htmlFor="duration">مدت</CustomFormLabel>
                                <CustomTextField {...register('duration')} id="duration" placeholder="مدت را وارد کنید" variant="outlined" fullWidth />

                            </Grid>
                            {/* ----------------------------------- */}
                            {/* column 3 */}
                            {/* ----------------------------------- */}
                            <Grid item xs={12} sm={12} lg={4}>

                                <Grid>
                                    <CustomFormLabel htmlFor="time">تاریخ شروع</CustomFormLabel>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                                        <DatePicker
                                            renderInput={(props) => (
                                                <CustomTextField
                                                    //     {...register('startDate')}
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
                                            onChange={(newDate: any) => setStartDate(newDate)}
                                        />

                                    </LocalizationProvider>
                                </Grid>
                                <Grid mt={5}>
                                    <CustomFormLabel htmlFor="endDate">تاریخ پایان</CustomFormLabel>

                                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                                        <DatePicker
                                            renderInput={(props) => (
                                                <CustomTextField
                                                    {...register('endDate')}
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
                                    <Box border={0.2} borderRadius={2} overflow='hidden' display="flex" justifyContent="space-between" borderColor='#bcbcbc' height={45}>
                                        <TextField
                                            {...register('file')}
                                            type="file"
                                            id="file-input"
                                            // onChange={handleFileUpload}
                                            style={{ display: 'none' }}
                                        />
                                        <label htmlFor="file-input">
                                            <Button variant="contained" component="span" style={{ height: '100%', overflow: 'hidden', width: '100px' }} >
                                                آپلود فایل
                                            </Button>
                                        </label>
                                        {/* {file && (
                                        <span style={{ display: 'flex', alignItems: 'center', paddingRight: '8px', paddingLeft: '8px' }}>
                                            {file}
                                        </span>
                                    )} */}
                                    </Box>
                                </Grid>
                            </Grid>
                            {/* ----------------------------------- */}
                            {/* column 4 */}
                            {/* ----------------------------------- */}

                            <Grid item xs={12} sm={12} lg={12} >
                                <Grid container spacing={0} my={4}>

                                    <Grid item xs={12} sm={6} lg={3}>
                                        <FormControlLabel control={<CustomSwitch {...register('hasCertificate')} />} label="گواهینامه" />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={3}>
                                        <FormControlLabel control={<CustomSwitch {...register('isRelated')} defaultChecked />} label="فعالیت مرتبط" />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={3}>
                                        <FormControlLabel control={<CustomSwitch {...register('isCurrent')} defaultChecked />} label="فعالیت جاری" />
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

