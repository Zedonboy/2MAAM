import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchNotifications = createAsyncThunk("notifications/fetchNotifications", async(jwt) => {

})
const notificationSlice = createSlice({
    name: "notifications",
    initialState : {
        value : [],
        error : null,
        status : "idle" | "loading" | "succeeded"
    },

    reducers : {
        addNotificatons(state, action) {
            state.value.push(...action.payload)
            state.value = state.value.reverse()
        },

        clearNotifications (state, action) {
            state.value = []
        }
    },

    extraReducers : {
        [fetchNotifications.fulfilled] : (state, action) => {
            state.value.push(...action.payload)
            state.value = state.value.reverse()
        }
    }
})

export default notificationSlice.reducer
export const {addNotificatons, clearNotifications} = notificationSlice.actions