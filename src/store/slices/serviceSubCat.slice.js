import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchServiceSubCatSlice = createAsyncThunk("serviceSubCat/fetch", () => {

})
const serviceSubCatSlice = createSlice({
    name : "serviceSubCat",
    initialState : {
        value : [],
        error : null,
        status : "idle" | "loading" | "succeeded",
        currentService: []
    },
    reducers : {
        addServiceSubCategories(state, action) {
            state.value.push(...action.payload)
        },

        setCurrentServiceItems(state, action) {
            state.currentService = action.payload
        }
    },

    extraReducers : {
        [fetchServiceSubCatSlice.pending] : (s, a) => {
            s.status = "loading"
            s.error = null
        },

        [fetchServiceSubCatSlice.fulfilled] : (s, a) => {
            s.value.push(a.payload)
            s.status = "succeeded"
            s.error = null
        },

        [fetchServiceSubCatSlice.rejected] : (s, a) => {
            s.error = a.payload.message
            s.status = "idle"
        }
    }
})

export default serviceSubCatSlice.reducer
export const {addServiceSubCategories, setCurrentServiceItems} = serviceSubCatSlice.actions