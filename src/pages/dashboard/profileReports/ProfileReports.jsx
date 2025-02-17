import DataTable from "@/components/common/DataTable";
import useColumnDef from "@/hooks/useColumnDef";
import { BAN_ICON } from "@/lib/image";
import CommonFormModal from "@/modal/CommonFormModal";
import CommonModal from "@/modal/CommonModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileReports = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [toggleBanModal, setBanModal] = useState(false);
  const [toggleWarningModal, setWarningModal] = useState(false);

  const handleBanClick = (data) => {
    setBanModal(!toggleBanModal)
  };

  const handleWarningClick = (data) => {
    setWarningModal(!toggleWarningModal)
  };

  const { ProfileReportsColumns } = useColumnDef({
    handleBanClick,
    handleWarningClick
  });

  const ProfileReportsData = [
    {
      post_of_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_of_name: "Chirag Rathod",
      post_by_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_name: "VKC",
      reason: "Lorem ipsum dolor sit amet"
    },
    {
      post_of_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_of_name: "Chirag Rathod",
      post_by_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_name: "VKC",
      reason: "Lorem ipsum dolor sit amet"
    },
    {
      post_of_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_of_name: "Chirag Rathod",
      post_by_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_name: "VKC",
      reason: "Lorem ipsum dolor sit amet"
    },
    {
      post_of_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_of_name: "Chirag Rathod",
      post_by_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_name: "VKC",
      reason: "Lorem ipsum dolor sit amet"
    },
    {
      post_of_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_of_name: "Chirag Rathod",
      post_by_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_name: "VKC",
      reason: "Lorem ipsum dolor sit amet"
    },
  ];

  return (
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
  );
};

export default ProfileReports;
  