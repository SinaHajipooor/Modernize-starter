'use client'
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";
import { SyncLoader } from "react-spinners";

export default function Loading() {
    return (

        <Box sx={{ width: '100%' }}>
            <SyncLoader color="#36d7b7" />
        </Box>
    );
};
