import Zoom from "@/components/common/Zoom"
import ReviewStar from "@/components/custom/ReviewStar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import useSearch from "@/hooks/useSearch"
import { AMOUNT_ICON, BRIEFCASE_ICON, CALENDAR_ICON, MEDITAION_ICON, READ_ICON, REVIEW_ICON, REVIEW_IMAGE1, STAR_ICON, TIME_ICON, USER1_IMAGE, USER_IMAGE } from "@/lib/image"
import { cn } from "@/lib/utils"
import { getUserAppointmentList } from "@/redux/action/user.action"
import { debounce } from "lodash"
import moment from "moment"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const UserDetails = () => {


  const [tab, setTab] = useState('overview')
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10)
  const [search, setSearch] = useState("")

  const dispatch = useDispatch();
  const { loading, appointment_data, user_detail, total_user_appointment } = useSelector((state) => state.user);
  const { searchQuery, setSearchQuery } = useSearch();
  const { id } = useParams();

  const debouncedSearch = useCallback(debounce((query) => {
    setSearch(query)
  }, 500), [])

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    dispatch(getUserAppointmentList({ admin_id: localStorage.getItem("user_id"), user_type: "user", user_id: id, page: page, limit: limit, search: search }))
  }, [limit, search])

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;

    if (scrollTop + clientHeight >= scrollHeight - 10 && limit < total_user_appointment) {
      setLimit((prevLimit) => prevLimit + 10);
    }
  };

  return (
    <div className="flex-1 px-3.5 2xl:px-5 py-5  overflow-auto flex flex-col">
      <div className="md:overflow-hidden flex-1 flex flex-col">
        <div className="flex max-md:flex-col gap-4 2xl:gap-6 md:overflow-hidden flex-1">
          <ScrollArea className="2xl:w-[400px] lp:w-[300px] lg:w-[350px] md:w-[300px] rounded-[24px] bg-white overflow-y-auto">
            <div className="space-y-5 2xl:space-y-7">
              <div>
                <div className="h-[100px] 2xl:h-[120px] rounded-b-[24px] bg-cover user_profile">

                </div>
                <div className="flex justify-center mb-[-20px] relative top-[-40px]">
                  <div>
                    <Zoom className="w-[90px] rounded-[22px] border-[3px] border-white" src={user_detail?.profile} alt="" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-primary font-semibold text-[22px] 2xl:text-[26px] text-center">{user_detail?.fname}  {user_detail?.lname}</h4>
                  <div className="flex gap-3 justify-center items-center"><p className="text-[#7D8BB7]  font-medium">{user_detail?.email}</p></div>
                </div>
              </div>

              <div className="px-3 2xl:px-5 space-y-6">
                <div className="space-y-2">
                  <p className="text-primary font-semibold text-[19px]">About {user_detail?.fname}</p>
                  <p className="text-[#8A96BC]">{user_detail?.about}</p>
                </div>
                {/* <Button
                                    className="font-medium rounded-[10px]" >
                                    View Review
                                </Button> */}
              </div>
            </div>
          </ScrollArea>
          <div className="flex-1 flex flex-col rounded-[24px] bg-white">

            <div className={cn("flex-1 overflow-auto flex-col  flex")} >
              <ScrollArea className="flex-1" onScroll={handleScroll}>
                {
                  appointment_data?.length > 0 ? <div className="grid flex-1 p-4 gap-4 2xl:gap-7 lp:grid-cols-2 grid-cols-1">
                    {
                      appointment_data?.length > 0 && appointment_data.map((item, index) => (
                        <div key={index} className="border-[2px] border-[#F7F8F8] rounded-[16px] px-3 py-3 2xl:px-5 2xl:py-5 space-y-5">
                          <div className="flex justify-between items-center">
                            <div className="flex gap-5 items-center">
                              <div className="">
                                <Zoom src={item?.helper_dtl?.profile} className="size-[58px] object-cover rounded-[20px]" />
                              </div>
                              <div>
                                <p className="text-primary text-xl font-medium">{item?.helper_dtl?.fname} {item?.helper_dtl?.lname}</p>
                                <div className="flex  gap-3 items-center">
                                  <div className="flex  gap-3 items-center">
                                    <div className="flex items-center gap-1">
                                      <img src={STAR_ICON} alt="" />
                                      <p className="text-ternary">{item?.rate}</p>
                                    </div>
                                    <div className="h-[20px] w-[1px] bg-[#9EA0AD21]">

                                    </div>
                                    <p className="text-ternary">{item?.helper_dtl?.speciality_dtl?.name}</p>
                                  </div>

                                </div>
                              </div>
                            </div>
                            <div>
                              <p className="text-primary text-lg font-medium">₱{item?.helper_dtl?.avg_rate}</p>
                            </div>
                          </div>
                          <div className="flex 2xl:gap-8 gap-4 px-3 2xl:px-4 rounded-[20px] py-3 bg-primary">
                            <div className="bg-primary flex-1 gap-4  items-center  flex rounded-[20px]">
                              <div className="size-[45px] bg-[#201F570D] rounded-full flex justify-center items-center">
                                <img className="w-6" src={CALENDAR_ICON} alt="" />
                              </div>
                              <div className="flex-1">
                                <p className="text-secondary">Date</p>
                                {/* <p className="text-primary max-2xl:text-sm font-medium ">9 Aug, 2024</p> */}
                                <p className="text-primary max-2xl:text-sm font-medium ">{moment(item?.schedule_date).format("DD MMM, YYYY")}</p>
                              </div>
                            </div>
                            <div className="min-h-full w-[1px] bg-[#9EA0AD21]">

                            </div>
                            <div className="bg-primary  flex-1 gap-4 items-center  flex rounded-[20px]">
                              <div className="size-[45px] bg-[#201F570D] rounded-full flex justify-center items-center">
                                <img className="w-6" src={TIME_ICON} alt="" />
                              </div>
                              <div className="flex-1">
                                <p className="text-secondary">Time</p>
                                <p className="text-primary max-2xl:text-sm font-medium ">{moment(item?.schedule_time, "HH:mm:ss").format("HH:mm A")}</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button type="button" className={cn(item.status == "awaiting_payment" ? "bg-[#EDF1FF] text-primary " : (item?.status === "pending" || item?.status === "cancel") ? "bg-[#FF000412] text-red-700" : item?.status === "complete" ? "bg-[#9DEAC0]/40 text-green-700" : item?.status === "in_progress" ? "bg-[#FFB905]/20 text-[#FFB905]" : "", "capitalize font-medium rounded-[13px] w-full cursor-default text-center py-3 2xl:py-3.5")}>{item.status === "in_progress" ? "In Progress" : item.status == "awaiting_payment" ? "Up Coming" : item.status}</button>
                          </div>
                        </div>
                      ))
                    }
                  </div> : <div className="flex h-full justify-center items-center">
                    <p className="text-secondary text-lg font-normal">Data Not Found</p>
                  </div>
                }

              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails;
