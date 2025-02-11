import Iconify from '@/components/common/Iconify';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { GrFormPrevious } from "react-icons/gr";
import SearchBox from '@/components/common/SearchBox';




const Header = ({ setIsSidebar }) => {
    const { pathname } = useLocation()
    const { id } = useParams();
    const navigate = useNavigate();
    const headings = [
        { path: '/user', heading: 'User' },
        { path: '/helper', heading: 'Helper' },

    ]

    return (
        <header className='flex  justify-between py-4 px-3 lg:px-7 bg-white'>
            <div className='flex items-center gap-x-3'>
                <div className='lg:hidden'>
                    <Iconify onClick={() => setIsSidebar((prev) => !prev)} className="text-primary text-2xl" icon="ion:menu" />
                </div>
                {
                    !id ? <h3 className='text-primary font-medium text-[18px] xs:text-[20px] sm:text-[24px]'>{headings.find((route) => pathname.includes(route.path) || pathname.startsWith(route.path))?.heading ?? "Not Found"}</h3> : <div className='flex justify-center items-center size-[40px] rounded-[10px] cursor-pointer border-[#EFF0F6] bg-[#F7F8F8]' onClick={(() => { navigate(-1) })}> <GrFormPrevious className='text-main size-6' /></div>
                }

            </div>
            <div className='flex items-center gap-2'>
                <div>
                    <SearchBox />
                </div>
                {/* <div className='flex max-sm:hidden items-center rounded-lg py-2 px-2 gap-x-2'>
                    <div className='size-[40px] xs:size-[50px] bg-secondary flex justify-center items-center rounded-full'>
                        <img className='' src={PROFILE_ICON} alt='user' />
                    </div>
                </div> */}
            </div>
        </header>
    )
}

export default Header;