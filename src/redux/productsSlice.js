
import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        numOfProducts: 0,
        products: [] 
    },
    reducers: {
        increaseNumOfProducts: (state, action) => {
            if (!action.payload || !action.payload.id) return;

            const productExists = state.products.some(product => product.id === action.payload.id);
            if (!productExists) {
                state.products.push(action.payload);
                state.numOfProducts++;
            }
        },
        decreaseNumOfProducts: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload.id);
            state.numOfProducts = state.products.length;
        },
        resetNumOfProducts: (state) => {
            state.products = [];
            state.numOfProducts = 0;
        }
    }
});

export const { increaseNumOfProducts, decreaseNumOfProducts, resetNumOfProducts } = productsSlice.actions;
export default productsSlice.reducer;
