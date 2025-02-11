import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { endPoints } from "@/lib/config";
import api from "@/lib/api";


const adminLogin = createAsyncThunk("ADMIN_LOGIN", async (values, { rejectWithValue }) => {
    try {
        const data = await api.post(endPoints.AUTH.LOGIN, values);
        toast.success(data?.ResponseMsg)
        return data
    } catch (error) {
        toast.error(error?.ResponseMsg);
        return rejectWithValue(error)
    }
})

const adminForgetPassword = createAsyncThunk("ADMIN_FOEGET_PASSWORD", async (values, { rejectWithValue }) => {
    try {
        const data = await api.post(endPoints.AUTH.FOREGET_PASSWORD, values);
        toast.success(data?.ResponseMsg);
        return data
    } catch (error) {
        toast.error(error?.ResponseMsg);
        return rejectWithValue(error)
    }
})

const adminVerifyOTP = createAsyncThunk("ADMIN_VERIFY_OTP", async (values, { rejectWithValue }) => {
    try {
        const data = await api.post(endPoints.AUTH.VERIFY_OTP, values);
        toast.success(data?.ResponseMsg);
        return data
    } catch (error) {
        toast.error(error?.ResponseMsg);
        return rejectWithValue(error)
    }
})

const adminResetPassword = createAsyncThunk("ADMIN_RESET_PASSWORD", async (values, { rejectWithValue }) => {
    try {
        const data = await api.post(endPoints.AUTH.UPDATE_PASSWORD, values);
        toast.success(data?.ResponseMsg);
        return data
    } catch (error) {
        toast.error(error?.ResponseMsg);
        return rejectWithValue(error)
    }
})

export { adminLogin, adminForgetPassword, adminVerifyOTP, adminResetPassword }