import FormProvider from "@/components/Form/FormProvider";
import TextField from "@/components/Form/TextField";
import BackButton from "@/components/common/BackButton";
import Loading from "@/components/common/Loading";
import Button from "@/components/custom/Button";
import {
  ARROW_BACK,
  FORGOT_PASSWORD_ICON,
  FORGOT_PASSWORD_IMAGE,
  SMS_ICON,
} from "@/lib/image";
import { ForgotPasswordSchema } from "@/lib/schema";
import { adminForgetPassword } from "@/redux/action/auth.action";
import { AUTH_PATH } from "@/routes";
import { yupResolver } from "@hookform/resolvers/yup";
import md5 from "md5";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { loading } = useSelector((state) => state.auth);
  const defaultValues = {
    email: "",
  };
  const dispatch = useDispatch();
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(ForgotPasswordSchema),
  });
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = (values) => {
    navigate(AUTH_PATH.verifyOTP, {
      state: {
        email: values.email,
      },
    });
  };
  return (
    <section className="min-h-dvh flex md:py-5 md:pl-5 md:gap-y-6  flex-col md:flex-row">
      <div className="flex-1   bg-auth_primary md:flex justify-center items-center rounded-[48px]  hidden">
        <div className="w-full flex justify-center  max-w-[380px] md:max-w-[640px]">
          <img
            className="w-[80%] lp:w-[90%] h-auto"
            src={FORGOT_PASSWORD_IMAGE}
            alt="login"
          />
        </div>
      </div>
      <div className="flex-1 relative px-4 sm:px-5 md:px-8 lg:px-10 py-14 flex items-center">
        <div className="w-full space-y-5  sm:space-y-6 max-w-[520px] mx-auto">
          <div className="flex justify-center items-center">
            <div className="flex border-none w-[120px] h-[120px]   sm:w-[120px] sm:h-[120px] justify-center max-sm:mx-auto items-center">
              <img
                className="max-sm:w-[100px]"
                src={FORGOT_PASSWORD_ICON}
                alt=""
              />
            </div>
          </div>
          <div className="space-y-2 ">
            <h4 className="text-2xl sm:text-[28px]  text-center font-semibold text-primary">
              Forgot Password?
            </h4>
            <p className="sm:text-base text-center  md:text-lg text-secondary">
              No worries, we will help you to reset <br /> your password.
            </p>
          </div>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-8">
              <div className="flex flex-col gap-y-6 sm:gap-y-8">
                <div className="space-y-2">
                  <TextField
                    prefix={<img src={SMS_ICON} />}
                    placeholder="Email"
                    name="email"
                  />
                </div>
              </div>

              <Button
                disabled={loading}
                className="font-medium rounded-[10px]"
                type="submit"
              >
                {loading ? <Loading className="text-2xl" /> : "Send"}
              </Button>
            </div>
          </FormProvider>
          <div className="flex justify-center items-center">
            <button
              onClick={() => navigate(-1)}
              className="w-[148px]  font-normal text-secondary flex items-center justify-center gap-[14px]"
            >
              <img src={ARROW_BACK} />
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
