import { Dialog, DialogClose, DialogContent } from '@/components/ui/dialog'
import { IoClose } from "react-icons/io5";


import React from 'react'
import { PROFILE_ICON } from '@/lib/image';

const HelperModal = ({ data, setData }) => {

    const handleClose = () => {
        setData({
            open: false,
            data: null
        })
    }

    return (
        <Dialog open={data.open} onOpenChange={(e) => !e && handleClose} onPointerDownOutside={(e) => e.preventDefault()} onOpenAutoFocus={(e) => e.preventDefault()}>
            <DialogContent className="w-full max-w-[90%] sm:max-w-xl p-0 pb-7 pt-8 px-4 bg-white rounded-[10px] sm:rounded-[15px]" >
                <div className="space-y-4">
                    <div className="flex  border-[2px] mx-auto border-secondary rounded-[20px] size-[110px] items-center justify-center">
                        <img className="size-[100px] rounded-[23px]" src={data?.data?.profile ? data?.data?.profile : PROFILE_ICON} alt="" />
                    </div>
                    <p className='text-xl font-semibold text-center'>{data?.data?.fname}  {data?.data?.lname}</p>
                    <div>

                        <div className='border-b border-[#F7F8F8] flex justify-between items-center py-5'>
                            <p className='text-lg font-normal text-[#232F55]'>Email</p>
                            <p className='text-lg font-normal text-[#232F55]'>{data?.data?.email}</p>
                        </div>
                        <div className='border-b border-[#F7F8F8] flex justify-between items-center py-5'>
                            <p className='text-lg font-normal text-[#232F55]'>Gender</p>
                            <p className='text-lg font-normal text-[#232F55]'>{data?.data?.gender}</p>
                        </div>
                        <div className='border-b border-[#F7F8F8] flex justify-between items-center py-5'>
                            <p className='text-lg font-normal text-[#232F55]'>Specialty</p>
                            <p className='text-lg font-normal text-[#232F55]'>{data?.data?.speciality_dtl?.name}</p>
                        </div>
                        <div className='border-b border-[#F7F8F8] flex justify-between items-center py-5'>
                            <p className='text-lg font-normal text-[#232F55]'>Experience</p>
                            <p className='text-lg font-normal text-[#232F55]'>{data?.data?.experience
                            }+ Years</p>
                        </div>

                    </div>

                    <p className='text-lg font-normal text-[#232F55]'>About</p>
                    <p className='text-lg font-normal text-[#7D8BB7]'>{data?.data?.about} </p>

                </div>
                <DialogClose
                    asChild
                    className="flex justify-center items-center bg-transparent rounded-full border border-[#232F55] w-[25px] h-[25px] absolute right-6 top-3.5 "
                    onClick={handleClose}
                >

                    <IoClose className="text-primary size-4" />

                </DialogClose>
            </DialogContent>

        </Dialog>
    )
}

export default HelperModal