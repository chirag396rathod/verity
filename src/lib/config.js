import { SPECIALITY_ICON } from "./image";

export const BASE_URL = import.meta.env.VITE_BASE_PATH;

export const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const API_BASE_KEY = import.meta.env.VITE_BASE_API_KEY

export const endPoints = {
    AUTH: {
        LOGIN: "/admin/login",
        FOREGET_PASSWORD: "/admin/forgotPassword",
        VERIFY_OTP: "/admin/verifyForgotPasswordOTP",
        UPDATE_PASSWORD: "/admin/updatePassword"
    },
    USER: {
        LIST: "/admin/getUserList",
        APPOITMENT_LIST: "/admin/getAppointmentList",
        HELPER_LIST: "/admin/getHelperList",
        CHANGE_STATUS: "/admin/changeAccountStatus",
        HELPER_REVIEW_LIST: "/admin/getReviewList"
    },
    SPECIALITY: {
        LIST: "/admin/getSpecialityList",
        ADD: "/admin/addOrUpdateSpeciality",
        DELETE: "/admin/deleteSpeciality"
    }
    // Speciality
}