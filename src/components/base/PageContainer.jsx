import React from 'react';
import Stack from '@mui/material/Stack';

const PageContainer = ({children}) => (
    <Stack sx={{ width: 1 }}>
        {children}
    </Stack>
);

export default PageContainer;