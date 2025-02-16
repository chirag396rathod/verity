import Button from "@/components/custom/Button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { TRASH_ICON } from "@/lib/image";
import React from "react";

const CommonModal = ({
  data,
  setData,
  handleSubmit,
  icon,
  title,
  description,
  rightText,
  leftText,
}) => {
  const handleClose = () => {
    setData({
      open: false,
      data: null,
    });
  };

  return (
    <Dialog
      open={data.open}
      onOpenChange={(e) => !e && handleClose}
      onPointerDownOutside={(e) => e.preventDefault()}
      onOpenAutoFocus={(e) => e.preventDefault()}
    >
      <DialogContent className="w-full max-w-[90%] sm:max-w-xl p-0 pb-7 pt-8 px-4 bg-white rounded-[28px] sm:rounded-[14px]">
        <div className="space-y-4">
          <div className="flex  mx-auto border-none rounded-[20px] size-[110px] items-center justify-center">
            <img className="size-[120px]" src={icon ?? TRASH_ICON} alt="" />
          </div>
          <div className="space-y-1">
            <h2 className="text-primary font-semibold text-[28px] text-center">
              {title ?? "Delete Speciality"}
            </h2>
            <p className="text-lg text-[#7D8BB7] text-center">
              {description ?? "Are you sure you want to delete speciality?"}
            </p>
          </div>
        </div>
        <div className="flex pt-4 px-4 items-center gap-5 w-full">
          <Button
            onClick={handleClose}
            className="font-semibold bg-secondary text-[#666666] hover:bg-secondary border-none rounded-[12px]"
          >
            {rightText ?? "No"}
          </Button>
          <Button
            onClick={handleSubmit}
            className="font-semibold rounded-[12px]"
          >
            {leftText ?? "Yes"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommonModal;
