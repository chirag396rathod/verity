import PostView from "@/components/common/PostView";
import Button from "@/components/custom/Button";
import { ScrollBar } from "@/components/ui/scroll-area";
import {
  ARCHIVE_INACTIVE_POST_ICON,
  COMMENT_POST_ICON,
  LIKE_POST_ACTIVE_ICON,
  SHARE_POST_ICON,
} from "@/lib/image";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import React from "react";

const ViewPost = () => {
  return (
    <ScrollArea className="flex flex-col h-full justify-between">
     <PostView />
      <div className="flex justify-center items-center flex-col sm:flex-row pt-[30px] m-3 sm:m-5 gap-[18px] border-t border-b-[#EDEEF0]">
        <Button className="w-full max-w-[308px] font-medium rounded-[10px]" type="submit">
          Remove
        </Button>
        <Button className="w-full max-w-[308px]  text-secondary backdrop-blur-xl bg-white/30 hover:bg-white/30 font-medium rounded-[10px]" type="submit">
          Cancel
        </Button>
      </div>
    </ScrollArea>
  );
};

export default ViewPost;
