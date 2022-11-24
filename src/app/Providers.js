import React from 'react';

import theme from '../theme';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

const Providers = ({ children }) => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                        {children}
                </ThemeProvider>
            </BrowserRouter>
        </React.StrictMode>
    );
};

export default Providers;