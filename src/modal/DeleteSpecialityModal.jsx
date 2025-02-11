import Button from '@/components/custom/Button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { TRASH_ICON } from '@/lib/image'
import React from 'react'

const DeleteSpecialityModal = ({ data, setData, handleSubmit }) => {

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
                        <img className="size-[64px]" src={TRASH_ICON} alt="" />
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-primary font-semibold text-[26px] text-center">Delete Speciality</h2>
                        <p className="text-lg text-[#7D8BB7] text-center">Are you sure you want to delete speciality?</p>
                    </div>
                </div>
                <div className="flex pt-4 items-center gap-5 w-full">
                    <Button onClick={handleClose} className="font-medium border bg-transparent text-[#666666] hover:bg-transparent hover:text-[#666666] border-[#F5F5F7] rounded-[10px]">
                        No
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        className="font-medium rounded-[10px]"
                    >
                        Yes
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteSpecialityModal