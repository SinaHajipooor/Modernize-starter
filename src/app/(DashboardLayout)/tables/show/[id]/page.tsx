'use client'
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
import Link from 'next/link';
import Spinner from '@/app/(DashboardLayout)/components/ui/Spinner';
import useActivityDetails from '../../hooks/useActivityDetails'
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';


export default function ShowForm({ params }: any) {

    const { isLoading, activityHistory } = useActivityDetails(params.id)


    // form handler 
    const formik = useFormik({
        initialValues: {
            title: activityHistory?.title,
            address: activityHistory?.address,
            instituteTitle: activityHistory?.institute_title,
            position: activityHistory?.position,
            duration: activityHistory?.duration,
            workType: activityHistory?.work_type,
            startDate: activityHistory?.start_date,
            endDate: activityHistory?.end_date,
            hasCertificate: activityHistory?.has_certificate,
            isRelated: activityHistory?.is_related,
            isCurrent: activityHistory?.current_position,
        },
        onSubmit: () => { }
    })

    return (
        <Box mt={3}>
            <PageContainer title="show Form" description="this is Custom Form">
                <ParentCard title="جزییات سوابق فعالیت" >
                    {isLoading ? <Spinner /> :
                        <form>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} lg={4}>
                                    <CustomFormLabel htmlFor="title">عنوان</CustomFormLabel>
                                    <CustomTextField InputProps={{ readOnly: true, disabled: false }} value={formik.values.title} name='title' id="title" placeholder="عنوان را وارد کنید" variant="outlined" fullWidth />
                                    <CustomFormLabel htmlFor="position">سمت</CustomFormLabel>
                                    <CustomTextField InputProps={{ readOnly: true, disabled: false }} value={formik.values.position} name='position' id='position' placeholder="سمت را وارد کنید" variant="outlined" fullWidth />
                                    <CustomFormLabel htmlFor="workType">نوع همکاری</CustomFormLabel>
                                    <CustomSelect
                                        value={formik.values.workType ?? 1} name='workType'
                                        InputProps={{ readOnly: true, disabled: false }}
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
                                    <CustomTextField value={formik.values.address} name='address' InputProps={{ readOnly: true, disabled: false }} id="address" placeholder="آدرس را وارد کنید" variant="outlined" fullWidth />
                                    <CustomFormLabel htmlFor="instituteTitle">نام موسسه</CustomFormLabel>
                                    <CustomTextField value={formik.values.instituteTitle} name='instituteTitle' InputProps={{ readOnly: true, disabled: false }} id="instituteTitle" placeholder="نام موسسه را وارد کنید" variant="outlined" fullWidth />
                                    <CustomFormLabel htmlFor="duration">مدت</CustomFormLabel>
                                    <CustomTextField value={formik.values.duration} name='duration' InputProps={{ readOnly: true, disabled: false }} id="duration" placeholder="مدت را وارد کنید" variant="outlined" fullWidth />
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
                                            onChange={() => { }}
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
                                            onChange={() => {
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
                                                {activityHistory?.file && 'فایل مورد نظر انتخاب شد'}
                                            </span>
                                            <TextField
                                                name="file"
                                                type="file"
                                                id="file-input"
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
                                                checked={formik.values.hasCertificate}
                                                readOnly={true}
                                            />} label="گواهینامه" name='hasCertificate' />
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={3}>
                                            <FormControlLabel control={<CustomSwitch readOnly={true} checked={formik.values.isRelated} name='isRelated' />} label="فعالیت مرتبط" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={3}>
                                            <FormControlLabel control={<CustomSwitch readOnly={true} checked={formik.values.isCurrent} name='isCurrent' />} label="فعالیت جاری" />
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
                                            {/* <Button type='submit' disabled={isUpdating} variant="contained" color="success">
                                                ثبت
                                            </Button> */}
                                        </Stack>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </form>}
                </ParentCard>
            </PageContainer >
        </Box >
    );
};


