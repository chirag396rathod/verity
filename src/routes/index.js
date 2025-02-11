const ROOT_AUTH = "";

function path(root, sublink) {
    return `${root}${sublink}`
}

export const AUTH_PATH = {
    login: path(ROOT_AUTH, "/login"),
    forgotPassword: path(ROOT_AUTH, "/forgot_password"),
    verifyOTP: path(ROOT_AUTH, "/verify_otp"),
    resetPassword: path(ROOT_AUTH, "/reset_password")
}

