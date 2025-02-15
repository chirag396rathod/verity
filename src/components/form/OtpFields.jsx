import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { useFormContext } from "react-hook-form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { cn } from "@/lib/utils";

const OtpFields = ({ name }) => {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => (
        <FormItem>
          <FormControl>
            <InputOTP className="" maxLength={4} {...field}>
              <div className="flex justify-center align-middle items-center w-full"> 
                <InputOTPGroup className="gap-x-3 w-[364px]  md:gap-x-5">
                  <InputOTPSlot
                    className={cn(
                      " h-14 xl:h-[60px] flex-1 border-none  text-lg font-medium bg-secondary !rounded-[14px]",
                      errors?.[name]?.message ? "text-red-500" : "text-primary"
                    )}
                    index={0}
                  />
                  <InputOTPSlot
                    className={cn(
                      " h-14 xl:h-[60px] flex-1 border-none text-lg font-medium bg-secondary !rounded-[14px]",
                      errors?.[name]?.message ? "text-red-500" : "text-primary"
                    )}
                    index={1}
                  />
                  <InputOTPSlot
                    className={cn(
                      "h-14 xl:h-[60px] flex-1 border-none text-lg font-medium bg-secondary !rounded-[14px]",
                      errors?.[name]?.message ? "text-red-500" : "text-primary"
                    )}
                    index={2}
                  />
                  <InputOTPSlot
                    className={cn(
                      "h-14 xl:h-[60px] flex-1 border-none text-lg font-medium bg-secondary !rounded-[14px]",
                      errors?.[name]?.message ? "text-red-500" : "text-primary"
                    )}
                    index={3}
                  />
                </InputOTPGroup>
              </div>
            </InputOTP>
          </FormControl>
          <FormMessage className="text-xs sm:text-sm  font-medium py-3" />
        </FormItem>
      )}
    ></FormField>
  );
};

export default OtpFields;
