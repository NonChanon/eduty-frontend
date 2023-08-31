import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function Cancel() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="gradient"
        className="font-Montserrat"
      >
        Cancel
      </Button>
      <Dialog open={open} handler={handleOpen} className="font-Montserrat">
        <div className="p-4">
          <DialogHeader className="font-Montserrat font-bold text-xl">
            Are you sure absolutely sure?
          </DialogHeader>
          <DialogBody className="py-0 font-Montserrat text-[#64748B]">
            This action cannot be undone. This will record your actions and keep
            your data in the system.
          </DialogBody>
          <DialogFooter>
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
