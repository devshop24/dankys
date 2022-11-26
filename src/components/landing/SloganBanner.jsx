import React from 'react';
import Divider from "@mui/material/Divider";
import Stack from '@mui/material/Stack';

import Text from '../base/Text';

const SloganBanner = () => (
    <Stack alignItems="center" justifyContent="center" height="265px" sx={{bgcolor: 'info.light'}}>
        <Text component="h2" message="It's All About The Supplies" align="center" sx={{fontSize: {xs: '26px', md: '39px'}}} />
        <Divider variant="middle" sx={{width: 0.8, my: 2.5}} />
        <Text component="h5" message="Qaulity Product Comes From Quality Equipment" algin="center" sx={{color: '#999999', fontSize: {xs: '20px', md: '26px'}, textAlign: 'center'}} />
    </Stack>
);

export default SloganBanner;
