import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "carts",
    initialState : {
        value : []
    },
    reducers : {
        addCartItem(state, action) {
            state.value.push(action.payload)
        },

        emptyCart(state, action){
            state.value = []
        },

        updateCartItem(s, action) {
            s.value[action.payload.index] = action.payload.item
        },

        removeCartItem(state, action) {
            state.value.splice(action.payload, 1)
        }
    }
})

export const {addCartItem, removeCartItem, emptyCart, updateCartItem} = cartSlice.actions
export default cartSlice.reducer