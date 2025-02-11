

import api from '@/lib/api';
import { endPoints } from '@/lib/config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { values } from 'lodash';
import { toast } from 'react-toastify'

const getSpecialityListData = createAsyncThunk("SPECIALITY_LIST", async (values, { rejectWithValue }) => {
    try {
        const data = await api.post(endPoints.SPECIALITY.LIST, values);
        return data
    } catch (error) {
        toast.error(error?.ResponseMsg);
        return rejectWithValue(error)
    }
})

const addUpdateSpecialityData = createAsyncThunk("ADD_UPDATE_SPECAILITY", async (values, { rejectWithValue }) => {
    try {
        const data = await api.post(endPoints.SPECIALITY.ADD, values);
        toast.success(data?.ResponseMsg);
        return data
    } catch (error) {
        toast.error(error?.ResponseMsg);
        return rejectWithValue(error)
    }
})

const deleteSpecialityData = createAsyncThunk("DELETE_SPECAILITY", async (values, { rejectWithValue }) => {
    try {
        const data = await api.post(endPoints.SPECIALITY.DELETE, values);
        toast.success(data?.ResponseMsg);
        return data
    } catch (error) {
        toast.error(error?.ResponseMsg);
        return rejectWithValue(error)
    }
})

export { getSpecialityListData, addUpdateSpecialityData, deleteSpecialityData }