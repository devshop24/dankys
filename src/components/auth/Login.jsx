import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Text from "../base/Text";
import TextFieldControlled from '../inputs/TextFieldControlled';

import { useForm } from "react-hook-form";
import { signIn } from "../../modules/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
    } = useForm({
        mode: 'all',
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const submit = async (values) => {
        const { email, password } = values;
        
        try {
            const result = await signIn(email, password);
            
            if(result) navigate('/shop');
        } catch(error) {
            console.log({error})
        }
    }

    return (
        <Stack sx={{boxShadow: 3, p: 3, m: 3, minHeight: '300px', width: '300px' }} justifyContent="space-evenly">
            <Text component="h4" message="Login" sx={{borderBottom: '1px solid black'}} />
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
            />

            <Button variant="contained" color="primary" onClick={handleSubmit(submit)} sx={{width: 1/3, alignSelf: 'flex-end'}}>
                Login
            </Button>
        </Stack>
    )
}

export default Login