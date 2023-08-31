import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
  Select,
  Option,
  Input,
  Switch,
} from "@material-tailwind/react";

export default function NewUser() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="gradient"
        className="font-Montserrat"
      >
        New User
      </Button>
      <Dialog open={open} handler={handleOpen} className="font-Montserrat">
        <div className="px-8 py-4">
          <DialogHeader className="font-Montserrat font-extrabold text-xl ">
            New user
          </DialogHeader>
          <hr className="my-3 border-[#C4C4C4]" />
          <DialogBody className="py-0 font-Montserrat text-[#64748B]">
            <div className="flex justify-between py-4 items-center">
              <p className="w-80 text-[#3E3E3E] font-semibold">Group user</p>
              <div className="w-full">
                <Select label="Select Group User" color="gray">
                  <Option>IT Admin </Option>
                  <Option>User Admin </Option>
                  <Option>Central Admin Officer</Option>
                  <Option>Accountant </Option>
                </Select>
              </div>
            </div>
          </DialogBody>
          <DialogHeader className="font-Montserrat font-extrabold text-xl text-[#434343]">
            Account Information
          </DialogHeader>
          <hr className="my-3 border-[#C4C4C4] " />
          <DialogBody className="py-0 font-Montserrat text-[#64748B]">
            <div className="flex justify-between py-4 items-center">
              <p className="w-80 text-[#3E3E3E] font-semibold">Username</p>
              <div className="w-full">
                <Input label="Username" color="gray" />
              </div>
            </div>
            <div className="flex justify-between py-4 items-center">
              <p className="w-80 text-[#3E3E3E] font-semibold">First Name</p>
              <div className="w-full">
                <Input label="First Name" color="gray" />
              </div>
            </div>
            <div className="flex justify-between py-4 items-center">
              <p className="w-80 text-[#3E3E3E] font-semibold">Last Name</p>
              <div className="w-full">
                <Input label="Last Name" color="gray" />
              </div>
            </div>
            <div className="flex justify-between py-4 items-center">
              <p className="w-80 text-[#3E3E3E] font-semibold">Email</p>
              <div className="w-full">
                <Input label="Email" color="gray" />
              </div>
            </div>
            <div className="flex justify-between py-4 items-center">
              <p className="w-80 text-[#3E3E3E] font-semibold">Status</p>
              <div className="w-full">
                <Switch
                  label="Automatic Update "
                  className="checked:bg-[#0A9396] peer-checked:border-[#0A9396] peer-checked:before:[#0A9396] peer-checked:border-[#0A9396] peer-checked:before:bg-[#0A9396]"
                />
              </div>
            </div>
            <div className="flex justify-between py-4 items-center">
              <p className="w-80 text-[#3E3E3E] font-semibold">Admin Note</p>
              <div className="w-full">
                <Textarea label="Message" color="gray" />
              </div>
            </div>
            <p className="text-sm">
              Password will be generated and set to the user. User will be
              foeced to set the password on first sign in.
            </p>
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
              <span>Save</span>
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
    </div>
  );
}
