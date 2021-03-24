import { createSlice } from "@reduxjs/toolkit";

const jwtSlice = createSlice({
    name : "jwt",
    initialState : {
        value : null
    },

    reducers : {
        updateJwt(s, a) {
            s.value = a.payload
        }
    }
})

export default jwtSlice.reducer
export const {updateJwt} = jwtSlice.actions