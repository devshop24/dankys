import React from 'react';
import Stack from '@mui/material/Stack';

import TitleBar from "./TitleBar";
import TopNavigation from "./TopNavigation";
import Footer from "./Footer";

const PageContainer = ({hideFooterForm, children}) => (
    <Stack sx={{ width: 1, maxWidth: '100vw', overflow: 'hidden' }}>
        <TitleBar />
        <TopNavigation />
        {children}
        <Footer hideContactForm={hideFooterForm}/>
    </Stack>
);

export default PageContainer;