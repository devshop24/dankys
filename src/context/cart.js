import {createContext, useState} from 'react';

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    removeAllFromCart: () => {},
    emptyCart: () => {},
    getCartTotal: () => {}
});

export const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);

    const getProductQuantity = (id) => cartProducts.find(item => item.id === id)?.quantity || 0;

    const addToCart = (id) => {
        const quantity = getProductQuantity(id);

        if(quantity) {
            setCartProducts(
                cartProducts
                    .map(item => 
                        item.id === id ? {...item, quantity: item.quantity+1} : item
                    )
            );
        } else {
            setCartProducts([
                ...cartProducts,
                {
                    id,
                    quantity: 1
                }
            ]);
        }
    }

    const removeFromCart = (id) => {
        const quantity = getProductQuantity(id);

        if(quantity === 1) removeAllFromCart(id);
        else if(quantity > 1) {
            const items = cartProducts.map(item => item.id === id ? {...item, quantity: item.quantity-1} : item)

            setCartProducts(items);
        }
    }

    const removeAllFromCart = (id) => {
        const items = cartProducts.filter(item => item.id !== id);

        setCartProducts(items);
    }

    const emptyCart = () => setCartProducts([]);

    const getCartTotal = (products) => {
        let total = 0;

        cartProducts.map(item => {
            const product = products.find(({id}) => id === item.id);

            total += (product.price * item.quantity);
        });

        return total;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        emptyCart,
        getCartTotal
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}