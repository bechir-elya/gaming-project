import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        productData: localStorage.getItem('productList') ? JSON.parse(localStorage.getItem('productList')) : [],
    },
    reducers: {
        addToCart: (state, { payload }) => {
            const { id } = payload
            const doesExist = state.productData.findIndex((item) => item.id === id);
            if (doesExist > -1) {
                state.productData[doesExist] = { ...payload, quantity: state.productData[doesExist].quantity + 1 };
            } else {
                state.productData.push({ ...payload, quantity: 1 });
                toast.success('Product added to cart', {
                    position: "bottom-right",
                });
            }
            localStorage.setItem('productList', JSON.stringify(state.productData));

        },
        decrementQty: (state, { payload }) => {
            const { id } = payload;
            const productIndex = state.productData.findIndex((item) => item.id === id);
            if (state.productData[productIndex].quantity > 1) {
                state.productData[productIndex] = { ...payload, quantity: state.productData[productIndex].quantity - 1 };
            } else {
                state.productData.splice(productIndex, 1);
            }
            localStorage.setItem('producList', JSON.stringify(state.productData));
        },
        deleteProduct: (state, { payload }) => {
            const { id } = payload;
            const productIndex = state.productData.findIndex((item) => item.id === id);
            state.productData.splice(productIndex, 1);
            localStorage.setItem('producList', JSON.stringify(state.productData));
        },
        clearCart: (state) => {
            state.productData = [];
            localStorage.removeItem('productList');
        }
    },
})


export const { addToCart, decrementQty, deleteProduct, clearCart } = shopSlice.actions
export const shopCart = (state) => state.shop.productData
export default shopSlice.reducer