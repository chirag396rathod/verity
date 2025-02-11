import FormProvider from '@/components/Form/FormProvider';
import PasswordField from '@/components/Form/PasswordField';
import TextField from '@/components/Form/TextField';
import Loading from '@/components/common/Loading';
import Button from '@/components/custom/Button'
import { LOCK_ICON, LOGIN_IMAGE, LOGO, SMS_ICON } from '@/lib/image';
import { LoginSchema } from '@/lib/schema'
import { adminLogin } from '@/redux/action/auth.action';
import { AUTH_PATH } from '@/routes';
import { yupResolver } from '@hookform/resolvers/yup';
import md5 from 'md5';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const { loading } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const defaultValues = {
        email: "",
        password: ""
    }
    const methods = useForm({
        defaultValues,
        resolver: yupResolver(LoginSchema)
    })
    const { handleSubmit, formState: { errors } } = methods;

    const onSubmit = (values) => {

        dispatch(adminLogin({ email: values.email, password: md5(values.password) })).unwrap().then(() => {
            navigate('/user')
        })
    }
    return (
        <section className='min-h-dvh flex md:py-5 md:pl-5 md:gap-y-6  flex-col md:flex-row'>
            <div className='flex-1  bg-primary md:flex justify-center items-center rounded-[48px] hidden'>

                <div className='w-full flex justify-center  max-w-[380px] md:max-w-[640px]'>
                    <img className='w-[80%] lp:w-[90%] h-auto' src={LOGIN_IMAGE} alt='login' />
                </div>
            </div>
            <div className='flex-1  px-4 sm:px-5 md:px-8 lg:px-10 py-14 flex items-center'>
                <div className='w-full space-y-5  sm:space-y-6 max-w-[520px] mx-auto'>
                    <div className='flex justify-center'>
                        <div className='flex max-sm:justify-center max-sm:mx-auto rounded-full items-center'>
                            <img className='max-sm:w-[100px] w-[120px]' src={LOGO} alt="" />
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h4 className='text-2xl text-center sm:text-[28px] font-semibold text-primary'>Log In</h4>
                        <p className='sm:text-base text-center  md:text-lg text-secondary'>Please login to continue.</p>
                    </div>
                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                        <div className='space-y-8'>
                            <div className='flex flex-col gap-y-6 sm:gap-y-8'>
                                <div className='space-y-2'>
                                    <TextField prefix={<img src={SMS_ICON} />} placeholder='Enter email' name='email' />
                                </div>
                                <div className='space-y-2'>
                                    <PasswordField prefix={<img src={LOCK_ICON} />} placeholder="Enter Password" name="password" />
                                    <div className='flex justify-end'>
                                        <Link to={AUTH_PATH.forgotPassword} className='block w-max pt-2 text-base sm:text-lg font-medium text-main text-end'>
                                            Forgot Password?
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Button
                                disabled={loading}
                                className="font-medium rounded-[10px]"
                                type='submit'
                            >
                                {loading ? <Loading className="text-2xl" /> : 'Log In'}
                            </Button>
                        </div>
                    </FormProvider>
                </div>
            </div>
        </section>
    )
}

export default Login
