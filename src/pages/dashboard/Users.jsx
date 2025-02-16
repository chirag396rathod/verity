import DataTable from "@/components/common/DataTable";
import useColumnDef from "@/hooks/useColumnDef";
import useSearch from "@/hooks/useSearch";
import CommonFormModal from "@/modal/CommonFormModal";
import CommonModal from "@/modal/CommonModal";
import { getUserList } from "@/redux/action/user.action";
import { faker, tr } from "@faker-js/faker";
import { debounce } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const { loading, userData, total_user } = useSelector((state) => state.user);
  const { searchQuery, setSearchQuery } = useSearch();

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

  const { userColumns } = useColumnDef({
    handleViewUser,
  });
  return (
    <>
      {/* <CommonModal
        data={{
          open: true,
        }}
        handleSubmit={()=>{}}
        setData={undefined}
        title={"Delete Post"}
        description={"Are you sure you want to delete this post?"}
        leftText={"No"}
        rightText={"Yes"}
      /> */}
      {/* <CommonFormModal
        data={{
          open: true,
        }}
        handleSubmit={() => {}}
        setData={undefined}
        title={"Warning Message"}
        leftText={"Send"}
        rightText={"Cancel"}
      /> */}
      <div className="flex-1 p-3 sm:p-5 overflow-auto bg-primary">
        <DataTable
          loading={loading}
          data={userData}
          columns={userColumns}
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

export default Users;
