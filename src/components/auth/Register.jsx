import React, { useState } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Text from "../base/Text";
import TextFieldControlled from '../inputs/TextFieldControlled';

import { useForm } from "react-hook-form";
import { signUp, verifyAccount } from "../../modules/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [displayVerification, setDisplayVerification] = useState(false);
    const navigate = useNavigate();
    const {
        control,
        handleSubmit
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
            zip: '',
            code: ''
        }
    });

    const submit = async (values) => {
        console.log({values})
        const { address_1, address_2, city, state, zip} = values;
        const registrationValues = {
            email: values.email, 
            password: values.password, 
            address: `${address_1} ${address_2} ${city}, ${state}. ${zip}`, 
            name: values.name,
            birthdate: '11/13/1992'
        }

        try {
            console.log({registrationValues})
            const result = await signUp(registrationValues);
            console.log({result});
            setDisplayVerification(true);
        } catch(error) {
            console.log({error})
        }
    }

    const verify = async (values) => {
        const {email, code} = values;

        try {
            const result = await verifyAccount(email, code);
            console.log({result});
            navigate('/shop');
        } catch(error) {
            console.log({error});
        }
    }

    return (
        <Stack sx={{boxShadow: 3, p: 3, m: 3, minHeight: '300px', width: {xs: '300px', md: '400px'} }} justifyContent="space-evenly">
            <Text component="h4" message="Register" sx={{borderBottom: '1px solid black'}} />
            <TextFieldControlled 
                name="name"
                label="Full Name"
                color="primary"
                disabled={displayVerification}
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
                disabled={displayVerification}
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
                disabled={displayVerification}
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
                disabled={displayVerification}
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
                disabled={displayVerification}
                control={control}
                sx={{my:1.5}}
            />

            <TextFieldControlled 
                name="city"
                label="City"
                color="primary"
                disabled={displayVerification}
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
                    disabled={displayVerification}
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
                    disabled={displayVerification}
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

            {
                displayVerification && (
                    <TextFieldControlled 
                        name="code"
                        label="Verification Code"
                        color="primary"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: 'Please provide verification code from email',
                            },
                        }}
                        sx={{my:1.5}}
                    />
                )
            }

            <Button variant="contained" color="primary" onClick={displayVerification ? handleSubmit(verify)  : handleSubmit(submit)} sx={{width: 1/3, alignSelf: 'flex-end'}}>
                {displayVerification ? 'Verify' : 'Register'}
            </Button>
        </Stack>
    )
}

export default Register;