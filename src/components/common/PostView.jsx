import { ARCHIVE_INACTIVE_POST_ICON, COMMENT_POST_ICON, LIKE_POST_ACTIVE_ICON, SHARE_POST_ICON } from "@/lib/image";
import React from "react";

const PostView = () => {
  return (
    <div className="flex p-3 sm:p-5 bg-primary justify-center">
      <div className="bg-white rounded-[28px]">
        <div className="flex flex-col sm:flex-row">
          <div className="w-606 rounded-[24px] relative">
            <div className="flex items-center rounded-t-[24px] flex absolute top-0 px-4 py-[13px] bg-[#F4F5F7] w-full">
              <img
                src="https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg"
                className="w-[52px] rounded-full object-cover h-[52px]"
                alt=""
              />
              <div className="ml-[10px]">
                <div className="text-primary font-medium text-[18px] leading-[27px]">
                  Juliana Smith
                </div>
                <div className="text-secondary font-normal text-[14px]">
                  Christ Hospital | 2 hours ago
                </div>
              </div>
            </div>
            <img
              className="rounded-t-none rounded-[24px] mt-[78px]"
              src="https://kmclientapp.co.in/hula_hoop_backend/public/profile/173892749767a5ed892dcea.jpg"
              alt="test"
            />
          </div>
          <div className="p-4 sm:p-8">
            <p className="text-secondary leading-[27px] mb-[24px] font-medium text-[18px]">
              <span className="text-primary ">Juliana Smith</span> Lorem ipsum
              dolor sit amet consectetur. Pellentesque a sed semper porta. Purus
              pellentesque est leo enim sed.
            </p>
            <p className="text-secondary leading-[27px] mb-[14px] text-[16px] font-normal">
              #Face, #Eyes, #Eyebrow
            </p>
            <p className="text-secondary leading-[27px] mb-[14px] text-[16px] font-normal">
              28 Oct 2024
            </p>
            <div className="flex justify-between items-center ">
              <div className="flex items-center gap-1">
                <div className="border border-[#F5F6F8] bg-secondary rounded-[58px] flex items-center px-[14px] py-[9px] gap-1 leading-[21px]">
                  <img src={LIKE_POST_ACTIVE_ICON} alt="Like" />
                  <p className=" text-[#5C6268] font-normal text-[14px]">
                    9.2k
                  </p>
                </div>
                <div className="border border-[#F5F6F8] bg-secondary rounded-[58px] flex items-center px-[14px] py-[9px] gap-1 leading-[21px]">
                  <img src={COMMENT_POST_ICON} alt="Like" />
                  <p className=" text-[#5C6268] font-normal text-[14px]">786</p>
                </div>
                <div className="border border-[#F5F6F8] bg-secondary rounded-[58px] flex items-center px-[14px] py-[9px] gap-1 leading-[21px]">
                  <img src={SHARE_POST_ICON} alt="Like" />
                  <p className=" text-[#5C6268] font-normal text-[14px]">48</p>
                </div>
              </div>
              <div className="border border-[#F5F6F8] bg-secondary rounded-[58px] flex items-center px-[9px] py-[9px]">
                <img src={ARCHIVE_INACTIVE_POST_ICON} alt="Like" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostView;
