import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import TextFieldControlled from '../inputs/TextFieldControlled';

import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const {
        control,
        handleSubmit,
        getValues,
        setValue,
        reset,
        watch,
        formState: { errors, isValid }
    } = useForm({
        mode: 'all',
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    });

    const sendContactEmail = (values) => {
        console.log({values})
    }

    return (
        <Stack>
            <Stack direction="row">
                <TextFieldControlled 
                    name="name"
                    label="Full Name"
                    color="primary"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Please provide full name',
                        },
                    }}
                    sx={{mr:3}}
                />
                <TextFieldControlled 
                    name="email"
                    label="Email"
                    color="primary"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Please provide email',
                        },
                    }}
                />
            </Stack>
            <TextFieldControlled 
                multiline
                rows={4}
                name="message"
                label="Message"
                color="primary"
                control={control}
                rules={{
                    required: {
                        value: true,
                        message: 'Please provide a message',
                    },
                }}
                sx={{my: 4}}
            />
            <Button variant="contained" color="primary" sx={{width: 3/7, alignSelf: 'flex-end'}} onClick={handleSubmit(sendContactEmail)}>
                Send Message
            </Button>
        </Stack>
    )
}

export default ContactForm;