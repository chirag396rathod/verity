import { cn } from '@/lib/utils'

import { useState } from 'react'
import Iconify from '@/components/common/Iconify'
import { onImageError } from '@/utils'
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog'


const Zoom = ({ className = "", src = "" }) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
          
            <img onError={onImageError} onClick={() => setOpen(true)} src={src} className={cn('cursor-pointer', className)} />
           
            <Dialog open={open} onOpenChange={e => !e && handleClose()}>
                <DialogContent onOpenAutoFocus={(e) => e.preventDefault()} closeIcon={false} className='p-0 pb-10 max-w-[90%] md:max-w-3xl max-h-[80vh] bg-transparent outline-none   border-none'>
                    <DialogTitle>

                    </DialogTitle>
                    <div className='mx-auto  relative '>
                        <img onError={onImageError} className='max-h-[80vh] object-cover max-w-full' src={src} alt="" />
                        <button onClick={handleClose} type='button' className='absolute bg-black rounded-full size-[30px] flex justify-center items-center right-[-15px] top-[-15px]'>
                            <Iconify className="text-white" icon="mingcute:close-fill"/>
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Zoom
