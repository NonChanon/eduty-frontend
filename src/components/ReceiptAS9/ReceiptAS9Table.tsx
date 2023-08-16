import { dataModel } from "../../models/ReceiptAS9/ReceiptAS9Model";
import { PagingTab } from "../commons/PagingTab";
import { pagingModel } from "../../models/commons/GlobalModels";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const table_head = [
    "No.",
    "Lot Name",
    "API Ref No.",
    "Total Doc",
    "Total Payment",
    "Payment Datetime",
    "Action"
  ];

type thisModel = {
    handleDisplayPerDate: (date: string, pageNo: string) => void,
    batchDate: string,
    data: dataModel[],
    paging: pagingModel
}

export const ReceiptAS9Table = (props:thisModel) => {

    let navigate = useNavigate();

    const [active, setActive] = useState(1);

    const handleDisplayPerDate = (pageNo: string) => {
        props.handleDisplayPerDate(props.batchDate, pageNo);
    }

    return (
        <div className="w-full p-5 border-[#F9F9F9] border-2 rounded">
            <span className="text-[14px]">Batch Date : {props.batchDate}</span>
            <div className="relative overflow-x-auto mt-5">
              <table className="w-full text-center border-b border-[#DFDFDF] text-xs">
                <thead className="text-[#818181] border-b border-[#DFDFDF]">
                  <tr>
                    {table_head.map((head) => (
                      <th key={head} className="px-6 py-4">{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {props.data.map((lot:dataModel, i:number) => (
                    <tr key={i}>
                      <td className="px-6 py-4">{i + 1}</td>
                      <td className="px-6 py-4">{lot.lotName}</td>
                      <td className="px-6 py-4">{lot.apiRefNo}</td>
                      <td className="px-6 py-4">{lot.totalDoc}</td>
                      <td className="px-6 py-4">{lot.totalPayment}</td>
                      <td className="px-6 py-4">{lot.paymentDatetime}</td>
                      <td className="px-6 py-4 flex justify-center items-center">
                        <Icon
                          icon="mdi:file-edit-outline"
                          width="22"
                          className="cursor-pointer text-gray-600"
                          onClick={() => {
                            navigate(`/receipt/${lot.lotName}/detail`);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <PagingTab handlePaging={handleDisplayPerDate} totalPage={props.paging.totalPage as unknown as number} active={active} setActive={setActive}/>
            </div>
        </div>
    );
}