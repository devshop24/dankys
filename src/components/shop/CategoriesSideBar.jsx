import React from 'react';
import Stack from '@mui/material/Stack';

import CheckboxControlled from '../inputs/CheckboxControlled';
import Text from '../base/Text';

const CategoriesSideBar = ({ control }) => (
    <Stack sx={{ bgcolor: 'info.light', py:3, px: 5, display: {xs: 'none', md: 'flex'} }}>
        <Text component="h5" message="Categories" />
        <Stack sx={{ml: 2}}>
            <CheckboxControlled 
                name="nutrients"
                label="Nutrients"
                control={control}
                handleChange={undefined}
            />

            <CheckboxControlled 
                name="lights"
                label="Lights"
                control={control}
                handleChange={undefined}
            />

            <CheckboxControlled 
                name="seeds"
                label="Seeds"
                control={control}
                handleChange={undefined}
            />

            <CheckboxControlled 
                name="cbd"
                label="CBD"
                control={control}
                handleChange={undefined}
            />
        </Stack>

        
        <Text component="h5" message="Brands" sx={{mt: 4}} />
        <Stack sx={{ml: 2}}>
            <CheckboxControlled 
                name="brand1"
                label="Brand1"
                control={control}
                handleChange={undefined}
            />

            <CheckboxControlled 
                name="brand2"
                label="Brand2"
                control={control}
                handleChange={undefined}
            />

            <CheckboxControlled 
                name="brand3"
                label="Brand3"
                control={control}
                handleChange={undefined}
            />

            <CheckboxControlled 
                name="brand4"
                label="Brand4"
                control={control}
                handleChange={undefined}
            />
        </Stack>
    </Stack>
)

export default CategoriesSideBar;