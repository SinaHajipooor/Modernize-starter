'use client'
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";

export default function Loading() {
    return (
        //     <Box
        //       sx={{
        //         display: "flex",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         width: "100%",
        //         height: "100vh",
        //       }}
        //     >
        //       <CircularProgress />
        //     </Box>

        <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={50} />
        </Box>
    );
};

