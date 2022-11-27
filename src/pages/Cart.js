import React from "react";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

import PageContainer from "../components/base/PageContainer";
import ProductCard from "../components/shop/ProductCard";
import Text from "../components/base/Text";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

import BannerImage from '../assets/banner.jpg';
import { Divider } from "@mui/material";

const mockProducts = []

for(let i = 0; i < 4; i++) mockProducts.push({
    id: i,
    Image: BannerImage,
    name: `product-${i}`,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt accusamus voluptatum fugit est! Nisi atque quia cupiditate explicabo laboriosam?" ,
    price: 10.00,
    quantity: i + 1
});

const generateSubtotal = (products) => {
    let subtotal = 0;

    products.forEach(({price, quantity}) => subtotal += (price * quantity));

    return subtotal;
}

const subtotal = generateSubtotal(mockProducts)

const cart = {
    items: mockProducts,
    subtotal: subtotal,
    total: subtotal + (subtotal * 0.1)
}

const Cart = () => {
    return (
        <PageContainer>
            <Stack>
                <Stack sx={{
                    width: 1/3, 
                    boxSizing: 'border-box', 
                    height: '400px', 
                    p: 6,
                    my: 6, 
                    mx: 10, 
                    boxShadow: 3, 
                    position: 'absolute', 
                    right: 0, 
                    bgcolor: 'white', 
                    zIndex: 100000,
                    justifyContent: 'space-around'
                }}>
                    <Text component="h4" message="Review" sx={{color: 'rgba(0, 0, 0, 0.8)', fontSize: '30px'}} />
               
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{pt: 2}}>
                        <Text component="p" message="Subtotal:" />
                        <Text component="p" message={`$${cart.subtotal.toFixed(2)}`} />
                    </Stack>

                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{pt: 2}}>
                        <Text component="p" message="Tax:" />
                        <Text component="p" message={`$${(cart.subtotal * 0.1).toFixed(2)}`} />
                    </Stack>
                    <Divider sx={{width: 1}} />
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{pt: 2}}>
                        <Text component="p" message="Total:" />
                        <Text component="p" message={`$${cart.total.toFixed(2)}`} />
                    </Stack>

                    <Button variant="contained" color="primary" sx={{mt: 4}}>
                        Proceed to Payment
                    </Button>
                </Stack>
                <Stack alignItems="center" justifyContent="center" sx={{width: 1/2, py: 6, px: 10}}>
                    {
                        cart.items.map(({ id, Image, name, description, price, quantity}) => (
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
                        ))
                    }
                </Stack>
            </Stack>
        </PageContainer>
    )
}

export default Cart;