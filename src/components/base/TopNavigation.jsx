import React from 'react';
import Stack from '@mui/material/Stack';

import Text from '../base/Text';

import { useNavigate, useLocation } from 'react-router-dom';
import { RouteMap } from '../../utils/navigation';

const TopNavigation = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const determineHighlight = (route, pathname) => route === pathname ? 600 : 200;
    const determineTextColor = (route, pathname) => route === pathname ? 'white' : '#C0C0C0'

    const textStyles = (route) => ({
        mx: 3, 
        color: determineTextColor(route, pathname),
        fontWeight: determineHighlight(route, pathname), 
        fontSize: '17.5px', 
        cursor: 'pointer', 
        '&:hover': {color: 'white'}
    })

    return (
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{height: '80px', bgcolor: 'info.main', borderBottom: '15px solid red', borderColor: 'primary.dark'}}>
            <Text 
                component="p" 
                message="Home" 
                onClick={() => navigate(RouteMap.HOME)} 
                sx={textStyles(RouteMap.HOME)} 
            />
            <Text 
                component="p" 
                message="Shop" 
                onClick={() => navigate(RouteMap.SHOP)} 
                sx={textStyles(RouteMap.SHOP)} 
            />
            <Text 
                component="p" 
                message="Contact" 
                onClick={() => navigate(RouteMap.CONTACT)} 
                sx={textStyles(RouteMap.CONTACT)} 
            />
            <Text 
                component="p" 
                message="FAQ" 
                onClick={() => navigate(RouteMap.FAQ)} 
                sx={textStyles(RouteMap.FAQ)}
            />
            <Text 
                component="p" 
                message="Forum" 
                onClick={() => navigate(RouteMap.FORUM)} 
                sx={textStyles(RouteMap.FORUM)}
            />
        </Stack>
    );
}

export default TopNavigation;