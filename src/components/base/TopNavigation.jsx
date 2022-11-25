import React from 'react';
import Stack from '@mui/material/Stack';

import Text from '../base/Text';

const TopNavigation = () => (
    <Stack direction="row" justifyContent="center" alignItems="center" sx={{height: '80px', bgcolor: 'info.main', color: '#C0C0C0', borderBottom: '15px solid red', borderColor: 'primary.dark'}}>
        <Text component="p" message="Home" onClick={() => console.log('go home')} sx={{mx: 3, fontWeight: 600, fontSize: '17.5px', cursor: 'pointer', '&:hover': {color: 'white'}, color: 'white'}} />
        <Text component="p" message="Shop" onClick={() => console.log('go shop')} sx={{mx: 3, fontWeight: 200, fontSize: '17.5px', cursor: 'pointer', '&:hover': {color: 'white'}}} />
        <Text component="p" message="Contact" onClick={() => console.log('go contact')} sx={{mx: 3, fontWeight: 200, fontSize: '17.5px', cursor: 'pointer', '&:hover': {color: 'white'}}} />
        <Text component="p" message="FAQ" onClick={() => console.log('go faq')} sx={{mx: 3, fontWeight: 200, fontSize: '17.5px', cursor: 'pointer', '&:hover': {color: 'white'}}} />
        <Text component="p" message="Forum" onClick={() => console.log('go forum')} sx={{mx: 3, fontWeight: 200, fontSize: '17.5px', cursor: 'pointer', '&:hover': {color: 'white'}}} />
    </Stack>
);

export default TopNavigation;