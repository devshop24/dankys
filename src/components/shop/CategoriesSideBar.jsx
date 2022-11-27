import React from 'react';
import Stack from '@mui/material/Stack';

import CheckboxControlled from '../inputs/CheckboxControlled';
import Text from '../base/Text';

const CategoriesSideBar = ({ control }) => (
    <Stack sx={{ bgcolor: 'info.light', py:3, px: 5 }}>
        <Text component="h5" message="Filters" />

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
    </Stack>
)

export default CategoriesSideBar;