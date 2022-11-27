import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Login from "../components/auth/Login";
import PageContainer from "../components/base/PageContainer";
import Register from '../components/auth/Register';

const Auth = () => (
    <PageContainer>
        <Stack direction="row" justifyContent="space-evenly" alignItems="flex-start">
            <Login />
            <Register />
        </Stack>
    </PageContainer>
);

export default Auth;