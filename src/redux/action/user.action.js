import api from "@/lib/api"
import { endPoints } from "@/lib/config"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const getUserList = createAsyncThunk("USER_LIST", async (values, { rejectWithValue }) => {
    try {
        const data = await api.post(endPoints.USER.LIST, values);
        return data
    } catch (error) {
        toast.error(error?.ResponseMsg);
        return rejectWithValue(error);
    }
})

const getUserAppointmentList = createAsyncThunk("USER_APPOINTMENT_LIST", async (values, { rejectWithValue }) => {
    try {
        const data = await api.post(endPoints.USER.APPOITMENT_LIST, values);
        return data
    } catch (error) {
        toast.error(error?.ResponseMsg);
        return rejectWithValue(error);
    }
})

const getHelperList = createAsyncThunk("USER_HELPER_LIST", async (values, { rejectWithValue }) => {
    try {
        const data = await api.post(endPoints.USER.HELPER_LIST, values);
        return data
    } catch (error) {
        toast.error(error?.ResponseMsg);
        return rejectWithValue(error)
    }
})

const updateUserAccountStatus = createAsyncThunk("USER_ACCOUNT_STATUS", async (values, { rejectWithValue }) => {
    try {
        const data = await api.post(endPoints.USER.CHANGE_STATUS, values);
        toast.success(data?.ResponseMsg);
        return data
    } catch (error) {
        toast.error(error?.ResponseMsg);
        return rejectWithValue(error);
    }
})

const getHelperReviewList = createAsyncThunk("REVIEW-LIST", async (values, { rejectWithValue }) => {
    try {
        const data = await api.post(endPoints.USER.HELPER_REVIEW_LIST, values);
        return data
    } catch (error) {
        toast.error(error?.ResponseMsg);
        return rejectWithValue(error)
    }
})

export { getUserList, getUserAppointmentList, getHelperList, updateUserAccountStatus,getHelperReviewList }