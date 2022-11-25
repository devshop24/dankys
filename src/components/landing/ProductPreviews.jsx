import React from 'react';
import Stack from '@mui/material/Stack';

import Text from '../base/Text';

import MicroImage from '../../assets/micro-demo.png';
import GrowImage from '../../assets/grow-demo.png';
import BloomImage from '../../assets/bloom-demo.png';
import SugareeImage from '../../assets/sugaree-demo.png';

const ProductPreviews = () => (
    <Stack sx={{py: 10, px: 14}}>
        <Stack direction="row" justifyContent="space-evenly" sx={{width: 1, mb: 10}}>
            <Stack direction="row" sx={{width: 1/3}}>
                <img src={MicroImage} alt="Mirco 6-0-0" style={{height: '140px', width: '140px', borderRadius: '8%'}} />
                <Stack sx={{ml: 4}}>
                    <Text sx={{mb: 1, fontSize: '21px'}} component="h4" message="Micro 6-0-0™" />
                    <Text sx={{opacity: 0.6}} component="p" message="This is the foundation for the 3-Part formula and is used at the same rate through the entire life cycle of your plants. It contains all of the micronutrients needed for peak health." />
                </Stack>
            </Stack>

            <Stack direction="row" sx={{width: 1/3}}>
                <img src={GrowImage} alt="Grow 2-1-6" style={{height: '140px', width: '140px', borderRadius: '8%'}} />
                <Stack sx={{ml: 4}}>
                    <Text sx={{mb: 1, fontSize: '21px'}} component="h4" message="Grow 2-1-6™" />
                    <Text sx={{opacity: 0.6}} component="p" message="This is one of three components that create the complete Cutting Edge Solutions® 3-Part Base family. Grow 2-1-6™ is only uses in the vegetative and transitional stages of plant life." />
                </Stack>
            </Stack>
        </Stack>

        <Stack direction="row" justifyContent="space-evenly" sx={{width: 1}}>
            <Stack direction="row" sx={{width: 1/3}}>
                <img src={BloomImage} alt="Bloom 0-6-5" style={{height: '140px', width: '140px', borderRadius: '8%'}} />
                <Stack sx={{ml: 4}}>
                    <Text sx={{mb: 1, fontSize: '21px'}} component="h4" message="Bloom 0-6-5™" />
                    <Text sx={{opacity: 0.6}} component="p" message="Finally we have the last component to the complete Cutting Edge Solutions® 3-Part Base family. Bloom is used for the majority in the flowering stage of life, as well as small amounts in the vegetative stage." />
                </Stack>
            </Stack>

            <Stack direction="row" sx={{width: 1/3}}>
                <img src={SugareeImage} alt="Sugaree" style={{height: '140px', width: '140px', borderRadius: '8%'}} />
                <Stack sx={{ml: 4}}>
                    <Text sx={{mb: 1, fontSize: '21px'}} component="h4" message="Sugaree™" />
                    <Text sx={{opacity: 0.6}} component="p" message="Sugaree™ or Sour-Dee™ supercharges your plants ability to solubilize and absorb phosphorus from your medium, increasing yields." />
                </Stack>
            </Stack>
        </Stack>
    </Stack>
);

export default ProductPreviews;