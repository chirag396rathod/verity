import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useFormContext } from 'react-hook-form'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'
import { Textarea } from '../ui/textarea'
import Iconify from '../common/Iconify'

const TextField = ({ name, placeholder, textarea = false, label, className, prefix, ...other }) => {
    const { control } = useFormContext()
    return (
        <FormField
            control={control}
            name={name}
            render={({ field, formState: { errors } }) => (
                <div className='space-y-2'>
                    {label && <label className="text-primary font-medium">
                        {label}
                    </label>}
                    <FormItem className="relative">
                        <FormControl>
                            {textarea ?
                                <Textarea
                                    {...field}
                                    {...other}
                                    autoComplete='off'
                                    id={name}
                                    required
                                    placeholder={placeholder}
                                    className={cn('placeholder:text-secondary placeholder:font-normal text-primary text-base sm:text-lg placeholder:text-base sm:placeholder:text-lg h-[52px]  sm:h-14  bg-secondary px-6 py-3 rounded-[10px] font-medium ',
                                        errors?.[name]?.message ? "text-red-500 focus-visible:ring-red-500 border-none" : "border-none focus-visible:ring-main"
                                        , prefix ? "pl-[46px] sm:pl-[52px]" : "", className)}
                                /> :
                                <Input
                                    {...field}
                                    {...other}
                                    autoComplete='off'
                                    id={name}
                                    required
                                    placeholder={placeholder}
                                    className={cn('placeholder:text-secondary placeholder:font-normal focus-visible:ring-offset-0  text-primary text-base sm:text-lg placeholder:text-base sm:placeholder:text-lg  h-[52px] sm:h-14  bg-secondary px-6 rounded-[10px] sm:font-medium',
                                        errors?.[name]?.message ? "text-red-500 focus-visible:ring-red-500 border border-red-500 focus-visible:ring-1" : "border-none focus:border-main focus-visible:ring-1 focus-visible:ring-main"
                                        , prefix ? "pl-[52px] sm:pl-[60px]" : "", className)}
                                />}
                        </FormControl>
                        {
                            prefix && <div className={cn('absolute flex items-center',textarea?'top-1.5 sm:top-[6px] left-4':'top-1.5 sm:top-[7.8px] left-[16px] sm:left-[22px]')}>
                                {prefix}
                               
                            </div>
                        }
                      
                    </FormItem>
                    <FormMessage className="pt-1 pl-3 text-xs sm:text-sm  font-medium text-red-500" />
                </div>
            )}
        >

        </FormField>
    )
}

export default TextField
