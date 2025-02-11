import { LOGOUT_ICON, LOGOUT_ACTIVE_ICON, USER_ICON_ACTIVE, USER_ICON, LOGO, SIDEBAR_LOGO, HELPER_ICON_ACTIVE, HELPER_ICON, SPECIALITY_ICON, SPECIALITY_ICON_ACTIVE } from "@/lib/image"
import { useMemo, useState } from "react"
import NavIcon from "@/components/common/NavIcon"
import { Link, useLocation } from "react-router-dom"
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet"
import LogoutModal from "@/modal/Logout"
import { Separator } from "@/components/ui/separator"

const Sidebar = ({ isSidebar, setIsSidebar }) => {
    const { pathname } = useLocation()
    const [logoutModal, setLogoutModal] = useState({
        open: false,
        data: null
    })
    const sidebarMenu = useMemo(
        () => [
            {
                name: "User",
                to: "/user",
                icon: (
                    <>
                        <NavIcon active={USER_ICON_ACTIVE} base={USER_ICON} />
                    </>
                )
            },
            {
                name: "Helper",
                to: "/helper",
                icon: (
                    <>
                        <NavIcon active={HELPER_ICON_ACTIVE} base={HELPER_ICON} />
                    </>
                )
            },
            {
                name: "Specialty",
                to: "/specialty",
                icon: (
                    <>
                        <NavIcon active={SPECIALITY_ICON_ACTIVE} base={SPECIALITY_ICON} />
                    </>
                )
            }
        ], []
    )
    return (
        <>
            <div className='min-w-[270px] lg:min-w-[250px] 2xl:min-w-[270px] pt-5  hidden lg:flex flex-col h-dvh bg-white shadow-custom-shadow overflow-hidden'>
                <div className='rounded-[12px] flex bg-primary flex-col justify-center gap-3 items-center gap-x-3 mx-5 pt-5 pb-5'>
                    <img className="w-[163px]" src={SIDEBAR_LOGO} alt="" />
                </div>
                <Separator className="mt-5 bg-primary mx-5" />
                <div className='pb-7 pt-7 h-full flex flex-col justify-between'>
                    <div className='flex px-5 gap-y-4 flex-col'>
                        {
                            sidebarMenu.map((item, index) => (
                                <Link to={item.to} data-active={pathname.includes(item.to)} className='flex group relative bg-primary data-[active=true]:bg-main hover:bg-main px-5 py-3.5  transition-all duration-200 group items-center gap-x-3 rounded-[8px]' key={index}>
                                    <div>
                                        {item.icon}
                                    </div>
                                    <div className='font-medium text-[17px] group-hover:text-white group-data-[active=true]:text-white text-secondary'>{item.name}</div>

                                </Link>
                            ))
                        }
                    </div>
                    <button type="button" onClick={() => setLogoutModal({
                        open: true,
                        data: null
                    })} className='flex mx-4 group relative bg-primary data-[active=true]:bg-main hover:bg-main px-4 py-3.5  transition-all duration-200 group items-center gap-x-[14.5px] rounded-[8px]'>
                        <div>
                            <NavIcon className="" base={LOGOUT_ICON} active={LOGOUT_ACTIVE_ICON} />
                        </div>
                        <div className='font-medium  group-hover:text-white text-[17px] group-data-[active=true]:text-white text-secondary'>Logout</div>

                    </button>
                </div>
            </div>
            <Sheet className="" open={isSidebar} onOpenChange={e => setIsSidebar(e)}>
                <SheetContent onOpenAutoFocus={(e) => e.preventDefault()} closeIcon={false} className='w-[280px]  bg-white h-dvh p-0 pb-5 pt-5  flex flex-col focus:ring-0 gap-y-0' side='left'>
                    <SheetHeader asChild>
                        <div className='rounded-[12px] flex bg-primary  flex-col justify-center gap-3 items-center gap-x-3 mx-3 pt-5 pb-5'>
                            <img className="w-[163px]" src={SIDEBAR_LOGO} alt="" />
                        </div>
                    </SheetHeader>
                    <div className='h-full mt-7  flex px-3 gap-y-4 flex-col'>
                        {
                            sidebarMenu.map((item, index) => (
                                <Link onClick={() => setIsSidebar(false)} to={item.to} data-active={pathname.includes(item.to)} className='flex group relative bg-primary data-[active=true]:bg-main hover:bg-main px-5 py-3.5  transition-all duration-200 group items-center gap-x-3 rounded-[8px]' key={index}>
                                    <div>
                                        {item.icon}
                                    </div>
                                    <div className='font-medium text-[17px] group-hover:text-white group-data-[active=true]:text-white text-secondary'>{item.name}</div>

                                </Link>
                            ))
                        }
                    </div>
                    <button type="button" onClick={() => setLogoutModal({
                        open: true,
                        data: null
                    })} className='flex mx-3 group relative bg-primary data-[active=true]:bg-main hover:bg-main px-4 py-3.5  transition-all duration-200 group items-center gap-x-3 rounded-[8px]'>
                        <div>
                            <NavIcon className="" base={LOGOUT_ICON} active={LOGOUT_ACTIVE_ICON} />
                        </div>
                        <div className='font-medium text-[17px] group-hover:text-white group-data-[active=true]:text-white text-secondary'>Logout</div>

                    </button>
                </SheetContent>
            </Sheet>
            <LogoutModal data={logoutModal} setData={setLogoutModal} />
        </>
    )
}

export default Sidebar; 