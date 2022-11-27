import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Text from "../base/Text";
import TextFieldControlled from '../inputs/TextFieldControlled';

import { useForm } from "react-hook-form";

const Register = () => {
    const {
        control,
        handleSubmit,
        reset
    } = useForm({
        mode: 'all',
        defaultValues: {
            name: '',
            email: '',
            password: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            zip: ''
        }
    });

    const submit = (values) => {
        console.log({values})
    }
    return (
        <Stack sx={{boxShadow: 3, p: 3, m: 3, minHeight: '300px', width: '400px' }} justifyContent="space-evenly">
            <Text component="h4" message="Register" sx={{borderBottom: '1px solid black'}} />
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
                sx={{my:1.5}}
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
                sx={{my:1.5}}
            />

            <TextFieldControlled 
                name="password"
                label="Password"
                color="primary"
                control={control}
                password
                rules={{
                    required: {
                        value: true,
                        message: 'Please provide password',
                        min: 6
                    },
                }}
                sx={{my:1.5}}
            />

            <TextFieldControlled 
                name="address_1"
                label="Address Line 1"
                color="primary"
                control={control}
                rules={{
                    required: {
                        value: true,
                        message: 'Please provide address',
                        min: 6
                    },
                }}
                sx={{my:1.5}}
            />

            <TextFieldControlled 
                name="address_2"
                label="Address Line 2 (optional)"
                color="primary"
                control={control}
                sx={{my:1.5}}
            />

            <TextFieldControlled 
                name="city"
                label="City"
                color="primary"
                control={control}
                rules={{
                    required: {
                        value: true,
                        message: 'Please provide city',
                    },
                }}
                sx={{my:1.5}}
            />

            <Stack direction="row">
                <TextFieldControlled 
                    name="state"
                    label="State"
                    color="primary"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Please provide state',
                        },
                    }}
                    sx={{my:1.5, mr: 1}}
                />

                <TextFieldControlled 
                    name="zip"
                    label="Postal Code"
                    color="primary"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Please provide zip code',
                        },
                    }}
                    sx={{my:1.5}}
                />
            </Stack>

            <Button variant="contained" color="primary" onClick={handleSubmit(submit)} sx={{width: 1/3, alignSelf: 'flex-end'}}>
                Register
            </Button>
        </Stack>
    )
}

export default Register;