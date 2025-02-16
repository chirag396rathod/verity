import DataTable from "@/components/common/DataTable";
import useColumnDef from "@/hooks/useColumnDef";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RemoveFromTag = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);

  const handleViewPost = (data) => {
    navigate('/remove_from_tag/1')
  };

  const { removeFromTagsColumns } = useColumnDef({
    handleViewPost,
  });

  const removeFromTagsData = [
    {
      profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      lname: "Rathod",
      fname: "Chirag",
      post: "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_name: "VKC",
    },
    {
      profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      lname: "Rathod",
      fname: "Chirag",
      post: "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_name: "VKC",
    },
    {
      profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      lname: "Rathod",
      fname: "Chirag",
      post: "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_name: "VKC",
    },
    {
      profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      lname: "Rathod",
      fname: "Chirag",
      post: "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_profile:
        "https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg",
      post_by_name: "VKC",
    },
  ];

  return (
    <div className="flex-1 p-3 sm:p-5 overflow-auto bg-primary">
      <DataTable
        loading={loading}
        data={removeFromTagsData}
        columns={removeFromTagsColumns}
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
        itemPerPage={limit}
        totalItems={removeFromTagsData.length}
        loader={loading}
      />
    </div>
  );
};

export default RemoveFromTag;
