import { FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { useFormContext } from 'react-hook-form'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';
import { cn } from '@/lib/utils';

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
                            <InputOTPGroup className="gap-x-3 w-full flex  md:gap-x-5">
                                <InputOTPSlot className={cn(" h-14 xl:h-[60px] flex-1 border border-primary  text-lg font-medium bg-white !rounded-[15px]",
                                    errors?.[name]?.message ? "text-red-500" : "text-primary"
                                )} index={0} />
                                <InputOTPSlot className={cn(" h-14 xl:h-[60px] flex-1 border border-primary text-lg font-medium bg-white !rounded-[15px]",
                                    errors?.[name]?.message ? "text-red-500" : "text-primary"
                                )} index={1} /> 
                               <InputOTPSlot className={cn("h-14 xl:h-[60px] flex-1 border border-primary text-lg font-medium bg-white !rounded-[15px]",
                                    errors?.[name]?.message ? "text-red-500" : "text-primary"
                                )} index={2} />
                                <InputOTPSlot className={cn("h-14 xl:h-[60px] flex-1 border border-primary text-lg font-medium bg-white !rounded-[15px]",
                                    errors?.[name]?.message ? "text-red-500" : "text-primary"
                                )} index={3} />
                            </InputOTPGroup>
                        </InputOTP>
                    </FormControl>
                    <FormMessage className="text-xs sm:text-sm  font-medium py-3" />
                </FormItem>
            )}
        >

        </FormField>
    )
}

export default OtpFields
