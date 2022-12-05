import React, { useContext } from "react";
import Stack from '@mui/material/Stack';

import CartCard from "../components/cart/CartCard";
import PageContainer from "../components/base/PageContainer";
import ReviewSummary from "../components/cart/ReviewSummary";
import NoItemsInCart from "../components/cart/NoItemsInCart";

import { CartContext } from "../context/cart";
import { ShopContext } from "../context/shop";
import Text from "../components/base/Text";

// const cart = {
//     items: mockProducts,
//     subtotal: subtotal,
//     total: subtotal + (subtotal * 0.1)
// }

const Cart = () => {
    const { products } = useContext(ShopContext);
    const { items } = useContext(CartContext);

    const cartDisplayData = items.map(cartItem => {
        const product = products.find(({id}) => id === cartItem.id);

        return {
            ...product,
            quantity: cartItem.quantity
        }
    });

    const itemsInCart = Boolean(cartDisplayData.length);

    return (
        <PageContainer>
            <Stack sx={{flexDirection: { xs: 'column-reverse', md: 'column' }}}>
                {itemsInCart && <ReviewSummary />}
                {
                    itemsInCart? 
                    <Stack alignItems="center" justifyContent="center" sx={{width: {xs: 0.9, md: 1/2}, py: 6, px: {xs: 2, md: 10}}}>
                        {cartDisplayData.map(({ id, Image, name, description, price, quantity}) => (
                            <CartCard 
                                key={id}
                                id={id}
                                Image={Image}
                                name={name}
                                description={description}
                                price={price}
                                quantity={quantity}
                            />
                        ))}
                    </Stack>
                    : <NoItemsInCart />
                }
            </Stack>
        </PageContainer>
    )
}

export default Cart;