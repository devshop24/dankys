import React from "react";
import Stack from '@mui/material/Stack';

import CategoriesSideBar from "../components/shop/CategoriesSideBar";
import PageContainer from "../components/base/PageContainer";
import ProductsList from "../components/shop/ProductsList";

import { useForm } from "react-hook-form";

import BannerImage from '../assets/banner.jpg';

const mockProducts = []

for(let i = 0; i < 14; i++) mockProducts.push({
    id: i,
    Image: BannerImage,
    name: `product-${i}`,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt accusamus voluptatum fugit est! Nisi atque quia cupiditate explicabo laboriosam?" ,
    price: 10.00
});

const Shop = () =>{
    const {
        control,
        watch
    } = useForm({
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
                <ProductsList products={mockProducts} />
            </Stack>
        </PageContainer>
    );
}

export default Shop;