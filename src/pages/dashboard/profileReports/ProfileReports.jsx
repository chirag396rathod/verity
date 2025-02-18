import DataTable from "@/components/common/DataTable";
import { Button } from "@/components/ui/button";
import useColumnDef from "@/hooks/useColumnDef";
import { BAN_ICON } from "@/lib/image";
import CommonFormModal from "@/modal/CommonFormModal";
import CommonModal from "@/modal/CommonModal";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate, useSearchParams } from "react-router-dom";

const ProfileReports = () => {
  const navigate = useNavigate();
  const activeTabRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [toggleBanModal, setBanModal] = useState(false);
  const [toggleWarningModal, setWarningModal] = useState(false);

  const handleBanClick = (data) => {
    setBanModal(!toggleBanModal);
  };

  const handleWarningClick = (data) => {
    setWarningModal(!toggleWarningModal);
  };

  const { ProfileReportsColumns } = useColumnDef({
    handleBanClick,
    handleWarningClick,
  });

  const ProfileReportsData = [
    {
      post_of_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_of_name: "Chirag Rathod",
      post_by_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_name: "VKC",
      reason: "Lorem ipsum dolor sit amet",
    },
    {
      post_of_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_of_name: "Chirag Rathod",
      post_by_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_name: "VKC",
      reason: "Lorem ipsum dolor sit amet",
    },
    {
      post_of_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_of_name: "Chirag Rathod",
      post_by_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_name: "VKC",
      reason: "Lorem ipsum dolor sit amet",
    },
    {
      post_of_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_of_name: "Chirag Rathod",
      post_by_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_name: "VKC",
      reason: "Lorem ipsum dolor sit amet",
    },
    {
      post_of_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_of_name: "Chirag Rathod",
      post_by_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_name: "VKC",
      reason: "Lorem ipsum dolor sit amet",
    },
  ];

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
      console.log({ left });
      activeTabRef.current.style.left = left;
      activeTabRef.current.style.width = width;
      // getAllRequestList(searchParams.get("tab"));
    }
  }, [searchParams.get("tab")]);

    useEffect(() => {
      if (!searchParams.get("tab")) return setSearchParams({ tab: "doctor" });
    }, []);
  

  const calculateValues = (selectedTabValue) => {
    switch (selectedTabValue) {
      case tabs[0].value:
        return { width: "101.688px", left: "12px" };
      case tabs[1].value:
        return { width: "73.781px", left: "138.248px" };
    }
  };

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
                "font-medium text-[18px] rounded-sm bg-transparent mb-3 px-3 mt-[32px] min-w-[120px] transition-all duration-500 ease-in-out hover:bg-transparent",
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
          className="absolute h-1 w-[101.688px] rounded-lg bg-main transition-all duration-500 ease-in-out md:-bottom-[0px]"
        />
      </div>
      <div className="flex-1 p-3 sm:p-5 overflow-auto bg-primary">
        <DataTable
          loading={loading}
          data={ProfileReportsData}
          columns={ProfileReportsColumns}
          page={page}
          setPage={setPage}
          limit={limit}
          setLimit={setLimit}
          itemPerPage={limit}
          totalItems={ProfileReportsData.length}
          loader={loading}
        />
        {toggleBanModal && (
          <CommonModal
            data={toggleBanModal}
            handleSubmit={handleBanClick}
            handleClose={handleBanClick}
            title={"Ban"}
            description={"Are you sure you want to ban this profile?"}
            leftText="No"
            rightText="Yes"
            icon={BAN_ICON}
          />
        )}
        {toggleWarningModal && (
          <CommonFormModal
            data={toggleWarningModal}
            handleSubmit={handleWarningClick}
            handleClose={handleWarningClick}
            title={"Warning Message"}
            leftText="Send"
            rightText="Cancel"
          />
        )}
      </div>
    </>
  );
};

export default ProfileReports;
