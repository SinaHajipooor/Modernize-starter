import React, { useEffect, useState } from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    Chip,
    Menu,
    MenuItem,
    IconButton,
    ListItemIcon,
} from '@mui/material';
import BlankCard from '../shared/BlankCard';
import { Box, Stack } from '@mui/system';
import { IconDotsVertical, IconEdit, IconPlus, IconTrash } from '@tabler/icons-react';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiDeleteActivityHistory } from '@/utils/api/activity-histories/apiActivityHistories';

const Table2 = ({ data }: any) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [currentRowId, setcurrentRowId] = useState(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, row: any) => {
        setAnchorEl(event.currentTarget);
        setcurrentRowId(row.id)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // to access our query client setup 
    const queryClient = useQueryClient()
    // mutate the activity history 
    const { isLoading, mutate } = useMutation({
        mutationFn: apiDeleteActivityHistory,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['activity-histories']
            })
            handleClose();
        },
        onError: () => { }
    })
    // ui
    return (
        <BlankCard>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h6">عنوان</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">سمت</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">آدرس</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">نوع همکاری</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">تاریخ شروع</Typography>
                            </TableCell>
                            <TableCell>action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row: any) => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <Box>
                                            <Typography variant="h6">{row.title}</Typography>
                                        </Box>
                                    </Stack>
                                </TableCell>
                                <TableCell scope="row">
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {row.position}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle1" color="textSecondary">{row.address}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        label={row.work_type}
                                        sx={{
                                            backgroundColor:
                                                row.work_type == 'تمام وقت'
                                                    ? (theme) => theme.palette.primary.light
                                                    : row.status == 'پاره وقت'
                                                        ? (theme) => theme.palette.error.light
                                                        : (theme) => theme.palette.success.light,
                                            color:
                                                row.work_type == 'تمام وقت'
                                                    ? (theme) => theme.palette.primary.main
                                                    : row.work_type == 'پاره وقت'
                                                        ? (theme) => theme.palette.error.main
                                                        : (theme) => theme.palette.success.main,
                                        }}
                                    />
                                </TableCell>
                                <TableCell scope="row">
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {row.start_date}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <IconButton
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={(event) => handleClick(event, row)}
                                    >
                                        <IconDotsVertical width={18} />
                                    </IconButton>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >

                                        <MenuItem onClick={handleClose}>
                                            <ListItemIcon>
                                                <IconEdit width={18} />
                                            </ListItemIcon>
                                            Edit
                                        </MenuItem>
                                        <MenuItem onClick={() => mutate(currentRowId)} disabled={isLoading}>
                                            <ListItemIcon>
                                                <IconTrash width={18} />
                                            </ListItemIcon>
                                            Delete
                                        </MenuItem>
                                    </Menu>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </BlankCard >
    );
};

export default Table2;
