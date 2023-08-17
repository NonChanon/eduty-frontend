import { Icon } from "@iconify/react";
import { PagingTab } from "../commons/PagingTab";
import { detailModel } from "../../models/ReceiptAS9Detail/ReceiptAS9DetailModel";
import { pagingModel } from "../../models/commons/GlobalModels";
import { useState } from "react";

type thisModel = {
    detail: detailModel[],
    paging: pagingModel,
    onSearch: boolean,
    handleSearch: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, pageNo: string) => void,
    handleDisplay: (pageNo: string) => void,
    setHidden: () => void,
    setInstId: (instId: string) => void
}

export const TableSection = (props:thisModel) => {
    const table_head = [
        "No.",
        "Inst ID",
        "Ref No.",
        "Party Tax ID",
        "Name",
        "Total Amount",
        "Receipt No.",
        "Receipt Date",
        "Check Pay Code",
        "AS9",
        "Duty Receipt",
        "Fine Receipt",
      ];

    const [active, setActive] = useState(1);
    
    return (
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
              {props.detail.map((row: detailModel, i: number) => (
                <tr key={i}>
                  <td className="px-6 py-4">{i + 1}</td>
                  <td className="px-6 py-4">{row.instId}</td>
                  <td className="px-6 py-4">{row.refNo}</td>
                  <td className="px-6 py-4">{row.partyTaxRegistrationId}</td>
                  <td className="px-6 py-4">{row.name + " " + row.surname}</td>
                  <td className="px-6 py-4">{row.totalAmount}</td>
                  <td className="px-6 py-4">{row.receiptNo}</td>
                  <td className="px-6 py-4">{row.receiptDate}</td>
                  <td className="px-6 py-4">{row.checkPayCode}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center items-center">
                      <Icon
                        icon="ep:document"
                        width="22"
                        className="text-gray-600 cursor-pointer"
                        onClick={() => {
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center items-center">
                      <Icon
                        icon="fluent-emoji-high-contrast:receipt"
                        width="22"
                        className="text-gray-600 cursor-pointer"
                        onClick={() => {
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center items-center">
                      <Icon
                        icon="fluent-emoji-high-contrast:receipt"
                        width="22"
                        className="text-gray-600 cursor-pointer"
                        onClick={() => {
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <PagingTab onSearch={props.onSearch} handleSearch={props.handleSearch} totalPage={props.paging.totalPage as unknown as number} handlePaging={props.handleDisplay} active={active} setActive={setActive}/>
        </div>
    );
}