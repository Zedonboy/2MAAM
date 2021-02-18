import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/getUser", async (jwt) => {
    return new Promise(resolve => setTimeout(resolve({
        full_name: "Tobi Ademola"
    }), 3000))
})
const userSlice = createSlice({
    name : "user",
    initialState : {
        value : null,
        error : null | "",
        status : "idle" | "loading" | "succeeded"
    },

    reducers : {
        UpdateUser(state, action){
            state.value = action.payload
        }
    },

    extraReducers : {
        [fetchUser.pending] : (state, action) => {
            state.status = "loading"
            state.error = null
        },

        [fetchUser.fulfilled] : (state, action) => {
            state.status = "succeeded"
            state.value = action.payload
        },

        [fetchUser.rejected] : (state, action) => {
            state.status = "idle"
            state.error = action.payload.message
        }
    }
})

export default userSlice.reducer
export const {UpdateUser} = userSlice.actions