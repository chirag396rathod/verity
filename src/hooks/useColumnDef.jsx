import Iconify from "@/components/common/Iconify";
import Zoom from "@/components/common/Zoom";
import { EDIT_ICON, TRASH_ICON } from "@/lib/image";
import { breakpoints } from "@/utils/breakpoints";
import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const useColumnDef = (fns) => {
    const columnHelper = createColumnHelper();
    const navigate = useNavigate();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getColumnSize = (sizes) => {
        if (typeof sizes === "number") {
            return sizes
        }
        else if (typeof sizes === "object") {
            const breakpointKeys = Object.keys(breakpoints).reverse();
            for (const key of breakpointKeys) {
                if (screenWidth >= breakpoints[key] && sizes[key] !== undefined) {
                    return sizes[key];
                }
            }
            return sizes.default !== undefined ? sizes.default : null;
        } else {
            return null
        }
    };

    const userColumns = useMemo(
        () => [

            columnHelper.accessor('name', {
                header: () => <p className="sm:px-3">Name</p>,
                cell: props => <div className="flex gap-4 sm:px-3 items-center">
                    <div>
                        <Zoom src={props.row.original.profile} className="w-[35px] sm:w-[50px] rounded-lg" />
                    </div>
                    <p className=" max-w-[200px] text-wrap break-words">{props.row?.original?.fname} {props?.row?.original?.lname}</p>
                </div>,
                size: getColumnSize({
                    '3xl': 400,
                    '2xl': 350,
                    sm: 330,
                    default: 220
                })
            }),
            columnHelper.accessor('email', {
                header: 'Email',
                cell: props => <p className="text-wrap break-all text-primary">{props.getValue()}</p>,
                size: getColumnSize({
                    '2xl': 450,
                    lp: 400,
                    sm: 300,
                    default: 250
                })
            }),

            columnHelper.accessor('gender', {
                header: 'Gender',
                cell: props => <p className="text-wrap break-all text-primary">Female</p>,
                size: getColumnSize({
                    '3xl': 300,
                    '2xl': 140,
                    lp: 120,
                    default: 120
                })
            }),

            columnHelper.display({
                id: 'actions',
                header: () => <p className="text-center">Action</p>,
                cell: props => (
                    <div className='flex justify-center items-center'>

                        <button className="bg-primary px-5 py-2.5 rounded-lg" onClick={() => { navigate(`/user/${props.row.original.id}`) }} type="button">
                            View Details
                        </button>

                    </div>
                ),
                size: getColumnSize({
                    xl: null,
                    sm: 220,
                    default: 180
                })

            })
        ],
        [screenWidth]
    )

    const helperColumns = useMemo(
        () => [

            columnHelper.accessor('name', {
                header: () => <p className="sm:px-3">Name</p>,
                cell: props => <div className="flex gap-4 sm:px-3 items-center">
                    <div>
                        <Zoom src={props.row.original.profile} className="w-[35px] sm:w-[50px] rounded-lg" />
                    </div>
                    <p className="text-nowrap">{props?.row?.original?.fname} {props?.row?.original?.lname}</p>
                </div>,
                size: getColumnSize({
                    '3xl': 400,
                    '2xl': 350,
                    sm: 330,
                    default: 220
                })
            }),
            columnHelper.accessor('email', {
                header: 'Email',
                cell: props => <p className="text-wrap break-all text-primary">{props.getValue()}</p>,
                size: getColumnSize({
                    '2xl': 400,
                    lp: 350,
                    sm: 300,
                    default: 250
                })
            }),

            columnHelper.accessor('gender', {
                header: 'Gender',
                cell: props => <p className="text-wrap break-all text-primary">{props.getValue()}</p>,
                size: getColumnSize({
                    '3xl': 200,
                    '2xl': 140,
                    lp: 120,
                    default: 120
                })
            }),
            columnHelper.accessor('specialty', {
                header: 'Specialty',
                cell: props => <p className="text-wrap break-all text-primary">{props?.row?.original?.speciality_dtl?.name}</p>,
                size: getColumnSize({
                    '3xl': 200,
                    '2xl': 170,
                    lp: 140,
                    default: 120
                })
            }),
            columnHelper.display({
                id: 'actions',
                header: () => <p className="text-center">Action</p>,
                cell: props => (
                    <div className='flex justify-center items-center'>


                        <button className="bg-primary px-5 py-2.5 rounded-lg" onClick={() => {
                            navigate(`/helper/${props.row.original.id}`, {
                                state: {
                                    status: true
                                }
                            })
                        }} type="button">
                            View Details
                        </button>

                    </div>
                ),
                size: getColumnSize({
                    xl: null,
                    lp: 240,
                    sm: 220,
                    default: 180
                })

            })
        ],
        [screenWidth]
    )
    const newRequestColumns = useMemo(
        () => [

            columnHelper.accessor('name', {
                header: () => <p className="sm:px-3">Name</p>,
                cell: props => <div className="flex gap-4 sm:px-3 items-center">
                    <div>
                        <Zoom src={props.row.original.profile} className="w-[35px] sm:w-[50px] rounded-lg" />
                    </div>
                    <p className="text-nowrap">{props?.row?.original?.fname} {props?.row?.original?.lname}</p>
                </div>,
                size: getColumnSize({
                    '3xl': 350,
                    '2xl': 350,
                    sm: 330,
                    default: 220
                })
            }),
            columnHelper.accessor('email', {
                header: 'Email',
                cell: props => <p className="text-wrap break-all text-primary">{props.getValue()}</p>,
                size: getColumnSize({
                    '2xl': 400,
                    lp: 350,
                    sm: 300,
                    default: 250
                })
            }),

            columnHelper.accessor('gender', {
                header: 'Gender',
                cell: props => <p className="text-wrap break-all text-primary">{props.getValue()}</p>,
                size: getColumnSize({
                    '3xl': 200,
                    '2xl': 140,
                    lp: 120,
                    default: 120
                })
            }),
            columnHelper.accessor('specialty', {
                header: 'Specialty',
                cell: props => <p className="text-wrap break-all text-primary">{props?.row?.original?.speciality_dtl?.name}</p>,
                size: getColumnSize({
                    '3xl': 200,
                    '2xl': 170,
                    lp: 140,
                    default: 120
                })
            }),
            columnHelper.display({
                id: 'actions',
                header: () => <p className="text-center">Action</p>,
                cell: props => (
                    <div className='flex justify-center items-center'>
                        <div className="flex gap-3 items-center">
                            <button onClick={() => { fns.handleView(props.row.original) }} type="button" className="px-3"><Iconify className="text-[22px]" icon="solar:eye-linear" /></button>
                            <button type="button" className={"capitalize text-primary bg-[#EDF1FF] font-medium rounded-[13px] w-full text-center px-5 py-3"} onClick={() => { fns.handleAccept({ data: props.row.original, button: "accepted" }); }}>Accept</button>
                            <button type="button" className={"capitalize bg-[#FF000412] text-primary font-medium rounded-[13px] w-full text-center px-5 py-3"} onClick={() => { fns.handleAccept({ data: props.row.original, button: "rejected" }); }}>Decline</button>
                        </div>
                    </div>
                ),
                size: getColumnSize({
                    xl: null,
                    sm: 220,
                    default: 180
                })

            })
        ],
        [screenWidth]
    )

    const specialityColumns = useMemo(() => [
        columnHelper.accessor('name', {
            header: () => <p className="sm:px-3">Name</p>,
            cell: props => <div className="flex gap-4 sm:px-3 items-center">
                <div>
                    <Zoom src={props.row.original.speciality_image} className="size-[35px] sm:size-[50px] rounded-lg" />
                </div>
                <p className="text-nowrap">{props.row?.original?.name}</p>
            </div>,
            size: getColumnSize({
                '3xl': 400,
                '2xl': 350,
                sm: 330,
                default: 220
            })
        }),
        columnHelper.accessor('action', {
            header: () => <p className="sm:px-3 text-center">Action</p>,
            cell: props => <div className="flex justify-center items-center gap-x-4">
                <div className='size-[36px] rounded-[6px] bg-[#F7F8F8] flex justify-center items-center cursor-pointer' onClick={() => { fns.handleEdit(props?.row?.original) }}>
                    <img src={EDIT_ICON} alt="edit" className='' />
                </div>
                <div className='size-[36px] rounded-[6px] bg-[#F7F8F8] flex justify-center items-center cursor-pointer' onClick={() => { fns.handleDelete(props?.row?.original) }}>
                    <img src={TRASH_ICON} alt="trash" className='' />
                </div>
            </div>
        })
    ], [])

    return {
        userColumns,
        helperColumns,
        specialityColumns,
        newRequestColumns
    }
}

export default useColumnDef;
