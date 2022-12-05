import {createContext, useEffect, useState} from 'react';
import BannerImage from '../assets/banner.jpg';

export const ShopContext = createContext({
    products: [],
    fetchProducts: async () => {},
    getProductData: () => {}
});

export const ShopProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        try {    
            const mockProducts = []

            for(let i = 0; i < 14; i++) mockProducts.push({
                id: i,
                Image: BannerImage,
                name: `product-${i}`,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt accusamus voluptatum fugit est! Nisi atque quia cupiditate explicabo laboriosam?" ,
                price: 10.00
            });

            setProducts(mockProducts);
        } catch(error) {
            console.log(error)
        }
    };

    const getProductData = (id) => {
        let productData = products.find(product => product.id === id);
    
        if (productData == undefined) {
            console.log("Product data does not exist for ID: " + id);
            return undefined;
        }
    
        return productData;
    }

    const contextValue = {
        products,
        fetchProducts,
        getProductData
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}