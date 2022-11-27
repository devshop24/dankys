import React from 'react';
import Stack from '@mui/material/Stack';

import ProductCard from './ProductCard';

const ProductsList = ({products}) => (
    <Stack justifyContent='space-between' flexWrap='wrap' sx={{p: {xs: 0, md: 6}, boxSizing: 'border-box', flexDirection: { xs: 'column', md: 'row' }}}>
        {
            products.map(({ id, Image, name, description, price}) => (
                <ProductCard 
                    key={id}
                    id={id}
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