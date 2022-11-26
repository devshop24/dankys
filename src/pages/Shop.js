import React from "react";
import Stack from '@mui/material/Stack';

import CategoriesSideBar from "../components/shop/CategoriesSideBar";
import PageContainer from "../components/base/PageContainer";
import ProductsList from "../components/shop/ProductsList";

import { useForm } from "react-hook-form";

const Shop = () =>{
    const {
        control,
        handleSubmit,
        reset,
        watch
    } = useForm({
        mode: 'all',
        defaultValues: {
            nutrients: false,
            lights: false,
            seeds: false,
            cbd: false
        }
    });

    const nutrients = watch('nutrients');

    console.log({nutrients});

    return (
        <PageContainer>
            <Stack direction="row">
                <CategoriesSideBar control={control} />
                <ProductsList />
            </Stack>
        </PageContainer>
    );
}

export default Shop;