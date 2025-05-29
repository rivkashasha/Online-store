import { createSlice, isPending } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
    name: "carts",
    initialState: {
        productsList: []
        
    },
    reducers: {
        addToCart: (state, action) => {
            if (!action.payload || !action.payload.id) return;
            const productExists = state.productsList.some(p => p.id === action.payload.id);
            
            if (!productExists) {
                const product = { ...action.payload, quantity: action.payload.quantity || 1 };
                state.productsList.push(product);
            }
        },
        updateQuantity: (state, action) => {
            const { id, actionToDo } = action.payload;
            const product = state.productsList.find(p => p.id === id);
            if (product) {
                if (actionToDo === 'increase') {
                    product.quantity += 1;
                } else if (actionToDo === 'decrease' && product.quantity > 1) {
                    product.quantity -= 1;
                }
            }
        },
        deleteProduct: (state, action) => {
            state.productsList = state.productsList.filter((product) => product.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.productsList = [];
        }
    }
});

export const { addToCart, updateQuantity, deleteProduct, clearCart } = cartsSlice.actions;
export default cartsSlice.reducer;
