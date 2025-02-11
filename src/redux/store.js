import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slice/auth.slice"
import userSlice from "./slice/user.slice"
import specialitySlice from './slice/specialty.slice'

const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        speciality: specialitySlice
    }
})

export default store;