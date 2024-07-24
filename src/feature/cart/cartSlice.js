import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.findIndex(
                (item) => item.id === action.payload.id
            )

            if (itemIndex >= 0) {
                state[itemIndex].amount += 1
            } else {
                const newProduct = { ...action.payload, amount: 1 };
                console.log(newProduct);
                state.push(newProduct)
            }
        },
        deleteItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        },
        addAmount: (state, action) => {
            const itemIndex = state.findIndex(
                (item) => item.id === action.payload.id
            )
            state[itemIndex].amount += 1
        },
        minusAmount: (state, action) => {
            const itemIndex = state.findIndex(
                (item) => item.id === action.payload.id
            )

            if (state[itemIndex].amount > 1) {
                state[itemIndex].amount -= 1
            } else {
                return state.filter((item) => item.id !== action.payload.id)
            }
        },
        changeAmount: (state, action) => {
            const itemIndex = state.findIndex(
                (item) => item.id === action.payload.item.id
            )

            state[itemIndex].amount = action.payload.newAmount
        }
    }
})

export const { addToCart, deleteItem, addAmount, minusAmount, changeAmount } = cartSlice.actions;

export default cartSlice.reducer;