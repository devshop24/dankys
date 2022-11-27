import React from 'react';
import Stack from '@mui/material/Stack';

import ProductCard from './ProductCard';

const ProductsList = ({products}) => (
    <Stack direction="row" justifyContent='space-between' flexWrap='wrap' sx={{p: 6, boxSizing: 'border-box'}}>
        {
            products.map(({ Image, name, description, price}) => (
                <ProductCard 
                    Image={Image}
                    name={name}
                    description={description}
                    price={price}
                />
            ))
        }
    </Stack>
);

export default ProductsList;