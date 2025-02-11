import useSearch from "@/hooks/useSearch";
import { SEARCH_ICON } from "@/lib/image"
import { cn } from "@/lib/utils"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchBox = ({ className = "" }) => {
    const location = useLocation();
    const { searchQuery, setSearchQuery } = useSearch();
    useEffect(() => {
        setSearchQuery("")
    }, [location])
    return (
        <div className={cn("bg-secondary gap-4 w-full xl:w-[400px] px-5 py-3 rounded-[10px] flex items-center", className)}>
            <img src={SEARCH_ICON} alt="" />
            <input type="text" value={searchQuery} className="placeholder:text-secondary text-lg flex-1 bg-secondary text-primary focus:outline-none border-none" placeholder="Search here" onChange={(e) => { setSearchQuery(e.target.value) }} />
        </div>
    )
}

export default SearchBox
