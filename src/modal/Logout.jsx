import Button from "@/components/custom/Button"
import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog"
import { LOGOUT_IMAGE } from "@/lib/image"
import { AUTH_PATH } from "@/routes"
import { useNavigate } from "react-router-dom"

const Logout = ({ data, setData }) => {
    const navigate = useNavigate()
    const handleClose = () => {
        setData({
            open: false,
            data: null
        })
    }

    const handleLogout = () => {
        localStorage.removeItem("user_id");
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        setData({
            open: false,
            data: null
        })
        navigate(AUTH_PATH.login)
    }

    return (
        <Dialog open={data.open} onOpenChange={(e) => !e && handleClose} onPointerDownOutside={(e) => e.preventDefault()} onOpenAutoFocus={(e) => e.preventDefault()}>
            <DialogContent className="w-full max-w-[90%] sm:max-w-xl p-0 pb-7 pt-8 px-4 bg-white rounded-[10px] sm:rounded-[15px]" >

                <div className="space-y-4">
                    <div className="flex  border-[2px] mx-auto border-secondary rounded-[20px] size-[110px] items-center justify-center">
                        <img className="size-[64px]" src={LOGOUT_IMAGE} alt="" />
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-primary font-semibold text-[26px] text-center">Log Out</h2>
                        <p className="text-lg text-[#7D8BB7] text-center">Are you sure you want to log out?</p>
                    </div>
                </div>
                <div className="flex pt-4 items-center gap-5 w-full">
                    <Button onClick={handleClose} className="font-medium border bg-transparent text-[#666666] hover:bg-transparent hover:text-[#666666] border-[#F5F5F7] rounded-[10px]">
                        No
                    </Button>
                    <Button
                        onClick={handleLogout}
                        className="font-medium rounded-[10px]"
                    >
                        Yes
                    </Button>
                </div>
            </DialogContent>
        </Dialog >

    )
}

export default Logout;