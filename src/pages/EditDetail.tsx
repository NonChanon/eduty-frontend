import { Button } from "@material-tailwind/react";
import InputBox from "../components/EditDetail/InputBox";
import { useEffect, useState } from "react";
import { responseModel } from "../models/EditDetail/EditDetailModel";
import { display } from "../services/EditDetail/EditDetailService";

type thisModel = {
  instId: string,
  onClick: () => void
}

export default function EditDetail(props: thisModel) {
  const [data, setData] = useState<responseModel>({
    message: "",
    status: "",
    party: {
      contractNo: "",
      creationDate: "",
      effectiveDate: "",
      expireDate: "",
      dutyAmount: "",
      surchargeAmount: "",
      fineAmount: "",
      totalAmount: "",
      partyTaxRegistrationId: "",
      titleName: "",
      name: "",
      surname: "",
      branchNo: "",
      branchType: "",
      buildingName: "",
      roomNo: "",
      floorNo: "",
      villageName: "",
      buildingNumber: "",
      moo: "",
      soiName: "",
      junctionName: "",
      streetName: "",
      citySubDivisionName: "",
      cityName: "",
      countrySubDivisionName: "",
      postCode: "",
      countryId: ""
    },
    payer: {
      payerTaxRegistrationId: "",
      branchNo: "",
      branchType: "",
      relationship: ""
    }
  });

  useEffect(() => {
    console.log("useEffect Trigger");
    display(props.instId).then((res) => {
      setData(res);
    });
  }, []);

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
              <InputBox name="Contract ID" width="60" placeholder={data.party.countryId} />
              <InputBox name="Contract Number" width="60" placeholder={data.party.contractNo} />
              <InputBox name="Creation Dater" width="60" placeholder={data.party.creationDate} />
              <InputBox name="Contract Start Date" width="60" placeholder={data.party.effectiveDate} />
              <InputBox name="Contract End Date" width="60" placeholder={data.party.expireDate} />
            </div>
          </div>
          <div className="py-2">
            <span className="font-bold">Payment Detail</span>
            <div className="grid grid-cols-3 gap-2 pt-4">
              <InputBox name="Tax Payer ID" width="60" placeholder={data.party.partyTaxRegistrationId} />
              <InputBox name="Branch Number" width="60" placeholder={data.party.branchNo} />
              <InputBox name="Branch Type" width="60" placeholder={data.party.branchType} />
              <InputBox name="Status" width="60" placeholder={data.payer.relationship} />
            </div>
          </div>
          <div className="py-2">
            <span className="font-bold">Contract Detail</span>
            <div className="grid grid-cols-3 gap-2 pt-4">
              <InputBox name="Last Day of Payment" width="60" placeholder={data.party.expireDate} />
              <InputBox name="Duty Amount" width="60" placeholder={data.party.dutyAmount} />
              <InputBox name="Surcharge Amount" width="60" placeholder={data.party.surchargeAmount} />
              <InputBox name="Fine Amount" width="60" placeholder={data.party.fineAmount} />
              <InputBox name="Total Amount" width="60" placeholder={data.party.totalAmount} />
            </div>
          </div>
          <div className="py-2">
            <span className="font-bold">Contractual Information</span>
            <div className="grid grid-cols-3 gap-2 pt-4">
              <InputBox name="Prefix" width="60" placeholder={data.party.titleName} />
              <InputBox name="First Name" width="60" placeholder={data.party.name} />
              <InputBox name="Last Name" width="60" placeholder={data.party.surname} />
              <InputBox name="Village" width="60" placeholder={data.party.villageName} />
              <div className="grid grid-cols-2 pl-[8%]">
                <InputBox name="Total Amount" width="30" placeholder={data.party.totalAmount} />
                <InputBox name="Floor" width="30" placeholder={data.party.floorNo} />
              </div>
              <InputBox name="Group" width="60" placeholder={data.party.moo} />
              <InputBox name="Building" width="60" placeholder={data.party.buildingName} />
              <div className="grid grid-cols-2 pl-[8%]">
                <InputBox name="Building No." width="30" placeholder={data.party.buildingNumber} />
                <InputBox name="Room No." width="30" placeholder={data.party.roomNo} />
              </div>
              <InputBox name="Street" width="60" placeholder={data.party.streetName} />
              <InputBox name="Alley" width="60" placeholder={data.party.soiName} />
              <InputBox name="Junction Name" width="60" placeholder={data.party.junctionName} />
              <InputBox name="Sub-District" width="60" placeholder={data.party.citySubDivisionName} />
              <InputBox name="District" width="60" placeholder={data.party.cityName} />
              <InputBox name="Province" width="60" placeholder={data.party.countrySubDivisionName} />
              <div className="grid grid-cols-2 pl-[8%]">
                <InputBox name="Postal Code" width="30" placeholder={data.party.postCode} />
                <InputBox name="Country ID" width="30" placeholder={data.party.countryId} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end py-5">
          <Button
            className="ml-2 rounded bg-[#B0B0B0] shadow-none hover:shadow-none font-Montserrat normal-case"
            onClick={props.onClick} nonce={undefined} onResize={undefined} onResizeCapture={undefined}          >
            Cancel
          </Button>
          <Button 
            className="ml-2 rounded bg-[#000000] shadow-none hover:shadow-none font-Montserrat normal-case"
            nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
            Save Change
          </Button>
        </div>
      </form>
    </div>
  );
}
