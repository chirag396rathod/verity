import { createSlice } from "@reduxjs/toolkit"
import { adminForgetPassword, adminLogin, adminResetPassword, adminVerifyOTP } from "../action/auth.action"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(adminLogin.pending, (state, action) => {
            state.loading = true
        }).addCase(adminLogin.fulfilled, (state, action) => {
            localStorage.setItem("token", action?.payload?.data?.token);
            localStorage.setItem("user_id", action?.payload?.data?.id);
            localStorage.setItem("email", action?.payload?.data?.email);
            state.loading = false
        }).addCase(adminLogin.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(adminForgetPassword.pending, (state, action) => {
            state.loading = true
        }).addCase(adminForgetPassword.fulfilled, (state, action) => {
            state.loading = false
        }).addCase(adminForgetPassword.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(adminVerifyOTP.pending, (state, action) => {
            state.loading = true
        }).addCase(adminVerifyOTP.fulfilled, (state, action) => {
            state.loading = false;
        }).addCase(adminVerifyOTP.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(adminResetPassword.pending, (state, action) => {
            state.loading = true
        }).addCase(adminResetPassword.fulfilled, (state, action) => {
            state.loading = false
        }).addCase(adminResetPassword.rejected, (state, action) => {
            state.loading = false
        })
    }
})

export default authSlice.reducer