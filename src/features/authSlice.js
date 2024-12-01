import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    login: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: () => {

        },

        deleteUser: () => {
            
        }
    }
})