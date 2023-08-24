import {createSlice} from "@reduxjs/toolkit";

const testInitialState = {
    products: [
        {
            id: 1,
            deliveryTime: 30,
            rating: 4,
            image: 'https://picsum.photos/100',
            comboTitle: 'Tasty Burger Combo',
            comboDescription: 'Dive into our juicy beef burger layered with fresh veggies and melted cheese, paired with crispy golden fries. Wash it all down with your choice of a refreshing soft drink.',
            comboItems: [
                {name: 'Burger', quantity: 1},
                {name: 'Fries', quantity: 1},
                {name: 'Soda', quantity: 1},
            ],
            comboOptions: [
                {
                    title: "Choose your drink",
                    type: "drink",
                    defaultSelection: 1,
                    options: [
                        {id: 1, name: 'Coke', price: 1.99},
                        {id: 2, name: 'Pepsi', price: 1.99},
                        {id: 3, name: 'Sprite', price: 1.99},
                        {id: 4, name: 'Fanta', price: 1.99},
                        {id: 5, name: 'Dr. Pepper', price: 1.99},
                    ]
                },
                {
                    title: "Choose your fries",
                    type: "side",
                    defaultSelection: 5,
                    options: [
                        {id: 1, name: 'Curly Fries', price: 1.99},
                        {id: 2, name: 'Sweet Potato Fries', price: 1.99},
                        {id: 3, name: 'Tater Tots', price: 1.99},
                        {id: 4, name: 'Onion Rings', price: 1.99},
                        {id: 5, name: 'French Fries', price: 1.99},
                    ]
                }
            ],
            price: 10.99,
            restaurantName: 'Burger Joint',
            restaurantAddress: {
                street: '123 Main St',
                city: 'Anytown',
                state: 'CA',
            },
            favoriteCombo: true,
        },
        {
            id: 2,
            deliveryTime: 30,
            rating: 4,
            image: 'https://picsum.photos/100',
            comboTitle: 'Tasty Burger Combo',
            comboDescription: 'Dive into our juicy beef burger layered with fresh veggies and melted cheese, paired with crispy golden fries. Wash it all down with your choice of a refreshing soft drink.',
            comboItems: [
                {name: 'Burger', quantity: 1},
                {name: 'Fries', quantity: 1},
                {name: 'Soda', quantity: 1},
            ],
            comboOptions: [
                {
                    title: "Choose your drink",
                    type: "drink",
                    defaultSelection: 1,
                    options: [
                        {id: 1, name: 'Coke', price: 1.99},
                        {id: 2, name: 'Pepsi', price: 1.99},
                        {id: 3, name: 'Sprite', price: 1.99},
                        {id: 4, name: 'Fanta', price: 1.99},
                        {id: 5, name: 'Dr. Pepper', price: 1.99},
                    ]
                },
                {
                    title: "Choose your fries",
                    type: "side",
                    defaultSelection: 5,
                    options: [
                        {id: 1, name: 'Curly Fries', price: 1.99},
                        {id: 2, name: 'Sweet Potato Fries', price: 1.99},
                        {id: 3, name: 'Tater Tots', price: 1.99},
                        {id: 4, name: 'Onion Rings', price: 1.99},
                        {id: 5, name: 'French Fries', price: 1.99},
                    ]
                }
            ],
            price: 10.99,
            restaurantName: 'Burger Joint',
            restaurantAddress: {
                street: '123 Main St',
                city: 'Anytown',
                state: 'CA',
            },
            favoriteCombo: true,
        },
    ],
    totalQuantity: 1,
    totalAmount: 10.99,
}

const initialState = {
    products: [],
    totalQuantity: 0,
    totalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addProductToCart(state, action) {
            const product = action.payload;
            const existingProduct = state.products.find((p) => p.id === product.id);
            if (!existingProduct) {
                state.products.push({
                    ...product,
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