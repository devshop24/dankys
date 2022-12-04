import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Text from '../base/Text';

import BannerImage from '../../assets/banner.jpg';
import { useNavigate } from 'react-router-dom';
import { RouteMap } from '../../utils/navigation';

const ImageHeader = () => {
    const navigate = useNavigate();

    return (
        <Stack sx={{
            backgroundImage: `url(${BannerImage})`,
            backgroundPosition: 'left center',
            backgroundSize: 'cover',
            height: '28em',
            textAlign: 'center',
            position: 'relative',
        }}>
            <Text component="h2" message="Spread Kindness Like Confetti" sx={{
                    fontSize: '48px',
                    color: 'white',
                    letterSpacing: '1.5px',
                    textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000', 
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    transform: 'translate(-50%, -30%)'
                }} 
            />
    
            <Stack 
                justifyContent="center"
                alignItems="center"
                sx={{width: 1, height: '100px', position: 'absolute', bottom: 0, bgcolor: 'rgba(27, 27, 27, 0.75)'}}
            >
                <Button color="primary" variant="contained" sx={{width: '165px', height: '45px'}} onClick={() => navigate(RouteMap.FAQ)}>
                    Learn More
                </Button>
            </Stack>
        </Stack>
    );
}

export default ImageHeader;