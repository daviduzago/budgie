import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalQuantity: 0,
        totalAmount: 0,
    },
    reducers: {
        addProductToCart(state, action) {
            const product = action.payload;
            const existingProduct = state.products.find((p) => p.id === product.id);
            if (!existingProduct) {
                state.products.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: 1,
                    sum: product.price,
                });
            } else {
                existingProduct.quantity++;
                existingProduct.sum += product.price;
            }
            state.totalQuantity++;
            state.totalAmount += product.price;
        },
        removeProductFromCart(state, action) {
            const productId = action.payload;
            const existingProduct = state.products.find((p) => p.id === productId);
            if (!existingProduct) return;
            if (existingProduct.quantity === 1) {
                state.products = state.products.filter((p) => p.id !== productId);
            } else {
                existingProduct.quantity--;
                existingProduct.sum -= existingProduct.price;
            }
            state.totalQuantity--
            state.totalAmount -= existingProduct.price;
        },
        clearCart(state) {
            state.products = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        }
    }
});

export const {addProductToCart, removeProductFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;