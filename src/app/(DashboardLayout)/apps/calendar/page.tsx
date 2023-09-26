"use client"

import React, { useEffect } from 'react';
import {
    CardContent,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Fab,
    TextField,
    Typography,
} from '@mui/material';
import jalaliMoment from 'jalali-moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Events from '@/app/(DashboardLayout)/EventData';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { IconCheck } from '@tabler/icons-react';
import BlankCard from '@/app/(DashboardLayout)/components/shared/BlankCard';
import 'moment/locale/fa'; // Import the Farsi locale for moment.js
import 'jalali-moment'
import moment from 'moment';


type EvType = {
    title: string;
    allDay?: boolean;
    start?: Date;
    end?: Date;
    color?: string;
};

const BigCalendar = () => {
    const [calevents, setCalEvents] = React.useState<any>(Events);
    const [open, setOpen] = React.useState<boolean>(false);
    const [title, setTitle] = React.useState<string>('');
    const [slot, setSlot] = React.useState<EvType>();
    const [start, setStart] = React.useState<any | null>();
    const [end, setEnd] = React.useState<any | null>();
    const [color, setColor] = React.useState<string>('default');
    const [update, setUpdate] = React.useState<EvType | undefined | any>();

    const ColorVariation = [
        {
            id: 1,
            eColor: '#1a97f5',
            value: 'default',
        },
        {
            id: 2,
            eColor: '#39b69a',
            value: 'green',
        },
        {
            id: 3,
            eColor: '#fc4b6c',
            value: 'red',
        },
        {
            id: 4,
            eColor: '#615dff',
            value: 'azure',
        },
        {
            id: 5,
            eColor: '#fdd43f',
            value: 'warning',
        },
    ];
    const addNewEventAlert = (slotInfo: EvType) => {
        setOpen(true);
        setSlot(slotInfo);
        setStart(slotInfo.start);
        setEnd(slotInfo.end);
    };

    const editEvent = (event: any) => {
        setOpen(true);
        const newEditEvent = calevents.find((elem: EvType) => elem.title === event.title);
        setColor(event.color);
        setTitle(newEditEvent.title);
        setColor(newEditEvent.color);
        setStart(newEditEvent.start);
        setEnd(newEditEvent.end);
        setUpdate(event);
    };

    moment.locale('fa')
    //     jalaliMoment.locale('fa')
    const localizer = momentLocalizer(moment);

    const updateEvent = (e: any) => {
        e.preventDefault();
        setCalEvents(
            calevents.map((elem: EvType) => {
                if (elem.title === update.title) {
                    return { ...elem, title, start, end, color };
                }

                return elem;
            }),
        );
        setOpen(false);
        setTitle('');
        setColor('');
        setStart('');
        setEnd('');
        setUpdate(null);
    };
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const selectinputChangeHandler = (id: string) => setColor(id);

    const submitHandler = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        const newEvents = calevents;
        newEvents.push({
            title,
            start,
            end,
            color,
        });
        setOpen(false);
        e.target.reset();
        setCalEvents(newEvents);
        setTitle('');
        setStart(new Date());
        setEnd(new Date());
    };
    const deleteHandler = (event: EvType) => {
        const updatecalEvents = calevents.filter((ind: EvType) => ind.title !== event.title);
        setCalEvents(updatecalEvents);
    };

    const handleClose = () => {
        // eslint-disable-line newline-before-return
        setOpen(false);
        setTitle('');
        setStart(new Date());
        setEnd(new Date());
        setUpdate(null);
    };

    const eventColors = (event: EvType) => {
        if (event.color) {
            return { className: `event-${event.color}` };
        }

        return { className: `event-default` };
    };

    const handleStartChange = (newValue: any) => {
        setStart(newValue);
    };
    const handleEndChange = (newValue: any) => {
        setEnd(newValue);
    };


    return (
        <PageContainer title="Calendar" description="this is Calendar">
            {/* <Breadcrumb title="Calendar" subtitle="App" /> */}
            <BlankCard>
                {/* ------------------------------------------- */}
                {/* Calendar */}
                {/* ------------------------------------------- */}
                <CardContent>
                    <Calendar
                        selectable
                        events={calevents}
                        defaultView="month"
                        scrollToTime={start}
                        defaultDate={end}
                        localizer={localizer}
                        style={{ height: 'calc(100vh - 350px' }}
                        onSelectEvent={(event) => editEvent(event)}
                        onSelectSlot={(slotInfo: any) => addNewEventAlert(slotInfo)}
                        eventPropGetter={(event: any) => eventColors(event)}
                    />
                </CardContent>
            </BlankCard>
            {/* ------------------------------------------- */}
            {/* Add Calendar Event Dialog */}
            {/* ------------------------------------------- */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
                <form onSubmit={update ? updateEvent : submitHandler}>
                    <DialogContent>
                        {/* ------------------------------------------- */}
                        {/* Add Edit title */}
                        {/* ------------------------------------------- */}
                        <Typography variant="h4" sx={{ mb: 2 }}>
                            {update ? 'تغییر رویداد' : 'ایجاد رویداد'}
                        </Typography>
                        <Typography mb={3} variant="subtitle2">
                            {!update
                                ? 'برای افزودن رویداد لطفا عنوان را پر کنید و رنگ رویداد را انتخاب کنید و دکمه افزودن را فشار دهید'
                                : 'برای به‌روزرسانی رویداد لطفاً عنوان را تغییر دهید و رنگ رویداد را انتخاب کنید و دکمه به‌روزرسانی را فشار دهید'}
                            {slot?.title}
                        </Typography>
                        <TextField
                            id="Event Title"
                            placeholder="عنوان رویداد را وارد کنید"
                            variant="outlined"
                            fullWidth
                            label="عنوان رویداد"
                            value={title}
                            sx={{ mb: 3 }}
                            onChange={inputChangeHandler}
                        />
                        {/* ------------------------------------------- */}
                        {/* Selection of Start and end date */}
                        {/* ------------------------------------------- */}
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="تاریخ شروع"
                                inputFormat="MM/dd/yyyy"
                                value={start}
                                onChange={handleStartChange}
                                renderInput={(params: any) => <TextField {...params} fullWidth sx={{ mb: 3 }} />}
                            />
                            <DatePicker
                                label="تاریخ پایان"
                                inputFormat="MM/dd/yyyy"
                                value={end}
                                onChange={handleEndChange}
                                renderInput={(params: any) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        sx={{ mb: 3 }}
                                        error={start > end}
                                        helperText={start > end ? 'End date must be later than start date' : ''}
                                    />
                                )}
                            />
                        </LocalizationProvider>

                        {/* ------------------------------------------- */}
                        {/* Calendar Event Color*/}
                        {/* ------------------------------------------- */}
                        <Typography variant="h6" fontWeight={600} my={2}>
                            رنگ رویداد را انتخاب کنید
                        </Typography>
                        {/* ------------------------------------------- */}
                        {/* colors for event */}
                        {/* ------------------------------------------- */}
                        {ColorVariation.map((mcolor) => {
                            return (
                                <Fab
                                    color="primary"
                                    style={{ backgroundColor: mcolor.eColor }}
                                    sx={{
                                        marginRight: '3px',
                                        transition: '0.1s ease-in',
                                        scale: mcolor.value === color ? '0.9' : '0.7',
                                    }}
                                    size="small"
                                    key={mcolor.id}
                                    onClick={() => selectinputChangeHandler(mcolor.value)}
                                >
                                    {mcolor.value === color ? <IconCheck width={16} /> : ''}
                                </Fab>
                            );
                        })}
                    </DialogContent>
                    {/* ------------------------------------------- */}
                    {/* Action for dialog */}
                    {/* ------------------------------------------- */}
                    <DialogActions sx={{ p: 3 }}>
                        {!update && <Button
                            style={{ fontFamily: 'IRANSans' }}
                            onClick={handleClose}>لغو</Button>}
                        {update ? (
                            <Button
                                type="submit"
                                color="error"
                                variant="contained"
                                style={{ fontFamily: 'IRANSans' }}

                                onClick={() => deleteHandler(update)}
                            >
                                حذف
                            </Button>
                        ) : (
                            ''
                        )}
                        <Button type="submit"
                            style={{ fontFamily: 'IRANSans' }}

                            disabled={!title} variant="contained">
                            {update ? 'تغییر رویداد' : 'افزودن رویداد'}
                        </Button>
                    </DialogActions>
                    {/* ------------------------------------------- */}
                    {/* End Calendar */}
                    {/* ------------------------------------------- */}
                </form>
            </Dialog>
        </PageContainer>
    );
};

export default BigCalendar;
