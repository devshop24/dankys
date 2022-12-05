import React from "react";
import Stack from '@mui/material/Stack';

import Text from "../base/Text";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCannabis } from "@fortawesome/free-solid-svg-icons";

const NoItemsInCart = () => (
    <Stack justifyContent="center" alignItems="center" sx={{w:1 ,my: 10}}>
    <Stack sx={{mb: '35px', bgcolor: 'primary.main', p:3, borderRadius: '50%', boxShadow: '0 0 0 7px white, 0 0 0 8px #e0e0e0'}}>
            <FontAwesomeIcon icon={faCannabis} size="6x" color="white"/>
        </Stack>
        <Text component="h3" message="No Items In Cart" />
    </Stack>
);

export default NoItemsInCart;