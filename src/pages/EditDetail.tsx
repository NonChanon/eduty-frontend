import { Button } from "@material-tailwind/react";
import InputBox from "../components/EditDetail/InputBox";
import { useEffect, useState } from "react";
import {
  responseModel,
  updatePayerModel,
} from "../models/EditDetail/EditDetailModel";
import { display, update } from "../services/EditDetail/EditDetailService";

type thisModel = {
  instId: string;
  lotId: string;
  setHidden: () => void;
};

export default function EditDetail(props: thisModel) {
  const [data, setData] = useState<responseModel>({
    message: "",
    status: "",
    party: {
      instId: "",
      contractNo: "",
      creationDate: "",
      effectiveDate: "",
      expireDate: "",
      dutyAmount: "",
      dupDutyAmount: "",
      totalAmount: "",
      titleName: "",
      name: "",
      surname: "",
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
      countryId: "",
    },
    payer: {
      lotId: "",
      payerTaxRegistrationId: "",
      branchNo: "",
      branchType: "",
      relationship: "",
    },
  });

  const [updateBody, setUpdateBody] = useState<updatePayerModel>({
    payerTaxRegistrationId: "",
    branchType: "",
  });

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateBody({
      ...updateBody,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log("useEffect Trigger");
    display(props.instId, props.lotId).then((res) => {
      setData(res);
      setUpdateBody({
        payerTaxRegistrationId: res.payer.payerTaxRegistrationId,
        branchType: res.payer.branchType,
      });
    });
  }, []);

  const handleSaveChange = (body: updatePayerModel) => {
    console.log("call api update party");
    update(data.payer.lotId, body).then((res) => {
      console.log(res);
      props.setHidden();
    });
  };

  return (
    <div className="w-screen h-full flex justify-center items-center absolute top-0 left-0 z-[1000]">
      <div
        className="w-screen h-screen bg-black/50 fixed top-0 left-0"
        onClick={props.setHidden}
      />
      <form className="fixed container mx-auto shadow-md rounded-md text-xs px-5 bg-white">
        <div className="border-b-[1px] border-b-[#DFDFDF] pt-4 pb-2 text-base">
          <span className="font-bold">Edit Detail</span>
        </div>
        <div className="overflow-auto h-[500px]">
          <div className="py-5">
            <span className="font-bold">Contract Detail</span>
            <div className="grid grid-cols-3 gap-2 pt-4">
              <InputBox name="countryId" onChange={handleOnchange} title="Contract ID" width="60" placeholder={data.party.instId} />
              <InputBox name="contractNo" onChange={handleOnchange} title="Contract Number" width="60" placeholder={data.party.contractNo} />
              <InputBox name="creationDate" onChange={handleOnchange} title="Creation Date" width="60" placeholder={data.party.creationDate} />
              <InputBox name="effectiveDate" onChange={handleOnchange} title="Contract Start Date" width="60" placeholder={data.party.effectiveDate} />
              <InputBox name="expireDate" onChange={handleOnchange} title="Contract End Date" width="60" placeholder={data.party.expireDate} />
            </div>
          </div>
          <div className="py-2">
            <span className="font-bold">Tax Payer Information</span>
            <div className="grid grid-cols-3 gap-2 pt-4">
              <InputBox name="payerTaxRegistrationId" onChange={handleOnchange} title="Tax Payer ID" width="60" placeholder={data.payer.payerTaxRegistrationId} />
              <InputBox name="creabranchNotionDate" onChange={handleOnchange} title="Branch Number" width="60" placeholder={data.payer.branchNo} />
              <InputBox name="branchType" onChange={handleOnchange} title="Branch Type" width="60" placeholder={data.payer.branchType} />
              <InputBox name="relationship" onChange={handleOnchange} title="Status" width="60" placeholder={data.payer.relationship} />
            </div>
          </div>
          <div className="py-2">
            <span className="font-bold">Payment Detail</span>
            <div className="grid grid-cols-3 gap-2 pt-4">
              <InputBox name="dutyAmount" onChange={handleOnchange} title="Duty Amount" width="60" placeholder={data.party.dutyAmount} />
              <InputBox name="dupDutyAmount" onChange={handleOnchange} title="Dup Duty Amount" width="60" placeholder={data.party.dupDutyAmount} />
              <InputBox name="totalAmount" onChange={handleOnchange} title="Total Amount" width="60" placeholder={data.party.totalAmount} />
            </div>
          </div>
          <div className="py-2">
            <span className="font-bold">Party Detail</span>
            <div className="grid grid-cols-3 gap-2 pt-4">
              <InputBox name="titleName" onChange={handleOnchange} title="Title" width="60" placeholder={data.party.titleName} />
              <InputBox name="name" onChange={handleOnchange} title="Name" width="60" placeholder={data.party.name} />
              <InputBox name="surname" onChange={handleOnchange} title="Surname" width="60" placeholder={data.party.surname} />
              <InputBox name="roomNo" onChange={handleOnchange} title="Room No." width="60" placeholder={data.party.roomNo} />
              <InputBox name="buildingName" onChange={handleOnchange} title="Building" width="60" placeholder={data.party.buildingName} />
              <div className="grid grid-cols-2 pl-[8%]">
                <InputBox name="buildingNumber" onChange={handleOnchange} title="Building No." width="30" placeholder={data.party.buildingNumber} />
                <InputBox name="floorNo" onChange={handleOnchange} title="Floor" width="30" placeholder={data.party.floorNo} />
              </div>
              <InputBox name="villageName" onChange={handleOnchange} title="Village" width="60" placeholder={data.party.villageName} />
              <InputBox name="moo" onChange={handleOnchange} title="Moo" width="60" placeholder={data.party.moo} />
              <InputBox name="soiName" onChange={handleOnchange} title="Alley" width="60" placeholder={data.party.soiName} />
              <InputBox name="junctionName" onChange={handleOnchange} title="Junction Name" width="60" placeholder={data.party.junctionName} />
              <InputBox name="streetName" onChange={handleOnchange} title="Street" width="60" placeholder={data.party.streetName} />
              <InputBox name="citySubDivisionName" onChange={handleOnchange} title="Sub-District" width="60" placeholder={data.party.citySubDivisionName} />
              <InputBox name="cityName" onChange={handleOnchange} title="District" width="60" placeholder={data.party.cityName} />
              <InputBox name="countrySubDivisionName" onChange={handleOnchange} title="Province" width="60" placeholder={data.party.countrySubDivisionName} />
              <div className="grid grid-cols-2 pl-[8%]">
                <InputBox name="postCode" onChange={handleOnchange} title="Postal Code" width="30" placeholder={data.party.postCode} />
                <InputBox name="countryId" onChange={handleOnchange} title="Country ID" width="30" placeholder={data.party.countryId} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end py-5">
          <Button
            className="ml-2 rounded bg-[#B0B0B0] shadow-none hover:shadow-none font-Montserrat normal-case"
            onClick={props.setHidden}
            nonce={undefined} onResize={undefined} onResizeCapture={undefined}
          >
            Cancel
          </Button>
          <Button
            className="ml-2 rounded bg-[#000000] shadow-none hover:shadow-none font-Montserrat normal-case"
            onClick={() => {
              handleSaveChange(updateBody);
            }}
            nonce={undefined} onResize={undefined} onResizeCapture={undefined}
          >
            Save Change
          </Button>
        </div>
      </form>
    </div>
  );
}
