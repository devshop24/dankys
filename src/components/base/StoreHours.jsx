import React from 'react';
import Stack from '@mui/material/Stack';

import Text from './Text';

const StoreHours = () => (
    <Stack>
        <Text component="h4" message="Store Hours" sx={{fontSize: '21px', mb: 2, borderBottom: '1px solid black'}} />

        <Row>
            <Text component="h5" message="Monday:" sx={{fontSize: '18px'}} />
            <Text component='p' message="9am-7pm" sx={{fontSize: '18px', color: '#999999', ml: 2}} />
        </Row>
        <Row>
            <Text component="h5" message="Tuesday:" sx={{fontSize: '18px'}} />
            <Text component='p' message="9am-7pm" sx={{fontSize: '18px', color: '#999999', ml: 2}} />
        </Row>
        <Row>
            <Text component="h5" message="Wednesday:" sx={{fontSize: '18px'}} />
            <Text component='p' message="9am-7pm" sx={{fontSize: '18px', color: '#999999', ml: 2}} />
        </Row>
        <Row>
            <Text component="h5" message="Thursday:" sx={{fontSize: '18px'}} />
            <Text component='p' message="9am-7pm" sx={{fontSize: '18px', color: '#999999', ml: 2}} />
        </Row>
        <Row>
            <Text component="h5" message="Friday:" sx={{fontSize: '18px'}} />
            <Text component='p' message="9am-7pm" sx={{fontSize: '18px', color: '#999999', ml: 2}} />
        </Row>
        <Row>
            <Text component="h5" message="Saturday:" sx={{fontSize: '18px'}} />
            <Text component='p' message="9am-7pm" sx={{fontSize: '18px', color: '#999999', ml: 2}} />
        </Row>
        <Row>
            <Text component="h5" message="Sunday:" sx={{fontSize: '18px'}} />
            <Text component='p' message="CLOSED" sx={{fontSize: '18px', color: '#999999', ml: 2}} />
        </Row>
    </Stack>
);

export default StoreHours;

const Row = ({children}) => (
    <Stack direction="row" sx={{mb: 1}}>
        {children}
    </Stack>
)