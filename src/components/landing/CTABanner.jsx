import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Text from '../base/Text';
import { useNavigate } from 'react-router-dom';
import { RouteMap } from '../../utils/navigation';

const CTABanner = () => {
    const navigate = useNavigate();

    return (
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{boxSizing: 'border-box', width: 1, height: '125px', py: 6.5, bgcolor: 'primary.dark'}}>
            <Text component="body1" message="Start Growing Today" sx={{mr: 4, color: 'white', fontSize: '30px', fontWeight: 600}} />
            <Button 
                variant="contained" 
                onClick={() => navigate(RouteMap.CONTACT)}
                sx={{mr: 4,height: '50px', width: '150px', fontWeight: 600, color: 'primary.main', bgcolor: 'white', '&:hover': { bgcolor: 'info.light' }}}
            >
                Get In Touch
            </Button>
        </Stack>
    );
}

export default CTABanner;