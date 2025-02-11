import Loading from '@/components/common/Loading';
import Button from '@/components/custom/Button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import usePagination from '@/hooks/usePagination';
import { SPECIALITY_ICON, SPECIALITY_ICON_ACTIVE } from '@/lib/image';
import { cn } from '@/lib/utils';
import { addUpdateSpecialityData, getSpecialityListData } from '@/redux/action/specialty.action';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { IoClose, IoCloudUploadOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';


const SpecialityModal = ({ data, setData }) => {

    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.speciality)
    const { page, setPage, limit, setLimit } = usePagination();

    const formik = useFormik({
        initialValues: {
            image: "",
            name: ""
        },
        validationSchema: yup.object().shape({
            image: yup.mixed().required("Image is required"),
            name: yup.string().required("Name is required")
        }),
        onSubmit: (values) => {
            const formData = new FormData();
            data?.data && formData.append("speciality_id", data?.data?.id);
            formData.append("admin_id", localStorage.getItem("user_id"));
            formData.append("name", values?.name);
            values?.image instanceof File && formData.append("speciality_image", values?.image)
            dispatch(addUpdateSpecialityData(formData)).unwrap().then(() => {
                setData({
                    open: false,
                    data: null,
                    mode: null
                })
                dispatch(getSpecialityListData({ page: page, limit: limit, admin_id: localStorage.getItem("user_id") }))
            })
        }
    })

    const handleClose = () => {
        setData({
            open: false,
            data: null,
            mode: null
        })
    }

    useEffect(() => {
        if (data?.data) {
            formik.setValues({
                image: data?.data?.speciality_image,
                name: data?.data?.name
            })
        }
    }, [data?.open])

    return (
        <Dialog open={data.open} onOpenChange={(e) => !e && handleClose} onPointerDownOutside={(e) => e.preventDefault()} onOpenAutoFocus={(e) => e.preventDefault()}>
            <DialogContent className="w-full max-w-[90%] sm:max-w-xl p-0 pb-7 pt-4 px-4 bg-white rounded-[10px] sm:rounded-[15px]" >
                <DialogHeader>
                    <div className="flex justify-between items-center w-full border-b border-[#F1F5F9] pb-4">
                        <h1 className="text-[#0F172A] text-xl font-bold">{data?.mode === "add" ? "Add" : "Edit"}  Specialty</h1>
                        <div
                            className="bg-[#F8FAFC] cursor-pointer w-10 h-10 rounded-lg flex justify-center items-center"
                            onClick={handleClose}
                        >
                            <IoClose className="text-[#64748B]" />
                        </div>
                    </div>
                </DialogHeader>
                <div className='space-y-5'>
                    <div className='flex flex-col space-y-1'>
                        {!formik?.values.image ? (
                            <label class="w-32 h-32 flex flex-col items-center justify-center  bg-[#F8FAFC] text-blue rounded-lg  cursor-pointer">
                                <IoCloudUploadOutline className="text-2xl font-bolder text-[#201F57]" />
                                <span class="mt-2 text-xs font-semibold text-[#201F57]">
                                    Upload Image
                                </span>
                                <input
                                    type="file"
                                    class="hidden"
                                    name="profile"
                                    accept="image/png, image/gif, image/jpeg"
                                    onChange={(e) => {
                                        // setProfile(e.target.files[0]);
                                        formik.setFieldValue(
                                            "image",
                                            e.currentTarget.files[0]
                                        );
                                    }}
                                // onChange={(e) => setProfile(e.target.files[0])}
                                />
                            </label>
                        ) : (
                            <div className='relative w-[130px] h-[130px]'>
                                <img
                                    src={formik?.values.image instanceof File ? URL.createObjectURL(formik?.values.image) : formik?.values.image}
                                    className="w-[130px] h-[130px] object-cover rounded-md"
                                />
                                <div className='flex absolute items-center -top-1 -right-1 justify-center size-[20px] rounded-full bg-[#D94332] cursor-pointer' onClick={() => { formik.setFieldValue("image", "") }}>
                                    <IoClose className='text-white size-4' />
                                </div>
                            </div>
                        )}
                        {formik.errors.image && formik?.touched?.image ? (
                            <div className="text-red-400 text-sm mt-1">{formik.errors.image}</div>
                        ) : null}
                    </div>
                    <div className='space-y-1 pb-3'>
                        <label className="text-primary font-medium">
                            Name
                        </label>
                        <div className='relative'>
                            <input name='name' placeholder='Enter specialty name' value={formik.values.name} onChange={formik.handleChange} type="text" className={cn('placeholder:text-secondary outline-none pl-[52px] sm:pl-[60px] w-full placeholder:font-normal focus-visible:ring-offset-0  text-primary text-base sm:text-lg placeholder:text-base sm:placeholder:text-lg  h-[52px] sm:h-14  bg-white px-6 rounded-[10px] sm:font-medium',
                                formik.errors.name && formik.touched?.name ? "text-red-500 focus-visible:ring-red-500 border border-red-500 focus-visible:ring-1" : "text-primary border border-primary focus:border-main focus-visible:ring-1 focus-visible:ring-main "
                                ,)} />
                            <div className={cn('absolute flex items-center top-1.5 sm:top-[15px] left-[16px] sm:left-[22px]')}>
                                <img src={SPECIALITY_ICON} alt="" className='sizei-[30px]' />
                            </div>
                        </div>
                        {formik.errors.name && formik?.touched?.name ? (
                            <div className="text-red-400 text-sm mt-1">{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <Button
                        disabled={loading}
                        className="font-medium rounded-[10px] "
                        type='submit'
                        onClick={formik.handleSubmit}
                    >
                        {
                            loading ? <Loading className="text-2xl" /> : <>{data?.mode === "add" ? "Add" : "Save"}</>
                        }

                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default SpecialityModal