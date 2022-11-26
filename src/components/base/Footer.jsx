import React from 'react';
import Stack from '@mui/material/Stack';

import ContactForm from './ContactForm';
import Text from '../base/Text';

import { useNavigate } from 'react-router-dom';
import { RouteMap } from '../../utils/navigation';

const Footer = ({hideContactForm}) => {
    const navigate = useNavigate();

    return (
        <Stack justifyContent="space-around" alignItems="space-between" sx={{bgcolor: 'info.light', p: {xs: 4, md: 8}}}>
            <Stack justifyContent="space-evenly" alignItems="flex-start" sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
                <Stack sx={{alignItems: { xs: 'center', md: 'flex-start' }, width: { xs: 1, md: 'auto' }}}>
                    <Text component="h5" message="Danky's Hydro" sx={{mb: 2, fontWeight: 600}} />
                    <Text component="body1" message="Home" onClick={() => navigate(RouteMap.HOME)} sx={{mb: 2, opacity: 0.6, cursor: 'pointer', '&:hover': { textDecoration: 'underline' }}} />
                    <Text component="body1" message="Shop" onClick={() => navigate(RouteMap.SHOP)} sx={{mb: 2, opacity: 0.6, cursor: 'pointer', '&:hover': { textDecoration: 'underline' }}} />
                    <Text component="body1" message="Contact" onClick={() => navigate(RouteMap.CONTACT)} sx={{mb: 2, opacity: 0.6, cursor: 'pointer', '&:hover': { textDecoration: 'underline' }}} />
                    <Text component="body1" message="FAQ" onClick={() => navigate(RouteMap.FAQ)} sx={{mb: 2, opacity: 0.6, cursor: 'pointer', '&:hover': { textDecoration: 'underline' }}} />
                    <Text component="body1" message="Forum" onClick={() => navigate(RouteMap.FORUM)} sx={{mb: 2, opacity: 0.6, cursor: 'pointer', '&:hover': { textDecoration: 'underline' }}} />
                </Stack>
    
                <Stack sx={{ mt: { xs: 12, md: 0 }, mb: { xs: 4, md: 0 }, alignItems: { xs: 'center', md: 'flex-start' }, width: { xs: 1, md: 'auto' } }}>
                    <Text component="h6" message="Email:" sx={{mb: 0.5, fontWeight: 600}} />
                    <Text component="body1" message="Dankyshydro@gmail.com" sx={{mb: 2, opacity: 0.6}} />
                    
                    <Text component="h6" message="Phone:" sx={{mb: 0.5, fontWeight: 600}} />
                    <Text component="body1" message="276-268-0093" sx={{mb: 2, opacity: 0.6}} />
    
                    <Text component="h6" message="Address:" sx={{mb: 0.5, fontWeight: 600}} />
                    <Text component="body1" message="120 Spurgeon Lane" sx={{mb: 2, opacity: 0.6}} />
                    <Text component="body1" message="Bristol, Va. 24201" sx={{mb: 2, opacity: 0.6}} />
                </Stack>
    
                {!hideContactForm ? <ContactForm /> : <></>}
            </Stack>
            <Text align="center" component="subtitle2" message="© Untitled. All rights reserved | Design: HTML5 UP | Built By DevShop24" sx={{opacity: 0.6, mt: 8}} />
        </Stack>
    );
}

export default Footer;