import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";

export default function Receipt() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="gradient"
        className="font-Montserrat "
      >
        Receipt
      </Button>
      <Dialog open={open} handler={handleOpen} className="font-Montserrat">
        <div className="p-4">
          <DialogHeader className="font-Montserrat font-bold text-xl flex justify-center">
            Receipt
          </DialogHeader>
          <DialogBody className="py-0 font-Montserrat text-[#64748B] ">
            <div className="flex justify-center">
              <img
                src="https://www.smartsheet.com/sites/default/files/styles/900px/public/IC-Basic-Receipt-Template.png?itok=veuYP3ST"
                alt="card-image"
                className=" max-w-auto max-h-[550px] "
              />
            </div>
            <div className="flex justify-between mt-4 items-center">
              <p className="text-sm">Complete the payment in 4:00 mins</p>

              <Button
                size="sm"
                variant="outlined"
                className="border border-[#489788] text-[#489788] font-Montserrat p-[6px]"
              >
                <div className="flex items-center ">
                  <Icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#489788"
                        d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"
                      />
                    </svg>
                  </Icon>
                  <p className="pl-2 text-[10px]">Download</p>
                </div>
              </Button>
            </div>
          </DialogBody>
          <DialogFooter className="mt-4">
            <Button
              variant="outlined"
              color="gray"
              onClick={handleOpen}
              className="mr-1 font-Montserrat text-blue-gray-900 mr-4"
            >
              <span>Cancel</span>
            </Button>
            <Button
              variant="gradient"
              className="from-black to-black shadow-md shadow-black-500/20 hover:shadow-lg hover:shadow-black-500 font-Montserrat"
              onClick={handleOpen}
            >
              <span>Continue</span>
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
    </div>
  );
}
