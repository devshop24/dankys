import React from 'react';
import Stack from '@mui/material/Stack';

import TitleBar from "./TitleBar";
import TopNavigation from "./TopNavigation";
import Footer from "./Footer";

const PageContainer = ({children}) => (
    <Stack sx={{ width: 1 }}>
        <TitleBar />
        <TopNavigation />
        {children}
        <Footer />
    </Stack>
);

export default PageContainer;