import Iconify from "@/components/common/Iconify";
import {
  useLocation,
  useMatches,
  useNavigate,
  useParams,
} from "react-router-dom";
import { GrFormPrevious } from "react-icons/gr";
import SearchBox from "@/components/common/SearchBox";

const Header = ({ setIsSidebar }) => {
  const { pathname } = useLocation();
  console.log("pathname :>> ", pathname);
  const { id } = useParams();
  const navigate = useNavigate();

  const headings = [
    { path: "/post_reports", heading: "Post Reports" },
    { path: "/remove_from_tag", heading: "Remove From Tag" },
    { path: "/profile_reports", heading: "Profile Reports" },
    { path: "/community_reports", heading: "Community Reports" },
    { path: "/profile_verification", heading: "Profile Verification" },
    { path: "/app_feedback", heading: "App Feedback" },
    { path: "/friendly_advice", heading: "Friendly Advice" },
    { path: "/procedure", heading: "Procedure" },
    { path: "/delete_account", heading: "Delete Account" },
  ];

  return (
    <header className="flex  justify-between py-5 px-3 lg:px-7 bg-white">
      <div className="flex items-center gap-x-3">
        <div className="lg:hidden">
          <Iconify
            onClick={() => setIsSidebar((prev) => !prev)}
            className="text-primary text-2xl"
            icon="ion:menu"
          />
        </div>
        {!id ? (
          <h3 className="text-primary font-semibold text-[18px] xs:text-[20px] sm:text-[28px]">
            {headings.find(
              (route) =>
                pathname.includes(route.path) || pathname.startsWith(route.path)
            )?.heading ?? "Not Found"}
          </h3>
        ) : (
          <div
            className="flex justify-center items-center size-[40px] rounded-[10px] cursor-pointer border-[#EFF0F6] bg-[#F7F8F8]"
            onClick={() => {
              navigate(-1);
            }}
          >
            {" "}
            <GrFormPrevious className="text-main size-6" />
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
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
  );
};

export default Header;
