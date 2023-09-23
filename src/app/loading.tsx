'use client'
import { LinearProgress } from "@mui/material";
import Box from "@mui/material/Box";
import { SyncLoader } from "react-spinners";

export default function Loading() {
    return (
        // <Box
        //     sx={{
        //         display: "flex",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         width: "100%",
        //         height: "100vh",
        //     }}
        // >
        //     {/* <SyncLoader color="#36afd7" /> */}

        // </Box>
        <LinearProgress />
    );
};
