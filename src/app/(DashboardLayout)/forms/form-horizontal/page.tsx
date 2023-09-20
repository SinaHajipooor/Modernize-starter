'use client'

import { Grid, Typography } from '@mui/material';

// components
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';
import BasicLayout from '@/app/(DashboardLayout)/components/forms/form-horizontal/BasicLayout';
import BasicIcons from '@/app/(DashboardLayout)/components/forms/form-horizontal/BasicIcons';
import FormSeparator from '@/app/(DashboardLayout)/components/forms/form-horizontal/FormSeparator';
import FormLabelAlignment from '@/app/(DashboardLayout)/components/forms/form-horizontal/FormLabelAlignment';
import CollapsibleForm from '@/app/(DashboardLayout)/components/forms/form-horizontal/CollapsibleForm';
import FormTabs from '@/app/(DashboardLayout)/components/forms/form-horizontal/FormTabs';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Horizontal Form',
  },
];

const FormHorizontal = () => {
  return (
    <PageContainer title="Horizontal Form" description="this is Horizontal Form">
      {/* breadcrumb */}
      <Breadcrumb title="Horizontal Form" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ParentCard title="Basic Layout">
            <BasicLayout />
          </ParentCard>
        </Grid>
        <Grid item xs={12}>
          <ParentCard title="Basic with Icons">
            <BasicIcons />
          </ParentCard>
        </Grid>
        <Grid item xs={12}>
          <ParentCard title="Form Separator">
            <FormSeparator />
          </ParentCard>
        </Grid>
        <Grid item xs={12}>
          <ParentCard title="Form Label Alignment">
            <FormLabelAlignment />
          </ParentCard>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" mb={3}>Collapsible Section</Typography>
          <CollapsibleForm />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" mb={3}>Form with Tabs</Typography>
          <FormTabs />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default FormHorizontal;
