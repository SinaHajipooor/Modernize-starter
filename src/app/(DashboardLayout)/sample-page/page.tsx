"use client";
import { Typography } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";

export default function SamplePage() {
    return (
        <PageContainer title="Sample Page" description="this is Sample page">
            <DashboardCard title="Sample Page">
                <Typography>This is a sample2 page</Typography>
            </DashboardCard>
        </PageContainer>
    );
};


