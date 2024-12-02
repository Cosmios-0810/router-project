import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    login: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, {payload}) => {
            state.user = payload
            state.login = true
        },

        deleteUser: (state) => {
            state.user = null
            state.login = false
        }
    }
})


export const { setUser, deleteUser } = authSlice.actions

export default authSlice.reducer; 