import React from 'react';
import Stack from '@mui/material/Stack';

import Text from '../base/Text';

const TitleBar = () => (
    <Stack justifyContent="center" alignItems="center" sx={{height: '100px', py: 1}}>
        <Text component="h4" message="Danky's" sx={{fontSize: '22px', mb: 1, fontWeight: '500'}} />
        <Text component="p" message="Hydroponics Equipment Supplier" sx={{fontSize: '19px', fontWeight: '500'}} />
    </Stack>
);

export default TitleBar;