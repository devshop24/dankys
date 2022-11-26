import React from 'react';
import Stack from '@mui/material/Stack';

import ContactForm from './ContactForm';
import Text from '../base/Text';

const Footer = ({hideContactForm}) => (
    <Stack justifyContent="space-around" alignItems="space-between" sx={{bgcolor: 'info.light', height: '70vh', pt: 4}}>
        <Stack direction="row" justifyContent="space-evenly" alignItems="flex-start">
            <Stack>
                <Text component="h5" message="Danky's Hydro" sx={{mb: 2, fontWeight: 600}} />
                <Text component="body1" message="Home" sx={{mb: 2, opacity: 0.6, cursor: 'pointer', '&:hover': { textDecoration: 'underline' }}} />
                <Text component="body1" message="Shop" sx={{mb: 2, opacity: 0.6, cursor: 'pointer', '&:hover': { textDecoration: 'underline' }}} />
                <Text component="body1" message="Contact" sx={{mb: 2, opacity: 0.6, cursor: 'pointer', '&:hover': { textDecoration: 'underline' }}} />
                <Text component="body1" message="FAQ" sx={{mb: 2, opacity: 0.6, cursor: 'pointer', '&:hover': { textDecoration: 'underline' }}} />
                <Text component="body1" message="Forum" sx={{mb: 2, opacity: 0.6, cursor: 'pointer', '&:hover': { textDecoration: 'underline' }}} />
            </Stack>

            <Stack>
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
        <Text align="center" component="subtitle2" message="© Untitled. All rights reserved | Design: HTML5 UP | Built By DevShop24" sx={{opacity: 0.6}} />
    </Stack>
);

export default Footer;