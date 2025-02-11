import FormProvider from '@/components/Form/FormProvider';
import BackButton from '@/components/common/BackButton';
import Loading from '@/components/common/Loading';
import Button from '@/components/custom/Button'
import OtpFields from '@/components/form/OtpFields';
import { VERIFY_OTP_ICON, VERIFY_OTP_IMAGE } from '@/lib/image';
import { OTPSchema } from '@/lib/schema'
import { adminForgetPassword, adminVerifyOTP } from '@/redux/action/auth.action';
import { AUTH_PATH } from '@/routes';
import { yupResolver } from '@hookform/resolvers/yup';
import md5 from 'md5';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const VerifyOTP = () => {
    const navigate = useNavigate()

    const { state } = useLocation()
    const { loading } = useSelector((state) => state.auth)
    const defaultValues = {
        otp: ""
    }
    const dispatch = useDispatch();
    const methods = useForm({
        defaultValues,
        resolver: yupResolver(OTPSchema)
    })

    const { handleSubmit, formState: { errors } } = methods
    const onSubmit = (values) => {
        dispatch(adminVerifyOTP({
            otp: values.otp,
            email: state?.email
        })).unwrap().then(() => {
            navigate(AUTH_PATH.resetPassword, {
                state: {
                    verified: true,
                    email: state?.email
                }
            })
        })
    }

    const handleResendOTP = () => {
        dispatch(adminForgetPassword({ email: state?.email }))
    }

    return (
        <section className='min-h-dvh flex md:py-5 md:pl-5 md:gap-y-6  flex-col md:flex-row'>
            <div className='flex-1   bg-primary md:flex justify-center items-center rounded-[48px]  hidden'>

                <div className='w-full flex justify-center  max-w-[380px] md:max-w-[640px]'>
                    <img className='w-[80%] lp:w-[90%] h-auto' src={VERIFY_OTP_IMAGE} alt='login' />
                </div>
            </div>
            <div className='flex-1 relative px-4 sm:px-5 md:px-8 lg:px-10 py-14 flex items-center'>
                <button onClick={() => navigate(-1)} className='size-[40px] border border-[#EFF0F6] rounded-[10px] sm:size-[45px] absolute top-[20px]   sm:left-[40px]'>
                    <BackButton />
                </button>
                <div className='w-full space-y-5  sm:space-y-6 max-w-[520px] mx-auto'>
                    <div>
                        <div className='flex border border-secondary w-[95px] h-[90px]   sm:w-[110px] sm:h-[105px] justify-center max-sm:mx-auto rounded-[20px] items-center'>
                            <img className='max-sm:w-[55px]' src={VERIFY_OTP_ICON} alt="" />
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h4 className='text-2xl max-sm:text-center sm:text-[28px] font-semibold text-primary'>Verification</h4>
                        <p className='sm:text-base max-sm:text-center  md:text-lg text-secondary'>Enter the verification code we just sent to your email address.</p>
                    </div>
                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                        <div className='space-y-8'>
                            <div className='flex flex-col gap-y-6 sm:gap-y-8'>
                                <div className='space-y-2'>
                                    <OtpFields name="otp" />
                                </div>
                            </div>

                            <Button
                                disabled={loading}
                                className="font-medium rounded-[10px]"
                                type='submit'
                            >
                                {loading ? <Loading className="text-2xl" /> : 'Send'}
                            </Button>

                            <div>
                                <p className='text-secondary text-lg font-normal text-center'>Didn’t receive a code? <span className='text-main font-medium cursor-pointer' onClick={handleResendOTP}> Resend </span></p>
                            </div>
                        </div>
                    </FormProvider>
                </div>
            </div>
        </section>
    )
}

export default VerifyOTP
