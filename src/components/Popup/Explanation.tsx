import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
} from "@material-tailwind/react";

export default function Explanation() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="gradient"
        className="font-Montserrat"
      >
        Explanation
      </Button>
      <Dialog open={open} handler={handleOpen} className="font-Montserrat">
        <div className="p-4">
          <DialogHeader className="font-Montserrat font-bold text-xl ">
            Additional explanation?
          </DialogHeader>
          <DialogBody className="py-0 font-Montserrat text-[#64748B]">
            <div className="w-full py-4">
              <Textarea label="Message" color="gray" />
            </div>
            Your message will be send to the RD.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="outlined"
              color="gray"
              onClick={handleOpen}
              className="mr-1 font-Montserrat text-blue-gray-900 mr-4"
            >
              <span>Skip</span>
            </Button>
            <Button
              variant="gradient"
              className="from-black to-black shadow-md shadow-black-500/20 hover:shadow-lg hover:shadow-black-500 font-Montserrat"
              onClick={handleOpen}
            >
              <span>Submit</span>
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
    </div>
  );
}
