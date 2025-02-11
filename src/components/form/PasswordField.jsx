import React, { useState } from 'react'
import { FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { useFormContext } from 'react-hook-form'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'

import Iconify from '../common/Iconify'
import { EYE_ICON, EYE_SLASH_ICON } from '@/lib/image'

const PasswordField = ({ name, placeholder = "", label = "", className = "", prefix, ...other }) => {
    const [showPassword, setShowPassword] = useState(false)
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
                            <Input
                                {...field}
                                {...other}
                                type={showPassword ? 'text' : 'password'}
                                autoComplete='off'
                                id={name}
                                required
                                placeholder={placeholder}
                                className={cn('placeholder:text-secondary placeholder:font-normal  focus-visible:ring-offset-0  text-primary text-base sm:text-lg placeholder:text-base sm:placeholder:text-lg  h-[52px] sm:h-14  bg-secondary px-6 rounded-[14px] ',
                                      errors?.[name]?.message ? "text-red-500 focus-visible:ring-red-500 border border-red-500 focus-visible:ring-1" : "border-none text-primary focus:border-main focus-visible:ring-1 focus-visible:ring-main"
                                    , prefix ? "pl-[52px] sm:pl-[60px] pr-[52px] sm:pr-[60px]" : "", className)}
                            />
                        </FormControl>
                        {
                            prefix && <div className='absolute flex items-center top-1.5 sm:top-[7.8px] left-[16px] sm:left-[22px]'>
                                {prefix}
                            </div>
                        }
                       
                        <div className='absolute top-2 sm:top-2 right-4 sm:right-6'>
                            <button onClick={() => setShowPassword(!showPassword)} type='button'><img src={showPassword ? EYE_ICON : EYE_SLASH_ICON} alt="" /></button>
                        </div>
                    </FormItem>
                    <FormMessage className="pt-1 pl-3 text-xs sm:text-sm  font-medium text-red-500" />
                </div>
            )}
        >

        </FormField>
    )
}

export default PasswordField
