import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";

export default function Successful() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="gradient"
        className="font-Montserrat"
      >
        Successful
      </Button>

      <Dialog open={open} handler={handleOpen} className="font-Montserrat">
        <div className="p-6">
          <div className="flex justify-center w-auto h-auto mt-4 mb-6">
            <IconButton className="bg-white shadow-none hover:shadow-none rounded-full border-[3px] border-black w-32 h-32 max-w-[56px] max-h-[56px]">
              <Icon
                icon="tabler:check"
                width="28"
                className="text-black font-bold font-3xl"
              />
            </IconButton>
          </div>
          <DialogHeader className="font-Montserrat font-bold text-xl ">
            Your request was submitted successfully !
          </DialogHeader>
          <DialogBody className="pt-2 pb-4 font-Montserrat text-[#64748B]">
            You can check your submission in Transaction history menu.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="gradient"
              className="from-black to-black shadow-md shadow-black-500/20 hover:shadow-lg hover:shadow-black-500 font-Montserrat w-full"
              onClick={handleOpen}
            >
              <span>Done</span>
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
    </div>
  );
}
