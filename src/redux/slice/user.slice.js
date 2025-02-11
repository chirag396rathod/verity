import { createSlice } from "@reduxjs/toolkit"
import { getHelperList, getHelperReviewList, getUserAppointmentList, getUserList, updateUserAccountStatus } from "../action/user.action"

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        userData: [],
        appointment_data: [],
        user_detail: {},
        total_user_appointment: 0,
        total_user: 0
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserList.pending, (state, action) => {
            state.loading = true
        }).addCase(getUserList.fulfilled, (state, action) => {
            state.userData = action?.payload?.data;
            state.total_user = action?.payload?.total_record
            state.loading = false
        }).addCase(getUserList.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(getUserAppointmentList.pending, (state, action) => {
            state.loading = true
        }).addCase(getUserAppointmentList.fulfilled, (state, action) => {
            state.appointment_data = action?.payload?.data?.data_list;
            state.user_detail = action?.payload?.data?.user_dtl;
            state.total_user_appointment = action?.payload?.total_record
            state.loading = false
        }).addCase(getUserAppointmentList.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(getHelperList.pending, (state, action) => {
            state.loading = true
        }).addCase(getHelperList.fulfilled, (state, action) => {
            state.userData = action?.payload?.data
            state.total_user = action?.payload?.total_record
            state.loading = false
        }).addCase(getHelperList.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(updateUserAccountStatus.pending, (state, action) => {
            state.loading = true
        }).addCase(updateUserAccountStatus.fulfilled, (state, action) => {
            state.loading = false
        }).addCase(updateUserAccountStatus.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(getHelperReviewList.pending, (state, action) => {
            state.loading = true
        }).addCase(getHelperReviewList.fulfilled, (state, action) => {
            state.appointment_data = action?.payload?.data?.data_list;
            // state.user_detail = action?.payload?.data?.user_dtl;
            state.total_user_appointment = action?.payload?.total_record;
            state.loading = false
        }).addCase(getHelperReviewList.rejected, (state, action) => {
            state.loading = false
        })
    }
})

export default userSlice.reducer