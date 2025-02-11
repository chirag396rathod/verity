import { createSlice } from '@reduxjs/toolkit'
import { addUpdateSpecialityData, deleteSpecialityData, getSpecialityListData } from '../action/specialty.action'

const specialitySlice = createSlice({
    name: "speciality",
    initialState: {
        loading: false,
        speciality_list: [],
        total_speciality: 0
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSpecialityListData.pending, (state, action) => {
            state.loading = true
        }).addCase(getSpecialityListData.fulfilled, (state, action) => {
            state.speciality_list = action?.payload?.data
            state.total_speciality = action?.payload?.total_record
            state.loading = false
        }).addCase(getSpecialityListData.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(addUpdateSpecialityData.pending, (state, action) => {
            state.loading = true
        }).addCase(addUpdateSpecialityData.fulfilled, (state, action) => {
            state.fulfilled = false
        }).addCase(addUpdateSpecialityData.rejected, (state, action) => {
            state.rejected = false
        })
        builder.addCase(deleteSpecialityData.pending, (state, action) => {
            state.loading = true
        }).addCase(deleteSpecialityData.fulfilled, (state, action) => {
            state.loading = false
        }).addCase(deleteSpecialityData.rejected, (state, action) => {
            state.loading = false
        })
    }
})

export default specialitySlice.reducer