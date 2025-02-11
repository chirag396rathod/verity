import DataTable from '@/components/common/DataTable';
import Button from '@/components/custom/Button';
import useColumnDef from '@/hooks/useColumnDef';
import usePagination from '@/hooks/usePagination';
import DeleteSpecialityModal from '@/modal/DeleteSpecialityModal';
import SpecialityModal from '@/modal/SpecialityModal';
import { deleteSpecialityData, getSpecialityListData } from '@/redux/action/specialty.action';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Specialty = () => {

    const { page, setPage, limit, setLimit } = usePagination();
    const [open, setOpen] = useState({
        open: false,
        data: null,
        mode: null
    })
    const [deleteOpen, setDeleteOpen] = useState({
        open: false,
        data: null
    })

    const dispatch = useDispatch();
    const { speciality_list, loading, total_speciality } = useSelector((state) => state.speciality);

    const handleDelete = (data) => {
        setDeleteOpen({
            open: true,
            data: data
        })
    }

    const handleEdit = (data) => {
        setOpen({
            open: true,
            data: data,
            mode: "edit"
        })
    }

    const handleConfirmDelete = () => {
        dispatch(deleteSpecialityData({ admin_id: localStorage.getItem("user_id"), speciality_id: deleteOpen?.data?.id })).unwrap().then(() => {
            setDeleteOpen({
                open: false,
                data: null
            })
            dispatch(getSpecialityListData({ page: page, limit: limit, admin_id: localStorage.getItem("user_id") }))
        })
    }

    useEffect(() => {
        dispatch(getSpecialityListData({ page: page, limit: limit, admin_id: localStorage.getItem("user_id") }))
    }, [limit, page])

    const { specialityColumns } = useColumnDef({ handleEdit, handleDelete });

    return (
        <div className='flex-1 bg-primary p-3 sm:p-5  gap-4 flex overflow-auto flex-col'>
            <div className='flex justify-end items-center'>
                <Button
                    className="font-medium rounded-[10px] max-w-[200px]"
                    type='submit'
                    onClick={() => { setOpen({ open: true, mode: "add", data: null }) }}
                >
                    Add Specilty
                </Button>
            </div>
            <div className='flex-1  overflow-auto bg-primary'>
                <DataTable loading={loading} data={speciality_list} columns={specialityColumns} page={page} setPage={setPage} limit={limit} setLimit={setLimit} itemPerPage={limit} totalItems={total_speciality} loader={loading} />
            </div>
            {
                open?.open && <SpecialityModal data={open} setData={setOpen} />
            }
            {
                deleteOpen?.open && <DeleteSpecialityModal data={deleteOpen} setData={setDeleteOpen} handleSubmit={handleConfirmDelete} />
            }
        </div>

        // <div className="flex-1 p-3 sm:p-5 overflow-auto bg-primary">
        //     <DataTable loading={loading} data={speciality_list} columns={specialityColumns} page={page} setPage={setPage} limit={limit} setLimit={setLimit} itemPerPage={limit} totalItems={total_speciality} loader={loading} />
        // </div>
    )
}

export default Specialty