import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';

import Text from '../base/Text';
import Button from '@mui/material/Button';
import { CartContext } from '../../context/cart';

const ProductCard = ({ id, Image, name, description, price, cartView}) => {
    const { addToCart }  = useContext(CartContext);

    return (
        <Stack direction="row" sx={{width: {xs: 1, md: cartView ? 1 : 2/5}, height: '250px', boxShadow: 3, mb: 3}}>
            <Stack sx={{mr: 1.5}}>
                <img 
                    src={Image} 
                    alt="product image" 
                    style={{height: '150px', width: '150px', borderRadius: '3px'}} 
                />
            </Stack>
    
            <Stack justifyContent="space-between" sx={{minWidth:3/5, py: 2, pr: 2}}>
                <Text 
                    component="p" 
                    message={name} 
                    sx={{fontSize: '20px', fontWeight: 500}} 
                />
    
                <Text 
                    component="p" 
                    message={description}
                    sx={{mt: 2, fontSize: { xs: '12px', md: '16px' }, width: { xs: 0.85, md: 1 }}}
                />
    
                <Stack direction="row" alignItems="flex-end" justifyContent={!cartView ? 'space-between' : 'flex-end'} sx={{mt: 2}}>    
                    <Text  
                        component="body1"
                        message={`$${price.toFixed(2)}`}
                        sx={{mt: 2, mr: 4, alignSelf: 'flex-end', fontSize: '20px', fontWeight: 400, letterSpacing: '0.5px'}}
                    />
    
                    {
                        !cartView 
                            ? (
                                <Button variant="contained" color="primary" size="small" sx={{height: '30px', mr: { xs: 2, md: 0 }}} onClick={() => addToCart(id)}>
                                    Add To Cart
                                </Button>
                            )
                            : <></>
                    }
                </Stack>
            </Stack>
        </Stack>
    );
}

export default ProductCard;