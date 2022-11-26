import React from "react";
import Stack from '@mui/material/Stack';

import ContactForm from "../components/base/ContactForm";
import PageContainer from "../components/base/PageContainer";
import Text from "../components/base/Text";

const Contact = () => (
    <PageContainer hideFooterForm>
        <Stack sx={{py: 10, px: 3, maxWidth: '920px', m: '0 auto'}}>
            <Text 
                component="h4" 
                message="Contact Us" 
                sx={{mb: 2}}
            />
            <Text 
                component="p" 
                message="We are here to help you grow." 
                sx={{mb: 6, fontSize: '22px', color: '#999999'}}
            />
            <Text 
                component="p" 
                message="Whether you need help getting started, questions about equipment, or are curious about store hours reach out below and we will respond to your email as quickly as we can!" 
                sx={{mb: 6, fontSize: '18px', color: '#999999'}}
            />
        
            <ContactForm />
        </Stack>
    </PageContainer>
);


export default Contact;