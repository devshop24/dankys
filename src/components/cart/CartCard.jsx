import React from 'react';
import Stack from '@mui/material/Stack';

import ProductCard from "../shop/ProductCard";
import Text from "../base/Text";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const CartCard = ({ id, Image, name, description, price, quantity}) => (
    <Stack sx={{mb: 6}}>
        <ProductCard 
            key={id}
            id={id}
            Image={Image}
            name={name}
            description={description}
            price={price}
            cartView
        />

        
        <Stack direction="row-reverse" alignItems="center">
            <Stack sx={{cursor: 'pointer', width: '20px', height: '20px', bgcolor: 'primary.main', p:1, borderRadius: '50%', boxShadow: '0 0 0 7px white, 0 0 0 8px #e0e0e0'}}>
                <FontAwesomeIcon icon={faCirclePlus} size="lg" color="white" />
            </Stack>

            <Text component="p" message={`${quantity}`} sx={{mx: 3, fontSize: '20px' }} />

            <Stack sx={{cursor: 'pointer', width: '20px', height: '22px', bgcolor: 'darkred', p:1, borderRadius: '50%', boxShadow: '0 0 0 7px white, 0 0 0 8px #e0e0e0'}}>
                <FontAwesomeIcon icon={faCircleMinus} size="lg" color="white" />
            </Stack>
        </Stack>
    </Stack>
);

export default CartCard;