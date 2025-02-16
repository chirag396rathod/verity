import Button from "@/components/custom/Button";
import FormProvider from "@/components/form/FormProvider";
import TextField from "@/components/form/TextField";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DOCUMENT_TEXT_ICON } from "@/lib/image";
import React from "react";
import { useForm } from "react-hook-form";

const CommonFormModal = ({
  data,
  setData,
  handleSubmitForm,
  title,
  rightText,
  leftText,
}) => {
    const defaultValues ={
        message: ""
    }
  const methods = useForm({
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

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
      <DialogContent className="w-full max-w-[90%] sm:max-w-xl p-0 pb-7 pt-6 px-8 bg-white rounded-[28px] sm:rounded-[14px]">
        <FormProvider  methods={methods} onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="space-y-4 ">
            <h2 className="text-primary font-semibold text-[28px] text-center border-b pb-4 mb-6 border-separate">
              {title ?? "Warning Message"}
            </h2>
          </div>
          <TextField
            textarea={true}
            placeholder={"Enter your message"}
            prefix={<img src={DOCUMENT_TEXT_ICON} />}
            name="message"
            className={"sm:h-[132px]"}
          />
          <div className="flex pt-4  items-center gap-4 w-full">
            <Button
              onClick={handleClose}
              className="font-semibold bg-secondary text-[#666666] hover:bg-secondary border-none rounded-[12px]"
            >
              {rightText ?? "No"}
            </Button>
            <Button
              onClick={handleSubmitForm}
              className="font-semibold rounded-[12px]"
            >
              {leftText ?? "Yes"}
            </Button>
          </div>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default CommonFormModal;
