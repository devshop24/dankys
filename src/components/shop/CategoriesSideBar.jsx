import React from 'react';
import Stack from '@mui/material/Stack';

import CheckboxControlled from '../inputs/CheckboxControlled';
import Text from '../base/Text';

const CategoriesSideBar = ({ control }) => {

    return (
        <Stack sx={{ bgcolor: 'info.light', width: 1/8, height: '100%', p:3 }}>
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
}

export default CategoriesSideBar;