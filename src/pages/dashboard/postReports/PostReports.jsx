import DataTable from "@/components/common/DataTable";
import { Button } from "@/components/ui/button";
import useColumnDef from "@/hooks/useColumnDef";
import useSearch from "@/hooks/useSearch";
import { cn } from "@/lib/utils";
import { getUserList } from "@/redux/action/user.action";
import { faker } from "@faker-js/faker";
import { debounce } from "lodash";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const PostReports = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const activeTabRef = useRef();

  const dispatch = useDispatch();
  const { loading, userData, total_user } = useSelector((state) => state.user);
  const { searchQuery } = useSearch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("tab")) return setSearchParams({ tab: "doctor" });
  }, []);

  useEffect(() => {
    dispatch(
      getUserList({
        admin_id: localStorage.getItem("user_id"),
        search: search,
        page: page,
        limit: limit,
      })
    );
  }, [page, limit, search]);

  const debouncedSearch = useCallback(
    debounce((query) => {
      setSearch(query);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery]);

  const handleViewUser = () => {};

  const { postReportsColumns } = useColumnDef({
    handleViewUser,
  });

  const tabs = useMemo(
    () => [
      {
        name: "Doctor",
        value: "doctor",
      },
      {
        name: "User",
        value: "user",
      },
    ],
    []
  );

  useLayoutEffect(() => {
    if (activeTabRef.current && searchParams.get("tab")) {
      const { left, width } = calculateValues(searchParams.get("tab"));
      activeTabRef.current.style.left = left;
      activeTabRef.current.style.width = width;
      // getAllRequestList(searchParams.get("tab"));
    }
  }, [searchParams.get("tab")]);

  const calculateValues = (selectedTabValue) => {
    switch (selectedTabValue) {
      case tabs[0].value:
        return { width: "101.688px", left: "12px" };
      case tabs[1].value:
        return { width: "73.781px", left: "138.248px" };
    }
  };

  console.log({userData})

  return (
    <>
      <div className="relative flex">
        {tabs.map((tab, index) => {
          return (
            <Button
              key={index}
              value={tab.value}
              onClick={() =>
                setSearchParams({ tab: tab.value }, { replace: true })
              }
              m
              tabIndex={searchParams.get("tab") === tab.value ? 1 : -1}
              className={cn(
                "font-medium text-[18px] rounded-sm bg-transparent px-3 mt-[32px] min-w-[120px] transition-all duration-500 ease-in-out hover:bg-transparent",
                searchParams.get("tab") === tab.value
                  ? "text-textMain"
                  : "text-textGray"
              )}
            >
              {tab.name}
            </Button>
          );
        })}
        <div
          ref={activeTabRef}
          className="absolute -bottom-3  h-1 w-[101.688px] rounded-lg bg-main transition-all duration-500 ease-in-out md:-bottom-[10px]"
        />
      </div>
      <div className="flex-1 mt-[32px] p-3 sm:p-5 overflow-auto ">
        <DataTable
          loading={loading}
          data={userData}
          columns={postReportsColumns}
          page={page}
          setPage={setPage}
          limit={limit}
          setLimit={setLimit}
          itemPerPage={limit}
          totalItems={total_user}
          loader={loading}
        />
      </div>
    </>
  );
};

export default PostReports;
