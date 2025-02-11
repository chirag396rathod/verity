import DataTable from "@/components/common/DataTable";
import SearchBox from "@/components/common/SearchBox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useColumnDef from "@/hooks/useColumnDef";
import useSearch from "@/hooks/useSearch";
import HelperModal from "@/modal/HelperModal";
import { getHelperList, updateUserAccountStatus } from "@/redux/action/user.action";
import { debounce } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Helpers = () => {

    const dispatch = useDispatch();
    const { loading, userData, total_user } = useSelector((state) => state.user)
    const { searchQuery } = useSearch();

    const [open, setOpen] = useState({
        open: false,
        data: null
    })
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10)
    const [tab, setTab] = useState('pending')
    const [search, setSearch] = useState("")

    const handleViewUser = () => {

    }

    const handleView = (data) => {
        setOpen({
            open: true,
            data: data
        })
    }

    const handleAccept = (data) => {
        dispatch(updateUserAccountStatus({
            admin_id: localStorage.getItem("user_id"), user_id: data?.data?.id, account_status: data?.button
        })).unwrap().then(() => {
            dispatch(getHelperList({ admin_id: localStorage.getItem("user_id"), page: page, limit: limit, search: search, account_status: tab }))
        })
    }

    const debouncedSearch = useCallback(debounce((query) => {
        setSearch(query)
    }, 500), [])

    useEffect(() => {
        debouncedSearch(searchQuery);
    }, [searchQuery]);

    const { helperColumns, newRequestColumns } = useColumnDef({
        handleViewUser, handleAccept, handleView
    })

    useEffect(() => {
        dispatch(getHelperList({ admin_id: localStorage.getItem("user_id"), page: page, limit: limit, search: search, account_status: tab }))
    }, [tab, page, limit, search])

    return (
        <>
            <Tabs className="flex-1 bg-primary py-3 px-4 gap-4 flex overflow-auto flex-col" value={tab} onValueChange={(e) => {
                setTab(e)
            }}>
                <div className="flex rounded-[12px] max-sm:flex-col py-3 sm:py-3 px-3 justify-end lg:px-3 bg-white items-center gap-5 ">
                    {/* <div>
                        <SearchBox />
                    </div> */}
                    <div>
                        <TabsList className="grid  rounded-[8px] p-0 gap-4 bg-transparent w-full grid-cols-2 ">
                            <TabsTrigger className="hover:bg-main font-medium bg-secondary group flex items-center gap-2.5 hover:text-white data-[state=active]:bg-main data-[state=active]:text-white text-primary text-base  py-3 px-6  rounded-[10px]" data-active={tab == "pending"} value="pending">New Request</TabsTrigger>
                            <TabsTrigger className="hover:bg-main font-medium bg-secondary group flex items-center gap-2.5 hover:text-white data-[state=active]:bg-main data-[state=active]:text-white text-primary text-base  py-3 px-6  rounded-[10px]" data-active={tab == "accepted"} value="accepted">Helpers</TabsTrigger>
                        </TabsList>
                    </div>
                </div>
                <div className="bg-secondary overflow-hidden flex flex-col flex-1 ">
                    <TabsContent className={`${tab == "pending" ? 'flex' : 'hidden'}  bg-[white]  p-3 pb-0  rounded-[15px] flex-col flex-1 overflow-auto`} value="pending">
                        <DataTable columns={newRequestColumns} data={userData} page={page} setPage={setPage} limit={limit} setLimit={setLimit} totalItems={total_user} itemPerPage={limit} loader={loading} />
                    </TabsContent>
                    <TabsContent className={`${tab == "accepted" ? 'flex' : 'hidden'}  bg-[white]  p-0  rounded-[15px] flex-col flex-1 overflow-auto`} value="accepted">
                        <DataTable columns={helperColumns} data={userData} page={page} setPage={setPage} limit={limit} setLimit={setLimit} totalItems={total_user} itemPerPage={limit} loader={loading} />
                    </TabsContent>
                </div>
            </Tabs>
            {
                open?.open && <HelperModal data={open} setData={setOpen} />
            }
        </>
    )
}

export default Helpers;
