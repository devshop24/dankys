import React, { useContext } from 'react';
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

import Text from "../base/Text";

import { Divider } from "@mui/material";
import { CartContext } from '../../context/cart';
import { ShopContext } from '../../context/shop';

const ReviewSummary = () => {
    const { products } = useContext(ShopContext);
    const { getCartTotal } = useContext(CartContext);

    const total = getCartTotal(products);

    return (
        <Stack sx={{
            width: {xs: 1, md: 1/3}, 
            boxSizing: 'border-box', 
            height: '400px', 
            p: 6,
            my: 6, 
            mx: {xs: 0, md: 10}, 
            boxShadow: 3, 
            position: {xs: 'relative', md: 'absolute'}, 
            right: 0, 
            bgcolor: 'white', 
            zIndex: 100000,
            justifyContent: 'space-around'
        }}>
            <Text component="h4" message="Review" sx={{color: 'rgba(0, 0, 0, 0.8)', fontSize: '30px'}} />
       
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{pt: 2}}>
                <Text component="p" message="Subtotal:" />
                <Text component="p" message={`$${total.toFixed(2)}`} />
            </Stack>

            {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{pt: 2}}>
                <Text component="p" message="Tax:" />
                <Text component="p" message={`$${(cart.subtotal * 0.1).toFixed(2)}`} />
            </Stack> */}
            <Divider sx={{width: 1}} />
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{pt: 2}}>
                <Text component="p" message="Total:" />
                <Text component="p" message={`$${total.toFixed(2)}`} />
            </Stack>

            <Button variant="contained" color="primary" sx={{mt: 4}}>
                Proceed to Payment
            </Button>
        </Stack>
    );
}

export default ReviewSummary;