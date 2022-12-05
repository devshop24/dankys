import React from 'react';

import theme from '../theme';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ShopProvider } from '../context/shop';
import { CartProvider } from '../context/cart';

const Providers = ({ children }) => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <ShopProvider>
                        <CartProvider>
                            {children}
                        </CartProvider>
                    </ShopProvider>
                </ThemeProvider>
            </BrowserRouter>
        </React.StrictMode>
    );
};

export default Providers;