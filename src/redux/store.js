import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./cartsSlice";
import productsReducer from "./productsSlice";

const store = configureStore({
    reducer: {
        carts: cartsReducer,
        products: productsReducer
    }
});

export default store;