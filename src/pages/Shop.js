import React, { useContext } from "react";
import Stack from '@mui/material/Stack';

import CategoriesSideBar from "../components/shop/CategoriesSideBar";
import PageContainer from "../components/base/PageContainer";
import ProductsList from "../components/shop/ProductsList";

import { useForm } from "react-hook-form";
import { ShopContext } from "../context/shop";

const Shop = () =>{
    const { products } = useContext(ShopContext);

    const { control } = useForm({
        mode: 'all',
        defaultValues: {
            nutrients: false,
            lights: false,
            seeds: false,
            cbd: false,
            brand1: false,
            brand2: false,
            brand3: false,
            brand4: false
        }
    });

    return (
        <PageContainer>
            <Stack direction="row">
                <CategoriesSideBar control={control} />
                <ProductsList products={products} />
            </Stack>
        </PageContainer>
    );
}

export default Shop;