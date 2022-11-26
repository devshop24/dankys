import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import PageContainer from "../components/base/PageContainer";
import StoreHours from "../components/base/StoreHours";
import Text from "../components/base/Text";

import FAQImage from '../assets/faq.jpg';

const FAQ = () =>  (
    <PageContainer>
        <Stack direction="row" sx={{p: 16}}>
            <Stack sx={{width: 1/3, boxSizing: 'border-box'}}>
                <Text component='h5' message='Talk With Us' />
                <Text component='p' message='Click the button below to go to our email form to start a conversation with us today. We are here to help you get started with your grow setup.' sx={{color: '#999999', fontSize: '16px', my: 2.5, lineHeight: '30px'}} />

                <Button variant="contained" color="primary" sx={{width: 4/7}}>
                    Contact Us
                </Button>
            </Stack>

            <Stack sx={{width: 1, mx: 4}}>
                <Text component="h4" message="Frequently Asked Questions" sx={{fontSize: '30px', mb: 2}} />
                <Text component="p" message="Question Not Answered? Email Us" sx={{fontSize: '21px', color: '#999999', cursor: 'pointer', '&:hover': {textDecoration: 'underline'}}} />

                <img src={FAQImage} alt="Cannabis Plant" style={{width: '80%', margin: '50px 0', borderRadius: '5px'}} />

                <Text component="h5" message="Where are you located?" />
                <Text component="p" message="We are located just off of I81 exit 3 in beautiful history Bristol. Find us at:" sx={{fontSize: '18px', color: '#999999', mt: 3}} />
                <Text component="p" message="120 Spurgeon Lane Bristol, Va. 24201" sx={{fontSize: '18px', color: '#999999', mb: 3, mt: 1}} />

                <Text component="h5" message="What products do you carry?" />
                <Text component="p" message="Everything you need to start your own hydroponics based project! From lights to nutrients we have you covered." sx={{fontSize: '18px', color: '#999999', my: 3}} />
                <Text component="p" message="Make sure to ask us about our high quality CBD products where every purchase comes with a special gift for the customer!" sx={{fontSize: '18px', color: '#999999', my: 3}} />

                <Text component="h5" message="Who are you?" />
                <Text component="p" message="We are a private locally owned and family operated Hydro shop established in 2022 at 120 Spurgeon Ln in Bristol, VA. We are about healing, helping, and supporting our local community." sx={{fontSize: '18px', color: '#999999', my: 3}} />
                <Text component="p" message="We will be offering free grow classes where members can share their knowledge of growing and cultivating herbs and plants for the purpose of bettering the quality of life of our members under our constitutional right as citizens of our great nation." sx={{fontSize: '18px', color: '#999999', my: 3}} />
            </Stack>

            <Stack sx={{width: 1/3}}>
                <StoreHours />
            </Stack>
        </Stack>
    </PageContainer>
);

export default FAQ;