import { Button } from "@material-tailwind/react";
import InputBox from "../components/InputBox";

export default function EditDetail(props: any) {
  return (
    <div className="w-screen h-full flex justify-center items-center absolute top-0 left-0 z-[1000]">
      <div
        className="w-screen h-screen bg-black/50 fixed top-0 left-0"
        onClick={props.onClick}
      />
      <form className="fixed container mx-auto shadow-md rounded-md text-xs px-5 bg-white">
        <div className="border-b-[1px] border-b-[#DFDFDF] pt-4 pb-2 text-base">
          <span className="font-bold">Edit Detail</span>
        </div>
        <div className="overflow-auto h-[500px]">
          <div className="py-5">
            <span className="font-bold">Contract Detail</span>
            <div className="grid grid-cols-3 gap-2 pt-4">
              <InputBox name="Contract ID" width="60" />
              <InputBox name="Contract Number" width="60" />
              <InputBox name="Creation Dater" width="60" />
              <InputBox name="Contract Start Date" width="60" />
              <InputBox name="Contract End Date" width="60" />
            </div>
          </div>
          <div className="py-2">
            <span className="font-bold">Payment Detail</span>
            <div className="grid grid-cols-3 gap-2 pt-4">
              <InputBox name="Tax Payer ID" width="60" />
              <InputBox name="Branch Number" width="60" />
              <InputBox name="Branch Type" width="60" />
              <InputBox name="Status" width="60" />
            </div>
          </div>
          <div className="py-2">
            <span className="font-bold">Contract Detail</span>
            <div className="grid grid-cols-3 gap-2 pt-4">
              <InputBox name="Last Day of Payment" width="60" />
              <InputBox name="Duty Amount" width="60" />
              <InputBox name="Sercharge Amount" width="60" />
              <InputBox name="Fine Amount" width="60" />
              <InputBox name="Total Amount" width="60" />
            </div>
          </div>
          <div className="py-2">
            <span className="font-bold">Contractual Information</span>
            <div className="grid grid-cols-3 gap-2 pt-4">
              <InputBox name="Prefix" width="60" />
              <InputBox name="First Name" width="60" />
              <InputBox name="Last Name" width="60" />
              <InputBox name="Village" width="60" />
              <div className="grid grid-cols-2 pl-[8%]">
                <InputBox name="Total Amount" width="30" />
                <InputBox name="Floor" width="30" />
              </div>
              <InputBox name="Group" width="60" />
              <InputBox name="Building" width="60" />
              <div className="grid grid-cols-2 pl-[8%]">
                <InputBox name="Building No." width="30" />
                <InputBox name="Room No." width="30" />
              </div>
              <InputBox name="Street" width="60" />
              <InputBox name="Alley" width="60" />
              <InputBox name="Junction Name" width="60" />
              <InputBox name="Sub-District" width="60" />
              <InputBox name="District" width="60" />
              <InputBox name="Province" width="60" />
              <div className="grid grid-cols-2 pl-[8%]">
                <InputBox name="Postal Code" width="30" />
                <InputBox name="Country ID" width="30" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end py-5">
          <Button
            className="ml-2 rounded bg-[#B0B0B0] shadow-none hover:shadow-none font-Montserrat normal-case"
            onClick={props.onClick}
          >
            Cancel
          </Button>
          <Button className="ml-2 rounded bg-[#000000] shadow-none hover:shadow-none font-Montserrat normal-case">
            Save Change
          </Button>
        </div>
      </form>
    </div>
  );
}
