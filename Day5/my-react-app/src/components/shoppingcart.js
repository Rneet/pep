import React, { useState } from "react";

function ShoppingCart(){
    const [cart, setCart] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItem = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
        setTotalCount((prevCount) => prevCount + 1);
        setTotalPrice((prevPrice) => prevPrice + item.price);
    };
    const removeItem = () => {
        
    }
}