import React from 'react';
import Stack from '@mui/material/Stack';

import Text from '../base/Text';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faCannabis, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const CompanyHighlights = () => (
    <Stack justifyContent="space-evenly" sx={{py: {xs: 8, md: 15}, px: {xs: 8, md: 10}, flexDirection: {xs: 'column', md: 'row'}}}>
        <Stack width="270px" alignItems="center" sx={{my: {xs: 2, md: 0}}}>
            <Stack sx={{width: '50px', mb: '35px', bgcolor: 'primary.main', p:3, borderRadius: '50%', boxShadow: '0 0 0 7px white, 0 0 0 8px #e0e0e0'}}>
                <FontAwesomeIcon icon={faSeedling} size="3x" color="white" />
            </Stack>
            <Text component="h4" message="Grow" align="center" sx={{mt:2, mb: '20px', fontSize: '1.5em'}} />
            <Text component="body1" message="We will walk you step by step through the process of creating your very own hydroponic gardening system" align="center" sx={{color: '#474747', opacity: 0.7}} />
        </Stack>

        <Stack width="270px" alignItems="center" sx={{my: {xs: 2, md: 0}}}>
            <Stack sx={{width: '50px', mb: '35px', bgcolor: 'primary.main', p:3, borderRadius: '50%', boxShadow: '0 0 0 7px white, 0 0 0 8px #e0e0e0'}}>
                <FontAwesomeIcon icon={faCannabis} size="3x" color="white"/>
            </Stack>
            <Text component="h4" message="Give" align="center" sx={{mt:2, mb: '20px', fontSize: '1.5em'}} />
            <Text component="body1" message="We will be offering free grow classes where members can share their knowledge of growing and cultivating herbs and plants for the purpose of bettering the quality of life of our members" align="center" sx={{color: '#474747', opacity: 0.7}} />
        </Stack>

        <Stack width="270px" alignItems="center" sx={{my: {xs: 2, md: 0}}}>
            <Stack sx={{width: '50px', mb: '35px', bgcolor: 'primary.main', p:3, borderRadius: '50%', boxShadow: '0 0 0 7px white, 0 0 0 8px #e0e0e0'}}>
                <FontAwesomeIcon icon={faLightbulb} size="3x" color="white"/>
            </Stack>
            <Text component="h4" message="Supply" align="center" sx={{mt:2, mb: '20px', fontSize: '1.5em'}} />
            <Text component="body1" message="We are dedicated to providing top notch hydroponic supplies including lights, nutrients, and seeds" align="center" sx={{color: '#474747', opacity: 0.7}} />
        </Stack>
    </Stack>
);

export default CompanyHighlights;