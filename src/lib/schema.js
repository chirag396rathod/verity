import * as yup from 'yup';

const LoginSchema = yup.object().shape({
    email: yup.string().required('Email is required').email('Enter a valid email'),
    password: yup.string().required('Password is required').min(6, "Minimum 6 character required")
})

const ForgotPasswordSchema = yup.object().shape({
    email: yup.string().required('Email is required').email('Enter a valid email')
})

const OTPSchema = yup.object().shape({
    otp: yup.string().required('OTP is required').length(4, "OTP must be 4 digit")
})

const ResetPasswordSchema = yup.object().shape({
    new_password: yup.string().required('Password is required').min(6, 'Minimum 6 character required'),
    confirm_password: yup.string().required('Confirm password is required').oneOf([yup.ref('new_password'), null], 'password does not match')
})


export { LoginSchema, ForgotPasswordSchema, OTPSchema, ResetPasswordSchema }