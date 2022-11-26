import React from "react";
import Stack from '@mui/material/Stack';

import PageContainer from "../components/base/PageContainer";
import Text from "../components/base/Text";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

const ComingSoon = () => (
    <PageContainer>
        <Stack justifyContent="center" alignItems="center" sx={{my: 10}}>
        <Stack sx={{mb: '35px', bgcolor: 'primary.main', p:3, borderRadius: '50%', boxShadow: '0 0 0 7px white, 0 0 0 8px #e0e0e0'}}>
                <FontAwesomeIcon icon={faSeedling} size="6x" color="white"/>
            </Stack>
            <Text component="h3" message="This Page Is Coming Soon" />
        </Stack>
    </PageContainer>
);

export default ComingSoon;