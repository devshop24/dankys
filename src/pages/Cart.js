import React from "react";
import Stack from '@mui/material/Stack';

import CartCard from "../components/cart/CartCard";
import PageContainer from "../components/base/PageContainer";
import ReviewSummary from "../components/cart/ReviewSummary";

import BannerImage from '../assets/banner.jpg';

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
            <Stack sx={{flexDirection: { xs: 'column-reverse', md: 'column' }}}>
                <ReviewSummary cart={cart} />

                <Stack alignItems="center" justifyContent="center" sx={{width: {xs: 0.9, md: 1/2}, py: 6, px: {xs: 2, md: 10}}}>
                    {
                        cart.items.map(({ id, Image, name, description, price, quantity}) => (
                            <CartCard 
                                key={id}
                                id={id}
                                Image={Image}
                                name={name}
                                description={description}
                                price={price}
                                quantity={quantity}
                            />
                        ))
                    }
                </Stack>
            </Stack>
        </PageContainer>
    )
}

export default Cart;